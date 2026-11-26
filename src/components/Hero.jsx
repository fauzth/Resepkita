import SearchBar from "./SearchBar";

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden rounded-2xl bg-primary">
      {/* Hero Image */}
      <div className="absolute inset-y-0 right-0 -z-10 hidden md:block w-[65%] overflow-hidden mask-[linear-gradient(to_right,transparent_0%,transparent_10%,black_65%)] ">
        <img
          src="/nasigoreng.webp"
          alt="Nasi Goreng"
          className="h-full w-full object-cover object-center scale-125 translate-x-[20%]"
        />
      </div>

      {/* Hero Content */}
      <div className="flex w-full min-w-0 flex-col items-start justify-center px-5 py-8 md:min-h-80 md:w-[55%] md:px-8 lg:px-12">
        <h1 className=" max-w-xl font-bold leading-tight text-left text-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl ">
          Temukan Resep Makanan Favoritmu!
        </h1>

        <p className="w-full max-w-md py-4 text-left lg:py-6 text-sm sm:text-base lg:text-lg font-light leading-relaxed text-body ">
          Kumpulan resep praktis, lezat, dan mudah diikuti untuk berbagai
          kesempatan.
        </p>

        <div className="w-full min-w-0">
          <SearchBar />
        </div>
      </div>
    </div>
  );
}
