"use client";

import { submitErrorDataWithLog } from "~/lib/service/dummy";

export default function CountPage() {
  return (
    <main className="flex flex-col gap-10">
      <form
        onSubmit={async (e) => {
          e.preventDefault();

          const formData = new FormData(e.currentTarget);

          await submitErrorDataWithLog(formData.get("title") as string);
        }}
        className="flex flex-row gap-5"
      >
        <input
          type="text"
          placeholder="Type title here"
          name="title"
          className="bg-white text-black rounded py-2 px-5"
        />
        <button type="submit" className="bg-white text-black rounded py-2 px-5">
          submit
        </button>
      </form>
    </main>
  );
}
