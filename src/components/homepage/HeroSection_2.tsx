// src/app/components/homepage/HeroSection.tsx
"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full bg-white py-10 px-4 md:px-16 lg:px-24 flex flex-col-reverse md:flex-row items-center gap-10">
      {/* Left Image */}
      <div className="w-full md:w-1/2 relative aspect-[3/2]">
        <Image
          src="/images/hero-03.jpg"
          alt="Interior Left"
          fill
          className="rounded-lg object-cover"
        />
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 relative aspect-[3/2]">
        <Image
          src="/images/hero-04.jpg"
          alt="Interior Right"
          fill
          className="rounded-lg object-cover"
        />
      </div>
    </section>
  );
}
