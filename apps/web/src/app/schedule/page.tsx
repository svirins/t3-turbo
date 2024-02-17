"use client";

import Link from "next/link";

import { WeekDaysRU } from "@acme/utils";

import { GroupSkeleton } from "~/components/group-skeleton";
import { HomeGroupBadge } from "~/components/home-group-badge";
import { Meetings } from "~/components/meetings";
import { api } from "~/trpc/react";

export default function MySchedulePage() {
  if (typeof window === "undefined" || !window.localStorage) {
    return;
  }

  const storedValues = window.localStorage.getItem("myGroupsSchedule");
  const meetings = storedValues ? (JSON.parse(storedValues) as string[]) : [];

  const { data } = api.group.byScheduledMeetings.useQuery({
    scheduledMeetingIds: meetings,
  });

  if (!data) {
    return (
      <div className="flex w-full flex-col gap-4">
        <GroupSkeleton />
        <GroupSkeleton />
        <GroupSkeleton />
      </div>
    );
  }

  if (data?.length === 0) {
    return (
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="pb-4 text-7xl font-bold">🙅</h1>
            <h1 className="text-5xl font-bold">Пусто ...</h1>
            <p className="py-6">
              В твоем расписании нет ни одного собрания, которое ты посещаешь
              постоянно. Попробуй перейти к списку групп и добавить такие
              собрания (используй ➕ для этого).
            </p>
            <Link href="/" className="btn btn-primary">
              Все группы
            </Link>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="container px-4 pb-24">
      <div className="flex w-full flex-col gap-4">
        {data?.map(({ days, ...rest }) => {
          return (
            <div key={rest.id} className="card bg-base-200 shadow-2xl ">
              <div className="card-body p-6">
                <Link
                  href={`/group/${rest.id}`}
                  className=" transform  duration-100 ease-in-out hover:text-secondary"
                >
                  <h2 className="card-title text-2xl">
                    {rest.name}
                    <HomeGroupBadge id={rest.id} />
                  </h2>
                  <div className="flex flex-row items-baseline">
                    <p>{`${rest.address?.city}, ${rest.address?.street}`}</p>
                  </div>
                </Link>
                {days.map((day) => {
                  return (
                    day.meetings &&
                    day.meetings.length > 0 && (
                      <div key={day.weekday} className="flex flex-col gap-4">
                        <hr />
                        <h2 className="text-lg font-medium">
                          {WeekDaysRU[day.weekday]}
                        </h2>
                        <div className="flex flex-col gap-4">
                          {day.meetings && day.meetings.length > 0 && (
                            <Meetings data={day.meetings} />
                          )}
                        </div>
                      </div>
                    )
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
