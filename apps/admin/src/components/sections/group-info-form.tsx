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
import { api } from "@/trpc/react";

export function GroupInfoForm({ id }: { id: string }) {
  //   data,
  //   location,
  // }: {
  //   data: RouterOutputs["group"]["byId"];
  //   location: RouterOutputs["location"]["byId"];
  // }) {
  const form = useForm<z.infer<typeof basicGroupSchema>>({
    // !! TODO: add messages
    resolver: zodResolver(basicGroupSchema),
    defaultValues: {
      name: data?.name ?? "",
      city: data?.address?.city ?? "",
      state: data?.address?.state ?? States.Minskaya,
      street: data?.address?.street ?? "",
      comments: data?.address?.comments ?? "",
      photoUrls: data?.address?.photoUrls,
      lattitude: location?.coords?.latitude ?? 53,
      longitude: location?.coords?.longitude ?? 27,
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

  function handleOnDrop(acceptedFiles: FileList | null) {
    if (acceptedFiles && acceptedFiles.length > 0) {
      const allowedTypes = [
        {
          name: "images",
          types: ["image/png, image/jpeg"],
        },
      ];
      const fileType = allowedTypes.find((allowedType) =>
        allowedType.types.find((type) => type === acceptedFiles[0]?.type),
      );
      if (!fileType) {
        form.setValue("photoUrls", null);
        form.setError("photoUrls", {
          message: "File type is not valid",
          type: "typeError",
        });
      } else {
        form.setValue("photoUrls", acceptedFiles[0]);
        form.clearErrors("photoUrls");
      }
    } else {
      form.setValue("photoUrls", null);
      form.setError("photoUrls", {
        message: "File is required",
        type: "typeError",
      });
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="min-w-full space-y-8"
      >
        <div className="flex gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Название группы</FormLabel>
                <FormControl>
                  <Input placeholder="Название группы..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Город</FormLabel>
                <FormControl>
                  <Input placeholder="Город... " {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Область</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Область" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      {Object.values(States).map((option, index) => (
                        <SelectItem value={option} key={index}>
                          {StatesRU[option]}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="street"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Адрес</FormLabel>
                <FormControl>
                  <Input placeholder="Адрес... " {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex gap-4">
          <FormField
            control={form.control}
            name="comments"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Комментарии</FormLabel>
                <FormControl>
                  <Input placeholder="Комментарии... " {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lattitude"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Широта</FormLabel>
                <FormControl>
                  <Input placeholder="Широта... " {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="longitude"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Долгота</FormLabel>
                <FormControl>
                  <Input placeholder="Долгота... " {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex gap-4">
          <FormField
            control={form.control}
            name="photoUrls"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Dropzone
                    {...field}
                    dropMessage="Drop files or click here"
                    handleOnDrop={handleOnDrop}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {form.watch("photoUrls") && (
            <div className="relative flex items-center justify-center gap-3 p-4">
              <FileCheck2Icon className="w-4 h-4" />
              <p className="text-sm font-medium">{form.watch("photoUrls")}</p>
            </div>
          )}
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
