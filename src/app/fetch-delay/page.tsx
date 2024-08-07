import { getAllDataWithDelay } from "~/lib/service/dummy";

export default async function FetchDelay() {
  const data = await getAllDataWithDelay();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <pre>{JSON.stringify(data)}</pre>
    </main>
  );
}
