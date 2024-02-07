import { getCurrentDayFilters } from "@acme/utils";

import { Information } from "~/components/information";
import { Meetings } from "~/components/meetings";
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
  const data = await api.group.allToday({ dayOfWeekFilter, repeatsFilter });

  return (
    <main className="container h-screen py-16">
      <div className="flex flex-col gap-4">
        <div className="items-center justify-center">
          <h4 className="text-primary">NA Belarus locator</h4>
          <p>{`${dayAndMonth} ~ ${weekNumber}/${totalWeeks} неделя месяца`}</p>
        </div>
        <div className="flex w-full max-w-2xl flex-col gap-4">
          {data && data.length > 0 ? (
            data.map((group) => {
              const { days, ...rest } = group;
              return (
                // TODO: IMPLEMENT Container
                <div key={group.id}>
                  <Information data={rest} />
                  <Meetings data={days[0]!.meetings} />
                </div>
              );
            })
          ) : (
            <p>No groups today</p>
          )}
        </div>
      </div>
    </main>
  );
}
