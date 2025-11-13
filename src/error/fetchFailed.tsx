import Image from "next/image";

export default function Fetchfailed({ fetchcase }: { fetchcase: string }) {
  return (
    <>
      <div className="error text-neutral-700  text-center  my-2 p-4 ">
        <h1 className="text-[12dvw] font-extrabold">404 Error</h1>
        <h1 className=" text-center text-4xl capitalize text-[5dvw] ">
          Some problem happend finding {fetchcase} products from server
        </h1>
      </div>
    </>
  );
}
