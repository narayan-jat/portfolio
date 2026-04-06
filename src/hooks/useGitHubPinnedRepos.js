import { useEffect, useState } from "react";

const PINNED_QUERY = `
  query PinnedRepos($login: String!) {
    user(login: $login) {
      pinnedItems(first: 6, types: REPOSITORY) {
        nodes {
          ... on Repository {
            id
            name
            description
            url
            stargazerCount
            pushedAt
            primaryLanguage {
              name
            }
          }
        }
      }
    }
  }
`;

function mapNode(node) {
  if (!node) return null;
  return {
    id: node.id,
    name: node.name,
    description: node.description,
    html_url: node.url,
    stargazers_count: node.stargazerCount ?? 0,
    pushed_at: node.pushedAt,
    language: node.primaryLanguage?.name ?? null,
    topics: [],
  };
}

/**
 * GitHub profile pinned repositories (GraphQL public API).
 */
export function useGitHubPinnedRepos(login) {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    const run = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch("https://api.github.com/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: PINNED_QUERY,
            variables: { login },
          }),
        });
        const json = await res.json();
        if (json.errors?.length) {
          throw new Error(json.errors[0]?.message || "GitHub GraphQL error");
        }
        if (json.message && !json.data) {
          throw new Error(json.message);
        }
        const nodes =
          json.data?.user?.pinnedItems?.nodes?.filter(Boolean) ?? [];
        const mapped = nodes.map(mapNode).filter(Boolean);
        if (!cancelled) setRepos(mapped);
      } catch (e) {
        if (!cancelled) {
          setError(e.message || "Could not load pinned repositories");
          setRepos([]);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };
    run();
    return () => {
      cancelled = true;
    };
  }, [login]);

  return { repos, loading, error };
}
