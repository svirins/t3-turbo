"use client";

import { usePathname } from "next/navigation";
import clsx from "clsx";

import type { RouterOutputs } from "@acme/api";
import { format, RepeatsDigits, TopicsRU } from "@acme/utils";

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
  // get current pathname
  const pathname = usePathname();
  const isGroupOrSchedule = pathname.includes("/group/") || pathname.includes("/schedule");
  return (
    <div className="flex flex-col gap-4">
      {data.map((meeting, index) => {
        const { start, end, isPassed } = getHoursAndStatus(
          meeting.start,
          meeting.end,
        );
        return (
          <div key={index} className="flex flex-row">
            {/* If it's a group page - display weeks - explanation */}
            {isGroupOrSchedule && (
              <span className="tooltip tooltip-right" data-tip="Номера недель">
                <p className="inline-block w-[36px] flex-none align-middle font-mono text-xs text-gray-500">
                  {`${RepeatsDigits[meeting.repeats]}`}
                </p>
              </span>
            )}

            <p
              className={clsx(
                "inline-block w-[128px]  align-middle font-mono font-medium ",
                isToday && isPassed && "text-gray-400",
              )}
            >{`${start}..${end}`}</p>
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
                  className={clsx("badge badge-outline  mb-1 ml-1 tracking-tighter")}
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
