import { States, Topics, WeekDays } from "@acme/types";

import type { Prisma } from "../src/client";
import { prisma } from "../src/client";

async function createGroup(data: Prisma.GroupCreateInput) {
  return prisma.group.create({ data });
}

const groupsData = [
  {
    name: "Group 1",
    phone: "123-456-7890",
    email: "email@1.com",
    address: {
      create: {
        city: "City",
        state: States.Minskaya,
        street: "123 Street",
        room: "123",
        comments: "Some comments",
        lattitude: 123.123,
        longitude: 123.123,
        location: {
          create: {
            coords: {},
          },
        },
      },
    },
    days: {
      create: [
        {
          day: WeekDays.Monday,
          start: "12:00",
          end: "13:00",
          topic: Topics.Steps,
        },
        {
          day: WeekDays.Tuesday,
          start: "12:00",
          end: "13:00",
          topic: Topics.Traditions,
        },
        {
          day: WeekDays.Wednesday,
          start: "12:00",
          end: "13:00",
          topic: Topics.Steps,
        },
        {
          day: WeekDays.Thursday,
          start: "12:00",
          end: "13:00",
          topic: Topics.Steps,
        },
        {
          day: WeekDays.Friday,
          start: "12:00",
          end: "13:00",
          topic: Topics.Steps,
        },
        {
          day: WeekDays.Saturday,
          start: "10:00",
          end: "11:00",
          topic: Topics.Steps,
        },
        {
          day: WeekDays.Saturday,
          start: "16:00",
          end: "17:30",
          topic: Topics.Steps,
        },
        {
          day: WeekDays.Sunday,
          start: "12:00",
          end: "13:00",
          topic: Topics.Speaker,
        },
      ],
    },
  },
];

async function main() {
  for (const data of groupsData) {
    await createGroup(data);
  }
}

main();
