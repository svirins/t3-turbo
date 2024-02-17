import type { Prisma } from "@prisma/client";
import { PrismaClient } from "@prisma/client";

import { Repeats, States, Topics, WeekDays } from "@acme/utils";

type SeedLocationData = {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
};

type Location = {
  id: string;
  name: string;
  coords: {
    latitude: number;
    longitude: number;
  };
};

const locations = [
  {
    id: "cls7u33m5000008l8dd9cf4oj",
    name: "10ka",
    latitude: 53.89934922790105,
    longitude: 27.60199485065702,
  },
  {
    id: "cls7u9fdq00000al480osaulw",
    name: "Polevaya",
    latitude: 53.87412191632889,
    longitude: 27.571667665131763,
  },
  {
    id: "cls7u9ym500010al46f3ve1kn",
    name: "Malina",
    latitude: 53.849863891391294,
    longitude: 27.48657133532942,
  },
  {
    id: "cls7uacej00020al40f6hbbap",
    name: "Vyhod",
    latitude: 53.92148904941833,
    longitude: 27.56949674370225,
  },
  {
    id: "cls7uauwv00030al43wye2a8c",
    name: "Positivka",
    latitude: 53.91642094153588,
    longitude: 27.51224088204882,
  },
  {
    id: "clshdclac000008kzcd559k7g",
    name: "Voshod",
    latitude: 53.137948814158136,
    longitude: 29.229177430894808,
  },
  {
    id: "clshddh8s000108kz57fa2i7t",
    name: "Joker",
    latitude: 54.21481717762576,
    longitude: 28.479890755987103,
  },
  {
    id: "clshden34000208kzh5zm0jrw",
    name: "Nachalo",
    latitude: 52.088937731700156,
    longitude: 23.70597009824327,
  },
  {
    id: "clshdetc0000308kz3r2la4nj",
    name: "Panacea",
    latitude: 54.48485814692943,
    longitude: 26.903816338123015,
  },
  {
    id: "clshdeyd7000408kz6nn621o1",
    name: "DenSurka",
    latitude: 55.21061287422398,
    longitude: 30.2235955359335,
  },
  {
    id: "clshdf77t000508kzeesvf46g",
    name: "Shans",
    latitude: 53.162103385130614,
    longitude: 24.45767623592146,
  },
  {
    id: "clshdfb9s000608kzcwqr3jck",
    name: "Dezhurka",
    latitude: 52.454542156700164,
    longitude: 30.99104561349477,
  },
  {
    id: "clshdffqj000708kz1rhn6jwd",
    name: "Preobbrazhenie",
    latitude: 53.668413916007125,
    longitude: 23.81590324062764,
  },
  {
    id: "clshdffqj000708kz1rhn6j0d",
    name: "Mayak",
    latitude: 53.689392,
    longitude: 27.129599,
  },
  {
    id: "clshdfk6h000808kzaih3cyso",
    name: "Locacia",
    latitude: 54.10670965560797,
    longitude: 28.30024428791941,
  },
  {
    id: "clshdfou2000908kz67k6e2ft",
    name: "Vzletka",
    latitude: 53.91105511050978,
    longitude: 30.341713155976347,
  },
  {
    id: "clshdfswf000a08kz9q9tagv4",
    name: "Catarsis",
    latitude: 53.03134334085134,
    longitude: 27.546143691110437,
  },
  {
    id: "clshdfwos000b08kzbp7u4ub4",
    name: "Nadezhda",
    latitude: 52.79847182125294,
    longitude: 27.540525199999998,
  },
];

