export default function Cart() {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart((currItems) => [...currItems, product]);
  }

  return (
    <div className="cart">
      {cart.map((item) => (
        <div key={product.id} className="product">
          <h4>{product.title}</h4>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
}
