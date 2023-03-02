import { createClient, SanityClient, type ClientConfig } from "@sanity/client";

export const config: ClientConfig = {
  projectId: "oir5cjyp",
  dataset: "production",
  useCdn: false,
  apiVersion: "2022-01-12",
  token: process.env.SANITY_AUTH_TOKEN
};

const client: SanityClient = createClient(config);

export default client;
