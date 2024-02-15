"use client";

import Link from "next/link";

import { WeekDaysRU } from "@acme/utils";

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
      <div className="container pb-24">
        <span className="loading loading-infinity loading-lg"></span>
      </div>
    );
  }

  if (data?.length === 0) {
    return (
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="container pb-24">
      <div className="flex w-full flex-col gap-4">
        {data?.map(({ days, ...rest }) => {
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
                {days.map((day) => {
                  return (
                    day.meetings &&
                    day.meetings.length > 0 && (
                      <div key={day.weekday} className="flex flex-col gap-4">
                        <hr />
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
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
