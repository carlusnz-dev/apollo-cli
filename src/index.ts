#!/usr/bin/env node

import { Command } from 'commander';
import { intro, outro } from '@clack/prompts';

const program = new Command();

program
  .name('apollo')
  .description('Ferramenta de automação pessoal')
  .version('1.0.0');

program
  .command('test')
  .description('Teste para ver o cli funcionando!')
  .action(() => {
    intro('Iniciando Apollo API');
    console.log('Tudo configurado e rodando perfeitamente!');
    outro('Fechando...');
  });

program.parse(process.argv);
