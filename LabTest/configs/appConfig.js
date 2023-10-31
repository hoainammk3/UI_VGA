const path = require('path');
// view engine setup
const config =  (app) => {
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'ejs');
}

module.exports = {
    config,
}