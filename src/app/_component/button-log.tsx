"use client";

import { datadogLogs } from "@datadog/browser-logs";
import { useRouter } from "next/navigation";
import { ItemType } from "~/lib/interface/index.interface";

interface ButtonLogProps {
  children: React.ReactNode;
  item: ItemType;
}

export const ButtonLog = ({ children, item }: ButtonLogProps) => {
  const router = useRouter();

  const handleClick = () => {
    datadogLogs.logger.info("Button clicked", item);
    router.push(`/detail/${item.id}`);
  };

  return (
    <button
      onClick={handleClick}
      className="bg-white p-2 rounded mb-2 text-black"
    >
      {children}
    </button>
  );
};
