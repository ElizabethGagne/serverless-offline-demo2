'use strict';

const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies

let options = {};

// connect to local DB if running offline
if (process.env.IS_OFFLINE) {
  options = {
    region: 'localhost',
    endpoint: process.env.DYNAMODB_ENDPOINT
  };
}

const client = new AWS.DynamoDB.DocumentClient(options);

module.exports = client;
