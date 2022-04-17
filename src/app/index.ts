import load from './load'
import fs from 'fs';

const PATH = '--path'
const VERSION = '--version'
const myConsole = new console.Console(fs.createWriteStream('/home/yangchao/mkdp_ycyi.log'));

const { argv = [] }: { argv: string[] } = process

const param = argv[2]

if (param === PATH) {
  load(argv[3]).run()
  myConsole.log(argv[3]);
} else if (param === VERSION) {
  // tslint:disable-next-line
  console.log('0.0.9')
}
