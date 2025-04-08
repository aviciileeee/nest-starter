// Copyright (c) 2025 Aviciileeee<lx_ashin@aliyun.com>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { resolve } from 'node:path';
import * as _ from 'lodash';
import * as jsYaml from 'js-yaml';
import { readFileSync } from 'node:fs';

const env = process.env.NODE_ENV;
const envFilePath = resolve(__dirname, `../config/config.${env}.yaml`);
const baseFilePath = resolve(__dirname, '../config/config.yaml');
export default () => {
  return _.merge(
    jsYaml.load(readFileSync(baseFilePath, 'utf-8')),
    jsYaml.load(readFileSync(envFilePath, 'utf-8')),
  );
};
