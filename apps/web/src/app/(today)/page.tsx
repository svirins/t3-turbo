import { Suspense } from "react";

import { getCurrentDayFilters } from "@acme/utils";

import { GroupList } from "~/components/group-list";
import { GroupSkeleton } from "~/components/group-skeleton";
import { api } from "~/trpc/server";

export default async function HomePage() {
  const {
    dayOfWeekFilter,
    repeatsFilter,
    weekNumber,
    totalWeeks,
    dayAndMonth,
  } = getCurrentDayFilters();
  // console.log("🚀 ~ HomePage ~ repeatsFilter:", repeatsFilter);
  const data = api.group.allToday({ dayOfWeekFilter, repeatsFilter });

  return (
    <main className="container">
      <p className="text-primary">
        {`NA Belarus locator ${dayAndMonth} ~ ${weekNumber}/${totalWeeks} неделя месяца`}
      </p>
      <div className="">
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
    </main>
  );
}
