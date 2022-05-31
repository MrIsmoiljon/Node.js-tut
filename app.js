const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("<h1>Welcome man</h1>");
  }
  if (req.url === "/about") {
    res.end("<h1>Welcome about page</h1>");
  }
});

server.listen(3000, console.log("server is running on port: 3000"));
