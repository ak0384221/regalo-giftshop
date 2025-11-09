type productStyle = {
  style: "category" | "name" | "cost";
  text: string | number;
};
export default function TextStyleInItem({ style, text }: productStyle) {
  let textStyle;
  switch (style) {
    case "category":
      textStyle = "capitalize   font-light text-sm text-itemCategory";
      break;
    case "name":
      textStyle = "capitalize  h-6 truncate font-bold text-md text-itemName";
      break;
    case "cost":
      textStyle = "capitalize   font-semibold text-sm text-itemPrice";
  }

  return <p className={textStyle}>{text}</p>;
}
