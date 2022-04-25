import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TransactionDetailModal from "./TransactionDetail";

function TransactionBody({ data }) {
    const [productName, setProductName] = useState();
    useEffect(() => {
        if (data?.transaction_item?.length >= 1) {
            const getProductName = data?.transaction_item?.reduce((acc, value) => {
               return acc + "," + value?.product?.name 
            }, '');
            
            setProductName(getProductName);
        }
    
    }, [data]);
  return (
    <div className="flex flex-row w-full py-10 border-b border-gray-200">
      <div className="w-1/3">
        <span className=" text-md  ">{data?.invoice}</span>
      </div>
      <div className="w-1/3">
        <span className=" text-md   ">{productName?.substring(1,999)}</span>
      </div>
      <div className="w-1/3">
        <span className=" text-md   ">{data?.buyers?.name}</span>
      </div>
      <div className="w-1/3">
              <span className=" text-md   ">{ data?.buyers?.username_lkpp ? "YA" : "TIDAK"}</span>
      </div>
      <div className="w-1/3">
              <TransactionDetailModal data={ data}/>
      </div>
    </div>
  );
}

export default TransactionBody;
