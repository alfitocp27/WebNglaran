import type { DashboardData } from "../types/dashboard";

const API_URL = import.meta.env.VITE_DASHBOARD_API_URL;

let fetchPromise: Promise<DashboardData> | null = null;

export function fetchDashboardData(): Promise<DashboardData> {
  if (!API_URL) {
    return Promise.reject(new Error("VITE_DASHBOARD_API_URL belum diatur di .env"));
  }

  if (fetchPromise) {
    return fetchPromise;
  }

  fetchPromise = (async () => {
    try {
      const response = await fetch(`${API_URL}?t=${Date.now()}`, {
        method: "GET",
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error("Gagal mengambil data dashboard.");
      }

      const data = await response.json();

      if (!data || typeof data !== "object") {
        throw new Error("Format data dashboard tidak valid.");
      }

      return data as DashboardData;
    } finally {
      fetchPromise = null;
    }
  })();

  return fetchPromise;
}
