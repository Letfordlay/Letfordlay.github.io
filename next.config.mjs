/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: "export",
    trailingSlash: true
	async rewrites() {
		return [
			{
				source: '/',
				destination: '/index.html',
			},
		]
	},
};

export default nextConfig;
