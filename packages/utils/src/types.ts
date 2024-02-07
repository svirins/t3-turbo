export enum Topics {
  Steps = "Steps",
  Traditions = "Traditions",
  Speaker = "Speaker",
  Free = "Free",
  Open = "Open",
  Work = "Work",
  DailyInventarization = "DailyInventarization",
  WeeklyInventarization = "WeeklyInventarization",
  Service = "Service",
  Sponsorship = "Sponsorship",
  LivingClean = "LivingClean",
  QA = "QA",
  DailyMeditation = "DailyMeditation",
  Relationships = "Relationships",
  Theme = "Theme",
  Defects = "Defects",
  SelfAnalysis = "SelfAnalysis",
  Basics = "Basics",
}

export enum WeekDays {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday",
}

export enum States {
  Brestskaya = "Brestskaya",
  Vitebskaya = "Vitebskaya",
  Gomelskaya = "Gomelskaya",
  Grodnenskaya = "Grodnenskaya",
  Minskaya = "Minskaya",
  Mogilevskaya = "Mogilevskaya",
}

export enum Repeats {
  Weekly = "Weekly",
  First = "First",
  NotFirst = "NotFirst",
  Last = "Last",
  NotLast = "NotLast",
  Odd = "Odd",
  Even = "Even",
}

export interface Location {
  id: string;
  name: string;
  addressId?: string;
  coords: {
    latitude: number;
    longitude: number;
  };
}
