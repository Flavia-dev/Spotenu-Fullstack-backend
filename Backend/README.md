### Explicação do projeto

## Estrutura de Dados

* ## Usuário
  - Id
  - Name
  - Email: "Unique"
  - Nickname: "Unique"
  - Password : "Minimo 6 caracteres"

* ## Musicas
	- id
	- title
	- author
	- date
	- file
	- genre
	- album

**Autenticação**

Primeiro, precisamos ter o controle de quem consegue criar e ler os conteúdos que criamos, e para isso, faremos um sistema de autenticação simples. Quem usar a aplicação deve conseguir se cadastrar e fazer login, e apenas após fazer seu login, deve ser capaz de executar as ações criadas abaixo.

**Criação da musica**

O sistema vai gerenciar imagens . Então, antes de mais nada, precisamos poder **criar** musicas em nossa aplicação. Para isso, basta que as informações necessárias sejam preenchidas. As musicas devem ser guardadas em um banco de dados.

**Leitura de mpúsica**

Para gerenciar o conteúdo, precisamos acessá-lo. Para isso, haverão caminhos para a leitura destes. Será necessário ler os conteúdos das seguintes formas:

- Uma lista completa, com tudo que foi criado até aqui;
- Uma consulta de detalhe, exibindo as informações de apenas um conteúdo;

---

**Criação de Tabelas - MySql**

```sql
CREATE TABLE Spotenu_User (
    Id VARCHAR(255) PRIMARY KEY,
    Name VARCHAR(255) NOT NULL,
    Email VARCHAR(255) UNIQUE NOT NULL,
    Nickname VARCHAR(255) UNIQUE NOT NULL,
    Password VARCHAR(255),
);
```

```sql
CREATE TABLE Spotenu_Music (
    Id VARCHAR(255) NOT NULL PRIMARY KEY,
    Title VARCHAR(255)NOT NULL,
    Author VARCHAR(255)NOT NULL,
    Date VARCHAR(255),
    File VARCHAR(255),
    Genre VARCHAR(255),
    Album VARCHAR(255),
    
);
```

```sql
CREATE TABLE Spotenu_MusicUserRelation (
    User_id VARCHAR(255),
    Music_id VARCHAR(255),
    PRIMARY KEY (User_id, Music_id)
    FOREIGN KEY (User_id) REFERENCES Spotenu_User(id),
    FOREIGN KEY (responsible_user_id) REFERENCES Spotenu_Music(id)
);
```

---

**Endpoints**

* ## Login
  - Método: POST
  - Path: "/login"
  - Body:
    - name (obrigatório)
    - email (obrigatório)

* ## Criar Usuário
  - Método: POST
  - Path: "/SignUp"
  - Body:
    - name (obrigatório)
    - email (obrigatório)
    - nickname (obrigatório)
    - password (obrigatório)   
 
 * ## Criar Música
  - Método: POST
  - Path: "/music"
  - Body:
	- id: string,
	- title: string,
	- author: string,
	- date: Date,
	- file: string,
	- genre: string[],
	- album: string

 * ## Leitura Música
  - Método: GET
  - Path: "/music/:id"

  

