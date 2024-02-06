import { getCurrentDayFilters } from "@acme/utils";

import { GroupList } from "~/app/components/groups-list";
import { api } from "~/trpc/server";

// export const runtime = "edge";

export default async function HomePage() {
  // You can await this here if you don't want to show Suspense fallback below
  const { dayOfWeekFilter, repeatsFilter } = getCurrentDayFilters();

  const groups = await api.group.allToday({ dayOfWeekFilter, repeatsFilter });

  return (
    <main className="container h-screen py-16">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          <span className="text-primary">NA</span> Belarus locator
        </h1>

        <div className="w-full max-w-2xl overflow-y-scroll">
          <GroupList groups={groups} />
        </div>
      </div>
    </main>
  );
}
