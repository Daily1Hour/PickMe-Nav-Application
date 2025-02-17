import { defineConfig, loadEnv } from "vite";

import tsconfigPaths from "vite-tsconfig-paths";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import vitePluginSingleSpa, { SingleSpaPluginOptions } from "vite-plugin-single-spa";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
    // 환경변수 증설
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

    const serverPort = Number(process.env.VITE_SERVER_PORT); // 서버 포트

    const plugins = [
        svelte({ emitCss: false }), // svelte 라이브러리 적용
        tsconfigPaths(), // tsconfig.json의 paths 설정을 적용,
    ];

    if (mode === "single-spa") {
        // single-spa 옵션 설정
        let vitePluginSingleSpaOptions: SingleSpaPluginOptions = {
            serverPort,
            spaEntryPoints: "src/app/main.ts",
        };

        // single-spa 빌드 진입점 설정
        switch (process.env.VITE_MF_TYPE) {
            case "application":
                vitePluginSingleSpaOptions.spaEntryPoints = "src/app/application.ts";
                break;
            case "parcel":
                vitePluginSingleSpaOptions.spaEntryPoints = "src/app/parcel.ts";
                break;
        }

        plugins.push(vitePluginSingleSpa(vitePluginSingleSpaOptions)); // single-spa 라이브러리 적용
    }
    // vite 설정
    return {
        plugins,
        build: {
            cssCodeSplit: false, // css 코드 분할 여부
            emptyOutDir: false, // 빌드시 기존 파일 삭제 여부
            target: "esnext", // 빌드 대상
        },
        server: {
            // 개발 서버 설정
            port: serverPort,
            cors: true,
        },
        preview: {
            port: serverPort,
        },
        base: process.env.VITE_PUBLIC_URL,
    };
});
