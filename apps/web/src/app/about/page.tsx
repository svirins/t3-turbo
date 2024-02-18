"use client";

import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";

export default function About() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null; // return this null to avoid hydration errors
  }
  return (
    <div className="pb-24">
    <div className="card bg-base-200 shadow-2xl">
      <div className="card-body p-12  pt-18">
        <div className="max-w-md">
          <h1 className="pb-4 text-7xl font-bold">🧑‍💻</h1>
          <h1 className="pb-4 text-5xl font-bold">Инфа</h1>
          <p className="py-2">
            Это - неофициальное приложение. Оно создано для удобства
            пользователей и не связано напрямую с сообществом и/или структурами
            обслуживания. Твои данные (расписание и домашняя группа) хранятся в твоем браузере и не передаются на сервер.
            </p>
          <p className="py-2">
            Код приложения распространяется бесплатно и без ограничений.
            Исходный код доступен{" "}
            <a
              className="font-medium text-primary"
              href="https://github.com/shuubniguratt/locator"
            >
              тут
            </a>
            .
          </p>
          <p className="py-2">
            Спасибо{" "}
            <a className="font-medium text-primary" href="https://vercel.com">
              Vercel
            </a>{" "}
            за хостинг и технологии, которые они предоставляют.{" "}
            <a className="font-medium text-primary" href="https://supabase.com">
              Supabase
            </a>{" "}
            - за базу данных.
          </p>
          <p className="py-6 font-medium italic">
            <Typewriter
              options={{
                strings: [
                  "Возвращайся!",
                  "Keep coming back!",
                  "Вяртайся!",
                  "Wróć!",
                  "Ritorno!",
                  "Komm zurück!",
                  "Revenir!",
                  "戻ってくる",
                  "عود",
                ],
                autoStart: true,
                loop: true,
                delay: 100,
                deleteSpeed: 50,
              }}
            />
          </p>
        </div>
      </div>
      </div>
      </div>
  );
}
