"use client";

import { datadogLogs } from "@datadog/browser-logs";
import { useEffect, useState } from "react";
import { getById } from "~/lib/service/dummy";

export default function DetailById({
  params: { id },
}: {
  params: { id: string };
}) {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<any>({});

  useEffect(() => {
    datadogLogs.logger.info("Open Detail Page", { id });
    getById(id).then((res) => {
      setData(res);
      datadogLogs.logger.info("Success Fetch Detail", res);
      setLoading(false);
    });
  }, [id]);

  if (loading) return <main>loading...</main>;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}
