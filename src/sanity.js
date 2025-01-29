import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "qi8uih0t", // Replace with your actual project ID
  dataset: "production", // Replace with your dataset name
  apiVersion: "2023-01-01", // Use latest API version
  useCdn: true, // For caching data
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
