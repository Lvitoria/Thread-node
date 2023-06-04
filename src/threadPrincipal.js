const { Worker } = require('worker_threads');

// Criando uma nova thread
const worker = new Worker('./src/threadSecundaria.js');

// Recebendo mensagens da thread secundária
worker.on('message', message => {
  console.log(`Mensagem da thread secundária: ${message}`);
});

// Enviando uma mensagem para a thread secundária
worker.postMessage('Olá, thread secundária!');