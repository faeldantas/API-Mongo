# API Inicial com Node.js e MongoDB

### **Descrição**
Este é um projeto inicial de uma API desenvolvida com **Node.js** e **MongoDB**. O objetivo desta API é demonstrar como aplicar os princípios da arquitetura REST em um ambiente simples, onde todas as funcionalidades estão concentradas em um único arquivo servidor.
 
 
### **Características**
- Construída com **Express.js** para gerenciamento de rotas.
- Utiliza **Mongoose** para a modelagem e interação com o banco de dados MongoDB.
- Baseada nos princípios REST:
  - Recursos bem definidos.
  - Métodos HTTP (GET, POST, PUT, DELETE) mapeados para operações de CRUD.
  - Uso de códigos de status HTTP adequados.

### **Estado Atual**
- **Versão inicial:**  
  A API está em um estágio básico, com todas as funcionalidades implementadas diretamente no arquivo principal do servidor.
  
- **Funcionalidades implementadas:**
  - Criação de registros no banco de dados.
  - Leitura de registros existentes.
  - Atualização de registros por ID.
  - Exclusão de registros por ID.

- **Limitações:**
  - Código centralizado no arquivo principal.
  - Sem divisão de responsabilidades (ex.: modelos, rotas e controladores separados).
  - Não possui autenticação ou validação avançada de dados.

### **Futuras Melhorias**
- Modularização do código:
  - Separar rotas, modelos e controladores.
- Implementação de autenticação com **JWT**.
- Adicionar validações mais robustas com **Joi** ou outras bibliotecas.
- Melhorar a documentação com ferramentas como **Swagger**.
- Testes automatizados com **Jest**.

### **Como Executar**
1. Certifique-se de que o **MongoDB** está rodando em sua máquina.
2. Instale as dependências:
   ```bash
   npm install
   ``` 
3. Inicie o servidor:
   ```bash
     node server.js
   ``` 
4. Acesse o servidor na porta:http://localhost:3000.
