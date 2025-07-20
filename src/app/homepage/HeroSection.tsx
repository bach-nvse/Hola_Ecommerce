// src/app/components/homepage/HeroSection.tsx

export default function HeroSection() {
  return (
    <section className="w-full bg-white py-10 px-4 md:px-16 lg:px-24 flex flex-col-reverse md:flex-row items-center gap-10">
      {/* Left Image */}
      <div className="w-full md:w-1/2">
        <img
          src="/images/Hero-01.webp"
          alt="Interior"
          className="w-full h-auto rounded-lg object-cover"
        />
      </div>

      {/* Right Content */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <p className="text-sm tracking-widest uppercase text-gray-500 mb-2">
          Products for better living
        </p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Better floor,<br className="hidden md:block" />
          better future
        </h1>
        <p className="text-gray-600 mb-6">
          Sit amet dictum sit amet justo donec enim diam vulputate. Dolor morbi non arcu risus. Bibendum neque egestas.
        </p>
        <button className="px-6 py-3 border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition rounded">
          Book Appointment
        </button>
      </div>
    </section>
  );
}
