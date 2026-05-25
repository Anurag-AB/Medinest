const categories = [
  "All",
  "Healthcare",
  "Diabetes",
  "Baby Care",
  "Personal Care",
  "Supplements",
  "Fitness",
];

const Categories = ({
  selectedCategory,
  setSelectedCategory,
}) => {

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-16">

      <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">
        Shop By Category
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 md:gap-4">

        {
          categories.map((item, index) => (

            <button
              key={index}
              onClick={() =>
                setSelectedCategory(item)
              }

              className={`
                rounded-xl md:rounded-2xl
                p-3 md:p-6
                text-center
                transition
                font-semibold
                shadow-md
                text-xs sm:text-sm md:text-base

                ${
                  selectedCategory === item
                    ? "bg-teal-500 text-white"
                    : "bg-white hover:bg-teal-500 hover:text-white"
                }
              `}
            >

              {item}

            </button>
          ))
        }

      </div>

    </section>
  );
};

export default Categories;