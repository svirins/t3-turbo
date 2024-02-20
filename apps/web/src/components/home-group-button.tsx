"use client";

import clsx from "clsx";
import { useHomeGroup } from "@/lib/hooks/useStorage";

export function HomeGroupButton({ id }: { id: string }) {
  const { homeGroupId, setHomeGroupId, RESET } = useHomeGroup();
  const isHomeGroup = homeGroupId === id;


  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    if (homeGroupId === id ) {
      setHomeGroupId(RESET);
    } else {
    setHomeGroupId(id)
    }
  };


  return (
    <>
      {isHomeGroup && <h2 className="card-title ml-2 text-2xl">~ домашняя группа</h2>}
      {!(homeGroupId && homeGroupId !== id) &&
        <button
          onClick={(e) => handleClick(e)}
          className="btn btn-sm btn-ghost btn-square ml-2"
          disabled={!!(homeGroupId && homeGroupId !== id)}
        >
          <span
            className="tooltip"
            data-tip={homeGroupId ? "Убрать из домашней" : "Сделать домашней"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeWidth={2}
              viewBox="0 0 24 24"
              className={clsx(
                "inline-block h-6 w-6 stroke-gray-500",
                homeGroupId === id && "stroke-current",
              )}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              ></path>
            </svg>
          </span>
        </button>}
    </>
  );
}
