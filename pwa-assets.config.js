import { defineConfig } from "@vite-pwa/assets-generator/config";

export default defineConfig({
  preset: {
    transparent: {
      sizes: [64, 192, 512],
      favicons: [[64, "favicon.ico"]],
    },
    maskable: {
      sizes: [512],
      resizeOptions: {
        background: "black",
      },
    },
    apple: {
      sizes: [180],
      resizeOptions: {
        background: "black",
      },
    },
  },
  images: ["public/pwa-icon.png"],
});
