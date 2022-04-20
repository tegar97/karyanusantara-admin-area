import axios from "axios";
import React, { FormEvent, useEffect, useState } from "react";
import Modal from "react-modal";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getCategory } from "../../../api/category";
import { baseUrl } from "../../../constant/baseUrl";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    width: "40%",
    height: "90%",
    maxWidth: 800,
    maxHeight: 900,
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "1px solid #ffff",
    padding: 0,
  },
  overlay: {
    background: "rgba(0, 0, 0, 0.6)",
    zIndex: 1000000000000,
  },
};

const SubCategoryUpdate = ({ setCategory, category }) => {
  const [categoryGroup, setCategoryGroup] = useState();
  const [categoryId, setCategoryId] = useState(null);
    const [subCategoryName, setSubCategoryName] = useState(category.subCategoryName);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }
useEffect(() => {
  const load = async () => {
    const response = await getCategory();
    if (response.error === false) {
      setCategoryGroup(response.data);
    }
  };
  load();
}, []);
  useEffect(() => {
    if (modalIsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [modalIsOpen]);

  function closeModal() {
    setIsOpen(false);
  }
  const navigate = useNavigate();
  const UpdateCategory = async () => {
    console.log(category);
    const data = {
      category_id:
        categoryId == null
          ? parseInt(category?.category?.id)
          : parseInt(categoryId),
      subCategoryName: subCategoryName,
    };
      await axios
        .post(`${baseUrl}/api/subCategory/${category.id}`, data)
        .then((res) => [window.location.reload()]);
      
     

  };


  Modal.setAppElement("#root");

  return (
    <div>
      <button
        onClick={openModal}
        className="bg-green-500 text-white px-2 py-2 active:bg-green-600 hover:bg-green-600"
      >
        Update
      </button>

      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        onRequestClose={closeModal}
        contentLabel="Quantity Modal"
      >
        <div className="relative w-full  h-full p-0">
          <div className=" py-5 px-5 flex justify-between">
            <h1>Update Category {category.categoryName}</h1>
          </div>
          <div className="py-5 px-5">
            <div className="mt-3">
              <label htmlFor="categoryName"> Kategori</label>
              <select
                onChange={(e) => setCategoryId(e.target.value)}
                value={categoryId}
                className="mt-1 w-full border-gray-300  border  py-2 px-2"
              >
                {categoryGroup &&
                  categoryGroup.map((data) => {
                    return (
                      <option  selected={data?.id === category?.category?.id} key={data?.id} value={data.id}>
                        {data.categoryName}
                      </option>
                    );
                  })}
              </select>
            </div>

            <div className="mt-5">
              <label htmlFor="categoryName">Sub Kategori</label>
              <input
                className="mt-1 w-full border-gray-300  border  py-2 px-2"
                placeholder="Nama Sub kategori"
                type="text"
                value={subCategoryName}
                onChange={(e) => setSubCategoryName(e.target.value)}
                name="subCategory"
              />
            </div>
          </div>
          <div className="flex justify-end px-4">
            <button
              className="py-2 px-4 text-white rounded-md hover:opacity-80"
              style={{ backgroundColor: "#4D17E2" }}
              onClick={UpdateCategory}
            >
              Update
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SubCategoryUpdate;
