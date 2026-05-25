import medicines from "../data/medicines";
import ProductCard from "./ProductCard";

const Products = ({
  selectedCategory,
  searchTerm,
  addToCart,
}) => {

  const filteredProducts = medicines.filter((item) => {

    const matchesCategory =
      selectedCategory === "All"
        ? true
        : item.category === selectedCategory;

    const matchesSearch =
      searchTerm.trim() === ""
        ? true
        : item.name.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section
      id="products"
      className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-16"
    >

      <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">

        {searchTerm.trim()
          ? `Search Results for "${searchTerm}"`
          : `${selectedCategory} Products`
        }

      </h2>

      {filteredProducts.length > 0 ? (

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">

          {filteredProducts.map((item) => (
            <ProductCard
              key={item.id}
              item={item}
              addToCart={addToCart}
            />
          ))}

        </div>

      ) : (

        <div className="text-center text-gray-500 text-lg md:text-xl">
          No medicines found
        </div>

      )}

    </section>
  );
};

export default Products;