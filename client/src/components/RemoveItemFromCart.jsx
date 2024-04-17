

// create a function that will remove a product from the order model
// Fetch call
// 

export default function RemoveItemFromCart() {

  const baseUrl = 'http://localhost:8080/tchotchke/orders'
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch (`${baseUrl}/:id`, {
        method: 'DELETE',
        headers: { 'Content-Type' : 'application/json' },
        body: JSON.stringify(),
      })
    } catch (error)
  {}}
};