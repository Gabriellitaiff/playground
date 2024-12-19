const USERS = {
  regular: {
    username: 'teste',
    password: 'password123',
    message: 'Usuário teste logado',
  },
  blocked: {
    username: 'testeblock',
    password: 'password123',
    message: 'Usuário bloqueado!',
  },
  invalid: {
    username: 't3st3',
    password: 'password123',
    message: 'Usuário não encontrado!',
  },
  wrongPassword: {
    username: 'teste',
    password: 'p4ssw0rd123',
    message: 'Usuário ou senha estão incorretos!',
  },
};
module.exports = {
  USERS,
};
