import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMyProduct, getUnderReviewProduct } from "../../api/product";
import ProductItem from "../components/product-item/productItem";
import ReactPaginate from "react-paginate";

function Products() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState('');
 
    useEffect( () => {

      console.log(currentPage)
      const token = localStorage.getItem("token");

      const load = async () => {
      const response = await getUnderReviewProduct(
        currentPage,
        `Bearer ${token}`
        );
        if (response.error === false) {
          setProducts(response.data);
        }

        console.log(response)
      }
      load()
    }, [currentPage]);
  
  const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber.selected + 1);
  };

  return (
    <main className="flex-grow wrapper min-h-screen py-12 px-12 ml-5">
      <div className="mt-5">
        <div className="flex justify-between  flex-row mb-30  items-center">
          <div>
            <h1 className="text-4xl font-bold " style={{ color: "#0C145A" }}>
              Daftar Product
            </h1>
          </div>
          <Link to="/add-product">
            <button
              className="py-2 px-4 text-white rounded-md hover:opacity-80"
              style={{ backgroundColor: "#4D17E2" }}
            >
              Tambahkan produk
            </button>
          </Link>{" "}
        </div>
        <div className="w-full bg-white shadow-md py-4 px-4 ">
          <div className="table w-full">
            <div className="header flex flex-row w-full py-2 px-2 border-b border-gray-200 border-t ">
              <div className="w-1/3">
                <span className="text-gray-700 text-md font-bold ">
                  Info Product
                </span>
              </div>
              <div className="w-1/3">
                <span className="text-gray-700 text-md font-bold  ">
                  Nama Ukm
                </span>
              </div>
              <div className="w-1/5">
                <span className="text-gray-700 text-md font-bold ">Harga</span>
              </div>
              <div className="w-1/5">
                <span className="text-gray-700 text-md font-bold ">Stock</span>
              </div>
            </div>
            <div className="header flex flex-col w-full  px-2  border-gray-200 border-t ">
              {products?.data?.map((data) => {
                return <ProductItem product={data} />;
              })}
            </div>
            <div className="justify-end flex flex-row  mt-5 ">
              {products.total > 10 && (
                <ReactPaginate
                  className="flex flex-row w-1/3 justify-around "
                  pageCount={products.last_page}
                  onPageChange={handlePageChange}
                  pageRangeDisplayed={products.per_page}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Products;
