const NodeGeocoder = require('node-geocoder');

const options = {
    provider: "mapquest",
    httpAdapter: 'https',
    apiKey: "uOnvB7DqS4C4VqjGJmhKKRnWAsM0si5R", // for Mapquest, OpenCage, Google Premier
    formatter: null // 'gpx', 'string', ...
};

const geocoder = NodeGeocoder(options);

module.exports = geocoder;
