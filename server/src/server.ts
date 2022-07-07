// rota = endereço completo

// recurso = entidade de acesso que no caso é users

// GET = buscar informação do back-end
// Post = criar uma informação no be
// Put = atualizar uma informação
// Delete = auto explciativo

// POST - localhost:3333/users = criar um usuario
// GET - localhost:3333/users - listar usuarios

// request params = parametros na propria rota que identificam um recurso
// query params = paramentors da propria rota, opicionais para filtro , paginação
// request body = parametros para criaçaõ e atualização de informações

import express from 'express';
import path from 'path';
import routes from './routes';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.listen(3333);