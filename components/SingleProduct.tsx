"use client";

import Image from "next/image";

const SingleProduct = ({ product }: any) => {
  return (
    <div>
      <div>
        <Image
          src={product?.image}
          alt="product image"
          width={500}
          height={500}
          className="w-full max-h-[700px] object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default SingleProduct;
