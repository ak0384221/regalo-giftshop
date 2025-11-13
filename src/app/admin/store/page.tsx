import { fetchFromApi } from "@/utils/product/queries/fetchFromApi";
import StoreLg from "../components/storeLg";
import StoreSm from "../components/StoreSm";
import { BASE_URL } from "@/utils/baseApi";

export default async function Store() {
  let products = [];
  try {
    products = await fetchFromApi(`${BASE_URL}/api/products`);
  } catch (err) {
    console.log(err);
    products = [];
  }
  return (
    <>
      <StoreLg products={products} />
      <StoreSm products={products} />
    </>
  );
}
