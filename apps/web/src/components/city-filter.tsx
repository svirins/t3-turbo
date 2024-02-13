"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function CityFilter({ cities }: { cities: string[] }) {
  const searchParams = useSearchParams();
  const selectedCity = searchParams.get("city")?.toString() ?? "Вся Беларусь";
  const pathname = usePathname();
  const { replace } = useRouter();

  const options = cities.sort((a, b) => a.localeCompare(b));

  function handleSearch(city: string) {
    const params = new URLSearchParams(searchParams);
    if (city && city !== "Вся Беларусь") {
      params.set("city", city);
    } else {
      params.delete("city");
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <form className="basis-1/2">
      <select
        className="select select-sm max-w-xs"
        name="citySelector"
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      >
        <option disabled selected>
          Выберите город
        </option>
        <option value="Вся Беларусь" selected={selectedCity === "Вся Беларусь"}>
          Вся Беларусь
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
