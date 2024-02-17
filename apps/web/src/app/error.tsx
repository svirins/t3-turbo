"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="container px-4">
    <div className="card bg-base-200 shadow-2xl">
      <div className="card-body p-12  pt-24">
        <div className="max-w-md">
          <h1 className="pb-4 text-7xl font-bold">🤷‍♀️</h1>
          <h1 className="text-5xl font-bold">Какая-то ошибка</h1>
          <p className="py-6">
            Это пройдет. Попробуй обновить страницу или вернуться позже.
          </p>
          <button onClick={reset}>обновить</button>
        </div>
      </div>
    </div>
    </div>
  );
}
