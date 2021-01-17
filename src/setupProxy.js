const { createProxyMiddleware } = require('http-proxy-middleware');

const proxyConfig = createProxyMiddleware({
  target: 'https://api.dev.cloud.barbooksaustralia.com/code-challenge',
  logLevel: 'debug',
  changeOrigin: true,
});

module.exports = function (app) {
  app.use('/api', proxyConfig);
  app.use('/g', proxyConfig);
};