const groupsData = [
  {
    name: "Десятка",
    address: {
      create: {
        city: "Минск",
        state: States.Minskaya,
        street: "ул. Долгобродская, 10 корпус 2",
        comments: "Подъезд №1, цокольный этаж",
        location: {
          connect: {
            id: "cls7u33m5000008l8dd9cf4oj",
          },
        },
      },
    },
    days: {
      create: [
        {
          weekday: WeekDays.Monday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 19, 0, 0, 0),
                end: new Date(2024, 0, 0, 20, 0, 0, 0),
                topics: [Topics.DailyInventarization],
                repeats: Repeats.Weekly,
              },
            ],
          },
        },
        {
          weekday: WeekDays.Tuesday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 19, 0, 0, 0),
                end: new Date(2024, 0, 0, 20, 0, 0, 0),
                topics: [Topics.Steps],
                repeats: Repeats.Weekly,
              },
              {
                start: new Date(2024, 0, 0, 20, 15, 0, 0),
                end: new Date(2024, 0, 0, 21, 0, 0, 0),
                topics: [Topics.Work],
                repeats: Repeats.Last,
              },
            ],
          },
        },
        {
          weekday: WeekDays.Wednesday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 19, 0, 0, 0),
                end: new Date(2024, 0, 0, 20, 0, 0, 0),
                topics: [Topics.DailyInventarization],
                repeats: Repeats.Weekly,
              },
            ],
          },
        },
        {
          weekday: WeekDays.Thursday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 19, 0, 0, 0),
                end: new Date(2024, 0, 0, 20, 0, 0, 0),
                topics: [Topics.Traditions],
                repeats: Repeats.Weekly,
              },
            ],
          },
        },
        {
          weekday: WeekDays.Friday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 19, 0, 0, 0),
                end: new Date(2024, 0, 0, 20, 0, 0, 0),
                topics: [Topics.DailyInventarization],
                repeats: Repeats.Weekly,
              },
            ],
          },
        },
        {
          weekday: WeekDays.Saturday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 10, 0, 0, 0),
                end: new Date(2024, 0, 0, 11, 0, 0, 0),
                topics: [Topics.WeeklyInventarization],
                repeats: Repeats.Weekly,
              },
              {
                start: new Date(2024, 0, 0, 16, 0, 0, 0),
                end: new Date(2024, 0, 0, 17, 0, 0, 0),
                topics: [Topics.Sponsorship],
                repeats: Repeats.Weekly,
              },
            ],
          },
        },
        {
          weekday: WeekDays.Sunday,
          meetings: {
            create: {
              start: new Date(2024, 0, 0, 16, 0, 0, 0),
              end: new Date(2024, 0, 0, 17, 30, 0, 0),
              topics: [Topics.Speaker, Topics.Open],
              repeats: Repeats.Weekly,
            },
          },
        },
      ],
    },
  },
  {
    name: "Выход",
    address: {
      create: {
        city: "Минск",
        state: States.Minskaya,
        street: " ул.В.Хоружей, 18/1",
        comments: "Вход с обратной стороны — второй этаж",
        photoUrls: ["vihod-1.jpeg", "vihod-2.jpeg"],
        location: {
          connect: {
            id: "cls7uacej00020al40f6hbbap",
          },
        },
      },
    },
    days: {
      create: [
        {
          weekday: WeekDays.Monday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 11, 30, 0, 0),
                end: new Date(2024, 0, 0, 12, 30, 0, 0),
                topics: [Topics.Sponsorship],
                repeats: Repeats.Weekly,
              },
              {
                start: new Date(2024, 0, 0, 19, 0, 0, 0),
                end: new Date(2024, 0, 0, 20, 20, 0, 0),
                topics: [Topics.Sponsorship],
                repeats: Repeats.Weekly,
              },
              {
                start: new Date(2024, 0, 0, 21, 0, 0, 0),
                end: new Date(2024, 0, 0, 22, 0, 0, 0),
                topics: [Topics.Sponsorship],
                repeats: Repeats.Weekly,
              },
              {
                start: new Date(2024, 0, 0, 23, 0, 0, 0),
                end: new Date(2024, 0, 0, 23, 59, 0, 0),
                topics: [Topics.Sponsorship],
                repeats: Repeats.Weekly,
              },
            ],
          },
        },
        {
          weekday: WeekDays.Tuesday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 11, 30, 0, 0),
                end: new Date(2024, 0, 0, 12, 30, 0, 0),
                topics: [Topics.Service],
                repeats: Repeats.Weekly,
              },
              {
                start: new Date(2024, 0, 0, 19, 0, 0, 0),
                end: new Date(2024, 0, 0, 20, 20, 0, 0),
                topics: [Topics.Service],
                repeats: Repeats.Weekly,
              },
              {
                start: new Date(2024, 0, 0, 21, 0, 0, 0),
                end: new Date(2024, 0, 0, 22, 0, 0, 0),
                topics: [Topics.Service],
                repeats: Repeats.Weekly,
              },
            ],
          },
        },
        {
          weekday: WeekDays.Wednesday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 11, 30, 0, 0),
                end: new Date(2024, 0, 0, 12, 30, 0, 0),
                topics: [Topics.Steps],
                repeats: Repeats.Weekly,
              },
              {
                start: new Date(2024, 0, 0, 19, 0, 0, 0),
                end: new Date(2024, 0, 0, 20, 20, 0, 0),
                topics: [Topics.Steps],
                repeats: Repeats.Weekly,
              },
              {
                start: new Date(2024, 0, 0, 21, 0, 0, 0),
                end: new Date(2024, 0, 0, 22, 0, 0, 0),
                topics: [Topics.Steps],
                repeats: Repeats.Weekly,
              },
              {
                start: new Date(2024, 0, 0, 23, 0, 0, 0),
                end: new Date(2024, 0, 0, 23, 59, 0, 0),
                topics: [Topics.Steps],
                repeats: Repeats.Weekly,
              },
            ],
          },
        },
        {
          weekday: WeekDays.Thursday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 11, 30, 0, 0),
                end: new Date(2024, 0, 0, 12, 30, 0, 0),
                topics: [Topics.Relationships],
                repeats: Repeats.Weekly,
              },
              {
                start: new Date(2024, 0, 0, 19, 0, 0, 0),
                end: new Date(2024, 0, 0, 20, 20, 0, 0),
                topics: [Topics.Relationships],
                repeats: Repeats.Weekly,
              },
              {
                start: new Date(2024, 0, 0, 21, 0, 0, 0),
                end: new Date(2024, 0, 0, 22, 0, 0, 0),
                topics: [Topics.Relationships],
                repeats: Repeats.Weekly,
              },
            ],
          },
        },
        {
          weekday: WeekDays.Friday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 11, 30, 0, 0),
                end: new Date(2024, 0, 0, 12, 30, 0, 0),
                topics: [Topics.Traditions],
                repeats: Repeats.Weekly,
              },
              {
                start: new Date(2024, 0, 0, 19, 0, 0, 0),
                end: new Date(2024, 0, 0, 20, 20, 0, 0),
                topics: [Topics.Traditions],
                repeats: Repeats.Weekly,
              },
              {
                start: new Date(2024, 0, 0, 21, 0, 0, 0),
                end: new Date(2024, 0, 0, 22, 0, 0, 0),
                topics: [Topics.Traditions],
                repeats: Repeats.Weekly,
              },
              {
                start: new Date(2024, 0, 0, 23, 0, 0, 0),
                end: new Date(2024, 0, 0, 23, 59, 0, 0),
                topics: [Topics.Traditions],
                repeats: Repeats.Weekly,
              },
            ],
          },
        },
        {
          weekday: WeekDays.Saturday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 11, 30, 0, 0),
                end: new Date(2024, 0, 0, 12, 50, 0, 0),
                topics: [Topics.Steps],
                repeats: Repeats.Weekly,
              },
              {
                start: new Date(2024, 0, 0, 19, 0, 0, 0),
                end: new Date(2024, 0, 0, 20, 20, 0, 0),
                topics: [Topics.Speaker],
                repeats: Repeats.Weekly,
              },
              {
                start: new Date(2024, 0, 0, 21, 0, 0, 0),
                end: new Date(2024, 0, 0, 22, 0, 0, 0),
                topics: [Topics.Steps],
                repeats: Repeats.Weekly,
              },
              {
                start: new Date(2024, 0, 0, 23, 0, 0, 0),
                end: new Date(2024, 0, 0, 23, 59, 0, 0),
                topics: [Topics.Steps],
                repeats: Repeats.Weekly,
              },
            ],
          },
        },
        {
          weekday: WeekDays.Sunday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 11, 30, 0, 0),
                end: new Date(2024, 0, 0, 12, 50, 0, 0),
                topics: [Topics.Steps, Topics.Open],
                repeats: Repeats.Weekly,
              },
              {
                start: new Date(2024, 0, 0, 17, 0, 0, 0),
                end: new Date(2024, 0, 0, 18, 30, 0, 0),
                topics: [Topics.Work],
                repeats: Repeats.Last,
              },
              {
                start: new Date(2024, 0, 0, 19, 0, 0, 0),
                end: new Date(2024, 0, 0, 20, 20, 0, 0),
                topics: [Topics.Defects],
                repeats: Repeats.Weekly,
              },
              {
                start: new Date(2024, 0, 0, 21, 0, 0, 0),
                end: new Date(2024, 0, 0, 22, 0, 0),
                topics: [Topics.Defects],
                repeats: Repeats.Weekly,
              },
            ],
          },
        },
      ],
    },
  },
  {
    name: "Полевая",
    address: {
      create: {
        city: "Минск",
        state: States.Minskaya,
        street: "ул. Полевая, 26",
        comments: "Цокольный этаж, вход с торца",
        location: {
          connect: {
            id: "cls7u9fdq00000al480osaulw",
          },
        },
      },
    },
    days: {
      create: [
        {
          weekday: WeekDays.Monday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 19, 0, 0, 0),
                end: new Date(2024, 0, 0, 20, 0, 0, 0),
                topics: [Topics.Steps],
                repeats: Repeats.Weekly,
              },
              {
                start: new Date(2024, 0, 0, 20, 15, 0, 0),
                end: new Date(2024, 0, 0, 21, 0, 0, 0),
                topics: [Topics.Work],
                repeats: Repeats.Last,
              },
            ],
          },
        },
        {
          weekday: WeekDays.Tuesday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 20, 30, 0, 0),
                end: new Date(2024, 0, 0, 21, 30, 0, 0),
                topics: [Topics.Theme],
                repeats: Repeats.Weekly,
              },
            ],
          },
        },
        {
          weekday: WeekDays.Thursday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 20, 30, 0, 0),
                end: new Date(2024, 0, 0, 21, 30, 0, 0),
                topics: [Topics.Traditions],
                repeats: Repeats.Weekly,
              },
            ],
          },
        },
        {
          weekday: WeekDays.Friday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 20, 0, 0, 0),
                end: new Date(2024, 0, 0, 21, 15, 0, 0),
                topics: [Topics.Theme],
                repeats: Repeats.Even,
              },
              {
                start: new Date(2024, 0, 0, 20, 0, 0, 0),
                end: new Date(2024, 0, 0, 21, 15, 0, 0),
                topics: [Topics.Theme, Topics.Open],
                repeats: Repeats.Odd,
              },
            ],
          },
        },
        {
          weekday: WeekDays.Saturday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 16, 0, 0, 0),
                end: new Date(2024, 0, 0, 17, 0, 0, 0),
                topics: [Topics.Theme],
                repeats: Repeats.Weekly,
              },
            ],
          },
        },
        {
          weekday: WeekDays.Sunday,
          meetings: {
            create: {
              start: new Date(2024, 0, 0, 16, 0, 0, 0),
              end: new Date(2024, 0, 0, 17, 0, 0, 0),
              topics: [Topics.QA],
              repeats: Repeats.Weekly,
            },
          },
        },
      ],
    },
  },
  {
    name: "Позитивка",
    address: {
      create: {
        city: "Минск",
        state: States.Minskaya,
        street: "ул. Бирюзова 4, кабинет 219",
        location: {
          connect: {
            id: "cls7uauwv00030al43wye2a8c",
          },
        },
      },
    },
    days: {
      create: [
        {
          weekday: WeekDays.Monday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 19, 0, 0, 0),
                end: new Date(2024, 0, 0, 20, 10, 0, 0),
                topics: [Topics.Service, Topics.Basics],
                repeats: Repeats.Weekly,
              },
            ],
          },
        },
        {
          weekday: WeekDays.Tuesday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 19, 0, 0, 0),
                end: new Date(2024, 0, 0, 20, 10, 0, 0),
                topics: [Topics.Steps],
                repeats: Repeats.Even,
              },
              {
                start: new Date(2024, 0, 0, 19, 0, 0, 0),
                end: new Date(2024, 0, 0, 20, 10, 0, 0),
                topics: [Topics.Steps, Topics.Open],
                repeats: Repeats.Odd,
              },
              {
                start: new Date(2024, 0, 0, 20, 15, 0, 0),
                end: new Date(2024, 0, 0, 21, 15, 0, 0),
                topics: [Topics.Work],
                repeats: Repeats.Last,
              },
            ],
          },
        },
        {
          weekday: WeekDays.Wednesday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 19, 0, 0, 0),
                end: new Date(2024, 0, 0, 20, 10, 0, 0),
                topics: [Topics.Traditions],
                repeats: Repeats.Weekly,
              },
            ],
          },
        },
        {
          weekday: WeekDays.Thursday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 19, 0, 0, 0),
                end: new Date(2024, 0, 0, 20, 10, 0, 0),
                topics: [Topics.Sponsorship],
                repeats: Repeats.NotLast,
              },
              {
                start: new Date(2024, 0, 0, 19, 0, 0, 0),
                end: new Date(2024, 0, 0, 20, 10, 0, 0),
                topics: [Topics.Sponsorship, Topics.Open],
                repeats: Repeats.Last,
              },
            ],
          },
        },
        {
          weekday: WeekDays.Friday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 19, 0, 0, 0),
                end: new Date(2024, 0, 0, 20, 10, 0, 0),
                topics: [Topics.Relationships],
                repeats: Repeats.Weekly,
              },
              {
                start: new Date(2024, 0, 0, 22, 0, 0, 0),
                end: new Date(2024, 0, 0, 23, 10, 0, 0),
                topics: [Topics.Theme],
                repeats: Repeats.Weekly,
              },
            ],
          },
        },
        {
          weekday: WeekDays.Saturday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 17, 0, 0, 0),
                end: new Date(2024, 0, 0, 18, 10, 0, 0),
                topics: [Topics.QA],
                repeats: Repeats.Weekly,
              },
            ],
          },
        },
        {
          weekday: WeekDays.Sunday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 17, 0, 0, 0),
                end: new Date(2024, 0, 0, 18, 10, 0, 0),
                topics: [Topics.DailyInventarization, Topics.Speaker],
                repeats: Repeats.First,
              },
              {
                start: new Date(2024, 0, 0, 17, 0, 0, 0),
                end: new Date(2024, 0, 0, 18, 10, 0, 0),
                topics: [Topics.DailyMeditation],
                repeats: Repeats.NotFirst,
              },
            ],
          },
        },
      ],
    },
  },
  {
    name: "Малина",
    address: {
      create: {
        city: "Минск",
        state: States.Minskaya,
        street: "ул. Наполеона Орды 47а",
        comments: "Социальный центр 2 этаж к. 208",
        location: {
          connect: {
            id: "cls7u9ym500010al46f3ve1kn",
          },
        },
      },
    },
    days: {
      create: [
        {
          weekday: WeekDays.Tuesday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 18, 15, 0, 0),
                end: new Date(2024, 0, 0, 19, 30, 0, 0),
                topics: [Topics.Steps, Topics.Service],
                repeats: Repeats.Weekly,
              },
            ],
          },
        },
        {
          weekday: WeekDays.Wednesday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 18, 15, 0, 0),
                end: new Date(2024, 0, 0, 19, 30, 0, 0),
                topics: [Topics.Basics],
                repeats: Repeats.NotLast,
              },
              {
                start: new Date(2024, 0, 0, 18, 15, 0, 0),
                end: new Date(2024, 0, 0, 19, 30, 0, 0),
                topics: [Topics.Open, Topics.Basics],
                repeats: Repeats.Last,
              },
            ],
          },
        },
        {
          weekday: WeekDays.Thursday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 18, 15, 0, 0),
                end: new Date(2024, 0, 0, 19, 30, 0, 0),
                topics: [Topics.Traditions],
                repeats: Repeats.Even,
              },
              {
                start: new Date(2024, 0, 0, 18, 15, 0, 0),
                end: new Date(2024, 0, 0, 19, 30, 0, 0),
                topics: [Topics.Speaker],
                repeats: Repeats.Odd,
              },
            ],
          },
        },
        {
          weekday: WeekDays.Friday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 18, 15, 0, 0),
                end: new Date(2024, 0, 0, 19, 30, 0, 0),
                topics: [Topics.Sponsorship],
                repeats: Repeats.Weekly,
              },
            ],
          },
        },
        {
          weekday: WeekDays.Sunday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 11, 15, 0, 0),
                end: new Date(2024, 0, 0, 12, 30, 0, 0),
                topics: [Topics.LivingClean],
                repeats: Repeats.Weekly,
              },
              {
                start: new Date(2024, 0, 0, 12, 45, 0, 0),
                end: new Date(2024, 0, 0, 14, 15, 0, 0),
                topics: [Topics.Work],
                repeats: Repeats.First,
              },
            ],
          },
        },
      ],
    },
  },
  {
    name: "Восход",
    address: {
      create: {
        city: "Бобруйск",
        state: States.Mogilevskaya,
        street: "ул. Карла Либкнехта, 58",
        comments: "Центр социальной помощи",
        photoUrls: ["bobr.jpeg"],
        location: {
          connect: {
            id: "clshdclac000008kzcd559k7g",
          },
        },
      },
    },
    days: {
      create: [
        {
          weekday: WeekDays.Wednesday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 19, 0, 0, 0),
                end: new Date(2024, 0, 0, 20, 15, 0, 0),
                topics: [Topics.Steps, Topics.Traditions],
                repeats: Repeats.Weekly,
              },
            ],
          },
        },
        {
          weekday: WeekDays.Friday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 19, 15, 0, 0),
                end: new Date(2024, 0, 0, 20, 30, 0, 0),
                topics: [Topics.Theme],
                repeats: Repeats.Weekly,
              },
            ],
          },
        },
        {
          weekday: WeekDays.Sunday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 13, 0, 0, 0),
                end: new Date(2024, 0, 0, 14, 20, 0, 0),
                topics: [Topics.Theme],
                repeats: Repeats.Weekly,
              },
              {
                start: new Date(2024, 0, 0, 14, 30, 0, 0),
                end: new Date(2024, 0, 0, 15, 30, 0, 0),
                topics: [Topics.Work],
                repeats: Repeats.Last,
              },
            ],
          },
        },
      ],
    },
  },
  {
    name: "Джокер",
    address: {
      create: {
        city: "Борисов",
        state: States.Minskaya,
        street: "ул. 50 лет БССР д.27а",
        comments: "Помещение ТЦСОН",
        photoUrls: ["borisov-1.jpeg", "borisov-2.jpeg"],

        location: {
          connect: {
            id: "clshddh8s000108kz57fa2i7t",
          },
        },
      },
    },
    days: {
      create: [
        {
          weekday: WeekDays.Monday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 19, 0, 0, 0),
                end: new Date(2024, 0, 0, 20, 0, 0, 0),
                topics: [Topics.Sponsorship],
                repeats: Repeats.Weekly,
              },
            ],
          },
        },
        {
          weekday: WeekDays.Tuesday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 19, 0, 0, 0),
                end: new Date(2024, 0, 0, 20, 0, 0, 0),
                topics: [Topics.DailyInventarization],
                repeats: Repeats.Weekly,
              },
            ],
          },
        },
        {
          weekday: WeekDays.Wednesday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 19, 0, 0, 0),
                end: new Date(2024, 0, 0, 20, 0, 0, 0),
                topics: [Topics.Theme],
                repeats: Repeats.Weekly,
              },
            ],
          },
        },
        {
          weekday: WeekDays.Thursday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 19, 0, 0, 0),
                end: new Date(2024, 0, 0, 20, 0, 0, 0),
                topics: [Topics.Traditions],
                repeats: Repeats.Weekly,
              },
            ],
          },
        },
        {
          weekday: WeekDays.Friday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 19, 0, 0, 0),
                end: new Date(2024, 0, 0, 20, 0, 0, 0),
                topics: [Topics.Steps],
                repeats: Repeats.Weekly,
              },
              {
                start: new Date(2024, 0, 0, 20, 0, 0, 0),
                end: new Date(2024, 0, 0, 21, 0, 0, 0),
                topics: [Topics.Work],
                repeats: Repeats.First,
              },
            ],
          },
        },
        {
          weekday: WeekDays.Saturday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 17, 0, 0, 0),
                end: new Date(2024, 0, 0, 18, 0, 0, 0),
                topics: [Topics.Open],
                repeats: Repeats.Weekly,
              },
              {
                start: new Date(2024, 0, 0, 18, 0, 0, 0),
                end: new Date(2024, 0, 0, 19, 0, 0, 0),
                topics: [Topics.Speaker],
                repeats: Repeats.Weekly,
              },
            ],
          },
        },
        {
          weekday: WeekDays.Sunday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 17, 0, 0, 0),
                end: new Date(2024, 0, 0, 18, 0, 0, 0),
                topics: [Topics.LivingClean],
                repeats: Repeats.Weekly,
              },
            ],
          },
        },
      ],
    },
  },
  {
    name: "NAчало",
    address: {
      create: {
        city: "Брест",
        state: States.Brestskaya,
        street: "пр. Машерова, 80",
        comments: "Цокольный этаж",
        photoUrls: ["brest_1.jpg"],
        location: {
          connect: {
            id: "clshden34000208kzh5zm0jrw",
          },
        },
      },
    },
    days: {
      create: [
        {
          weekday: WeekDays.Monday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 18, 30, 0, 0),
                end: new Date(2024, 0, 0, 19, 30, 0, 0),
                topics: [Topics.QA],
                repeats: Repeats.NotSecond,
              },
              {
                start: new Date(2024, 0, 0, 18, 30, 0, 0),
                end: new Date(2024, 0, 0, 19, 30, 0, 0),
                topics: [Topics.QA, Topics.Open],
                repeats: Repeats.Second,
              },
            ],
          },
        },
        {
          weekday: WeekDays.Tuesday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 18, 30, 0, 0),
                end: new Date(2024, 0, 0, 19, 30, 0, 0),
                topics: [Topics.LivingClean],
                repeats: Repeats.Weekly,
              },
            ],
          },
        },
        {
          weekday: WeekDays.Wednesday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 18, 30, 0, 0),
                end: new Date(2024, 0, 0, 19, 30, 0, 0),
                topics: [Topics.ERKIP],
                repeats: Repeats.Weekly,
              },
            ],
          },
        },
        {
          weekday: WeekDays.Thursday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 18, 30, 0, 0),
                end: new Date(2024, 0, 0, 19, 30, 0, 0),
                topics: [Topics.Literature],
                repeats: Repeats.Weekly,
              },
            ],
          },
        },
        {
          weekday: WeekDays.Friday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 18, 30, 0, 0),
                end: new Date(2024, 0, 0, 19, 30, 0, 0),
                topics: [Topics.Cards],
                repeats: Repeats.Weekly,
              },
            ],
          },
        },
        {
          weekday: WeekDays.Saturday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 17, 0, 0, 0),
                end: new Date(2024, 0, 0, 18, 0, 0, 0),
                topics: [Topics.MiniSpeaker, Topics.Service],
                repeats: Repeats.Weekly,
              },
              {
                start: new Date(2024, 0, 0, 18, 5, 0, 0),
                end: new Date(2024, 0, 0, 19, 5, 0, 0),
                topics: [Topics.Work],
                repeats: Repeats.Last,
              },
            ],
          },
        },
        {
          weekday: WeekDays.Sunday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 14, 0, 0, 0),
                end: new Date(2024, 0, 0, 15, 0, 0, 0),
                topics: [Topics.Basics],
                repeats: Repeats.Weekly,
              },
            ],
          },
        },
      ],
    },
  },
  {
    name: "Панацея",
    address: {
      create: {
        city: "Вилейка",
        state: States.Minskaya,
        street: "ул. Маркова 49",
        photoUrls: ["vileika1.jpeg", "vileika2.jpeg"],
        location: {
          connect: {
            id: "clshdetc0000308kz3r2la4nj",
          },
        },
      },
    },
    days: {
      create: [
        {
          weekday: WeekDays.Wednesday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 18, 0, 0, 0),
                end: new Date(2024, 0, 0, 19, 0, 0, 0),
                topics: [Topics.Theme],
                repeats: Repeats.Weekly,
              },
            ],
          },
        },
      ],
    },
  },
  {
    name: "День сурка",
    address: {
      create: {
        city: "Витебск",
        state: States.Vitebskaya,
        street: "ул. Гагарина, 46а",
        location: {
          connect: {
            id: "clshdeyd7000408kz6nn621o1",
          },
        },
      },
    },
    days: {
      create: [
        {
          weekday: WeekDays.Thursday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 19, 0, 0, 0),
                end: new Date(2024, 0, 0, 20, 0, 0, 0),
                topics: [Topics.Theme],
                repeats: Repeats.Weekly,
              },
            ],
          },
        },
        {
          weekday: WeekDays.Sunday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 11, 0, 0, 0),
                end: new Date(2024, 0, 0, 12, 0, 0, 0),
                topics: [Topics.Theme],
                repeats: Repeats.Weekly,
              },
            ],
          },
        },
      ],
    },
  },
  {
    name: "Шанс",
    address: {
      create: {
        city: "Волковыск",
        state: States.Grodnenskaya,
        street: "ул. Ленина 14",
        photoUrls: ["volkovisk-1.jpeg", "volkovisk-2.jpeg", "volkovisk-3.jpeg"],
        location: {
          connect: {
            id: "clshdf77t000508kzeesvf46g",
          },
        },
      },
    },
    days: {
      create: [
        {
          weekday: WeekDays.Monday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 19, 0, 0, 0),
                end: new Date(2024, 0, 0, 20, 0, 0, 0),
                topics: [Topics.Theme, Topics.Steps],
                repeats: Repeats.Weekly,
              },
            ],
          },
        },
        {
          weekday: WeekDays.Tuesday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 19, 0, 0, 0),
                end: new Date(2024, 0, 0, 20, 0, 0, 0),
                topics: [Topics.Theme, Topics.Steps],
                repeats: Repeats.Weekly,
              },
              {
                start: new Date(2024, 0, 0, 20, 0, 0, 0),
                end: new Date(2024, 0, 0, 21, 0, 0, 0),
                topics: [Topics.Work],
                repeats: Repeats.Last,
              },
            ],
          },
        },
        {
          weekday: WeekDays.Thursday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 19, 0, 0, 0),
                end: new Date(2024, 0, 0, 20, 0, 0, 0),
                topics: [Topics.Theme, Topics.LivingClean],
                repeats: Repeats.Weekly,
              },
            ],
          },
        },
        {
          weekday: WeekDays.Saturday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 17, 0, 0, 0),
                end: new Date(2024, 0, 0, 18, 0, 0, 0),
                topics: [Topics.Theme, Topics.Sponsorship],
                repeats: Repeats.NotFirstNotLast,
              },
              {
                start: new Date(2024, 0, 0, 17, 0, 0, 0),
                end: new Date(2024, 0, 0, 18, 0, 0, 0),
                topics: [Topics.Theme, Topics.Sponsorship, Topics.Open],
                repeats: Repeats.First,
              },
              {
                start: new Date(2024, 0, 0, 17, 0, 0, 0),
                end: new Date(2024, 0, 0, 18, 0, 0, 0),
                topics: [Topics.Sponsorship],
                repeats: Repeats.Last,
              },
            ],
          },
        },
      ],
    },
  },
  {
    name: "Дежурка",
    address: {
      create: {
        city: "Гомель",
        state: States.Gomelskaya,
        street: "ул. Советская, 146а",
        comments: "Дом милосердия Св.Терезы",
        location: {
          connect: {
            id: "clshdfb9s000608kzcwqr3jck",
          },
        },
      },
    },
    days: {
      create: [
        {
          weekday: WeekDays.Tuesday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 18, 0, 0, 0),
                end: new Date(2024, 0, 0, 19, 0, 0, 0),
                topics: [
                  Topics.DailyMeditation,
                  Topics.Steps,
                  Topics.Sponsorship,
                ],
                repeats: Repeats.Weekly,
              },
            ],
          },
        },
        {
          weekday: WeekDays.Thursday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 18, 0, 0, 0),
                end: new Date(2024, 0, 0, 19, 0, 0, 0),
                topics: [
                  Topics.DailyMeditation,
                  Topics.Service,
                  Topics.Traditions,
                ],
                repeats: Repeats.NotFirst,
              },
              {
                start: new Date(2024, 0, 0, 18, 0, 0, 0),
                end: new Date(2024, 0, 0, 19, 0, 0, 0),
                topics: [
                  Topics.DailyMeditation,
                  Topics.Service,
                  Topics.Traditions,
                  Topics.Open,
                ],
                repeats: Repeats.First,
              },
            ],
          },
        },
        {
          weekday: WeekDays.Saturday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 18, 0, 0, 0),
                end: new Date(2024, 0, 0, 19, 0, 0, 0),
                topics: [Topics.Work],
                repeats: Repeats.Last,
              },
              {
                start: new Date(2024, 0, 0, 19, 0, 0, 0),
                end: new Date(2024, 0, 0, 20, 0, 0, 0),
                topics: [Topics.DailyMeditation, Topics.QA, Topics.LivingClean],
                repeats: Repeats.Weekly,
              },
            ],
          },
        },
        {
          weekday: WeekDays.Sunday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 18, 0, 0, 0),
                end: new Date(2024, 0, 0, 19, 0, 0, 0),
                topics: [Topics.Theme],
                repeats: Repeats.Weekly,
              },
            ],
          },
        },
      ],
    },
  },
  {
    name: "Преображение",
    address: {
      create: {
        city: "Гродно",
        state: States.Grodnenskaya,
        street: "ул. Зана, 12",
        comments:
          "Средний подъезд, цокольный этаж, группа проходит вживую и в Zoom https://us04web.zoom.us/j/9159154444",
        location: {
          connect: {
            id: "clshdffqj000708kz1rhn6jwd",
          },
        },
      },
    },
    days: {
      create: [
        {
          weekday: WeekDays.Monday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 18, 0, 0, 0),
                end: new Date(2024, 0, 0, 19, 15, 0, 0),
                topics: [Topics.Theme, Topics.Zoom],
                repeats: Repeats.Weekly,
              },
            ],
          },
        },
        {
          weekday: WeekDays.Tuesday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 18, 0, 0, 0),
                end: new Date(2024, 0, 0, 19, 15, 0, 0),
                topics: [Topics.Theme, Topics.Zoom],
                repeats: Repeats.Weekly,
              },
            ],
          },
        },
        {
          weekday: WeekDays.Wednesday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 18, 0, 0, 0),
                end: new Date(2024, 0, 0, 19, 15, 0, 0),
                topics: [Topics.Theme, Topics.Zoom],
                repeats: Repeats.Weekly,
              },
            ],
          },
        },
        {
          weekday: WeekDays.Thursday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 18, 0, 0, 0),
                end: new Date(2024, 0, 0, 19, 15, 0, 0),
                topics: [Topics.Open, Topics.Zoom],
                repeats: Repeats.Weekly,
              },
            ],
          },
        },
        {
          weekday: WeekDays.Friday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 18, 0, 0, 0),
                end: new Date(2024, 0, 0, 19, 15, 0, 0),
                topics: [Topics.Theme, Topics.Zoom],
                repeats: Repeats.Weekly,
              },
            ],
          },
        },
        {
          weekday: WeekDays.Saturday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 18, 0, 0, 0),
                end: new Date(2024, 0, 0, 19, 15, 0, 0),
                topics: [Topics.Theme, Topics.Zoom],
                repeats: Repeats.Weekly,
              },
            ],
          },
        },
        {
          weekday: WeekDays.Sunday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 11, 0, 0, 0),
                end: new Date(2024, 0, 0, 12, 15, 0, 0),
                topics: [Topics.Speaker],
                repeats: Repeats.Weekly,
              },
              {
                start: new Date(2024, 0, 0, 18, 0, 0, 0),
                end: new Date(2024, 0, 0, 19, 15, 0, 0),
                topics: [Topics.Theme],
                repeats: Repeats.Weekly,
              },
            ],
          },
        },
      ],
    },
  },
  {
    name: "Маяк",
    address: {
      create: {
        city: "Дзержинск",
        state: States.Minskaya,
        street: "ул. Якуба Коласа, дом 23 А",
        photoUrls: ["dzerginsk-1.jpeg", "dzerginsk-2.jpeg"],
        location: {
          connect: {
            id: "clshdffqj000708kz1rhn6j0d",
          },
        },
      },
    },
    days: {
      create: [
        {
          weekday: WeekDays.Monday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 18, 15, 0, 0),
                end: new Date(2024, 0, 0, 19, 15, 0, 0),
                topics: [Topics.Theme],
                repeats: Repeats.Weekly,
              },
            ],
          },
        },
        {
          weekday: WeekDays.Wednesday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 18, 15, 0, 0),
                end: new Date(2024, 0, 0, 19, 15, 0, 0),
                topics: [Topics.Theme],
                repeats: Repeats.Weekly,
              },
              {
                start: new Date(2024, 0, 0, 19, 15, 0, 0),
                end: new Date(2024, 0, 0, 20, 15, 0, 0),
                topics: [Topics.Work],
                repeats: Repeats.Last,
              },
            ],
          },
        },
      ],
    },
  },
  {
    name: "Локация",
    address: {
      create: {
        city: "Жодино",
        state: States.Minskaya,
        street: "проспект Венисье",
        comments: "Костел Богоматери Фатимской",
        location: {
          connect: {
            id: "clshdfk6h000808kzaih3cyso",
          },
        },
      },
    },
    days: {
      create: [
        {
          weekday: WeekDays.Wednesday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 18, 45, 0, 0),
                end: new Date(2024, 0, 0, 19, 45, 0, 0),
                topics: [Topics.Theme],
                repeats: Repeats.Weekly,
              },
            ],
          },
        },
        {
          weekday: WeekDays.Sunday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 18, 30, 0, 0),
                end: new Date(2024, 0, 0, 19, 30, 0, 0),
                topics: [Topics.Open],
                repeats: Repeats.Weekly,
              },
              {
                start: new Date(2024, 0, 0, 19, 30, 0, 0),
                end: new Date(2024, 0, 0, 20, 30, 0, 0),
                topics: [Topics.Work],
                repeats: Repeats.Last,
              },
            ],
          },
        },
      ],
    },
  },
  {
    name: "Взлетка",
    address: {
      create: {
        city: "Могилев",
        state: States.Mogilevskaya,
        street: "ул. Первомайская, 75",
        photoUrls: ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg"],
        comments:
          "Здание часовни, 2-й этаж, актовый зал.Собрания проходят в часовне при Храме Трех святителей. Вход в пластиковую дверь под лестницей, затем деревянная дверь с кодом налево, воспользуйтесь звонком. 2-й этаж, актовый зал. Звоните предварительно, мы встретим Вас!",
        location: {
          connect: {
            id: "clshdfou2000908kz67k6e2ft",
          },
        },
      },
    },
    days: {
      create: [
        {
          weekday: WeekDays.Wednesday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 18, 30, 0, 0),
                end: new Date(2024, 0, 0, 19, 45, 0, 0),
                topics: [Topics.Free],
                repeats: Repeats.Weekly,
              },
            ],
          },
        },
        {
          weekday: WeekDays.Friday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 18, 30, 0, 0),
                end: new Date(2024, 0, 0, 19, 45, 0, 0),
                topics: [Topics.Free],
                repeats: Repeats.Weekly,
              },
            ],
          },
        },
        {
          weekday: WeekDays.Sunday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 16, 30, 0, 0),
                end: new Date(2024, 0, 0, 17, 45, 0, 0),
                topics: [Topics.Speaker, Topics.Theme],
                repeats: Repeats.Weekly,
              },
            ],
          },
        },
      ],
    },
  },
  {
    name: "Катарсис",
    address: {
      create: {
        city: "Слуцк",
        state: States.Minskaya,
        street: "ул. Монахова, 23",
        comments: "Вход правее главного входа в здание. Отдельная дверь",
        location: {
          connect: {
            id: "clshdfswf000a08kz9q9tagv4",
          },
        },
      },
    },
    days: {
      create: [
        {
          weekday: WeekDays.Monday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 19, 0, 0, 0),
                end: new Date(2024, 0, 0, 20, 15, 0, 0),
                topics: [Topics.Theme],
                repeats: Repeats.Weekly,
              },
            ],
          },
        },
        {
          weekday: WeekDays.Friday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 19, 0, 0, 0),
                end: new Date(2024, 0, 0, 20, 15, 0, 0),
                topics: [Topics.Theme],
                repeats: Repeats.NotFirst,
              },
              {
                start: new Date(2024, 0, 0, 19, 0, 0, 0),
                end: new Date(2024, 0, 0, 20, 15, 0, 0),
                topics: [Topics.Theme, Topics.Open],
                repeats: Repeats.First,
              },
              {
                start: new Date(2024, 0, 0, 20, 30, 0, 0),
                end: new Date(2024, 0, 0, 21, 30, 0, 0),
                topics: [Topics.Work],
                repeats: Repeats.Last,
              },
            ],
          },
        },
      ],
    },
  },
  {
    name: "Надежда",
    address: {
      create: {
        city: "Солигорск",
        state: States.Minskaya,
        street: "ул. Л. Комсомола, 74",
        comments: "4-й подъезд, цокольный этаж",
        photoUrls: [
          "soligorsk_n_1.jpg",
          "soligorsk_n_2.jpg",
          "soligorsk_n_3.jpg",
          "soligorsk_n_4.jpg",
        ],
        location: {
          connect: {
            id: "clshdfwos000b08kzbp7u4ub4",
          },
        },
      },
    },
    days: {
      create: [
        {
          weekday: WeekDays.Monday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 19, 0, 0, 0),
                end: new Date(2024, 0, 0, 20, 15, 0, 0),
                topics: [Topics.Steps],
                repeats: Repeats.Weekly,
              },
            ],
          },
        },
        {
          weekday: WeekDays.Tuesday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 19, 0, 0, 0),
                end: new Date(2024, 0, 0, 20, 15, 0, 0),
                topics: [Topics.Service],
                repeats: Repeats.Weekly,
              },
              {
                start: new Date(2024, 0, 0, 20, 0, 0, 0),
                end: new Date(2024, 0, 0, 21, 0, 0, 0),
                topics: [Topics.Work],
                repeats: Repeats.Odd,
              },
            ],
          },
        },
        {
          weekday: WeekDays.Wednesday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 19, 0, 0, 0),
                end: new Date(2024, 0, 0, 20, 15, 0, 0),
                topics: [Topics.Traditions],
                repeats: Repeats.Weekly,
              },
            ],
          },
        },
        {
          weekday: WeekDays.Thursday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 19, 0, 0, 0),
                end: new Date(2024, 0, 0, 20, 15, 0, 0),
                topics: [Topics.LivingClean],
                repeats: Repeats.Even,
              },
              {
                start: new Date(2024, 0, 0, 19, 0, 0, 0),
                end: new Date(2024, 0, 0, 20, 15, 0, 0),
                topics: [Topics.LivingClean, Topics.Open],
                repeats: Repeats.Odd,
              },
            ],
          },
        },
        {
          weekday: WeekDays.Friday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 19, 0, 0, 0),
                end: new Date(2024, 0, 0, 20, 15, 0, 0),
                topics: [Topics.Sponsorship],
                repeats: Repeats.Weekly,
              },
            ],
          },
        },
        {
          weekday: WeekDays.Saturday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 19, 0, 0, 0),
                end: new Date(2024, 0, 0, 20, 15, 0, 0),
                topics: [Topics.Speaker],
                repeats: Repeats.Weekly,
              },
            ],
          },
        },
        {
          weekday: WeekDays.Sunday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 19, 0, 0, 0),
                end: new Date(2024, 0, 0, 20, 15, 0, 0),
                topics: [Topics.QA],
                repeats: Repeats.Weekly,
              },
            ],
          },
        },
      ],
    },
  },
];

