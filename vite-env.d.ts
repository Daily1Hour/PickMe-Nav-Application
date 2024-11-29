/// <reference types="svelte" />
/// <reference types="vite/client" />

interface ImportMetaEnv {
    VITE_PARCEL_URL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
