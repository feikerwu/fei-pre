#! /usr/bin/env node

import sade from 'sade';
const { version } = require('../package.json');

import pre from './pre';

sade('pre [url]', true)
  .version(version)
  .describe('run performance in commandline')
  .example('pre https://example.com')
  .option('--no-cache', 'disable cache')
  .action(url => {
    pre(url);
  })
  .parse(process.argv);
