import { createClient } from "@sanity/client";
import config from "./sanity-config"

const client = createClient({
  projectId: config.projectId,
  dataset: config.dataset,
  useCdn: true,
  apiVersion: "2021-10-21",
  token: process.env.SANITY_AUTH_TOKEN,
});

export default client
