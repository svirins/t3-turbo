import { MapDisplay } from "~/components/map-display";
import { api } from "~/trpc/server";

// export const runtime = "edge";

export default async function HomePage() {
  // TODO: consider, how we can  get user location here and pass it to api call
  // !! get it from localstore from localstore, if no data is stored - get it from navigator.geolocation
  // TODO: implement useSearchparams and pass it to marker

  const point = {
    latitude: 52.12943112425682,
    longitude: 23.82905921152103,
  };
  // const point = {
  //   latitude: 53.8952733,
  //   longitude: 27.5510122,
  // }

  const locations = await api.location.closest(point);

  return (
    <main className="container h-screen">
      <MapDisplay locations={locations} />
    </main>
  );
}
