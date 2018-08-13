# n-express-monitor

[![npm version](https://badge.fury.io/js/%40financial-times%2Fn-express-monitor.svg)](https://badge.fury.io/js/%40financial-times%2Fn-express-monitor)
![npm download](https://img.shields.io/npm/dm/@financial-times/n-express-monitor.svg)
![node version](https://img.shields.io/node/v/@financial-times/n-express-monitor.svg)

[![CircleCI](https://circleci.com/gh/Financial-Times/n-express-monitor.svg?style=shield)](https://circleci.com/gh/Financial-Times/n-express-monitor)
[![Coverage Status](https://coveralls.io/repos/github/Financial-Times/n-express-monitor/badge.svg?branch=master)](https://coveralls.io/github/Financial-Times/n-express-monitor?branch=master)
[![Known Vulnerabilities](https://snyk.io/test/github/Financial-Times/n-express-monitor/badge.svg)](https://snyk.io/test/github/Financial-Times/n-express-monitor)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/Financial-Times/n-express-monitor/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/Financial-Times/n-express-monitor/?branch=master)
[![Dependencies](https://david-dm.org/Financial-Times/n-express-monitor.svg)](https://david-dm.org/Financial-Times/n-express-monitor)
[![devDependencies](https://david-dm.org/Financial-Times/n-express-monitor/dev-status.svg)](https://david-dm.org/Financial-Times/n-express-monitor?type=dev)

<br>

- [Terminology](#terminology)
  * [operation function](#operation-function)
  * [action function](#action-function)
- [Licence](#licence)

<br>

## Terminology

### operation function

Operation Function generally refers to a function with such signature `(meta, req, res) => {}` that can be enhanced by an Enhancer or converted to a Middleware. 

It has a similar signature to express middleware, while `next` is not needed, as it would be taken care of by `toMiddleware` convertor and `meta` is added to allow pass metadata conviniently to functions inside the scope, without mutating `req`, `res` and make the signature distinctive.

Based on the error handling behaviour, there're two types of Operation Function as below.

### action function

Operation Function generally refers to a function with such signature `(params, meta) => {}` that is friendly for logger, validator, etc. 

## Licence
[MIT](/LICENSE)
