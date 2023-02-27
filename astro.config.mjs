import { defineConfig } from 'astro/config';
import {site} from "./src/config"


// https://astro.build/config
export default defineConfig({
  site: site.url,
  integrations: []
});