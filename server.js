/**
 * Created by Tridev on 02-06-2017.
 */
const express = require('express');
const morgan = require('morgan');
const app = express();
app.use(express.static("app"));
app.use(morgan('dev'));
const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {

    console.log("Listening on port", PORT);
});