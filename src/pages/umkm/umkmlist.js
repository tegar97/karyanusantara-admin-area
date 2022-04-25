import React from 'react'
import { Link } from 'react-router-dom';

function UmkmList({data}) {
  return (
    <div className="flex flex-row w-full py-10 border-b border-gray-200">
      <div className="w-1/3 flex flex-row items-start">
        <div className="flex flex-col">
          <span className="ml-2 font-bold text-gray-800 text-md mb-1">
            {data?.ukmName}
          </span>
        </div>
      </div>
      <div className="w-1/3 ml-5">
        <span className=" ">{data?.ownerPhoneNumber} </span>
      </div>
      <div className="w-1/3">
        <span className=" ">{data?.transaction?.length} Transaksi</span>
      </div>

      <div className=" flex flex-row items-start ">
        <Link to={`${data.id}`}>
          <button className="bg-green-500 text-white px-2 py-2 active:bg-green-600 hover:bg-green-600">
            Detail
          </button>
        </Link>
      </div>
    </div>
  );
}

export default UmkmList