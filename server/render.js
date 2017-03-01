const { renderToString } = require("react-dom/server");
const React = require("react");
module.exports = reactComponent => `<!DOCTYPE html>
    <html lang="en">
        <body>
            <div id="app">${renderToString(reactComponent)}</div>
            <script src="/public/bundle.js"></script>
        </body>
    </html>`;
