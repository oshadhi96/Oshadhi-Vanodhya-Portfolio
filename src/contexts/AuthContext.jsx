import { createContext, useContext, useState, useEffect } from "react";
import { projectId, publicAnonKey } from "../utils/supabase/info";

const AuthContext = createContext(undefined);

const API_BASE_URL = `https://${projectId}.supabase.co/functions/v1/make-server-6068deca`;

export function AuthProvider({ children }) {
  const [unlockedProjects, setUnlockedProjects] = useState(new Set());
  const [guestViewProjects, setGuestViewProjects] = useState(new Set());

  // Load unlocked projects from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("unlockedProjects");
    if (stored) {
      try {
        setUnlockedProjects(new Set(JSON.parse(stored)));
      } catch (e) {
        console.error("Failed to parse unlocked projects", e);
      }
    }
  }, []);

  // Save to localStorage whenever unlocked projects change
  useEffect(() => {
    if (unlockedProjects.size > 0) {
      localStorage.setItem(
        "unlockedProjects",
        JSON.stringify(Array.from(unlockedProjects)),
      );
    }
  }, [unlockedProjects]);

  const unlockProject = async (
    projectIdParam,
    password,
    projectUrl,
    projectTitle,
  ) => {
    try {
      console.log("Attempting to unlock project:", projectIdParam);
      console.log("Password length:", password.length);

      // Validate password with Supabase
      const response = await fetch(`${API_BASE_URL}/validate-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${publicAnonKey}`,
        },
        body: JSON.stringify({
          projectId: projectIdParam,
          password: password,
        }),
      });

      console.log("Response status:", response.status);
      const data = await response.json();
      console.log("Response data:", data);

      if (data.success) {
        // Password is correct, unlock the project
        setUnlockedProjects((prev) => new Set([...prev, projectIdParam]));

        // Remove from guest view if it was there
        setGuestViewProjects((prev) => {
          const newSet = new Set(prev);
          newSet.delete(projectIdParam);
          return newSet;
        });

        // Log the successful access with project URL
        if (projectUrl) {
          try {
            await fetch(`${API_BASE_URL}/log-access`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${publicAnonKey}`,
              },
              body: JSON.stringify({
                projectId: projectIdParam,
                projectUrl: projectUrl,
                projectTitle: projectTitle || "Unknown Project",
              }),
            });
          } catch (logError) {
            console.error("Failed to log access:", logError);
            // Don't fail the unlock if logging fails
          }
        }

        return true;
      } else {
        console.error("Password validation failed:", data.error);
        return false;
      }
    } catch (error) {
      console.error("Error validating password:", error);
      return false;
    }
  };

  const isProjectUnlocked = (projectIdParam) => {
    return unlockedProjects.has(projectIdParam);
  };

  const setGuestView = (projectIdParam) => {
    setGuestViewProjects((prev) => new Set([...prev, projectIdParam]));
  };

  const isGuestView = (projectIdParam) => {
    return guestViewProjects.has(projectIdParam);
  };

  return (
    <AuthContext.Provider
      value={{
        unlockedProjects,
        unlockProject,
        isProjectUnlocked,
        guestViewProjects,
        setGuestView,
        isGuestView,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
