import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
import { program } from 'commander';

// Resolve o diretório atual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

program
  .option('--config <path>', 'Path to the configuration file', path.resolve(__dirname, 'config/config.js'));

program.parse(process.argv);

const options = program.opts();
const args = ['db:migrate', '--config', options.config];

const sequelizeProcess = spawn('npx', ['sequelize-cli', ...args], { stdio: 'inherit' });

sequelizeProcess.on('error', (error) => {
  console.error('Failed to start subprocess:', error);
  process.exit(1);
});

sequelizeProcess.on('exit', (code) => {
  if (code !== 0) {
    console.error(`Subprocess exited with code ${code}`);
    process.exit(code);
  }
});