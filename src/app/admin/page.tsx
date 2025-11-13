import { fetchFromApi } from "@/utils/product/queries/fetchFromApi";
import BuyerInfo from "./components/buyerInfoLg";
import BuyerInfoSm from "./components/buyerInfoSm";
import LargeScreenOrder from "./components/largeScreenOrder";
import MobileOrder from "./components/mobileOrder";
import OrderItem from "./components/orderItem";
import { BASE_URL } from "@/utils/baseApi";

export default async function AdminPage() {
  let products = [];
  try {
    products = await fetchFromApi(`${BASE_URL}/api/order`);
    console.log(products);
  } catch (err) {
    console.log(err);
    products = [];
  }

  return (
    <>
      <div className="overflow-x-auto">
        {/*large screen */}
        <LargeScreenOrder />

        {/* Mobile layout */}
        <MobileOrder />
      </div>
    </>
  );
}
