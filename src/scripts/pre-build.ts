const fs = require('fs');
require('dotenv').config();

const targetPath = './src/environment.ts';
const envConfigFile = `export const environment = {
  baseUrl: '${process.env['BASE_URL']}',
  production: '${process.env['PRODUCTION']}',
};
`;

fs.writeFileSync(targetPath, envConfigFile);
