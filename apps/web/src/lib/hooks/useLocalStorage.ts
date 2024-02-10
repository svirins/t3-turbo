// import { useState } from "react";
"use client";

import { produce } from "immer";

export const useMySchedule = (value?: string) => {
  if (typeof window === "undefined" || !window.localStorage) {
    return undefined;
  }
  // const myMeetings = [
  //   "clsbxifc3001r23kmcwdkegyn",
  //   "clsbxihdf002c23kmilkvijcw",
  //   "clsbxib6y001523kmttnpom3p",
  //   "clsbxib6y001323kmu9y9maay",
  //   "clsbxi83a000c23kmlvcga92g",
  // ];
  // const myMeetingsParsed = JSON.stringify(myMeetings);
  // window.localStorage.setItem("myGroupsSchedule", myMeetingsParsed);
  const storedValues = window.localStorage.getItem("myGroupsSchedule");
  const parsedValues = storedValues
    ? (JSON.parse(storedValues) as string[])
    : null;
  return parsedValues;
  // if (value) {
  //   if (storedValues === value) {
  //     window.localStorage.removeItem("homeGroupId");
  //     return undefined;
  //   }
  //   window.localStorage.setItem("myGroupSchedule", [value]);
  //   return value;
  // }
};
//   // const [state, setState] = useState(() => {
//   //   try {
//   //     const value = window.localStorage.getItem("homeGroupId");
//   //     return value ?? initialValue;
//   //   } catch (error) {
//   //     console.log(error);
//   //   }
//   // });
//   // const setValue = (value: string) => {
//   //   try {
//   //     window.localStorage.setItem("homeGroupId", value);
//   //     setState(value);
//   //   } catch (error) {
//   //     console.log(error);
//   //   }
//   // };
//   // return [state, setValue];
// };
