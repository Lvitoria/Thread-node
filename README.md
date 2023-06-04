# Threads no Node.js com worker_threads

Este projeto demonstra o uso de threads no Node.js utilizando o módulo `worker_threads`. Ele consiste em duas threads: uma thread principal e uma thread secundária, que se comunicam entre si enviando mensagens.


## Pré-requisitos

Liste aqui os pré-requisitos necessários para executar o projeto, como:

- Node.js 16.13.2
- axios


## Instalação

1. Clone este repositório:

~~~~shell
git clone https://github.com/seu-usuario/seu-projeto.git
~~~~


2. Navegue até o diretório do projeto:

3. Instale as dependências:

~~~~shell
npm i
~~~~



## Uso

Para executar o projeto e ver as threads em ação, siga estas etapas:

1. No terminal, execute o seguinte comando para iniciar a aplicação:

~~~~shell
npm start
~~~~


2. Observe a saída no terminal. A thread principal irá iniciar uma nova thread secundária, enviar uma mensagem para ela e receber uma resposta.

3. A mensagem da thread secundária será exibida no terminal.

4. A mensagem de volta da thread secundária para a thread principal será exibida no terminal.

## Entendendo o Código

O projeto consiste em dois arquivos:

- `threadPrincipal.js`: Este arquivo contém a thread principal, que cria a thread secundária e se comunica com ela. Ele envia uma mensagem para a thread secundária usando `worker.postMessage('mensagem')` e recebe a resposta no evento `worker.on('message', callback)`.

- `threadSecundaria.js`: Este arquivo contém a thread secundária, que recebe a mensagem da thread principal e realiza uma solicitação HTTP usando o módulo `axios`. Em seguida, a thread secundária envia uma mensagem de volta para a thread principal usando `parentPort.postMessage('mensagem')`.

## Contribuição

Sinta-se à vontade para contribuir com este projeto. Para isso, siga estas etapas:

1. Faça um fork deste repositório.

2. Crie uma branch para a sua feature:

~~~~shell
git checkout -b minha-feature
~~~~

3. Faça as alterações desejadas e faça commit delas:

~~~~shell
git commit -m 'Implementação da minha feature'
~~~~

4. Faça push para o repositório remoto:

~~~~shell
git push origin minha-feature
~~~~


5. Abra um Pull Request para que possamos revisar e incorporar suas alterações.

