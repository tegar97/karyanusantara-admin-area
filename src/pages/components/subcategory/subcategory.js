import React, { useEffect, useState } from "react";
import {getSubCategory } from "../../../api/category";
import SubCategoryAdd from "./subcategory-add";
import SubCategoryItem from "./subCategory-item";

function SubCategory() {
  const [subCategory, setSubCategory] = useState("");

  useEffect(() => {
    const load = async () => {
      const response = await getSubCategory();
      if (response.error === false) {
        setSubCategory(response.data);
      }
    };
    load();
  }, []);
  console.log(subCategory);
  return (
    <main className="flex-grow wrapper min-h-screen py-12 px-12 ml-5">
      <div className="mt-5">
        <div className="flex justify-between  flex-row mb-30  items-center">
          <div>
            <h1 className="text-4xl font-bold " style={{ color: "#0C145A" }}>
              Sub Category
            </h1>
          </div>
          <SubCategoryAdd setCategory={setSubCategory} category={subCategory} />
        </div>
        <div className="w-full bg-white shadow-md py-4 px-4 ">
          <div className="table w-full">
            <div className="header flex flex-row w-full py-2 px-2 border-b border-gray-200 border-t ">
              <div className="w-1/3">
                <span className="text-gray-700 text-md font-bold ">
                  Sub Category
                </span>
              </div>
              <div className="w-1/3">
                <span className="text-gray-700 text-md font-bold  ">
                   Category
                </span>
              </div>
            </div>
            <div className="header flex flex-col w-full  px-2  border-gray-200 border-t ">
              {subCategory
                ? subCategory?.map((data) => {
                    return <SubCategoryItem category={data} />;
                  })
                : "Loading ..."}
            </div>
            {/* <div className="justify-end flex flex-row  mt-5 ">
              {products.total > 10 && (
                <ReactPaginate
                  className="flex flex-row w-1/3 justify-around"
                  pageCount={products.last_page}
                  onPageChange={() =>
                    setCurrentPage(
                      products.next_page_url
                        ? products.next_page_url.split("?")[1]
                        : products.prev_page_url.split("?"[1])
                    )
                  }
                  pageRangeDisplayed={products.per_page}
                />
              )}
            </div> */}
          </div>
        </div>
      </div>
    </main>
  );
}

export default SubCategory;
