"use client";

import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-[#000000] text-white">
      <div>
        <p className="text-3xl md:text-4xl 2xl:text-6xl">
          <span className="text-red-500">404</span> page not found
        </p>

        <div className="flex items-center justify-center px-4 py-10 gap-8">
          <Link href="/">
            <button className="bg-[#181A1C] hove:bg-[#2C2132] hover:scale-110 px-4 py-1 rounded-full text-xl">
              Home
            </button>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="bg-[#181A1C] hove:bg-[#2C2132] hover:scale-110 px-4 py-1 rounded-full text-xl"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
