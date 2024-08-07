/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        APPLICATION_ID: process.env['APPLICATION_ID'],
        CLIENT_TOKEN: process.env['CLIENT_TOKEN'],
        SITE: process.env['SITE'],
        SERVICE: process.env['SERVICE'],
        ENV: process.env['ENV'],
    },
};

export default nextConfig;
