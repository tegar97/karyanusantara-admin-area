import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { baseUrl } from '../../../constant/baseUrl';
import CategoryUpdate from './category-update';

function CategoryItem({ category, setCategory, index }) {
  const onDelete = async () => {
    var confirm = window.confirm(
      `Apakah yakin akan menghapus category ${category.categoryName},jika menghapus kategori ini maka sub kategori dan produck yang terkait akan terhapus `
    );

    if (confirm) {
      await axios
        .delete(`${baseUrl}/api/category/${category.id}`)
          .then((res) => {
            
              toast.success("Berhasil menghapus category");
              window.location.reload();
            
        });
    } else {
    }
  };
  return (
    <div className="flex flex-row w-full py-10 border-b border-gray-200">
      <div className="w-1/3 flex flex-row items-start items-center">
        <img
          src={`${baseUrl}/storage/images/categoryIcon/${category.categoryIcon}`}
          alt={`Gambar ${category.categoryName}`}
          className="object-cover w-16 h-16 rounded-md item"
        />
        <div className="flex flex-col">
          <span className="ml-2 font-bold text-gray-800 text-md mb-1">
            {category?.categoryName}
          </span>
        </div>
      </div>
      <div className="w-1/3 ml-5">
        <span>
          {category?.sub_category?.length ? category?.sub_category?.length : 0}
        </span>{" "}
      </div>
      <div className="w-1/3 ml-5 flex flex-row">
        <div>
          <CategoryUpdate category={category} />
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

export default CategoryItem