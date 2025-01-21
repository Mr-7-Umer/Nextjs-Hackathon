import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "y06xxftt",
  dataset: "production",
  useCdn: true,
  apiVersion: "2025-01-13",
  token:
  'skqPGFvtugVDqEI86A18l8zv7yBcHRI96c8WCOyzyvP302ekQlyN2d40KBBUnebnnV41HvoHwkeoHhBjQSsEDagXiBx0HFmGUceZQmgEfTW7mMfLqKV30fOUv3w5tSMwYiWpa0AckEy7QkbTClQ4gRJ2ue51ki6NNmK4kQHDZC7MRQwMUbLx'

});

async function deleteProducts() {
  try {
    console.log("Fetching all products from Sanity...");

    // Fetch all documents of type 'product'
    const products = await client.fetch('*[_type == "product"]{_id}');

    if (products.length === 0) {
      console.log("No products found to delete.");
      return;
    }

    console.log(`Found ${products.length} products. Deleting...`);

    // Iterate over the products and delete each one
    for (const product of products) {
      await client.delete(product._id);
      console.log(`Deleted product with _id: ${product._id}`);
    }

    console.log("All products deleted successfully.");
  } catch (error) {
    console.error("Error deleting products:", error);
  }
}

deleteProducts();