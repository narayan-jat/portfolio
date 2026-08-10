import { useEffect, useState } from "react";
import credlyBadgesFallback from "../data/credlyBadgesFallback.json";

function normalizeBadge(raw) {
  const t = raw.badge_template || {};
  return {
    id: raw.id,
    title: t.name || "Badge",
    level: t.level || null,
    issuedAt: raw.issued_at_date || null,
    issuer:
      t.issuer?.entities?.[0]?.entity?.name ||
      raw.issuer?.entities?.[0]?.entity?.name ||
      "IBM SkillsBuild",
    description: t.description || "",
    imageUrl: t.image_url || t.image?.url || null,
    publicUrl: `https://www.credly.com/badges/${raw.id}`,
  };
}

/**
 * Loads public Credly badges. Tries credly.com JSON (often blocked by CORS in the
 * browser); falls back to bundled data synced from your profile.
 */
export function useCredlyBadges(credlyUsername) {
  const [badges, setBadges] = useState(credlyBadgesFallback);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    const url = `https://www.credly.com/users/${encodeURIComponent(
      credlyUsername
    )}/badges.json`;

    const run = async () => {
      setLoading(true);
      try {
        const res = await fetch(url, { method: "GET" });
        if (!res.ok) throw new Error("Credly request failed");
        const json = await res.json();
        const list = Array.isArray(json?.data)
          ? json.data.map(normalizeBadge)
          : [];
        if (!cancelled && list.length > 0) {
          list.sort((a, b) =>
            (b.issuedAt || "").localeCompare(a.issuedAt || "")
          );
          setBadges(list);
        } else if (!cancelled) {
          setBadges(credlyBadgesFallback);
        }
      } catch {
        if (!cancelled) {
          setBadges(credlyBadgesFallback);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    run();
    return () => {
      cancelled = true;
    };
  }, [credlyUsername]);

  return { badges, loading };
}