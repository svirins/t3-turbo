import Link from "next/link";

export default function NotFound() {
  return (
    <div className="pb-24">
    <div className="card bg-base-200 shadow-2xl">
      <div className="card-body p-12  pt-18">
        <div className="max-w-md">
          <h1 className="pb-4 text-7xl font-bold">🤷‍♀️</h1>
          <h1 className="text-5xl font-bold">Такой страницы нет</h1>
          <p className="py-6">Но, есть другие. Например, вот эта:</p>
          <Link href="/" className="btn btn-primary">
            Все группы
          </Link>
        </div>
      </div>
      </div>
      </div>
  );
}
