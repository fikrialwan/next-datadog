import { ItemType } from "~/lib/interface/index.interface";
import { getAllData } from "~/lib/service/dummy";
import { ButtonLog } from "./_component/button-log";

export default async function Home() {
  const data: ItemType[] = await getAllData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <ButtonLog item={item}>{item.title}</ButtonLog>
          </li>
        ))}
      </ul>
    </main>
  );
}
