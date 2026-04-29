export function formatTimeAgo(dateString: string) {
  if (!dateString) return "";

  const now = new Date();
  const created = new Date(dateString);

  const diffMs = now.getTime() - created.getTime();
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffHours / 24);

  if (diffHours < 1) return "Just now";
  if (diffHours < 24) return `${diffHours}h ago`;

  return `${diffDays}d ago`;
}