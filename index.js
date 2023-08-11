#!/usr/bin/env node

/** 
 * Author: Mitch Allen (https://mitchallen.com)
 */

import { readFileSync, writeFileSync, readdirSync } from 'fs';
import * as yaml from 'js-yaml';

function main() {

  // Get the input file argument
  const [, , inputYamlFile, flag] = process.argv;

  // If the user didn't pass in an argument, show usage
  if (!inputYamlFile) {
    console.log('USAGE: ((alias) | node index.js) (file.yaml) (-min) > ~/output.json');
    return;
  }

  // Check for min flag
  const minFlag = ['-m', '--m', '-min'].includes(flag);
  // Read the YAML file
  const yamlText = readFileSync(inputYamlFile, 'utf8')
  // Convert it to JSON
  const jsonObject = yaml.load(yamlText)
  // Minimize it
  const minJson = JSON.stringify(jsonObject)
  // Format it
  const prettyJson = JSON.stringify(jsonObject, null, 2)
  // Use regular version if min flag was set
  const output = minFlag ? minJson : prettyJson;
  // Echo it to the console
  console.log(output);
}

main();