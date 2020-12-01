### Explicação do projeto

## Estrutura de Dados

* ## Usuário
  - Id
  - Name
  - Email: "Unique"
  - Nickname: "Unique"
  - Password : "Minimo 6 caracteres"

* ## Imagens
  - Id
  - Subtitle
  - Author 
  - Date
  - File  
  - Tags  
  - Collection  

**Autenticação**

Primeiro, precisamos ter o controle de quem consegue criar e ler os conteúdos que criamos, e para isso, faremos um sistema de autenticação simples. Quem usar a aplicação deve conseguir se cadastrar e fazer login, e apenas após fazer seu login, deve ser capaz de executar as ações criadas abaixo.

**Criação da imagem**

O sistema vai gerenciar imagens . Então, antes de mais nada, precisamos poder **criar** imagens em nossa aplicação. Para isso, basta que as informações necessárias sejam preenchidas. As imagens devem ser guardadas em um banco de dados.

**Leitura de imagem**

Para gerenciar o conteúdo, precisamos acessá-lo. Para isso, haverão caminhos para a leitura destes. Será necessário ler os conteúdos das seguintes formas:

- Uma lista completa, com tudo que foi criado até aqui;
- Uma consulta de detalhe, exibindo as informações de apenas um conteúdo;

---

**Criação de Tabelas - MySql**

```sql
CREATE TABLE artGalleryUser (
    Id VARCHAR(255),
    Name VARCHAR(255),
    Email VARCHAR(255),
    Nickname VARCHAR(255),
    Password VARCHAR(255),
);
```

```sql
CREATE TABLE artGalleryImage (
    Id VARCHAR(255),
    Subtitle VARCHAR(255),
    Author VARCHAR(255),
    Date VARCHAR(255),
    File VARCHAR(255),
    Tags VARCHAR(255),
    Collection VARCHAR(255),
);
```

```sql
CREATE TABLE artGaleryUserImageRelation (
    task_id VARCHAR(255),
    responsible_user_id VARCHAR(255),
    FOREIGN KEY (task_id) REFERENCES TodoListTask(id),
    FOREIGN KEY (responsible_user_id) REFERENCES TodoListUser(id)
);
```

---

**Endpoints**

* ## Criar Usuário
  - Método: POST
  - Path: "/user"
  - Body:
    - name (obrigatório)
    - email (obrigatório)
    - nickname (obrigatório)
    - password (obrigatório)   
 
 * ## Criar Imagem
  - Método: POST
  - Path: "/image"
  - Body:
    - id: " ",
	- subtitle: " ",
	- author: " ",
	- date: Date,
	- file: " ",
	- tags: [ ],
	- collection: " "

 * ## Leitura Imagem
  - Método: GET
  - Path: "/image/:id"

