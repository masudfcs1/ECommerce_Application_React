import ProductCard from "./ProductCard";

const data = [
  { id: 0, img: "product__1.webp", name: "Fresh Tomato", price: "$400" },
  { id: 1, img: "category__1.webp", name: "Crunchy Crisps", price: "$300" },
  { id: 2, img: "product__3.webp", name: "Jewel Cranberries", price: "$200" },
  { id: 3, img: "product__4.webp", name: "Almond organic", price: "$100" },
];
const FeatureSectionFruits = () => {
  return (
    <div className=" container pt-16">
      <div className=" lg:flex justify-between items-center">
        <div>
          <h3 className=" text-2xl font-medium">Fruits & Vegetables</h3>
          <p className=" text-gray-600 mt-2">
            Buy farm fresh fruits and vegetables online at the best prices
          </p>
        </div>
        <div className=" spax4 mt-8 lg:mt-0 space-x-4">
          <button className=" bg-green-600 px-5 py-1 text-white font-medium hover:bg-green-700 rounded-lg">
            Fruits
          </button>
          <button className=" text-gray-600 hover:text-accent">
            Vegetables
          </button>
          <button className=" text-gray-600 hover:text-accent">
            Bread & Bakery
          </button>
        </div>
      </div>

      <div className=" grid sm:grid-cols-2 lg:grid-cols-5 md:grid-cols-4 pt-8 gap-2 cursor-pointer">
        <div>
          <img
            src="/feature__1.webp"
            className=" w-full h-full object-cover"
            alt=""
          />{" "}
        </div>
        {data.map((item) => (
          <ProductCard
            key={item.id}
            img={item.img}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default FeatureSectionFruits;
