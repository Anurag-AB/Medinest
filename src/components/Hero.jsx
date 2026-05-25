const Hero = () => {

  const scrollToProducts = () => {

    const section =
      document.getElementById("products");

    section.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-gradient-to-r from-teal-500 to-teal-600 text-white">

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-20 grid md:grid-cols-2 gap-10 items-center">

        <div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">

            Your Health,
            <br />
            Our Priority

          </h1>

          <p className="mt-5 text-sm md:text-lg text-teal-50 leading-7">

            Order medicines, healthcare products,
            and wellness essentials online.

          </p>

          <button
            onClick={scrollToProducts}
            className="mt-8 bg-white text-teal-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
          >
            Shop Now
          </button>

        </div>

        <div>

          <img
            src="https://images.unsplash.com/photo-1580281657527-47f249e8f4df"
            alt="Healthcare"
            className="rounded-3xl shadow-xl w-full h-[250px] md:h-[500px] object-cover"
          />

        </div>

      </div>

    </section>
  );
};

export default Hero;