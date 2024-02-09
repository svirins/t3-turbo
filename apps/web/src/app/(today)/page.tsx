import { Suspense } from "react";

import { getCurrentDayFilters } from "@acme/utils";

import { GroupList } from "~/components/group-list";
import { GroupSkeleton } from "~/components/group-skeleton";
import { api } from "~/trpc/server";

export default async function HomePage() {
  const { dayOfWeekFilter, repeatsFilter } = getCurrentDayFilters();
  const data = api.group.allToday({ dayOfWeekFilter, repeatsFilter });

  return (
    <div className="container pb-24">
      <Suspense
        fallback={
          <div className="flex w-full flex-col gap-4">
            <GroupSkeleton />
            <GroupSkeleton />
            <GroupSkeleton />
          </div>
        }
      >
        <GroupList data={data} />
      </Suspense>
    </div>
  );
}
