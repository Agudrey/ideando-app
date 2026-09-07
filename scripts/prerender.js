const fs = require('fs');
const path = require('path');
const http = require('http');
const puppeteer = require('puppeteer');

const BUILD_DIR = path.join(__dirname, '..', 'build');
const PORT = 45678;

const ROUTES = [
  '/',
  '/organizacion-de-eventos-bogota',
  '/eventos-corporativos-bogota',
  '/eventos-sociales-y-culturales-bogota',
  '/branding-y-activaciones-de-marca-bogota',
  '/organizacion-de-bodas-y-quince-anos-bogota',
  '/servicios-para-eventos-bogota',
  '/alquiler-de-mobiliario-para-eventos-bogota',
  '/alquiler-de-sonido-y-luces-para-eventos-bogota',
  '/catering-y-refrigerios-para-eventos-bogota',
  '/coffee-break-para-eventos-bogota',
  '/logistica-y-produccion-de-eventos-bogota',
];

const MIME_TYPES = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.mp4': 'video/mp4',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain',
  '.xml': 'application/xml',
};

function getContentType(filePath) {
  return MIME_TYPES[path.extname(filePath).toLowerCase()] || 'application/octet-stream';
}

function startStaticServer() {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      let requestPath = decodeURIComponent(req.url.split('?')[0]);

      if (requestPath.endsWith('/')) {
        requestPath += 'index.html';
      }

      let filePath = path.join(BUILD_DIR, requestPath);

      if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
        filePath = path.join(BUILD_DIR, 'index.html');
      }

      fs.readFile(filePath, (error, content) => {
        if (error) {
          res.writeHead(404);
          res.end('Not found');
          return;
        }

        res.writeHead(200, { 'Content-Type': getContentType(filePath) });
        res.end(content);
      });
    });

    server.listen(PORT, () => resolve(server));
  });
}

function writeRouteHtml(route, html) {
  if (route === '/') {
    fs.writeFileSync(path.join(BUILD_DIR, 'index.html'), html, 'utf8');
    return;
  }

  const routeDir = path.join(BUILD_DIR, route.replace(/^\//, ''));
  fs.mkdirSync(routeDir, { recursive: true });
  fs.writeFileSync(path.join(routeDir, 'index.html'), html, 'utf8');
}

async function prerenderRoute(page, route) {
  const url = `http://127.0.0.1:${PORT}${route}`;
  await page.goto(url, { waitUntil: 'networkidle0', timeout: 120000 });
  await page.waitForSelector('#root', { timeout: 30000 });
  await page.waitForFunction(
    () => document.querySelector('#root')?.innerHTML.trim().length > 0,
    { timeout: 30000 }
  );
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const html = await page.content();
  writeRouteHtml(route, html);
  console.log(`Pre-rendered: ${route}`);
}

async function prerender() {
  if (!fs.existsSync(BUILD_DIR)) {
    console.error('Build directory not found. Run react-scripts build first.');
    process.exit(1);
  }

  const server = await startStaticServer();
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1366, height: 900 });

    for (const route of ROUTES) {
      await prerenderRoute(page, route);
    }

    console.log('Pre-rendering completed successfully.');
  } finally {
    await browser.close();
    server.close();
  }
}

prerender().catch((error) => {
  console.error('Pre-rendering failed:', error);
  process.exit(1);
});
