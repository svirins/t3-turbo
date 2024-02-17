"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import clsx from "clsx";
import { toast } from "react-hot-toast";

export function ScheduleButton({ id }: { id: string }) {
  if (typeof window === "undefined" || !window.localStorage) {
    return;
  }
  const router = useRouter();
  const pathname = usePathname();
  const storedValues = window.localStorage.getItem("myGroupsSchedule");
  const parsedValues = storedValues
    ? (JSON.parse(storedValues) as string[])
    : [];

  const [scheduled, setScheduled] = useState(
    !!parsedValues?.find((meetingId) => id === meetingId),
  );
  // TODO: check batch updates of local storage
  // TODO: mb migrate to a global state
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    if (scheduled) {
      const index = parsedValues!.findIndex((meetingId) => meetingId === id);
      parsedValues?.splice(index, 1);
      const newStringifiedValues = JSON.stringify(parsedValues);
      window.localStorage.setItem("myGroupsSchedule", newStringifiedValues);
      toast("Убрано из моего расписания", { icon: "👎" });
      setScheduled(false);
    } else {
      parsedValues?.push(id);
      const newStringifiedValues = JSON.stringify(parsedValues);
      window.localStorage.setItem("myGroupsSchedule", newStringifiedValues);
      toast("Добавлено в мое расписание", { icon: "👍" });
      setScheduled(true);
    }
    console.log("pathname: ", pathname);
    if (pathname === "/schedule") {
      router.refresh();
    }
  };

  return (
    <button
      className={clsx(
        "btn btn-xs btn-ghost btn-circle",
        scheduled && "text-secondary",
      )}
      onClick={(e) => handleClick(e)}
    >
      {scheduled ? (
        <div className="tooltip" data-tip="Хожу постоянно">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
        </div>
      ) : (
        <div className="tooltip" data-tip="Буду ходить постоянно">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </div>
      )}
    </button>
  );
}
