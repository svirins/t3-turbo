export function GroupSkeleton() {
  return (
    <div className="card bg-base-200 p-8 shadow-xl">
      <div className=" flex flex-col gap-4">
        <div className="skeleton h-4 w-20"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-8 w-full"></div>
        <div className="skeleton h-8 w-full"></div>
        <div className="skeleton h-8 w-full"></div>
      </div>
    </div>
  );
}
