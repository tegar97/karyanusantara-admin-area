import axios from "axios";
import React, { FormEvent, useEffect, useState } from "react";
import Modal from "react-modal";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
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

const CategoryUpdate = ({ setCategory, category }) => {
  console.log(category)
  console.log(category.id);
  let subtitle;
  const [categoryName, setCategoryName] = useState(category.categoryName);
  const [categoryIcon, setCategoryIcon] = useState(null);
  const [categoryCode, setCategoryCode] = useState(category.code);
  const [idCategory, setIdCategory] = useState(category.id_kategori_lkpp);

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

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
    const formData = new FormData();
    formData.append("categoryIcon", categoryIcon);
    const data = {
      categoryName: categoryName,
      categoryCode: categoryCode,
      id_kategori_lkpp: idCategory
    };
    await axios
      .post(`${baseUrl}/api/category/${category.id}`, data)
      .then(async (res) => {
        if (categoryIcon !== null) {
          await axios
            .post(
              `${baseUrl}/api/uploadIconCategory/${res.data.data.id}`,
              formData
            )
            .then((res2) => {
              setIsOpen(false);
              toast.success("Berhasil Update Category");
              window.location.reload();
            });
        } else {
          setIsOpen(false);
          toast.success("Berhasil Update Category");
          window.location.reload();
        }
      });
  };

  const imagaHander = (e) => {
    setCategoryIcon(e.target.files[0]);
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
              <label htmlFor="categoryName">Nama Kategori</label>
              <input
                name="categoryName"
                className="mt-1 w-full border-gray-300  border  py-2 px-2"
                placeholder="Nama Kategori"
                onChange={(e) => setCategoryName(e.target.value)}
                value={categoryName}
              />
            </div>
            <div className="mt-3">
              <label htmlFor="categoryName">
                Kode/type Kategori (lihat di table dokumentasi lkpp)
              </label>
              <input
                name="categoryCode"
                className="mt-1 w-full border-gray-300  border  py-2 px-2"
                placeholder="Kategori code"
                onChange={(e) => setCategoryCode(e.target.value)}
                value={categoryCode}
              />
            </div>
            <div className="mt-3">
              <label htmlFor="categoryName">
                id kategori Kategori (lihat di table dokumentasi lkpp)
              </label>
              <input
                name="categoryCode"
                className="mt-1 w-full border-gray-300  border  py-2 px-2"
                placeholder="Kategori code"
                type="number"
                onChange={(e) => setIdCategory(e.target.value)}
                value={idCategory}
              />
            </div>
            <div className="mt-5">
              <label htmlFor="categoryName">Kategori Icon</label>
              <input
                className="mt-1 w-full border-gray-300  border  py-2 px-2"
                placeholder="Nama Kategori"
                type="file"
                name="categoryIcon"
                onChange={(e) => imagaHander(e)}
              />
            </div>
          </div>

          <div className="flex justify-end px-4">
            <button
              className="py-2 px-4 text-white rounded-md hover:opacity-80"
              onClick={UpdateCategory}
              style={{ backgroundColor: "#4D17E2" }}
            >
              Update
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CategoryUpdate;
