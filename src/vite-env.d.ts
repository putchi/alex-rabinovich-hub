/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_OWNER_NAME: string;
  readonly VITE_OWNER_TITLE: string;
  readonly VITE_LINKEDIN_URL: string;
  readonly VITE_GITHUB_URL: string;
  readonly VITE_SITE_TITLE: string;
  readonly VITE_SITE_DESCRIPTION: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
