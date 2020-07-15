import path from 'path'
import express from 'express'
const app = express(),
            DIST_DIR = __dirname,
            HTML_FILE = path.join(DIST_DIR, 'index.html')

app.use(express.static(DIST_DIR))

app.get('*', (req, res) => {
    res.sendFile(HTML_FILE)
})

// Setup server
const server = app.listen(process.env.PORT || 1234, '127.0.0.1', () => {
    console.log('Express Server Listening on Localhost@Port ' + server.address().port)
  });
