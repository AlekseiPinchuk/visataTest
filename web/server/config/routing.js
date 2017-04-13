'use strict';

var express = require('express');
var path = require('path');
var router = express.Router();
var appConfig = require('./index');
var assetHashes = require('../../public/dist/asset-hashes.json');
var fs = require('fs');
var request = require('request');

exports.setup = function (config) {
    var app = config.express;
    var basePath = config.basePath;
    var controllersPath = path.join(basePath, 'controllers');

    // Static path
    app.use(express.static(path.join(basePath, "../public")));


    // Home page
    app.use(function(req, res) {
        var embeddedData = {
            siteUrl: appConfig.siteUrl,
            api: {
                url: appConfig.api.url
            },
            config: config
        };
        if (process.env.NODE_ENV == 'local') {
            var assetHashesPath = path.resolve(__dirname + '/../../public/dist/asset-hashes.json');
            assetHashes = JSON.parse(fs.readFileSync(assetHashesPath, 'utf8'));
        }

        request({
            method: 'get',
            uri: appConfig.api.url + '/get-config',
            json: true
        }, function (resError, resRes, resBody) {
            embeddedData.config = resBody.data;

            res.render("home", {
                assetHashes: assetHashes,
                embeddedData: embeddedData
            });
        });
    }, require(path.join(controllersPath, 'index')));
};
