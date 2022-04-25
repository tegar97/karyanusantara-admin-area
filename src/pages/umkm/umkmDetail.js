import React, { useEffect, useState } from "react";

import { Navigate, useNavigate, useParams } from "react-router-dom";
import { data } from "autoprefixer";
import NumberFormat from "react-number-format";
import { baseUrl } from "../../constant/baseUrl";
import { toast } from "react-toastify";
import { DetailUmkm, UmkmTransaction } from "../../api/umkm";
import TransactionBody from "./TransactionBody";
import SSOLOGIN from "./sso_modal";

function UmkmDetail() {
    const [loading, setLoading] = useState(true);
  const [umkm, setuMKM] = useState("");
    const [transaction, setTransaction] = useState("");
    const [transactionStatus,setTransactionStatus] = useState(2)
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
      const load = async () => {
          setLoading(true)
          const token = localStorage.getItem('token');
          const Bearer = `Bearer ${token}`
          const response = await DetailUmkm(id, Bearer);
          const GetTransaction = await UmkmTransaction(
            id,
            Bearer,
            transactionStatus
          );
          if (response.error === false) {
              setuMKM(response.data);

          }
          if (GetTransaction.error === false) {
              setTransaction(GetTransaction.data);

          } 
                      setLoading(false);

    };

    load();
  }, [id,transactionStatus]);


  
  
    const ssoLogin = () => {
      
  }
  return (
    <main className="flex-grow wrapper min-h-screen py-12 px-12 ml-5">
      <div className="mt-5">
        <div className="flex  flex-row mb-30  ">
          <div>
            <h1 className="text-4xl font-bold " style={{ color: "#0C145A" }}>
              Detail Product
            </h1>
          </div>
        </div>

        <div className="bg-white w-full shadow-md px-2 py-2 mt-10">
          <table class="table	 table-bordered w-full">
            <tbody>
              <tr>
                <th style={{ width: "30%" }} scope="row" className="text-left">
                  Nama Ukm
                </th>
                <td>{umkm?.ukmName}</td>
              </tr>
              <tr>
                <th style={{ width: "30%" }} scope="row" className="text-left">
                  Nama Pemilik ukm
                </th>
                <td>{umkm?.ownerName}</td>
              </tr>
              <tr>
                <th style={{ width: "30%" }} scope="row" className="text-left">
                  Bentuk usaha
                </th>
                <td>{umkm?.BussinessFormType}</td>
              </tr>
              <tr>
                <th style={{ width: "30%" }} scope="row" className="text-left">
                  Mulai usaha
                </th>
                <td>{umkm?.businessStart}</td>
              </tr>
              <tr>
                <th style={{ width: "30%" }} scope="row" className="text-left">
                  Total Karyawan
                </th>
                <td>{umkm?.totalEmployee}</td>
              </tr>
              <tr>
                <th style={{ width: "30%" }} scope="row" className="text-left">
                  Alamat
                </th>
                <td>
                  {umkm?.village}, {umkm?.subdistrict},{umkm?.city_name},
                  {umkm?.province_name},{umkm?.ukmAddress}
                </td>
              </tr>
              <tr>
                <th style={{ width: "30%" }} scope="row" className="text-left">
                  Sertifikat
                </th>
                <td>{umkm?.certificateName}</td>
              </tr>
              <tr>
                <th style={{ width: "30%" }} scope="row" className="text-left">
                  Sertifikat
                </th>
                <td>{umkm?.certificate}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-white w-full shadow-md px-2 py-2 mt-10">
          <div className="flex flex-row mb-2 mt-2 ">
            <button
              n
              className={`ml-2 py-2 px-2  cursor-pointer ${
                transactionStatus === 2 && "text-white bg-purple-700 rounded-md"
              }`}
              onClick={() => setTransactionStatus(2)}
            >
              Transaksi sedang berlangsung
            </button>
            <button
              className={`ml-2 py-2 px-2  cursor-pointer ${
                transactionStatus === 3 && "text-white bg-purple-700 rounded-md"
              }`}
              onClick={() => setTransactionStatus(3)}
            >
              Sedang dikirim
            </button>
            <buttonn
              className={`ml-2 py-2 px-2  cursor-pointer ${
                transactionStatus === 1 && "text-white bg-purple-700 rounded-md"
              }`}
              onClick={() => setTransactionStatus(1)}
            >
              Transaksi selesai
            </buttonn>
          </div>

          <div className="w-full bg-white shadow-md py-4 px-4 ">
            <div className="table w-full">
              <div className="header flex flex-row w-full py-2 px-2 border-b border-gray-200 border-t ">
                <div className="w-1/3">
                  <span className="text-gray-700 text-md font-bold ">
                    INVOICE
                  </span>
                </div>
                <div className="w-1/3">
                  <span className="text-gray-700 text-md font-bold  ">
                    Nama Product
                  </span>
                </div>
                <div className="w-1/3">
                  <span className="text-gray-700 text-md font-bold  ">
                    Nama Pembeli
                  </span>
                </div>
                <div className="w-1/3">
                  <span className="text-gray-700 text-md font-bold  ">
                    Is lkpp
                  </span>
                </div>
                <div className="w-1/3">
                  <span className="text-gray-700 text-md font-bold  ">
                    Detail
                  </span>
                </div>
              </div>
              <div className="header flex flex-col w-full  px-2  border-gray-200 border-t ">
                {loading
                  ? "Load data ..."
                  : transaction?.map((data) => {
                      return <TransactionBody key={data?.id} data={data} />;
                    })}
              </div>
            </div>
          </div>
        </div>

        <SSOLOGIN email={umkm?.email} />
      </div>
    </main>
  );
}

export default UmkmDetail;
