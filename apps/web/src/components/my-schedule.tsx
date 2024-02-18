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
        scheduled && "text-primary",
      )}
      onClick={(e) => handleClick(e)}
    >
      {scheduled ? (
        <div className="tooltip" data-tip="Хожу постоянно">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
  <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
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


