import React from "react";
import NumberFormat from "react-number-format";
import { baseUrl } from "../../constant/baseUrl";

function TransactionDetailItem({ data }) {
  return (
    <div className="flex flex-row justify-between items-center border border-gray-200 py-2 px-2 rounded-md mb-5">
      <div className="flex flex-row">
        <img
          alt="product photo"
          src={`${baseUrl}/storage/images/product/${data?.product?.images[0]?.imageName}`}
          className="w-20 h-20"
        />
        <div className="flex flex-col ml-5">
          <span className="text-gray-900 text-md font-semibold">
            {data?.product.name}
          </span>
          <span className="text-sm text-gray-400">
            {data?.quantity} x{" "}
            {
              <NumberFormat
                value={data?.product.price}
                prefix="Rp"
                displayType={"text"}
                thousandSeparator={true}
              />
            }
          </span>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <span>Total Harga</span>
        <span className="font-semibold">
          {
            <NumberFormat
              value={data?.amount}
              prefix="Rp"
              displayType={"text"}
              thousandSeparator={true}
            />
          }
        </span>
      </div>
    </div>
  );
}

export default TransactionDetailItem;
