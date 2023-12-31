"use client";

import Image from "next/image";
import { IoMdCart } from "react-icons/io";
import { MdFavoriteBorder } from "react-icons/md";

import FormattedPrice from "./FormattedPrice";

const SingleProduct = ({ product }: any) => {
  return (
    <div className="grid lg:grid-cols-2 gap-5 bg-white p-4 rounded-lg">
      <div>
        <Image
          src={product?.image}
          alt="product image"
          width={500}
          height={500}
          className="w-full max-h-[700px] object-cover rounded-lg"
        />
      </div>
      <div className="flex flex-col justify-center gap-y-10">
        <div>
          <p className="text-3xl font-semibold">{product?.title}</p>
          <p className="text-xl font-semibold">
            <FormattedPrice amount={product?.price} />
          </p>
        </div>
        <p className="text-lightText">{product?.description}</p>
        <div className="text-sm text-lightText flex flex-col">
          <span>
            SKU: <span className="text-darkText">{product?._id}</span>
          </span>
          <span>
            Category: <span className="text-darkText">{product?.category}</span>
          </span>
        </div>
        <div className="flex items-center cursor-pointer group">
          <button className="bg-darkText text-slate-100 px-6 py-3 text-sm uppercase flex items-center border-r-[1px] border-r-slate-500">
            Add to cart
          </button>
          <span
            className="bg-darkText text-xl text-slate-100 w-12 flex items-center justify-center 
                        group-hover:bg-orange-500 duration-200 py-3"
          >
            <IoMdCart />
          </span>
        </div>
        <p className="flex items-center gap-x-2 text-sm">
          <MdFavoriteBorder className="text-xl" /> Add to wishlist
        </p>
      </div>
    </div>
  );
};

export default SingleProduct;
