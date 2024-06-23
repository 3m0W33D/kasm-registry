/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Workspace Configs',
    description: 'Configs for workspace images',
    icon: '/img/logo.svg',
    listUrl: 'https://3m0w33d.github.io/kasm-registry,
    contactUrl: 'https://github.com/3m0W33D/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
