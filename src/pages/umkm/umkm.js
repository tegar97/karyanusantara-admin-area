import React, { useEffect, useState } from "react";
import { getUmkm } from "../../api/umkm";
import UmkmList from "./umkmlist";

function Umkm() {
  const [loading,setLoading] = useState(false)
  const [listUmkm, setListUmkm] = useState();

  useEffect(() => {
    const load = async () => {
      setLoading(true)
      const token = localStorage.getItem('token');
      const response = await getUmkm(`Bearer ${token}`);
      if (response.error === false) {
        setListUmkm(response.data);
        setLoading(false)
      }
    }
          load();

  }, []);
  console.log(listUmkm);
  return (
    <main className="flex-grow wrapper min-h-screen py-12 px-12 ml-5">
      <div className="mt-5">
        <div className="flex justify-between  flex-row mb-30  items-center">
          <h1 className="text-4xl font-bold " style={{ color: "#0C145A" }}>
            Data umkm
          </h1>
        </div>

        <div className="w-full bg-white shadow-md py-4 px-4 ">
          <div className="table w-full">
            <div className="header flex flex-row w-full py-2 px-2 border-b border-gray-200 border-t ">
              <div className="w-1/3">
                <span className="text-gray-700 text-md font-bold ">
                  Nama Ukm
                </span>
              </div>
              <div className="w-1/3">
                <span className="text-gray-700 text-md font-bold  ">
               Nomer hp
                </span>
              </div>
              <div className="w-1/3">
                <span className="text-gray-700 text-md font-bold text-left ">Transaction</span>
              </div>
            
            </div>
            <div className="header flex flex-col w-full  px-2  border-gray-200 border-t ">
              {
                loading ? "Load data" : listUmkm?.map(data => {
                  return <UmkmList data={data} key={data?.id} />;

                })
              }
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Umkm;
