const awsServerlessExpress = require('aws-serverless-express');
const fs = require('fs');
const path = '/opt/nodejs/node_modules/';
const express = require('express')

const app = express();

app.get('/external-service-1', (req, res) => {
  res.json({ message: 'Hello from external service 1' });
});

app.get('/external-service-2', (req, res) => {
  res.json({ message: 'Hello from external service 2' });
});

const server = awsServerlessExpress.createServer(app);

exports.handler = (event, context) => {
  return awsServerlessExpress.proxy(server, event, context);
};
