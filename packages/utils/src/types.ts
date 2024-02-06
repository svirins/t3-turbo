export enum Topics {
  Steps = "Steps",
  Traditions = "Traditions",
  Speaker = "Speaker",
  Free = "Free",
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
  Last = "Last",
  Odd = "Odd",
  Even = "Even",
  Fourth = "Fourth",
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
