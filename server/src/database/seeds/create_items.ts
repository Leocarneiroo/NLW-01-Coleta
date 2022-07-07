import { Knex } from 'knex';

export async function seed(knex: Knex) {
  await knex('items').insert([
    {title: 'Lâmpada', image: 'lampada.svg'},
    {title: 'Pilhas e Baterias', image: 'bateria.svg'},
    {title: 'Papéis e Papelão', image: 'papeis-papelao.svg'},
    {title: 'Resíduos Eletrônicos', image: 'eletronico.svg'},
    {title: 'Resíduos Orgânicos', image: 'organico.svg'},
    {title: 'Óleo de Cozinha', image: 'oleo.svg'},
  ]);
}