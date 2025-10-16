import TextStyleInItem from "@/atomic-components/textStyleOfItem";
import Image from "next/image";

export default function ProductDetails() {
  return (
    <div className="details mt-20 border min-h-[80dvh] flex justify-between">
      <div className="img relative border w-1/2">
        <Image
          alt="something"
          src={"/moneybags/03.jpg"}
          height={200}
          width={200}
          className="absolute w-full h-full object-cover"
        />
      </div>
      <div className="details w-1/2 p-5 space-y-1">
        <p>pathname</p>

        <TextStyleInItem style="category" text="wallet" />
        <b>$105</b>
        <sub>& free shpping</sub>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. In,
          blanditiis.
        </p>
        <div className=" flex gap-3 items-center justify-start">
          <div className="">
            <button className="px-4 bg-blue-500">-</button>1
            <button className="px-4 bg-blue-500">+</button>
          </div>
          <div className="">
            <button className="px-8 bg-blue-500">add to card</button>
          </div>
        </div>
        <div className="">
          <b>free shipping</b>
          <ul className="">
            <li>No-Risk Money Back Guarantee!</li>
            <li>No Hassle Refunds</li>
            <li>Secure Payments</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
