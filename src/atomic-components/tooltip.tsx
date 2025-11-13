export default function Tooltip({ discount, saleDiscount }) {
  return (
    <div className="px-3 text-xs py-2  w-max  rounded-3xl shadow-md absolute top-0 left-0 m-5 bg-discountTooltipBg text-discountTooltipText">
      {`${discount} + ${saleDiscount} % off`}
    </div>
  );
}
