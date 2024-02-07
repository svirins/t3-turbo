import { getCurrentDayFilters } from "@acme/utils";

import { GroupList } from "~/app/components/groups-list";
import { api } from "~/trpc/server";

export default async function HomePage() {
  const {
    dayOfWeekFilter,
    repeatsFilter,
    weekNumber,
    totalWeeks,
    dayAndMonth,
  } = getCurrentDayFilters();
  const groups = await api.group.allToday({ dayOfWeekFilter, repeatsFilter });
  // console.log("🚀 ~ HomePage ~ repeatsFilter:", repeatsFilter);
  return (
    <main className="container h-screen py-16">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="tesxt-xl font-semibold tracking-tight md:text-2xl">
          <span className="text-primary">NA</span> Belarus locator
        </h1>
        <p>{`${dayAndMonth} ~ ${weekNumber}/${totalWeeks} неделя месяца`}</p>
        <div className="w-full max-w-2xl overflow-y-scroll">
          <GroupList groups={groups} />
        </div>
      </div>
    </main>
  );
}
