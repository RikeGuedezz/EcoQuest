# 🌿 EcoQuest

O **EcoQuest** é uma aplicação web educacional sobre sustentabilidade. O site reúne conteúdos informativos, videoaulas e questionários sobre temas ambientais, além de autenticação de participantes e um painel administrativo para acompanhamento dos resultados.

## 1. Tecnologias utilizadas

### Front-end

- **HTML5** — estrutura das páginas.
- **CSS3** — estilos, identidade visual e responsividade.
- **JavaScript (ES modules / Vanilla JavaScript)** — interatividade, lógica dos quizzes, autenticação e comunicação com o Supabase.
- **Supabase JavaScript Client v2** — biblioteca utilizada no navegador para acessar os serviços do Supabase.

O projeto utiliza JavaScript puro, sem frameworks de interface como React, Angular ou Vue.

### Back-end e serviços

O back-end utiliza o **Supabase (Backend as a Service)** para autenticação e gerenciamento do banco de dados.

- **Supabase Auth:** cadastro e login com e-mail e senha.
- **Supabase Database:** acesso ao banco PostgreSQL.
- **Row Level Security (RLS):** políticas que restringem o acesso aos registros.

Não há um servidor próprio tradicional desenvolvido em Node.js ou outra tecnologia neste projeto. Os serviços de back-end são fornecidos pela infraestrutura do Supabase.

O sistema não possui atualmente a funcionalidade de envio automático dos resultados dos quizzes por e-mail.

### Banco de dados

O banco utilizado é o **PostgreSQL**, hospedado no Supabase. Sua estrutura e suas regras são definidas em **SQL**. As funções do banco presentes no `schema.sql` utilizam SQL e PL/pgSQL.

Principais tabelas:

- `profiles` — dados básicos dos participantes.
- `resultados` — resultados dos quizzes, como acertos, total de questões, pontos, percentual e data.
- `admins` — e-mails autorizados a acessar o painel administrativo.

O esquema também define:

- Relacionamento entre `profiles` e `auth.users`.
- Criação automática do perfil por meio de trigger.
- Funções `email_cadastrado()` e `is_admin()`.
- Políticas RLS para proteger perfis e resultados.

## 2. Estrutura do projeto

```text
EcoQuest/
├── index.html
├── cadastro.html
├── conteudo.html
├── quiz.html
├── admin.html
├── css/
│   └── style.css
├── js/
│   ├── auth.js
│   ├── data.js
│   ├── layout.js
│   └── supabase.js
└── supabase/
    └── schema.sql
```

### Principais arquivos

| Arquivo | Responsabilidade |
|---|---|
| `index.html` | Página inicial |
| `cadastro.html` | Cadastro e login dos participantes |
| `conteudo.html` | Exibição dos conteúdos educativos |
| `quiz.html` | Seleção, execução e registro dos quizzes |
| `admin.html` | Painel administrativo e consulta dos resultados |
| `css/style.css` | Estilos e identidade visual |
| `js/data.js` | Conteúdos educativos e perguntas dos quizzes |
| `js/supabase.js` | Inicialização do cliente Supabase |
| `js/auth.js` | Verificação de sessão e permissão administrativa |
| `js/layout.js` | Cabeçalho, rodapé e elementos compartilhados |
| `supabase/schema.sql` | Estrutura inicial do banco, funções, trigger e políticas RLS |

## 3. Como executar localmente

### Pré-requisitos

- Visual Studio Code (ou outro editor).
- Navegador atualizado.
- Extensão **Live Server** no VS Code.

### Passos

1. Clone o repositório ou baixe o ZIP pelo GitHub.
2. Extraia a pasta do projeto.
3. Abra a pasta `EcoQuest` no Visual Studio Code.
4. Instale a extensão Live Server, caso ainda não esteja instalada.
5. Abra `index.html` e clique em **Go Live**.
6. O site será aberto no navegador, normalmente em `http://localhost:5500`.

A aplicação utiliza o projeto Supabase configurado em `js/supabase.js`. Portanto, as funcionalidades que dependem do Supabase precisam que esse projeto esteja ativo e corretamente configurado.

## 4. Configuração do Supabase

### Conexão do front-end

