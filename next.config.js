/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // images.unoptimazed: false,
  serialize: (value) => {
    if (typeof value === 'object' && value !== null) {
      return JSON.stringify(value);
    }
    return value;
  },
}

module.exports = nextConfig
