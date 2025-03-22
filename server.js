const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 3001;

app.use(cors());

const caldavProxy = createProxyMiddleware({
    target: process.env.REACT_APP_DAV_URL,
    changeOrigin: true,
    pathRewrite: {
        '^/caldav': '',
    },
    onProxyRes: (proxyRes, req, res) => {
        proxyRes.headers['Access-Control-Allow-Origin'] = '*';
        proxyRes.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS, PROPFIND';
        proxyRes.headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization';

        if (req.method === 'OPTIONS') {
            res.status(200).end();
            return;
        }
    },
});

app.use('/caldav', caldavProxy);

app.listen(port, () => {
    console.log(`CalDAV CORS proxy listening at http://localhost:${port}`);
});