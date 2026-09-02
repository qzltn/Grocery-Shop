

const Header = () => {
  return (
    <header
      className="
        relative
        mx-3
        min-h-[590px]
        overflow-hidden
        rounded-2xl
        bg-[url('/hero_bg-iD2fuyEl.jpeg')]
        bg-cover
        bg-center
        bg-no-repeat
        px-5
        py-6
        sm:min-h-[600px]
        lg:min-h-[650px]
      "
    >
      {}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>

      {}
      <div className="relative z-10 flex flex-col items-start pt-36">
        
        {}
        <span
          className="
            flex
            items-center
            gap-2
            rounded-full
            border
            border-white/30
            bg-white/20
            px-4
            py-2
            text-sm
            font-semibold
            text-orange-200
            backdrop-blur-md
          "
        >
          <span>🌿</span>
          Farm-Fresh & Organic
        </span>

        {/* Title */}
        <h1
          className="
            mt-6
            max-w-md
            text-3xl
            font-bold
            leading-tight
            text-white
            sm:text-4xl
            lg:text-5xl
          "
        >
          Nourish your home with{" "}
          <span className="text-orange-300">
            Earth's finest
          </span>
        </h1>

        {}
        <p
          className="
            mt-4
            max-w-md
            text-sm
            leading-6
            text-white/80
            sm:text-base
          "
        >
          Fresh, organic groceries delivered from local farms
          to your doorstep. Quality you can taste,
          convenience you deserve.
        </p>
{}
        <div className="mt-6 flex flex-wrap gap-3">
          <button
            className="
              rounded-full
              bg-orange-400
              px-5
              py-3
              font-semibold
              text-white
              transition
              hover:bg-orange-500
            "
          >
            Shop Now
          </button>

          <button
            className="
              rounded-full
              border
              border-white/30
              bg-white/20
              px-5
              py-3
              font-semibold
              text-white
              backdrop-blur-md
              transition
              hover:bg-white/30
            "
          >
            Browse Categories
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;