'use strict';

const https = require('../../lib/https');

exports.get = async function (url, config){
    let result = {};
    let axiosUrl = url;
    if (config.params != undefined){
        let query = config.params.toString();
        axiosUrl = axiosUrl + '?' + query;
    }
    result["data"] = await https.request( 
        'GET', 
        axiosUrl,
        {
        headers: config.headers
        },
        {}
    );
    return result;
}

exports.post = async function (url, json, config){
    let result = {};
    result["data"] = await https.request( 
      'POST', 
      url,
      {
        headers: config.headers
      },
      JSON.stringify( json )
    );
    return result;
}