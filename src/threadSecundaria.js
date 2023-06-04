const { parentPort } = require('worker_threads');
const axios = require('./request');

// Recebendo mensagens da thread principal
parentPort.on('message',async (message) => {
  console.log(`Mensagem da thread principal: ${message}`);

    const response = (await axios.get('/todos/1')).data

    // Enviando uma mensagem de volta para a thread principal
    parentPort.postMessage(`Olá, thread principal! userId: ${response.userId}, id: ${response.id}, title: ${response.title}, completed: ${response.completed}`);
});

