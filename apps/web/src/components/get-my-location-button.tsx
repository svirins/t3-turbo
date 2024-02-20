"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import clsx from "clsx";

export function GetMyLocationButton() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  if (typeof window === "undefined" || !window.navigator) {
    console.log("Geolocation is not available.");
    return null;
  }
  function handleClick() {
    navigator.geolocation.getCurrentPosition((position) => {
      const params = new URLSearchParams(searchParams);
      params.set("latitude", position.coords.latitude.toString());
      params.set("longitude", position.coords.longitude.toString());
      replace(`${pathname}?${params.toString()}`);
    });
    console.log("Seeting location to detected user location.");
    return;
  }

  return (
    <button
      className={clsx(
        "btn btn-square btn-ghost btn-sm border-1 border-gray-300",
      )}
      onClick={() => handleClick()}
    >
      <div className="tooltip" data-tip="Ближайшие к моей геолокации">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
          />
        </svg>
      </div>
    </button>
  );
}
