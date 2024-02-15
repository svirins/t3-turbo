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
    <div>
      <p>Что-то пошло не так ... Попробуйт обновить страницу</p>
      <button onClick={reset}>Обновляю</button>
    </div>
  );
}
