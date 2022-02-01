#!/usr/bin/env node

const normalizePort = (val) => {
  const port = parseInt(val, 10);
  if (isNaN(port)) return val;
  if (port >= 0) return port;
  return false;
};

try {
  const { default: app } = require("../dist/app");
  const http = require("http");

  const port = normalizePort(process.env.PORT || "4000");
  app.set("port", port);

  const server = http.createServer(app);

  server.listen(port, () => console.log(`Listening on port ${port}`));
} catch (e) {
  // console.log(e);
}
