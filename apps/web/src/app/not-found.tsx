import Link from "next/link";

export default function NotFound() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
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
  );
}
