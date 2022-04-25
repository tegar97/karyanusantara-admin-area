// @ts-nocheck

import React, { FormEvent, useEffect, useState, useRef } from "react";
import Modal from "react-modal";
import NumberFormat from "react-number-format";
import moment from "moment";
import TransactionDetailItem from "./TransactionDetailItem";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    width: "50%",
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

const TransactionDetailModal = ({ data }) => {
  let subtitle;

  const invoiceRef = useRef();

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

  Modal.setAppElement("#root");

  return (
    <div>
      <span
        onClick={openModal}
        style={{ color: "#f97316" }}
        className="cursor-pointer ml-1"
      >
        Lihat detail
      </span>

      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        onRequestClose={closeModal}
        contentLabel="Quantity Modal"
      >
        <div className="relative w-full  h-full p-0">
          <div className=" border-b border-gray-200 flex items-center w-full py-4 px-2 justify-center">
            <h1 className="text-2xl text-gray-800 font-semibold ">
              Detail Transaksi
            </h1>
          </div>
          <div className="mt-5  py-2 px-2">
            <div className="border-b border-gray-200 py-2 ">
              <div className="flex justify-between items-center mb-1">
                <span>Status</span>
                {data?.status === 1 && <span>Selesai</span>}
                {data?.status === 2 && <span>Diproses</span>}
                {data?.status === 3 && <span>Dikirim</span>}
              </div>
              <div className="flex justify-between items-center mb-1">
                <span>No invoice</span>
                <span>{data?.invoice}</span>
              </div>
              <div className="flex justify-between items-center mb-1">
                <span>Tanggal Pesanan</span>
                <span>{moment(data?.created_at).format("DD MMMM YYYY")}</span>
              </div>
              <div className="flex justify-between items-center mb-1">
                <span>Ongkos kirim</span>
                <span>
                  {
                    <NumberFormat
                      value={data?.shipping_amount}
                      prefix="Rp"
                      displayType={"text"}
                      thousandSeparator={true}
                    />
                  }
                </span>
              </div>
              <div className="flex justify-between items-center mb-1">
                <span>Total Harga produk</span>
                <span>
                  {
                    <NumberFormat
                      value={data?.amount}
                      prefix="Rp"
                      displayType={"text"}
                      thousandSeparator={true}
                    />
                  }
                </span>
              </div>
              <div className="flex justify-between items-center mb-1">
                <span>Grand total</span>
                <span>
                  {
                    <NumberFormat
                      value={data?.amount + data?.shipping_amount}
                      prefix="Rp"
                      displayType={"text"}
                      thousandSeparator={true}
                    />
                  }
                </span>
              </div>
            </div>
            <div className="mt-5">
              <div className="flex justify-between">
                <span className="font-semibold">Detail Produk</span>
                <span>{data?.umkm?.ukmName}</span>
              </div>

         
              <div className="mt-5">
                {data?.transaction_item?.map((data) => {
                  return <TransactionDetailItem key={data?.id} data={data} />;
                })}
              </div>
            </div>
          </div>
         
        </div>
      </Modal>
    </div>
  );
};

export default TransactionDetailModal;
