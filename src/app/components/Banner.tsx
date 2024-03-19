import Link from "next/link";

export default function Banner() {
  return (
    <section className="">
      <div className="container mx-auto">
        <div className="py-12 text-center">
          <div className="mb-16">
            <h1 className="text-6xl font-black flex items-center flex-col gap-4 ">
              <span>Welcome</span> to my Ecommerce Platform
            </h1>
          </div>
          <Link
            className="text-white bg-green-600 px-4 py-3 rounded text-base hover:bg-green-800"
            href="/categories"
          >
            View all Categories
          </Link>
        </div>
      </div>
    </section>
  );
}
