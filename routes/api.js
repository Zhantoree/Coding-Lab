const http = require("https");

const options = {
    "method": "GET",
    "hostname": "random-facts2.p.rapidapi.com",
    "port": null,
    "path": "/getfact",
    "headers": {
        "X-RapidAPI-Host": "random-facts2.p.rapidapi.com",
        "X-RapidAPI-Key": "e72ee60fe1msh66b5087fe77244ep1a2939jsn59353853ee20",
        "useQueryString": true
    }
};

const req = http.request(options, function (res) {
    const chunks = [];

    res.on("data", function (chunk) {
        chunks.push(chunk);
    });

    res.on("end", function () {
        const body = Buffer.concat(chunks);
        console.log(body.toString());
    });
});
res();

req.end();