import React from "react";

interface propsType {
  size: string;
}

const CartCountBadge: React.FC<propsType> = ({ size }) => {
  return (
    <div
      className={`${size} absolute bg-red-600 text-white -right-3 -top-1 rounded-full grid text-[15px] place-items-center`}
    >
      3
    </div>
  );
};

export default CartCountBadge;
