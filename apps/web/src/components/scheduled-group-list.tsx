import { use } from "react";
import Link from "next/link";

import type { RouterOutputs } from "@acme/api";
import { WeekDaysRU } from "@acme/utils";

import { HomeGroupBadge } from "~/components/home-group-badge";
import { Meetings } from "~/components/meetings";

export function ScheduledGroupList({
  data,
}: {
  data: Promise<RouterOutputs["group"]["byScheduledMeetings"]>;
}) {
  const initialData = use(data);
  // const { localizedWeekday } = getToday();
  // const currentWeekday = `${localizedWeekday.charAt(0).toUpperCase()}${localizedWeekday.slice(1)}`;

  if (initialData.length === 0) {
    return (
      <div className="flex flex-col items-center pt-32 ">
        <h2>В твоем расписании нет собраний </h2>
        <p>
          Возможно, сейчас самое время найти новую группу и добавить ее в
          расписание?
        </p>
        <Link
          href="/groups"
          className="btn btn-sm btn-secondary btn-outline"
          role="button"
        >
          Список групп
        </Link>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-4">
      {initialData.map(({ days, ...rest }) => {
        return (
          <div key={rest.id} className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">
                {rest.name}
                <HomeGroupBadge id={rest.id} />
              </h2>
              <div className="flex flex-row">
                <p>{`${rest.address?.city}, ${rest.address?.street}`}</p>
                <Link
                  href={`/groups/${rest.id}`}
                  className="btn btn-sm btn-ghost btn-circle"
                  role="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </Link>
              </div>
              <hr />
              {days.map((day) => {
                return (
                  day.meetings &&
                  day.meetings.length > 0 && (
                    <div key={day.weekday} className="flex flex-col gap-4">
                      <h2 className="text-xl">{WeekDaysRU[day.weekday]}</h2>
                      <div className="flex flex-col gap-4">
                        {day.meetings && day.meetings.length > 0 && (
                          <Meetings data={day.meetings} />
                        )}
                      </div>
                    </div>
                  )
                );
              })}
              {/* <Meetings data={days[0]!.meetings} isToday={isToday} /> */}
            </div>
          </div>
        );
      })}
    </div>
  );
}
