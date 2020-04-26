const app = require('./app');
const port = process.env.Port || 5001; 
app.listen(port, () => console.log(`Server started on port ${port} `));