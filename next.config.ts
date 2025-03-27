/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config: {
    watchOptions: { poll: number; aggregateTimeout: number };
  }) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };
    return config;
  },
  // Allow all hosts for development
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
