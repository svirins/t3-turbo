"use client";

import Link from "next/link";

import { WeekDaysRU } from "@acme/utils";

import { GroupSkeleton } from "@/components/group-skeleton";
import { HomeGroupBadge } from "@/components/home-group-badge";
import { Meetings } from "@/components/meetings";
import { useScheduledMeetings } from "@/lib/hooks/useStorage";
import { api } from "@/trpc/react";

export default function MySchedulePage() {
  const { meetingIds } = useScheduledMeetings();
  const { data } = api.group.byScheduledMeetings.useQuery({
    scheduledMeetingIds: meetingIds,
  });

  if (!data) {
    return (
      <div className="">
        <div className="flex flex-col w-full gap-4">
          <GroupSkeleton />
          <GroupSkeleton />
          <GroupSkeleton />
        </div>
      </div>
    );
  }

  if (data?.length === 0) {
    return (
      <div className="pb-24">
        <div className="shadow-2xl card bg-base-200">
          <div className="p-12 card-body pt-18">
            <div className="max-w-md">
              <h1 className="pb-4 font-bold text-7xl">🙅</h1>
              <h1 className="text-5xl font-bold">Пусто ...</h1>
              <p className="py-6">
                В твоем расписании нет ни одного собрания, которое ты посещаешь
                постоянно. Попробуй перейти к{" "}
                <Link className="font-medium text-primary" href="/">
                  списку групп
                </Link>{" "}
                и добавить такие собрания (используй ➕ для этого).
              </p>
              <Link href="/" className="btn btn-primary">
                Все группы
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="pb-24">
      <div className="flex flex-col w-full gap-4">
        {data?.map(({ days, ...rest }) => {
          return (
            <div key={rest.id} className="shadow-2xl card bg-base-200 ">
              <div className="p-4 card-body">
                <Link
                  href={`/group/${rest.id}`}
                  className="duration-100 ease-in-out transform hover:text-primary"
                >
                  <h2 className="text-2xl card-title">
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
