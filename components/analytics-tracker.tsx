"use client";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
export function AnalyticsTracker() {
  const pathname = usePathname();
  const search = useSearchParams();
  useEffect(() => {
    if (!pathname || pathname.startsWith("/admin")) return;
    const query = search?.toString();
    const path = query ? `${pathname}?${query}` : pathname;
    const payload = JSON.stringify({ path, referrer: document.referrer || "" });
    if (navigator.sendBeacon) { navigator.sendBeacon("/api/analytics/view", new Blob([payload], { type: "application/json" })); return; }
    fetch("/api/analytics/view", { method: "POST", headers: { "Content-Type": "application/json" }, body: payload, keepalive: true }).catch(() => undefined);
  }, [pathname, search]);
  return null;
}
