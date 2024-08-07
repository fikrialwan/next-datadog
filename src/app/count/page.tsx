"use client";

import { useState } from "react";

export default function CountPage() {
  const [count, setCount] = useState<number>(0);

  return (
    <main className="flex flex-col gap-10">
      <div className="flex flex-row gap-5">
        <button
          className="bg-white text-black rounded py-2 px-5"
          onClick={() => setCount((prev) => prev - 1)}
        >
          -
        </button>
        <p className="bg-white text-black rounded py-2 px-5">{count}</p>
        <button
          className="bg-white text-black rounded py-2 px-5"
          onClick={() => setCount((prev) => prev + 1)}
        >
          +
        </button>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          const formData = new FormData(e.currentTarget);
          setCount(parseInt(formData.get("count") as string));
        }}
        className="flex flex-row gap-5"
      >
        <input
          type="number"
          placeholder="update count"
          name="count"
          className="bg-white text-black rounded py-2 px-5"
        />
        <button type="submit" className="bg-white text-black rounded py-2 px-5">
          submit
        </button>
      </form>
    </main>
  );
}