O arquivo `js/supabase.js` inicializa o cliente usando a URL do projeto e a chave pública (*publishable/anon*).

A chave pública é utilizada no navegador; a proteção dos dados deve ser feita pelas políticas RLS e pelas permissões do banco. **Nunca coloque uma chave `service_role` no front-end ou em arquivos públicos do repositório.**

Não substitua as credenciais do projeto sem confirmar que a intenção é conectar a aplicação a outro projeto Supabase.

### Banco de dados

O arquivo `supabase/schema.sql` contém o esquema inicial. Para utilizá-lo em um projeto novo:

1. Acesse o painel do Supabase.
2. Abra **SQL Editor**.
3. Crie uma nova consulta.
4. Execute o conteúdo de `supabase/schema.sql`.

**Atenção — coluna `tema`:** o código atual de `quiz.html` e `admin.html` grava e consulta a coluna `tema` da tabela `resultados`, mas essa coluna não está incluída no `schema.sql` deste repositório. Em uma instalação nova, execute também esta migração no SQL Editor:

```sql
alter table public.resultados
add column if not exists tema text;
```

### Administradores

Para autorizar um administrador, insira o e-mail correspondente na tabela `admins`, pelo Table Editor ou pelo SQL Editor:

```sql
insert into public.admins (email)
values ('email-do-administrador@exemplo.com');
```

Substitua o endereço pelo e-mail real da conta que deverá ter acesso ao painel. A verificação administrativa é realizada pela função `is_admin()`.

### Autenticação

A página `cadastro.html` oferece dois fluxos:

- **Primeiro acesso:** cadastro com nome, e-mail e senha.
- **Já tenho cadastro:** login com e-mail e senha.

A autenticação é realizada pelo Supabase Auth. O cadastro também envia o nome como metadado, utilizado pelo trigger `novo_usuario()` para criar o perfil em `profiles`.

A configuração do provedor de e-mail e das confirmações de cadastro deve ser compatível com o fluxo de autenticação desejado no painel do Supabase.

## 5. Repositório, hospedagem e deploy

### Repositório

O código-fonte principal está hospedado no GitHub:

https://github.com/RikeGuedezz/EcoQuest

O Git é utilizado para versionar o código e registrar as alterações feitas no projeto.

### Hospedagem

O site está hospedado na **Vercel**, integrada ao repositório do GitHub.

### Fluxo de atualização

O fluxo de publicação configurado para o projeto é:

1. Realizar as alterações localmente, por exemplo, no Visual Studio Code.
2. Salvar e testar as modificações.
3. Registrar as alterações com `git add` e `git commit`.
4. Enviar as alterações ao GitHub com `git push`.
5. A Vercel identifica uma atualização na branch configurada para produção e inicia o deploy.
6. Quando o deploy termina com sucesso, a versão atualizada fica disponível no endereço publicado pela Vercel.

O nome da branch de produção, o domínio e outras opções específicas de publicação devem ser conferidos nas configurações do projeto na Vercel. O código-fonte não contém essas configurações da conta.

## 6. Cuidados ao realizar alterações

- Preserve a estrutura de pastas e os caminhos dos arquivos importados.
- Ao adicionar ou editar conteúdos e perguntas, confira a estrutura existente em `js/data.js`.
- Não remova as políticas RLS nem exponha chaves privadas.
- Ao alterar a estrutura do banco, atualize também o SQL de instalação/migração e confira os campos utilizados em `quiz.html` e `admin.html`.
- Depois de modificar o projeto, teste cadastro, login, carregamento dos conteúdos, quizzes, gravação dos resultados e painel administrativo.

## 7. Resumo da arquitetura

| Camada | Tecnologia |
|---|---|
| Front-end | HTML5, CSS3 e JavaScript |
| Biblioteca de acesso ao back-end | Supabase JavaScript Client |
| Back-end / serviços | Supabase Auth e Supabase Database |
| Banco de dados | PostgreSQL |
| Linguagem de estrutura e funções do banco | SQL e PL/pgSQL |
| Repositório e versionamento | Git e GitHub |
| Hospedagem e deploy do site | Vercel |

---

**EcoQuest — aprender sobre sustentabilidade pode ser divertido.**