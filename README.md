# freetech-api2

1.  Dependências instaladas
    1.1. Produção
         express	    Framework para criar a API RESTful
         mongoose	    ORM para conexão e manipulação do MongoDB
         cors	        Middleware para habilitar CORS (compartilhamento de recursos entre domínios)
         dotenv	        Carregar variáveis de ambiente do arquivo .env
         bcryptjs	    Criptografia de senhas (hashing)
         jsonwebtoken	Geração e validação de tokens JWT para autenticação 
    1.2. Desenvolvimento.
         nodemon	Reinicia automaticamente o servidor quando arquivos são alterados
         jest   	Framework de testes unitários
         supertest	Testes de integração para endpoints HTTP
2.  Alteração no script do package.json
        "scripts": {
        "start": "node server.js",
        "dev": "nodemon server.js",
        "test": "jest --runInBand"
    }