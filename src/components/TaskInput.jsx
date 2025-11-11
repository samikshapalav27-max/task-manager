import { useState } from "react";

export default function TaskInput({ addTask }) {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    addTask(input);
    setInput("");
  };

  return (
    <div className="flex w-full max-w-md mb-6">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
        className="flex-1 p-3 rounded-l-xl bg-gray-800 border border-gray-700 focus:outline-none"
        placeholder="Add a new task..."
      />
      <button
        onClick={handleAdd}
        className="px-5 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-r-xl transition"
      >
        Add
      </button>
    </div>
  );
}
