/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  serialize: (value) => {
    if (typeof value === 'object' && value !== null) {
      return JSON.stringify(value);
    }
    return value;
  },
}

module.exports = nextConfig
