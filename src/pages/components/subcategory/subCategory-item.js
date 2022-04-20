import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { baseUrl } from '../../../constant/baseUrl';
import SubCategoryUpdate from './subcategory-update';

function SubCategoryItem({ category }) {
  const onDelete = async () => {
    var confirm = window.confirm(
      `Apakah yakin akan menghapus sub category ${category.subCategoryName},jika menghapus kategori ini maka sub kategori dan produck yang terkait akan terhapus `
    );

    if (confirm) {
      await axios
        .delete(`${baseUrl}/api/subCategory/${category.id}`)
        .then((res) => {
          toast.success("Berhasil menghapus subcategory");
          window.location.reload();
        });
    } else {
    }
  };
  return (
    <div className="flex flex-row w-full py-10 border-b border-gray-200">
      <div className="w-1/3 flex flex-row items-start items-center">
        <div className="flex flex-col">
          <span className="ml-2 font-bold text-gray-800 text-md mb-1">
            {category?.subCategoryName}
          </span>
        </div>
      </div>

      <div className="w-1/3 ml-5 flex flex-row ">
        <span>{category?.category?.categoryName}</span>
      </div>
      <div className="w-1/3 ml-5 flex flex-row">
        <div>
          <SubCategoryUpdate category={category} />
        </div>
        <div>
          <button
            onClick={onDelete}
            className="bg-red-500 text-white px-2 py-2 ml-2 active:bg-red-600 hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default SubCategoryItem