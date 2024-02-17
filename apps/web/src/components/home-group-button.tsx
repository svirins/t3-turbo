"use client";

import { useState } from "react";
import clsx from "clsx";

export function HomeGroupButton({ id }: { id: string }) {
  // window is undefined -> return null
  if (typeof window === "undefined" || !window.localStorage) {
    return;
  }
  const storedId = window.localStorage.getItem("homeGroupId");

  const [home, setHome] = useState(id === storedId);

  // handle click
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    if (home) {
      window.localStorage.removeItem("homeGroupId");
      setHome(false);
    } else {
      window.localStorage.setItem("homeGroupId", id);
      setHome(true);
    }
  };

  // if (storedId !== id) return null;

  return (
    <>
      {home && <h2 className="card-title ml-2 text-2xl">~ домашняя группа</h2>}
      <button
        onClick={(e) => handleClick(e)}
        className="btn btn-sm btn-ghost btn-square ml-2"
      >
        <span
          className="tooltip"
          data-tip={home ? "Убрать из домашней" : "Сделать домашней"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            strokeWidth={2}
            viewBox="0 0 24 24"
            className={clsx(
              "inline-block h-6 w-6",
              home && "stroke-current",
              !home && "stroke-gray-500",
            )}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            ></path>
          </svg>
        </span>
      </button>
    </>
  );
}
