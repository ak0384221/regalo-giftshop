import ConfirmOrder from "@/atomic-components/confirmOrderBtn";
import RemoveCartItem from "@/atomic-components/removeFromCartButton";
import { fetchCartItem } from "@/utils/cart/fetchCartItem";
import { finalPrice, subTotal, totalPrice } from "@/utils/cart/paymentcal";

export default async function Cart() {
  const items = await fetchCartItem();

  return (
    <>
      <section className="min-h-screen text-cartText p-2 flex flex-col lg:flex-row lg:gap-2 gap-6">
        <div className="flex-1  rounded-lg shadow p-4">
          <h2 className="text-2xl font-semibold mb-4">Cart</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-medium">Product</th>
                  <th className="text-left py-3 px-4 font-medium">Price</th>
                  <th className="text-left py-3 px-4 font-medium">Quantity</th>
                  <th className="text-left py-3 px-4 font-medium">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {items?.map((item: any) => {
                  return (
                    <tr
                      key={item._id}
                      title={item.productId.name}
                      className="border-b"
                    >
                      <td className="flex items-center gap-4 py-4 px-4">
                        <RemoveCartItem id={item._id} />
                        {/* <img src="https://via.placeholder.com/70" alt="Wallet" className="w-16 h-16 rounded-md object-cover"> */}
                        <span className="">{item.productId.name} </span>
                      </td>
                      <td className="py-4 px-4 text-cartPreDiscountText">
                        {item.productId.price}$
                        <sub className="text-cartPostDiscountText mx-2">
                          {finalPrice(item)}$
                        </sub>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center  rounded-md w-fit">
                          <button className="px-2 py-1 text-white">−</button>
                          <span className="px-3 text-cartQuantityNumber">
                            {item.quantity}
                          </span>
                          <button className="px-2 py-1 text-white">+</button>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className=" text-center text-cartSubtotalPrice">
                          {subTotal(item)}$
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <div className="lg:w-1/3  rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Cart totals</h3>
          <div className="space-y-2 text-cartTotalText">
            <div className="flex justify-between border-b pb-2">
              <span>Total</span>
              <span>{totalPrice(items)}</span>
            </div>
          </div>

          <ConfirmOrder items={items} />
        </div>
      </section>
    </>
  );
}
