"use client";

import type { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FileCheck2Icon } from "lucide-react";
import { useForm } from "react-hook-form";

import type { RouterOutputs } from "@acme/api";
import { States, StatesRU } from "@acme/utils";

import { Button } from "@/components/ui/button";
import { Dropzone } from "@/components/ui/dropzone";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { basicGroupSchema } from "@/lib/validators";

export function SingleGroupDaysAndMeetings({
  data,
  id,
}: {
  data: RouterOutputs["group"]["byId"][number]["days"];
  id: string;
}) {
  const form = useForm<z.infer<typeof basicGroupSchema>>({
    // !! TODO: add messages
    resolver: zodResolver(basicGroupSchema),
    defaultValues: {
      // !! TODO: also displaying in a simple mapbox component
    },
    shouldFocusError: true,
    shouldUnregister: false,
    shouldUseNativeValidation: false,
  });
  function onSubmit(values: z.infer<typeof basicGroupSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="min-w-full space-y-8"
      >
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
