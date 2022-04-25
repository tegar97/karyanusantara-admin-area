import callApi from "../config/axios";

export async function getUmkm( token) {
  const url = `/getUmkm`;

  return callApi({
    url,
      method: "GET",
    headers: token,
  });
}


export async function DetailUmkm( id,token) {
  const url = `/getUmkm/${id}`;

  return callApi({
    url,
      method: "GET",
    headers: token,
  });
}


export async function UmkmTransaction(id, token, status) {
  const url = `/getUmkmTransaction/${id}/${status}`;

  return callApi({
    url,
    method: "GET",

    headers: token,
  });
}




