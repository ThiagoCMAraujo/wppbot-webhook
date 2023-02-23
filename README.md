# Webhook Server

## Este repositório contém implementações para consumo de mensagens enviadas, assim recebendo todas as mensagens que forem enviadas pelo cliente e podendo também listar as mensagens.


### Webhook Server
Em seu servidor, será necessário ao menos dois endpoints:

- Para listar as mensagens enviadas de usuários, é necessário realizar uma request para o domínio do teasy-bot-backend https://example.com/listMessages, com os seguintes parâmetros:
{
body: {
id: número de telefone que deseja buscar,
date: data,
access_key: chave de acesso da empresa
}

Para receber as mensagens enviadas de usuários, é necessário criar uma requisição do tipo post com path https://example.com/receiveMessage.


