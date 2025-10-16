import Logo from "@/atomic-components/logo";
import MyButton from "@/atomic-components/myButton";

export default function Footer() {
  return (
    <div className=" flex flex-col gap-4 md:flex-row py-4 justify-evenly items-center md:items-start">
      <Logo />
      <div className="text-center">
        <ul>
          <li>accessories</li>
          <li>cards</li>
          <li>test</li>
          <li>clothing</li>
          <li>handbags</li>
          <li>jewelries</li>
          <li>office</li>
          <li>toys</li>
          <li>wallets</li>
        </ul>
      </div>
      <div className="text-center">
        <ul>
          <li>about us</li>
          <li>contact us</li>
          <li>faq</li>
          <li>shipping policy</li>
        </ul>
      </div>
      <div className="flex flex-col items-start gap-4">
        <h1 className="capitalize text-lg font-bold">sign up</h1>
        <input
          type="text"
          className="box bg-white h-10 text-black px-2"
          size={25}
        />
        <MyButton />
      </div>
    </div>
  );
}
