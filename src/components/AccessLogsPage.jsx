import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Lock, Calendar, ExternalLink, RefreshCw } from "lucide-react";
import { projectId, publicAnonKey } from "../utils/supabase/info";

const API_BASE_URL = `https://${projectId}.supabase.co/functions/v1/make-server-6068deca`;

const PROJECT_IDS = [
  "ifs-ai",
  "ifs-sustainability",
  "brp-systems",
  "expert-republic",
  "leadership",
];

export function AccessLogsPage() {
  const [logs, setLogs] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchAccessLogs = async () => {
    setLoading(true);
    setError("");

    try {
      const logsData = {};

      // Fetch logs for each project
      await Promise.all(
        PROJECT_IDS.map(async (id) => {
          try {
            const response = await fetch(`${API_BASE_URL}/access-logs/${id}`, {
              headers: {
                Authorization: `Bearer ${publicAnonKey}`,
              },
            });

            if (response.ok) {
              const data = await response.json();
              logsData[id] = {
                count: data.accessCount || 0,
                logs: data.logs || [],
              };
            }
          } catch (err) {
            console.error(`Failed to fetch logs for ${id}:`, err);
          }
        }),
      );

      setLogs(logsData);
    } catch (err) {
      setError("Failed to load access logs");
      console.error("Error fetching access logs:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAccessLogs();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getTotalAccesses = () => {
    return Object.values(logs).reduce(
      (sum, project) => sum + (project?.count || 0),
      0,
    );
  };

  return (
    <div className="min-h-screen py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute left-0 top-0 w-[600px] h-[600px] bg-violet-900/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-violet-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 mt-8">
            <div>
              <h1 className="text-4xl md:text-6xl font-serif italic text-white mb-4">
                Access Logs
              </h1>
              <p className="text-slate-400 text-lg">
                Track password-protected case study access
              </p>
            </div>
            <button
              onClick={fetchAccessLogs}
              disabled={loading}
              className="flex items-center gap-2 px-6 py-3 bg-violet-500 hover:bg-violet-600 disabled:bg-violet-500/50 text-white rounded-lg font-medium transition-colors"
            >
              <RefreshCw
                className={`w-4 h-4 ${loading ? "animate-spin" : ""}`}
              />
              Refresh
            </button>
          </div>

          {/* Total Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-900/50 border border-white/10 rounded-xl p-6">
              <p className="text-slate-400 text-sm mb-2">Total Accesses</p>
              <p className="text-3xl font-bold text-white">
                {getTotalAccesses()}
              </p>
            </div>
            <div className="bg-slate-900/50 border border-white/10 rounded-xl p-6">
              <p className="text-slate-400 text-sm mb-2">Protected Projects</p>
              <p className="text-3xl font-bold text-white">
                {PROJECT_IDS.length}
              </p>
            </div>
            <div className="bg-slate-900/50 border border-white/10 rounded-xl p-6">
              <p className="text-slate-400 text-sm mb-2">Total Logs</p>
              <p className="text-3xl font-bold text-white">
                {Object.values(logs).reduce(
                  (sum, project) => sum + (project?.logs?.length || 0),
                  0,
                )}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Error State */}
        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-8 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400"
          >
            {error}
          </motion.div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <div className="inline-block w-8 h-8 border-4 border-violet-500/30 border-t-violet-500 rounded-full animate-spin" />
            <p className="text-slate-400 mt-4">Loading access logs...</p>
          </div>
        )}

        {/* Logs by Project */}
        {!loading && (
          <div className="space-y-8">
            {PROJECT_IDS.map((projectIdStr) => {
              const projectData = logs[projectIdStr];
              const hasLogs = projectData && projectData.logs?.length > 0;

              return (
                <motion.div
                  key={projectIdStr}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-slate-900/50 border border-white/10 rounded-2xl p-6 md:p-8"
                >
                  {/* Project Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                        <Lock className="w-5 h-5 text-violet-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white capitalize">
                          {projectIdStr.replace(/-/g, " ")}
                        </h3>
                        <p className="text-sm text-slate-400">
                          {projectData?.count || 0} total{" "}
                          {projectData?.count === 1 ? "access" : "accesses"}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Logs Table */}
                  {hasLogs ? (
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-white/10">
                            <th className="text-left py-3 px-4 text-sm font-medium text-slate-400">
                              Project Title
                            </th>
                            <th className="text-left py-3 px-4 text-sm font-medium text-slate-400">
                              URL
                            </th>
                            <th className="text-left py-3 px-4 text-sm font-medium text-slate-400">
                              Accessed At
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {(projectData.logs || []).map((log, index) => (
                            <tr
                              key={index}
                              className="border-b border-white/5 hover:bg-white/5 transition-colors"
                            >
                              <td className="py-3 px-4 text-white">
                                {log.projectTitle}
                              </td>
                              <td className="py-3 px-4">
                                <a
                                  href={log.projectUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-2 text-violet-400 hover:text-violet-300 transition-colors"
                                >
                                  <span className="truncate max-w-[200px]">
                                    {log.projectUrl}
                                  </span>
                                  <ExternalLink className="w-3 h-3 flex-shrink-0" />
                                </a>
                              </td>
                              <td className="py-3 px-4 text-slate-400">
                                <div className="flex items-center gap-2">
                                  <Calendar className="w-4 h-4" />
                                  {formatDate(log.accessedAt)}
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div className="text-center py-8 text-slate-500">
                      No access logs yet for this project
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
