import Category from "@/atomic-components/categoryTitle";
import MyButton from "@/atomic-components/myButton";
import Cart from "@/micro-components/item";
import CategoryPicBox from "@/micro-components/categoryPicBox";
import HeroSection from "@/components/herosection";
import ShopByOccasionCard from "@/micro-components/shopByOccasion";
import Image from "next/image";
import CategoryTitle from "@/atomic-components/categoryTitle";
import Item from "@/micro-components/item";
import Ads from "@/micro-components/ads";
import ShopByCategory from "@/components/shopByCategory";
import ProductDetails from "@/components/detailProduct";

export default function Home() {
  return (
    // <>
    //   <HeroSection />
    //   <div className="newArrival my-5">
    //     <CategoryTitle title="New Arrival" />
    //     <div className="flex justify-center flex-wrap gap-4 my-10 ">
    //       <Item /> <Item /> <Item /> <Item />
    //     </div>
    //   </div>
    //   <Ads />
    //   <div className="newArrival my-5">
    //     <CategoryTitle title="New Arrival" />
    //     <div className="flex justify-center flex-wrap gap-4 my-10 ">
    //       <Item /> <Item /> <Item /> <Item />
    //     </div>
    //   </div>
    //   <ShopByCategory />
    //   <div className="shopByOc">
    //     <CategoryTitle title="shop by occasion my-10" />

    //     <div className=" flex justify-center flex-wrap gap-4 my-5">
    //       <ShopByOccasionCard /> <ShopByOccasionCard />
    //       <ShopByOccasionCard />
    //       <ShopByOccasionCard />
    //     </div>
    //   </div>
    // </>
    <ProductDetails />
  );
}
