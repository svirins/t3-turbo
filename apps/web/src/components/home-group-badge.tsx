"use client";

import { useHomeGroup } from "~/lib/hooks/useLocalStorage";

export function HomeGroupBadge({ id }: { id: string }) {
  const storedId = useHomeGroup();
  return (
    id === storedId && (
      <div className="badge badge-secondary badge-outline">Домашняя</div>
    )
  );
}
