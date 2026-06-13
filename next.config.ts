import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const REPO = "/Sapsolutionswebsite";

const nextConfig: NextConfig = {
  output: isGitHubPages ? "export" : undefined,
  basePath: isGitHubPages ? REPO : undefined,
  assetPrefix: isGitHubPages ? `${REPO}/` : undefined,
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: isGitHubPages ? REPO : "",
  },
  images: {
    loader: isGitHubPages ? "custom" : "default",
    loaderFile: isGitHubPages ? "./src/imageLoader.ts" : undefined,
  },
};

export default nextConfig;
