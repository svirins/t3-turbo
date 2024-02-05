import { MapDisplay } from "~/components/map-display";
import { api } from "~/trpc/server";

// export const runtime = "edge";

export default async function HomePage() {
  // You can await this here if you don't want to show Suspense fallback below
  const locations = await api.location.closest({
    latitude: 53.9045185,
    longitude: 27.596258,
  });

  return (
    <main className="container h-screen">
      <MapDisplay locations={locations} />
    </main>
  );
}
