import MyButton from "@/atomic-components/myButton";

export default function HeroSection() {
  return (
    <div className="h-[90dvh] bg-[#dbefff]  md:bg-[url('/homepageHero.jpg')] bg-cover bg-center w-full text-black flex  items-center ">
      <div className="headlines h-[50dvh] w-5/6  md:w-1/3 flex flex-col justify-evenly items-start mx-auto md:ml-[10dvh] gap-4 ">
        <h1 className="text-6xl font-bold  p-1 ">
          The Best way to make someone happy...
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
          quae.
        </p>
        <MyButton />
      </div>
    </div>
  );
}
