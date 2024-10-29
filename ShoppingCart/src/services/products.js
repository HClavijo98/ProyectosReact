export async function searchProducts () {
  try {
    const response = await fetch('https://dummyjson.com/products')
    const json = await response.json()

    const products = json.products

    return products?.map(product => ({
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: product.quantity,
      description: product.description,
      category: product.category,
      image: product.thumbnail
    }))
  } catch (e) {
    throw new Error('Error searching products')
  }
}
