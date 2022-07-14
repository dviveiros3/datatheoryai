/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    //enter the domain or subdomain where you have WordPress installed
    domains: ['wp-backend.datatheoryai.com'],
    loader: "imgix",
    path: "",
  },
};