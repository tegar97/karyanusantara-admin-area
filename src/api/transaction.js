import callApi from "../config/axios";

export async function getMytTransaction(token) {
  const url = `/transaction/seller`;

  return callApi({
    url,
    method: "GET",
    headers: token,
  });
}



export async function sendResi(data, token) {
  const url = "/sendResi";

  return callApi({
    url,
    method: "POST",
    data,
    headers: token,
  });
}