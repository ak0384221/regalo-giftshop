import Image from "next/image";
export default function Item() {
  return (
    <div className="item w-4/5 h-[60dvh] md:w-1/5 md:h-1/2   bg-[#e3eff5]  text-black p-2 ">
      <div className="pic h-[75%]  capitalize relative">
        <Image
          src="/moneybags/01.jpg"
          width={200}
          height={300}
          alt="pic"
          className="w-full h-full object-cover"
        />
      </div>
      <section className="mt-2 px-2 h-[25%]">
        <p className="capitalize text-neutral-500 text-sm">wallet</p>
        <p className="capitalize font-bold text-neutral-800">
          black real leather wallet
        </p>
        <p className="font-bold text-neutral-800 text-sm">$120.00</p>
      </section>
    </div>
  );
}
