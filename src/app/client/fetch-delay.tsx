"use cliente";

import { useEffect, useState } from "react";
import { getAllDataWithDelay } from "~/lib/service/dummy";

export default function FetchDelayPage() {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    getAllDataWithDelay().then((res) => {
      setData(res);
      setLoading(false);
    });
  }, []);

  if (loading) return <main>loading...</main>;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}
