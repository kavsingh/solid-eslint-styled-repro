import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
	build: { sourcemap: true },
	plugins: [solidPlugin()],
	resolve: { conditions: ["development", "browser"] },
});
