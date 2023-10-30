const path = require('path');
// view engine setup
function config(app) {
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'ejs');
}

module.exports = {
    config(app)
}