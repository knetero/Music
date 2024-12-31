/** @type {import('next').NextConfig} */


const i18n = {
    locales: ['en', 'fr', 'pl', 'ja', 'ar', 'de', 'nl', 'es', 'it'],
    defaultLocale: 'en',
};

const nextConfig = {
    i18n,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**', // Wildcard for any hostname
            },
        ],
    },
    webpack: (config) => {
        config.resolve.fallback = {
            ...config.resolve.fallback,
            fs: false
        };
        return config;
    },
};

export default nextConfig;