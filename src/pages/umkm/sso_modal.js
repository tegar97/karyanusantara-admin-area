// @ts-nocheck

import React, { FormEvent, useEffect, useState, useRef } from "react";
import Modal from "react-modal";
import NumberFormat from "react-number-format";
import moment from "moment";
import TransactionDetailItem from "./TransactionDetailItem";
import axios from "axios";
import { baseUrl, MITRAURL } from "../../constant/baseUrl";
import { toast } from "react-toastify";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    width: "30%",
    height: "30%",
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

const SSOLOGIN = ({ email }) => {
  let subtitle;

  const invoiceRef = useRef();
  const [key, setKey] = useState("");

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [loading, setLoading] = useState(false);

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
    const ssoLogin = async (e) => {
        e.preventDefault()
      const token = localStorage.getItem('token')
    try {
      await axios.post(
        `${baseUrl}/api/admin/umkm/sso`,
        {
          email: email,
        },
        {
          headers: {
            key: key,
            Authorization: `Bearer` + token,
          },
        }
      ).then((res) => {
           window.location.href = MITRAURL+`?nonce=${res.data.data}`
          console.log(res)
      });
    } catch (error) {
        toast.error('Invalid key')
    }
  };

  Modal.setAppElement("#root");

  return (
    <div>
      <button
        onClick={openModal}
        className="py-2 mt-5  px-4 text-white rounded-md hover:opacity-80"
        style={{ backgroundColor: "#4D17E2" }}
      >
        SSO LOGIN
      </button>

      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        onRequestClose={closeModal}
        contentLabel="Quantity Modal"
      >
        <div className="relative w-full  h-full p-0">
          <div className=" border-b border-gray-200 flex items-center w-full py-4 px-2 justify-center">
            <h1 className="text-2xl text-gray-800 font-semibold ">KEY</h1>
          </div>
          <div className="mt-5  py-2 px-2">
            <form onSubmit={ssoLogin}>
              <input
                placeholder="Masukan key"
                value={key}
                className="w-full border border-gray-800 py-2 px-2 "
                onChange={(e) => setKey(e.target.value)}
              />
              <button className="mt-2  px-2 bg-purple-700 text-white  py-2 rounded-md  w-full">
                Login
              </button>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SSOLOGIN;
