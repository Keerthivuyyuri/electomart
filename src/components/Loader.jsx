function Loader() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className="skeleton h-96 rounded-3xl bg-slate-200 dark:bg-white/10"
        />
      ))}
    </div>
  );
}

export default Loader;