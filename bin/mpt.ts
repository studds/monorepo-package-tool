#!/usr/bin/env node

import yargs from 'yargs';
import { populatePackageJson } from '../src';
import { resolve } from 'path';

const { rootModuleDir, destDir, scopeDepsArePeers } = yargs
    .option('rootModuleDir', {
        type: 'string',
        description:
            'Path to submodule root directory - will search for package.json files under here',
        required: true,
        default: 'packages',
    })
    .option('destDir', {
        type: 'string',
        description:
            'Output dir - if missing, will attempt to derive from tsconfig.json',
        required: false,
        default: 'dest',
    })
    .option('scopeDepsArePeers', {
        type: 'boolean',
        description:
            'Output dir - if missing, will attempt to derive from tsconfig.json',
        required: false,
        default: false,
    })
    .parse();

populatePackageJson(resolve(rootModuleDir), destDir, { scopeDepsArePeers });
