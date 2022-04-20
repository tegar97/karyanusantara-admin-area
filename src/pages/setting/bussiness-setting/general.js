import React, { useState, useEffect } from "react";
import useForm from "../../../helpers/hook/useForm";
import InputGroup from "../../components/input-group/input-group";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useSelector } from "react-redux";
import { businessSetting } from "../../../api/umkm";
import { toast } from "react-toastify";

function GeneralSetting() {
  const [startDate, setStartDate] = useState(new Date());
  const users = useSelector((state) => state.users);
  const [isMemberUkm, setIsMemberUkm] = useState();

  console.log(users);

  const [formData, setFormData] = useState({
    ownerName: "",
    BussinessFormType: "",
    ownerPhoneNumber: "",
    businessStart: "",
    totalEmployee: "",
    isInterestedToJoinUmkmid: "",
    annualIncome: "",
    certificateName: "",
    certificate: "",
  });

  useEffect(() => {
    setFormData({
      ...formData,
      ownerName: users?.ownerName,
      businessStart: users?.businessStart,
      BussinessFormType: users?.BussinessFormType,
      ownerPhoneNumber: users?.ownerPhoneNumber,
      certificateName: users?.certificateName,
      certificate: users?.certificate,

      totalEmployee: users?.totalEmployee,
      annualIncome: users?.annualIncome,
      isInterestedToJoinUmkmid: users?.isInterestedToJoinUmkmid,
    });
  }, [users]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const bearer = `Bearer ${token}`
    const response = await businessSetting(formData, bearer);

    if (response.error === false) {
      toast.success('berhasil update data');
 
    }
  }

  return (
    <main className="flex-grow wrapper min-h-screen py-12 px-12 ml-5">
      <div className="mt-5">
        <h1 className="text-4xl font-bold " style={{ color: "#0C145A" }}>
          General Setting
        </h1>
        <div className="bg-white shadow-md w-full rounded-md  py-10 mt-10 px-5">
          <div className="py-2 border-b border-gray-200">
            <spa className="text-xl text-gray-600">Business Settings</spa>
          </div>
          <form method="post" onSubmit={onSubmit} className="content mt-5">
            <InputGroup
              label={"Nama Pemilik Ukm"}
              name={"ownerName"}
              type="text"
              value={formData.ownerName}
              setState={(e) =>
                setFormData({ ...formData, ownerName: e.target.value })
              }
            />
            <InputGroup
              label={"Nomer Telepon Pemilik ukm"}
              name={"ownerPhoneNumber"}
              value={formData.ownerPhoneNumber}
              setState={(e) =>
                setFormData({ ...formData, ownerPhoneNumber: e.target.value })
              }
              type="number"
            />
            <InputGroup
              label={"Tanggal mulai usaha"}
              name={"businessStart"}
              value={formData.businessStart}
              setState={(e) =>
                setFormData({ ...formData, businessStart: e.target.value })
              }
              type="date"
            />

            <InputGroup
              label={"Total karyawan"}
              name={"totalEmployee"}
              value={formData.totalEmployee}
              setState={(e) =>
                setFormData({ ...formData, totalEmployee: e.target.value })
              }
              type="number"
            />
            <InputGroup
              label={"Bentuk badan usaha"}
              name={"BussinessFormType"}
              value={formData.BussinessFormType}
              setState={(e) =>
                setFormData({ ...formData, BussinessFormType: e.target.value })
              }
              isSelectInput={true}
            >
              <option value="">Pilih bentuk badan usaha</option>
              <option value="Firma" >Firma</option>
              <option value="persekutuan">Persekutuan</option>
              <option value="Koperasi terbatas">Koperasi Terbatas</option>
              <option value="YAYASAN">Yayayasan</option>
            </InputGroup>
            <InputGroup
              label={"annualIncome"}
              name={"annualIncome"}
              value={formData.annualIncome}
              setState={(e) =>
                setFormData({ ...formData, annualIncome: e.target.value })
              }
              isSelectInput={true}
            >
              <option value="">Omset pertahun</option>
              <option value="a">
                Hasil penjualan \ omset maximal Rp 300.000.000 setahun
              </option>
              <option value="b">
                Hasil penjualan \ omset maximal Rp 300.000.000 - Rp
                2.500.000.000 setahun
              </option>
              <option value="c">
                Hasil penjualan \ omset maximal Rp 2.500.000.000 setahun -
                Rp.50.000.000.0000
              </option>
            </InputGroup>
            <InputGroup
              label={"Sertifikat "}
              name={"certificateName"}
              value={formData.certificateName}
              setState={(e) =>
                setFormData({ ...formData, certificateName: e.target.value })
              }
              type="text"
              placeholder={"Contoh sertifikat halal"}
            />
            <InputGroup
              label={"Nomer sertifikat "}
              name={"certificateNumber"}
              value={formData.certificate}
              setState={(e) =>
                setFormData({ ...formData, certificate: e.target.value })
              }
            />
            {/* <div className="mt-5 grid grid-cols-4 items-center ">
              <span className="text-md text-gray-600">
                {isMemberUkm == null ? (
                  <span>Member ukm indonesia ?</span>
                ) : (
                  <span>
                    Apakah tertarik untuk bergabung dengan ukm indonesia ?{" "}
                  </span>
                )}
              </span>
              <div className="col-span-3">
                {formData.isInterestedToJoinUmkmid === null ? (
                  <div className="grid grid-cols-2 gap-5">
                    <button
                      className="border border-purple-900"
                      onClick={() =>
                        setFormData({
                          ...formData,
                          isInterestedToJoinUmkmid: 1,
                        })
                      }
                    >
                      Ya
                    </button>
                    <button
                      className="border border-purple-900"
                      onClick={() => setIsMemberUkm(false)}
                    >
                      Tidak
                    </button>
                  </div>
                ) : formData.isInterestedToJoinUmkmid === 1 ? (
                  <div className="w-full">
                    <span>Ya,saya member ukm indonesia</span>
                  </div>
                ) : (
                  <div className="w-full">
                    <span>Saya tertarik bergabung dengan ukm indonesia</span>
                  </div>
                )}
              </div>
            </div> */}
            <div className="flex justify-end  mt-5">
              <button
                type="submit"
                className="py-2 px-4 text-white rounded-md hover:opacity-80"
                style={{ backgroundColor: "#4D17E2" }}
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default GeneralSetting;
