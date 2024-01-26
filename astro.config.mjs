import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import htmx from 'astro-htmx';
import node from '@astrojs/node';

import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), htmx(), alpinejs()],
  output: 'server',
  adapter: node({
    mode: 'standalone'
  })
});