const http = require('http');
const app = require('./app');

app.set('port', process.env.PORT || 5000);

const server = app.listen(app.get('port'), () => {
    console.log(`Server running → PORT ${server.address().port}`);
});