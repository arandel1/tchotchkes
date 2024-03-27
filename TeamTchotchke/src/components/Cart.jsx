export default function Cart() {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart((currItems) => [...currItems, product]);
  }

  return;
  <>
</>;
}
