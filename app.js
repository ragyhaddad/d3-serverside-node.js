const express = require('express');
const app = express()
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
var d3 = require('d3');
var fs = require('fs');
var path = require('path');
var appDir = path.dirname(require.main.filename);


/* Allow Cross-Origin request if you want to use your server to do AJAX requests on client-side */
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


/* Set up a public directory to carry your scaffold */
app.use(express.static('public'))


app.get('/',(req,res) =>{
    /* Virtual Console Set Up */
    const virtualConsole = new jsdom.VirtualConsole();
    virtualConsole.sendTo(console);
    const dom = new JSDOM(fs.readFileSync(`${appDir}/public/scaffold.html`), { virtualConsole });
    /* Select element from the scaffold.html in public/scaffold.html */
    const chartContainer = d3.select(dom.window.document.querySelector('.data-display'));


    //SVG CODE GOES HERE




    //          D3 CODE         //


    var width = 800;
    var height = 100;
    /* Create an SVG element and append to the chartContainer */
    var svg = chartContainer.append('svg').attr('width',width).attr('height',height);

    //SVG CODE ENDS HERE
  
       

    
    /* Send HTTP response carrying your SVG */
    res.send(chartContainer.html());

});

app.listen(3000,()=>{
    console.log('Server running on port 3000');
})