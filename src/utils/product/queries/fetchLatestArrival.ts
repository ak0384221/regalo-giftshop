import { fetchFromApi } from "./fetchFromApi";
import { BASE_URL } from "@/utils/baseApi";

export async function fetchlatestArrival(quantity = 0) {
  if (quantity === 0) {
    const response = await fetchFromApi(`${BASE_URL}/api/products/latest`);
    return response;
  }
  const response = await fetchFromApi(
    `${BASE_URL}/api/products/latest?quantity=${quantity}`
  );
  return response;
}
