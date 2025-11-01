"use client";
import React, { useState } from "react";
type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const Button = () => {
  const [data, setData] = useState<Post[]>([]);
  const handleClick = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json: Post[] = await res.json();
    setData(json);
  };
  return (
    <div className="flex flex-col items-center gap-4 w-full px-4">
      <button
        type="button"
        onClick={handleClick}
        className="bg-blue-500 text-white px-6 py-3 rounded"
      >
        Fetch Data
      </button>
      <div className="mt-4 max-h-96 overflow-y-auto w-full">
        {data.map((item) => (
          <div
            key={item.id}
            className="border p-3 mb-2 rounded shadow-sm bg-gray-50"
          >
            <h3 className="font-bold">{item.title}</h3>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Button;
