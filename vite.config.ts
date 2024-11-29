import { defineConfig, loadEnv } from "vite";

import tsconfigPaths from "vite-tsconfig-paths";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import vitePluginSingleSpa from "vite-plugin-single-spa";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

    const serverPort = Number(process.env.VITE_SERVER_PORT); // 서버포트
    const spaEntryPoints = "src/app/mfa.ts";
    const isMFA = mode === "mfa";

    return {
        plugins: [
            svelte(),
            tsconfigPaths(),
            isMFA &&
                vitePluginSingleSpa({
                    // single-spa 라이브러리 적용
                    serverPort,
                    spaEntryPoints,
                }),
        ],
        build: {
          // 빌드 설정
          target: 'esnext', // single-spa 애플리케이션은 최신 JavaScript 기능을 사용하도록 설정
          rollupOptions: {
            output: {
              exports: 'auto',
            },
          },
        },
    };
});
