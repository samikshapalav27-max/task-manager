export default function TaskList({ tasks, toggleTask, deleteTask }) {
  if (tasks.length === 0)
    return <p className="text-gray-500 text-center">No tasks yet! 🌱</p>;

  return (
    <div className="w-full max-w-md bg-black/40 rounded-2xl p-6 border border-gray-800 shadow-lg">
      <ul className="space-y-3">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`flex justify-between items-center p-3 rounded-xl border ${
              task.done ? "bg-gray-800 border-gray-700" : "border-gray-700"
            }`}
          >
            <span
              onClick={() => toggleTask(task.id)}
              className={`flex-1 cursor-pointer ${
                task.done
                  ? "line-through text-gray-500"
                  : "text-gray-200 hover:text-cyan-400"
              }`}
            >
              {task.text}
            </span>
            <button
              onClick={() => deleteTask(task.id)}
              className="text-red-400 hover:text-red-300 ml-3 text-sm"
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
