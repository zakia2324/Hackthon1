import { client, urlFor } from "../../sanity";

export default async function ProductList() {
  // Fetch data from Sanity
  const query = `*[_type == "products"]`;
  const products = await client.fetch(query);

  return (
    <div>
      <h1>Product List</h1>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {products.map((product) => (
          <div
            key={product._id}
            style={{ border: "1px solid #ddd", padding: "10px", width: "200px" }}
          >
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <p>{product.description}</p>
            <p>Category: {product.category}</p>
            {product.image && (
              <img
                src={urlFor(product.image).width(200).url()}
                alt={product.name}
                style={{ width: "100%", height: "auto" }}
              />
            )}
          </div>

))}
      </div>
     </div>
  );
}
