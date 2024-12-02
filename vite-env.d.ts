/// <reference types="svelte" />
/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_PUBLIC_URL: string;
    readonly VITE_SERVER_PORT: number;
    readonly VITE_MF_TYPE: string;
    readonly VITE_PARCEL_URL: "application" | "parcel";
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
