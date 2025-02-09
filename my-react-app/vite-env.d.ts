/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_SECRET_KEY: string;
    readonly BACKEND_URL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
