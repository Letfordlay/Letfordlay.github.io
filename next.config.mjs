/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: "export",
    trailingSlash: true
	rewrites: async () => {
    return [
      {
        source: '/',
        destination: '/index.html',
      },
    ]
},
};

export default nextConfig;
