import React, { useEffect, useState } from "react";
import {
  AcceptOrReject,
  addMainProduct,
  detailProduct,
} from "../../api/product";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { data } from "autoprefixer";
import NumberFormat from "react-number-format";
import convertToKg from "../../utils/covnerToKg";
import { baseUrl } from "../../constant/baseUrl";
import { toast } from "react-toastify";

function DetailProduct() {
  const [product, setDetailproduct] = useState("");
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const load = async () => {
      const response = await detailProduct(slug);

      if (response.error === false) {
        setDetailproduct(response.data[0]);
      }

      console.log(response);
    };

    load();
  }, []);

  const acceptOReject = async (status) => {
    try {
      const token = localStorage.getItem("token");
      const bearerToken = `Bearer ${token}`;
      const data = {
        status: status,
      };
      const response = await AcceptOrReject(product.id, data, bearerToken);

      if (response.error === false) {
        if (status == 2) {
          toast.success("Product telah diterima");
          navigate("/products");
        } else if (status == 1) {
          toast.success("Product telah di unpublish");
          navigate("/products");
        } else {
          toast.success("Product ditolak");
          navigate("/products");
        }
      }
    } catch (error) {}
  };

  const mainProduct = async (status) => {
    const token = localStorage.getItem("token");
    const bearerToken = `Bearer ${token}`;
    const data = {
      isMainAddress: status,
    };
    const response = await addMainProduct(product.id, data, bearerToken);

    if (response.error === false) {
      if (status === 0) {
        toast.success("Product telah dihapus dari   product unggulan");
        window.location.reload();

      } else {
        toast.success("Product telah menjadi product unggulan");
        window.location.reload();

      }
    }
  };
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
        <div className="bg-white w-full shadow-md px-2 py-2">
          <table class="table	 table-bordered w-full">
            <tbody>
              <tr>
                <th style={{ width: "30%" }} scope="row" className="text-left">
                  Nama Product
                </th>
                <td>{product?.name}</td>
              </tr>
              <tr>
                <th style={{ width: "30%" }} scope="row" className="text-left">
                  Stock Product?
                </th>
                <td>{product?.stock}</td>
              </tr>
              <tr>
                <th style={{ width: "30%" }} scope="row" className="text-left">
                  minimum buy
                </th>
                <td>{product?.minimumOrder}</td>
              </tr>
              <tr>
                <th style={{ width: "30%" }} scope="row" className="text-left">
                  Brand
                </th>
                <td>{product?.brand}</td>
              </tr>
              <tr>
                <th style={{ width: "30%" }} scope="row" className="text-left">
                  Deskripsi Product?
                </th>
                <td>{product?.description}</td>
              </tr>
              <tr>
                <th style={{ width: "30%" }} scope="row" className="text-left">
                  Harga
                </th>
                <td>
                  <NumberFormat
                    prefix="Rp. "
                    displayType={"text"}
                    thousandSeparator={true}
                    value={product?.price}
                  />
                </td>
              </tr>
              <tr>
                <th style={{ width: "30%" }} scope="row" className="text-left">
                  Berat
                </th>
                <td>{convertToKg(product?.weight)}</td>
              </tr>
              <tr>
                <th style={{ width: "30%" }} scope="row" className="text-left">
                  Besar satuan
                </th>
                <td>
                  <div className="flex flex-col">
                    <span>length : {product?.length + ` cm`}</span>
                    <span>width : {product?.width + ` cm`}</span>
                    <span>height : {product?.height + ` cm`}</span>
                    <span>diamter : {product?.diameter + ` cm`}</span>
                  </div>
                </td>
              </tr>
              <tr>
                <th style={{ width: "30%" }} scope="row" className="text-left">
                  Gambar
                </th>
                <td className="flex flex-row ">
                  {product?.images?.map((image) => {
                    return (
                      <img
                        className="w-20 h-20 ml-2"
                        src={`${baseUrl}/storage/images/product/${image.imageName}`}
                        alt="product? images"
                      />
                    );
                  })}
                </td>
              </tr>
              <tr>
                <th style={{ width: "30%" }} scope="row" className="text-left">
                  is preorder
                </th>
                <td>{product?.isPreorder === 1 ? "Ya" : "Tidak"}</td>
              </tr>
              {product?.isPreorder === 1 && (
                <tr>
                  <th
                    style={{ width: "30%" }}
                    scope="row"
                    className="text-left"
                  >
                    preorder time
                  </th>
                  <td>Tegar</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="bg-white w-full shadow-md px-2 py-2 mt-10">
          <table class="table	 table-bordered w-full">
            <tbody>
              <tr>
                <th style={{ width: "30%" }} scope="row" className="text-left">
                  Nama Ukm
                </th>
                <td>{product?.umkm?.ukmName}</td>
              </tr>
              <tr>
                <th style={{ width: "30%" }} scope="row" className="text-left">
                  Nama Pemilik ukm
                </th>
                <td>{product?.umkm?.ownerName}</td>
              </tr>
              <tr>
                <th style={{ width: "30%" }} scope="row" className="text-left">
                  Bentuk usaha
                </th>
                <td>{product?.umkm?.BussinessFormType}</td>
              </tr>
              <tr>
                <th style={{ width: "30%" }} scope="row" className="text-left">
                  Mulai usaha
                </th>
                <td>{product?.umkm?.businessStart}</td>
              </tr>
              <tr>
                <th style={{ width: "30%" }} scope="row" className="text-left">
                  Total Karyawan
                </th>
                <td>{product?.umkm?.totalEmployee}</td>
              </tr>
              <tr>
                <th style={{ width: "30%" }} scope="row" className="text-left">
                  Alamat
                </th>
                <td>
                  {product?.umkm?.village}, {product?.umkm?.subdistrict},
                  {product?.umkm?.city_name},{product?.umkm?.province_name},
                  {product?.umkm?.ukmAddress}
                </td>
              </tr>
              <tr>
                <th style={{ width: "30%" }} scope="row" className="text-left">
                  Sertifikat
                </th>
                <td>{product?.umkm?.certificateName}</td>
              </tr>
              <tr>
                <th style={{ width: "30%" }} scope="row" className="text-left">
                  Sertifikat
                </th>
                <td>{product?.umkm?.certificate}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="justify-end flex mt-5">
          {product?.status == 1 ? (
            <button
              className="py-2 px-4 text-white rounded-md hover:opacity-80"
              onClick={() => acceptOReject(2)}
              style={{ backgroundColor: "#4D17E2" }}
            >
              published
            </button>
          ) : product.status !== 2 ? (
            <>
              {" "}
              {data.status !== 3 ? (
                <button
                  className="py-2 px-4 text-white rounded-md hover:opacity-80 bg-red-400 mr-5"
                  onClick={() => acceptOReject(3)}
                >
                  Tolak
                </button>
              ) : (
                ""
              )}
              <button
                className="py-2 px-4 text-white rounded-md hover:opacity-80"
                onClick={() => acceptOReject(2)}
                style={{ backgroundColor: "#4D17E2" }}
              >
                Terima
              </button>
            </>
          ) : (
            <div>
              <button
                className="py-2 px-4 text-white rounded-md hover:opacity-80 mr-5"
                onClick={() => acceptOReject(1)}
                style={{ backgroundColor: "#4D17E2" }}
              >
                Unpublished
              </button>
              {product.isMainProduct == 1 ? (
                <button
                  className="py-2 px-4 text-white rounded-md hover:opacity-80 bg-red-600"
                  onClick={() => mainProduct(0)}
                >
                  Hapus dari product unggulan
                </button>
              ) : (
                <button
                  className="py-2 px-4 text-white rounded-md hover:opacity-80 bg-green-600"
                  onClick={() => mainProduct(1)}
                >
                  Jadikan Produk unggulan
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default DetailProduct;
