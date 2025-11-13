import HeroSection from "@/components/herosection";
import CategoryTitle from "@/atomic-components/categoryTitle";
import Item from "@/micro-components/item";
import Ads from "@/micro-components/ads";
import Link from "next/link";
import { fetchlatestArrival } from "@/utils/product/queries/fetchLatestArrival";
import { fetchOnSale } from "@/utils/product/queries/fetchOnSale";
import ShopByCategory from "@/components/shopByCategory";
import ShopByOccasionCard from "@/micro-components/shopByOccasion";
import Image from "next/image";
import Fetchfailed from "@/error/fetchFailed";

type Tproduct = {
  _id: number;
  name: string;
  category: string;
  price: number;
  discount: number;
  description: string;
  images: string[];
  stock: number;
  arrivalDate: string;
  sale: number;
};
export default async function Home() {
  let latestData = [];
  let saleData = [];

  try {
    latestData = await fetchlatestArrival(5);
  } catch (err) {
    console.error("Failed to fetch latest arrivals:", err);
    latestData = []; // fallback value
  }

  try {
    saleData = await fetchOnSale();
  } catch (err) {
    console.error("Failed to fetch sale data :", err);
    saleData = []; // fallback value
  }

  return (
    <>
      <HeroSection />

      {latestData?.length > 0 && (
        <>
          <div className="newArrival my-5 ">
            <CategoryTitle title="New Arrival" />
            <Link
              className="text-right  capitalize block mr-5  text-categoryHeader"
              href="/user/products/latest"
            >
              see all
            </Link>
            <div className="flex justify-center gap-4  my-5 w-full  mx-auto flex-wrap items-center">
              {latestData?.map((product, index: number) => (
                <Item item={product} key={index} />
              ))}
            </div>
          </div>
        </>
      )}

      {latestData?.length == 0 && <Fetchfailed fetchcase={"latestData"} />}
    </>
  );
}
