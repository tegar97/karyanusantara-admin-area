import callApi from "../config/axios";

export async function postProduct(data,token) {
  const url = "/umkm/product";

  return callApi({
    url,
    method: "POST",
    data,
    headers: token,
  });
}
export async function getMyProduct(page,token) {
  const url = `/umkm/myproducts?${page}`;

  return callApi({
    url,
    method: "GET",
    headers: token,
  });
}
export async function getUnderReviewProduct(page,token) {
  const url = `/umkm/underreview?${page}`;

  return callApi({
    url,
    method: "GET",
    headers: token,
  });
}
export async function detailProduct(slug) {
  const url = `/admin/product/${slug}`;

  return callApi({
    url,
    method: "GET",
  });
}

export async function updateStatus(id,data,token) {
  const url = `/umkm/product/updatestatus/${id}`;

  return callApi({
    url,
    method: "PUT",
    data,
    headers: token,
  });
}
export async function AcceptOrReject(id,data,token) {
  const url = `/admin/product/updatestatus/${id}`;

  return callApi({
    url,
    method: "PUT",
    data,
    headers: token,
  });
}
export async function addMainProduct(id,data,token) {
  const url = `/admin/product/addMainProduct/${id}`;

  return callApi({
    url,
    method: "PUT",
    data,
    headers: token,
  });
}
