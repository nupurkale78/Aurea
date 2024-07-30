import "../styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckOut } from "../app/CheckOut";
function MyApp({ Component, pageProps }) {
  <Head>
    <meta
      name="viewport"
      content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"
    />
  </Head>;
  useEffect(() => {
    console.log("I am useeffect from app.js");
  }, []);

  const [cart, setCart] = useState([]);
  const [reloadKey, setReloadKey] = useState(1);
  const addToCart = (item, qty, price) => {
    console.log("Add to cart");
    let newCart = cart;
    for (let index = 0; index < qty; index++) {
      newCart.push([item, price]);
    }
    console.log("Add to cart", newCart);
    setCart(newCart);
    setReloadKey(Math.random());
  };

  const removeFromCart = (item, qty) => {
    let newCart = cart;
    let index = newCart.indexOf(item);
    newCart.splice(index);
    setCart(newCart);
  };

  const clearCart = (item) => {
    setCart([]);
  };

  return (
    <>
      <Header key={reloadKey} cart={cart} />
      <Component
        cart={cart}
        removeFromCart={removeFromCart}
        addToCart={addToCart}
        clearCart={clearCart}
        {...pageProps}
      />
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
      <CheckOut
        cart={cart}
        removeFromCart={removeFromCart}
        addToCart={addToCart}
        clearCart={clearCart}
      />
      <Footer />
    </>
  );
}

export default MyApp;
