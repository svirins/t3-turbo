import type { States, Topics, WeekDays } from "./types";

interface IWeekDaysRU extends Record<WeekDays, string> {}
interface IStatesRU extends Record<States, string> {}
interface ITopicsRU extends Record<Topics, string> {}

export const WeekDaysRU: IWeekDaysRU = {
  Monday: "Понедельник",
  Tuesday: "Вторник",
  Wednesday: "Среда",
  Thursday: "Четверг",
  Friday: "Пятница",
  Saturday: "Суббота",
  Sunday: "Воскресенье",
};

export const StatesRU: IStatesRU = {
  Brestskaya: "Брестская область",
  Vitebskaya: "Витебская область",
  Gomelskaya: "Гомельская область",
  Grodnenskaya: "Гродненская область",
  Minskaya: "Минская область",
  Mogilevskaya: "Могилевская область",
};

export const TopicsRU: ITopicsRU = {
  Steps: "12 Шагов",
  Traditions: "Традиции",
  Speaker: "Спикерская",
  Free: "Свободная тема",
  Open: "Открытое собрание",
  Work: "Рабочее собрание",
  DailyInventarization: "Инвентаризация",
  WeeklyInventarization: "Итоги недели",
  Service: "Служение",
  Sponsorship: "Спонсорство",
  LivingClean: "Жить чистыми",
  QA: "Вопрос-ответ",
  DailyMeditation: "Ежедневник",
  Relationships: "Отношения в чистоте",
  Theme: "Тематическое",
  Defects: "Дефекты характера",
  SelfAnalysis: "Самоанализ",
  Basics: "Базовый текст",
  Zoom: "Zoom",
  Cards: "Карточки АН",
  ERKIP: "ЭРКиП",
  MiniSpeaker: "Мини-спикерская",
  Literature: "Литературный вечер",
};

export const RepeatsDigits = {
  Weekly: "1234",
  First: "1---",
  NotFirst: "-234",
  Last: "---4",
  NotLast: "123-",
  Odd: "1-3-",
  Even: "-2-4",
  Second: "-2--",
  NotSecond: "1-34",
  NotFirstNotLast: "-23-",
};
