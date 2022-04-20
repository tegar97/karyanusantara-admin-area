import callApi from "../config/axios";

export async function getCategory() {
  const url = "/categories";

  return callApi({
    url,
    method: "GET",
  });
}

export async function getSubCategory() {
  const url = "/subCategory";

  return callApi({
    url,
    method: "GET",
  });
}
