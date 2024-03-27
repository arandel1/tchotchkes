export default function Cart() {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart((currItems) => [...currItems, product]);
  }

  return;
  <>
  <div>
    {cart.map(item => (
      <div key={}>

      </div>
    ))}
  </div>
  Cart</>;
}
