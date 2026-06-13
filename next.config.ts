import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: isGitHubPages ? "export" : undefined,
  basePath: isGitHubPages ? "/Sapsolutionswebsite" : undefined,
  assetPrefix: isGitHubPages ? "/Sapsolutionswebsite/" : undefined,
  trailingSlash: true,
  images: {
    loader: isGitHubPages ? "custom" : "default",
    loaderFile: isGitHubPages ? "./src/imageLoader.ts" : undefined,
  },
};

export default nextConfig;
