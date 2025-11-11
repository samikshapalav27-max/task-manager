export default function ProgressBar({ tasks }) {
  if (tasks.length === 0) return null;

  const completed = tasks.filter((t) => t.done).length;
  const percent = (completed / tasks.length) * 100;

  return (
    <div className="w-full max-w-md mt-6 text-center">
      <p className="text-gray-400 text-sm mb-2">
        Completed {completed} / {tasks.length} tasks
      </p>
      <div className="w-full bg-gray-800 rounded-full h-2">
        <div
          className="bg-cyan-400 h-2 rounded-full transition-all"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
}
