"use client";

export function HomeGroupBadge({ id }: { id: string }) {
  if (typeof window === "undefined" || !window.localStorage) {
    return null;
  }
  const storedId = window.localStorage.getItem("homeGroupId");
  return (
    id === storedId && (
      <div className="badge badge-secondary badge-outline">Домашняя</div>
    )
  );
}
