"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function Filters({ cities }: { cities: string[] }) {
  const searchParams = useSearchParams();
  const selectedCity = searchParams.get("city")?.toString() ?? "Все";

  const pathname = usePathname();
  const { replace } = useRouter();
  const options = cities.sort((a, b) => a.localeCompare(b));
  options.unshift("Все");

  function handleSearch(city: string) {
    const params = new URLSearchParams(searchParams);
    if (city && city !== "Все") {
      params.set("city", city);
    } else {
      params.delete("city");
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <form className="flex w-full">
      <select
        className="select select-bordered"
        name="citySelector"
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      >
        <option disabled selected>
          Выберите город
        </option>
        {options.map((option) => (
          <option
            key={option}
            value={option}
            selected={option === selectedCity}
          >
            {option}
          </option>
        ))}
      </select>
    </form>
  );
}
