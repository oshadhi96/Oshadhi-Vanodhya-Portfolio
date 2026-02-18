import { Hono } from "https://deno.land/x/hono@v3.12.0/mod.ts";
import { cors, logger } from "https://deno.land/x/hono@v3.12.0/middleware.ts";
import * as kv from "./kv_store.tsx";

const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-6068deca/health", (c) => {
  return c.json({ status: "ok" });
});

// Validate password for a project
app.post("/make-server-6068deca/validate-password", async (c) => {
  try {
    const { projectId, password } = await c.req.json();

    console.log(`Password validation attempt for project: ${projectId}`);

    if (!projectId || !password) {
      console.log("Missing projectId or password in request");
      return c.json({ 
        success: false, 
        error: "Missing projectId or password" 
      }, 400);
    }

    // Get the stored password for this project
    const storedPassword = await kv.get(`password:${projectId}`);

    console.log(`Stored password for ${projectId}:`, storedPassword ? "Found" : "Not found");

    if (!storedPassword) {
      console.log(`Project ${projectId} not found in database`);
      return c.json({ 
        success: false, 
        error: "Project not found or password not set. Please contact the administrator." 
      }, 404);
    }

    // Validate the password
    const isValid = password === storedPassword;
    console.log(`Password match: ${isValid}`);

    if (isValid) {
      return c.json({ 
        success: true, 
        message: "Password is correct" 
      });
    } else {
      return c.json({ 
        success: false, 
        error: "Incorrect password" 
      }, 401);
    }
  } catch (error) {
    console.error("Error validating password:", error);
    return c.json({ 
      success: false, 
      error: "Failed to validate password" 
    }, 500);
  }
});

// Log successful access with project URL
app.post("/make-server-6068deca/log-access", async (c) => {
  try {
    const { projectId, projectUrl, projectTitle } = await c.req.json();

    if (!projectId || !projectUrl) {
      return c.json({ 
        success: false, 
        error: "Missing projectId or projectUrl" 
      }, 400);
    }

    // Create a unique key for this access log entry
    const timestamp = new Date().toISOString();
    const logKey = `access_log:${projectId}:${Date.now()}`;

    // Store the access log
    await kv.set(logKey, {
      projectId,
      projectUrl,
      projectTitle: projectTitle || 'Unknown Project',
      accessedAt: timestamp,
    });

    // Also update a counter for this project
    const countKey = `access_count:${projectId}`;
    const currentCount = (await kv.get(countKey)) || 0;
    await kv.set(countKey, currentCount + 1);

    return c.json({ 
      success: true, 
      message: "Access logged successfully",
      timestamp 
    });
  } catch (error) {
    console.error("Error logging access:", error);
    return c.json({ 
      success: false, 
      error: "Failed to log access" 
    }, 500);
  }
});

// Get access logs for a specific project
app.get("/make-server-6068deca/access-logs/:projectId", async (c) => {
  try {
    const projectId = c.req.param('projectId');

    if (!projectId) {
      return c.json({ 
        success: false, 
        error: "Missing projectId" 
      }, 400);
    }

    // Get all access logs for this project
    const logs = await kv.getByPrefix(`access_log:${projectId}:`);
    
    // Get the access count
    const count = (await kv.get(`access_count:${projectId}`)) || 0;

    return c.json({ 
      success: true, 
      projectId,
      accessCount: count,
      logs: logs || [] 
    });
  } catch (error) {
    console.error("Error fetching access logs:", error);
    return c.json({ 
      success: false, 
      error: "Failed to fetch access logs" 
    }, 500);
  }
});

Deno.serve(app.fetch);