// https://www.prisma.io/docs/orm/prisma-client/queries/raw-database-access/custom-and-type-safe-queries

// const prisma = new PrismaClient({
//   log: ["error", "query", "info", "warn"],
// }).$extends({
//   model: {
//     location: {
//       async create(data: {
//         id: string;
//         name: string;
//         latitude: number;
//         longitude: number;
//       }) {
//         const loc: Location = {
//           id: data.id,
//           name: data.name,
//           coords: {
//             latitude: data.latitude,
//             longitude: data.longitude,
//           },
//         };
//         const point = `POINT(${loc.coords.latitude} ${loc.coords.longitude})`;
//         await prisma.$queryRaw`
//           INSERT INTO "Location" (id, name, coords) VALUES (${loc.id}, ${loc.name}, ST_GeomFromText(${point}, 4326));
//         `;
//         return loc;
//       },
//     },
//   },
// });
// async function seedLocation(locations: SeedLocationData[]) {
//   for (const seedElement of locations) {
//     try {
//       const result = await prisma.location.create(seedElement);
//       console.log("Created group: ", result);
//     } catch (error) {
//       console.error("Error creating group: ", error);
//     }
//   }
// }
// (async () => {
//   console.log("Seeding locations...");
//   await seedLocation(locations);
// })();

const prisma = new PrismaClient({
  log: ["error", "query", "info", "warn"],
});
async function createGroup(data: Prisma.GroupCreateInput) {
  return prisma.group.create({ data });
}
async function seedGroups(groupsData: Prisma.GroupCreateInput[]) {
  for (const seedElement of groupsData) {
    try {
      const result = await createGroup(seedElement);
      console.log("Created group: ", result);
    } catch (error) {
      console.error("Error creating group: ", error);
    }
  }
}
(async () => {
  console.log("Seeding groups...");
  await seedGroups(groupsData);
})();
