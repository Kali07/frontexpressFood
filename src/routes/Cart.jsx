import Navbar from "../components/Navbar";
import { QuestionMarkCircleIcon, XMarkIcon } from "@heroicons/react/20/solid";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../reducers/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const handleRemoveItem = (item) => {
    // Dispatchez l'action removeFromCart avec l'élément à supprimer du panier
    dispatch(removeFromCart(item));
  };
  let total = 0;
  let delivryChip = 0;
  let totalBuy = 0;
  const cartItems = useSelector((state) => state.cart);
  console.log(cartItems);
  cartItems.map((items) => {
    total = total + items.price * items.quantity;
  });
  total > 10 ? (delivryChip = 0) : (delivryChip = 5);
  totalBuy = total + delivryChip;

  return (
    <>
      <Navbar />
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Mon Panier
          </h1>
          <div className="mt-8">
            <a
              href="/plats"
              className="mt-8 border-2 border-slate-800 px-4 py-3 bg-slate-800 text-white rounded-md"
            >
              Revenir sur le menu
            </a>
          </div>
          <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
            <section aria-labelledby="cart-heading" className="lg:col-span-7">
              <h2 id="cart-heading" className="sr-only">
                Items in your shopping cart
              </h2>

              <ul
                role="list"
                className="divide-y divide-gray-200 border-b border-t border-gray-200"
              >
                {cartItems.map((product, productIdx) => (
                  <li key={product.id} className="flex py-6 sm:py-10">
                    <div className="flex-shrink-0">
                      <img
                        src={product.img}
                        alt={product.img}
                        className="h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                      <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                        <div>
                          <div className="flex justify-between">
                            <h3 className="text-sm">
                              <a
                                href="#"
                                className="font-medium text-gray-700 hover:text-gray-800"
                              >
                                {product.name}
                              </a>
                            </h3>
                          </div>
                          <div className="mt-1 flex text-sm">
                            <p className="text-gray-500">{product.quantity}x</p>
                          </div>
                          <p className="mt-1 text-sm font-medium text-gray-900">
                            {(product.price * product.quantity).toFixed(2)}€ | (
                            {product.price}€ /u)
                          </p>
                        </div>

                        <div className="mt-4 sm:mt-0 sm:pr-9">
                          <div className="absolute right-0 top-0">
                            <button
                              type="button"
                              className="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500"
                              onClick={() => handleRemoveItem(product)}
                            >
                              <span className="sr-only">Remove</span>
                              <XMarkIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* <p className="mt-4 flex space-x-2 text-sm text-gray-700">
                        {product.inStock ? (
                          <CheckIcon
                            className="h-5 w-5 flex-shrink-0 text-green-500"
                            aria-hidden="true"
                          />
                        ) : (
                          <ClockIcon
                            className="h-5 w-5 flex-shrink-0 text-gray-300"
                            aria-hidden="true"
                          />
                        )}

                        <span>
                          {product.inStock
                            ? "In stock"
                            : `Ships in ${product.leadTime}`}
                        </span>
                      </p> */}
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            {/* Order summary */}
            <section
              aria-labelledby="summary-heading"
              className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
            >
              <h2
                id="summary-heading"
                className="text-lg font-medium text-gray-900"
              >
                Récapitulatif de la commande
              </h2>

              <dl className="mt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <dt className="text-sm text-gray-600">Total</dt>
                  <dd className="text-sm font-medium text-gray-900">
                    {total.toFixed(2)}€
                  </dd>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                  <dt className="flex items-center text-sm text-gray-600">
                    <span>Estimation de livraison</span>
                    <a
                      href="#"
                      className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">
                        Learn more about how shipping is calculated
                      </span>
                      <QuestionMarkCircleIcon
                        className="h-5 w-5"
                        aria-hidden="true"
                      />
                    </a>
                  </dt>
                  <dd className="text-sm font-medium text-gray-900">
                    {delivryChip.toFixed(2)}€
                  </dd>
                </div>

                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                  <dt className="text-base font-medium text-gray-900">
                    Total de la commande
                  </dt>
                  <dd className="text-base font-medium text-gray-900">
                    {total > 0 ? `${totalBuy.toFixed(2)}€` : "Panier vide"}
                  </dd>
                </div>
              </dl>

              <div className="mt-6">
                <button
                  type="submit"
                  className={`w-full rounded-md border border-transparent bg-slate-800 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-gray-50 ${
                    total > 0
                      ? ""
                      : "pointer-events-none opacity-50 cursor-not-allowed"
                  }`}
                  disabled={total <= 0}
                >
                  Commander
                </button>
              </div>
            </section>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
