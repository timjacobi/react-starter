const createServer = require("./server");

const PORT = process.env.PORT || 3000;
const server = createServer(process.env);
server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
