import CategoryTitle from "@/atomic-components/categoryTitle";
import CategoryPicBox from "@/micro-components/categoryPicBox";

export default function ShopByCategory() {
  return (
    <>
      <CategoryTitle title="shop by category my-10 " />
      <div className="flex justify-center flex-wrap gap-4 my-5 ">
        <CategoryPicBox />
        <CategoryPicBox />
        <CategoryPicBox />
        <CategoryPicBox />
        <CategoryPicBox />
        <CategoryPicBox />
      </div>
    </>
  );
}
