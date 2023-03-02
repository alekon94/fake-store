/* craco.config.js */
const path = require(`path`);

module.exports = {
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src/'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@theme': path.resolve(__dirname, 'src/theme'),
            '@hooks': path.resolve(__dirname, 'src/Hooks'),
            '@so_on': path.resolve(__dirname, 'src/so_on'),
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@services': path.resolve(__dirname, 'src/services'),
        },
    },
};
