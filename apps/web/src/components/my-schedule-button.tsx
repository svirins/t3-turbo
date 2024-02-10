"use client";

import { useState } from "react";

export function MyScheduleButton({ id }: { id: string }) {
  if (typeof window === "undefined" || !window.localStorage) {
    return;
  }
  const storedValues = window.localStorage.getItem("myGroupsSchedule");
  const parsedValues = storedValues
    ? (JSON.parse(storedValues) as string[])
    : [];

  const [scheduled, setScheduled] = useState(
    !!parsedValues?.find((meetingId) => id === meetingId),
  );

  // handle click
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    if (scheduled) {
      const index = parsedValues!.findIndex((meetingId) => meetingId === id);
      parsedValues?.splice(index, 1);
      const newStringifiedValues = JSON.stringify(parsedValues);
      window.localStorage.setItem("myGroupsSchedule", newStringifiedValues);
      setScheduled(false);
    } else {
      parsedValues?.push(id);
      const newStringifiedValues = JSON.stringify(parsedValues);
      window.localStorage.setItem("myGroupsSchedule", newStringifiedValues);
      setScheduled(true);
    }
  };

  return (
    <button
      className="btn btn-sm btn-secondary btn-outline "
      onClick={(e) => handleClick(e)}
    >
      {scheduled ? (
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
            d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      ) : (
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
            d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      )}
      {scheduled ? "хожу" : "не хожу"}
    </button>
  );
}
