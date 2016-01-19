const express	= require('express');
const path	= require('path');
const favicon	= require('serve-favicon');

const app	= express();

app.set('port', (process.env.PORT || 3030));

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

app.listen(app.get('port'), () => {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});
