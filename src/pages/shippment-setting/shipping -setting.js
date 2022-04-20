import React, { useEffect, useState } from "react";
import { getCourier, getMyCourier } from "../../api/courier";
import CourierCard from "../components/courier-card/courier-card";

function ShippingSetting() {
  const [allCourier, setAllCourier] = useState();
  const [myCourier, setMyCourier] = useState();

  useEffect(() => {
      const loadCourier = async () => {
          const token = localStorage.getItem('token');
        const response = await getCourier();
        const response2 = await getMyCourier(`Bearer ${token}`);

        if (response.error === false) {
          const tempCourier = [];
          // const filter = response2.data.map(myCourier => {
          //     return response.data.filter((courier) => {
          //       return courier.id !== myCourier.courier_id;
          //     });

          // })

          response.data.map(courier => {
            const filter = response2.data.filter(myCourier => {
              return courier.id !== myCourier.courier_id
            })
            setMyCourier(filter)
          })

        // setAllCourier(response.data);
        }
        if (response.error === false) {
          setAllCourier(response.data);
        }
      };
      
    loadCourier();
  }, []);
    

  return (
    <main className="flex-grow wrapper min-h-screen py-12 px-12 ml-5">
      <div className="mt-5">
        <h1 className="text-4xl font-bold " style={{ color: "#0C145A" }}>
          Setting kurir
        </h1>

        <div className="mt-5 w-full bg-white shadow-md py-10 px-5 ">
          <h2 className="text-xl mb-2">Kurir aktif</h2>
          <div className="grid grid-cols-3 gap-5">
            {myCourier
              ? myCourier?.map((data, index) => {
                  return (
                    <CourierCard
                      index={index}
                      isActive={true}
                      key={data.id}
                      data={data.courier}
                      myCourier={myCourier}
                    />
                  );
                })
              : ""}
          </div>
        </div>
        <div className="mt-5 w-full bg-white shadow-md py-10 px-5 ">
          <h2 className="text-xl mb-2">Pilihan kurir lain </h2>

          <div className="grid grid-cols-3 gap-5">
            {myCourier
              ? allCourier?.map((data, index) => {
                  return (
                    <CourierCard
                      index={index}
                      key={data.id}
                      data={data}
                      myCourier={myCourier}
                    />
                  );
                })
              : ""}
          </div>
        </div>
      </div>
    </main>
  );
}

export default ShippingSetting;
