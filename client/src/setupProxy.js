const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/enroll',
        createProxyMiddleware({
            target: 'https://yoga-form-9ncx.vercel.app',
            changeOrigin: true,
        })
    );
};

