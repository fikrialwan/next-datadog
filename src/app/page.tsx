import { getAllData } from "~/lib/service/dummy";

export default async function Home() {
  const data = await getAllData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}
