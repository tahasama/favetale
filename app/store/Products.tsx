import Link from "next/link";
import ProductModal from "./ProductModal";
import ProductCard from "./ProductCard";
import { getProductsData } from "../api/GerData";

const Products = async () => {
  // const discountProducts = [
  //   {
  //     id: 7,
  //     name: "Cat Scratching Post",
  //     images: [scratch.src, cage.src],
  //     price: 24.99,
  //     discount: 30,
  //     rating: [1, 12, 14, 16, 125, 128],
  //     description:
  //       "A perfect scratching post for your furry friend.A perfect scratching post for your furry friend.A perfect scratching post for your furry friend.A perfect scratching post for your furry friend.A perfect scratching post for your furry friend.A perfect scratching post for your furry friend.A perfect scratching post for your furry friend.A perfect scratching post for your furry friend.A perfect scratching post for your furry friend.A perfect scratching post for your furry friend.",
  //     reviews: [
  //       {
  //         id: 1,
  //         name: "Alice",
  //         date: "2023-08-28",
  //         text: "Good scratching post for my cat!",
  //       },
  //       {
  //         id: 2,
  //         name: "Bob",
  //         date: "2023-08-27",
  //         text: "Okay product, my cat uses it sometimes.",
  //       },
  //       {
  //         id: 3,
  //         name: "Charlie",
  //         date: "2023-08-26",
  //         text: "Nice design and sturdy build.",
  //       },
  //     ],
  //     quantity: 1,
  //   },
  //   {
  //     id: 8,
  //     name: "Small Animal Cage",
  //     images: [cage.src],
  //     price: 39.99,
  //     discount: 25,
  //     rating: [12, 22, 24, 26, 135, 138],
  //     description: "Spacious and comfortable cage for your small pet.",
  //     reviews: [
  //       {
  //         id: 1,
  //         name: "Eve",
  //         date: "2023-08-28",
  //         text: "Wow, this cage is spacious!",
  //       },
  //       {
  //         id: 2,
  //         name: "Frank",
  //         date: "2023-08-27",
  //         text: "Haha, my small animal loves it!",
  //       },
  //       {
  //         id: 3,
  //         name: "Grace",
  //         date: "2023-08-26",
  //         text: "Lol, it's easy to clean.",
  //       },
  //     ],
  //     quantity: 1,
  //   },
  //   {
  //     id: 9,
  //     name: "Squirrel Feeder",
  //     images: [feeder.src],
  //     price: 7.99,
  //     discount: 15,
  //     rating: [15, 25, 25, 25, 155, 158],
  //     description: "Attract squirrels with this high-quality feeder.",
  //     reviews: [
  //       {
  //         id: 1,
  //         name: "Harry",
  //         date: "2023-08-28",
  //         text: "Nah, squirrels don't seem interested.",
  //       },
  //       {
  //         id: 2,
  //         name: "Ivy",
  //         date: "2023-08-27",
  //         text: "Maybe it depends on the location?",
  //       },
  //       {
  //         id: 3,
  //         name: "Jack",
  //         date: "2023-08-26",
  //         text: "Yeah, it's a good value for the price.",
  //       },
  //     ],
  //     quantity: 1,
  //   },
  // ];
  const productsData = await getProductsData();

  return (
    <section className="py-10 ">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Featured Products
        </h2>

        <div className="flex flex-wrap flex-col items-center justify-center mt-12 mb-6">
          <div className="bg-teal-500 h-1 w-40 ml-2 mb-3"></div>
          <h3 className="text-lg font-semibold text-gray-700">Best Offers</h3>
          <div className="bg-teal-500 h-1 w-40 ml-2 mt-3"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10 lg:gap-6 text-start">
          {productsData
            .filter((product: any) => product.discount !== 0)
            .slice(0, 3)
            .map((product, index) => (
              <div>
                <ProductCard
                  key={index}
                  product={product}
                  isTrending={false}
                  discounted={true}
                />
              </div>
            ))}
        </div>
        <ProductModal />
        <div className="mt-8 flex items-center justify-center">
          <Link
            href="/store/Allproduct"
            className="hover:animate-bounceQ p-4 bg-gradient-to-r from-indigo-500 to-indigo-300 rounded-md transition-all duration-1000 cursor-pointer"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
