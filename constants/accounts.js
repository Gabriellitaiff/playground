const ACCOUNTS = {
  valid: {
    nome: 'Gabriel Litaiff',
    email: 'gabriel@email.com',
    senha: '1234567g',
    pais: 'brazil',
    genero: 'Masculino',
    message: 'O formulário foi enviado com',
  },
  completeRegistration: {
    nome: 'Bruno',
    email: 'bruno@123email.com',
    senha: '1234567b',
    pais: 'brazil',
    genero: 'Masculino',
    hobbies: ['Ler', 'Jogos', 'Viajar'],
    message: 'O formulário foi enviado com',
  },
  invalid: {
    nome: 'Maria Souza',
    email: 'email-invalido.com',
    senha: '1234mm',
    pais: 'portugal',
    genero: 'Feminino',
    hobbies: ['Cantar', 'Ler', 'Viajar'],
  },
};
module.exports = {
  ACCOUNTS,
};
