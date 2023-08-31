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
    </div>
  );
};

export default FeatureSectionFruits;
