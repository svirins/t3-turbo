"use client";

import clsx from "clsx";

import type { RouterOutputs } from "@acme/api";
import { format, TopicsRU } from "@acme/utils";

import { ScheduleButton } from "~/components/my-schedule";

function getHoursAndStatus(dateStart: Date, dateEnd: Date) {
  const now = Number(
    new Date().toLocaleTimeString("en-US", {
      timeZone: "Europe/Minsk",
      hour: "numeric",
      hour12: false,
    }),
  );
  const endNumeric = Number(format(dateEnd, "H"));

  return {
    start: format(dateStart, "H:mm"),
    end: format(dateEnd, "H:mm"),
    isPassed: now > endNumeric,
  };
}

export function Meetings({
  data,
  isToday,
}: {
  data: RouterOutputs["group"]["all"][number]["days"][number]["meetings"];
  isToday?: boolean;
}) {
  return (
    <div className="flex flex-col gap-4">
      {data.map((meeting, index) => {
        const { start, end, isPassed } = getHoursAndStatus(
          meeting.start,
          meeting.end,
        );
        return (
          <div key={index} className="flex flex-row">
            <p
              className={clsx(
                "w-36 flex-none font-mono font-medium",
                isToday && isPassed && "text-gray-400",
              )}
            >{`${start} -> ${end}`}</p>
            <p className="h-6 w-6 flex-none">
              <ScheduleButton id={meeting.id} />
            </p>
            <p
              className={clsx(
                "text-semibold w-72  text-right",
                isToday && isPassed && "text-gray-400",
              )}
            >
              {meeting.topics.map((t, index) => (
                <span
                  key={index}
                  className={clsx("badge badge-outline  mb-1 ml-1")}
                >
                  {TopicsRU[t]}
                </span>
              ))}
            </p>
          </div>
        );
      })}
    </div>
  );
}
