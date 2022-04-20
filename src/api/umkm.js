import callApi from "../config/axios";

export async function updateStore(data, token) {
  const url = `/auth/umkm/storeEdit`;

  return callApi({
    url,
      method: "POST",
    data,
    headers: token,
  });
}


export async function uploadAvatar(data, token) {
  const url = `/auth/umkm/avatarUpdate`;

  return callApi({
    url,
    method: "POST",
    data,
    headers: token,
  });
}
export async function businessSetting(data, token) {
  const url = `/auth/umkm/businessSetting`;

  return callApi({
    url,
    method: "POST",
    data,
    headers: token,
  });
}
