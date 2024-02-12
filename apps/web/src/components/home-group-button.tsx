"use client";

import { useState } from "react";

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

  return (
    <button
      onClick={(e) => handleClick(e)}
      disabled={!!(storedId && storedId !== id)}
      className="btn btn-sm btn-accent btn-outline"
    >
      {home ? "Убрать из домашней" : "Сделать домашней"}
    </button>
  );
}
