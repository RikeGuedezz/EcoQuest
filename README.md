# 🌍 EcoQuest - Guia do Projeto

Este é o repositório do projeto **EcoQuest**, um site sobre sustentabilidade desenvolvido em HTML, CSS e JavaScript puro (sem frameworks). O sistema conta com autenticação de usuários, banco de dados relacional e um painel administrativo integrados à nuvem.

---

## 🛠️ O que já foi feito (Infraestrutura Pronta)

1. **Interface do Site:** Páginas principais estruturadas (`index.html`, `cadastro.html`, `conteudo.html`, `quiz.html` e `admin.html`).
2. **Banco de Dados Conectado:** A estrutura de tabelas (`schema.sql`) já foi criada no banco de dados central.
3. **Chaves de Acesso:** O arquivo `js/supabase.js` já está configurado com as credenciais do projeto. **Não altere este arquivo**, ele conecta o site de todos ao mesmo banco de dados centralizado.

## 🆕 Últimas Atualizações

**Atualização — 13 de Novembro de 2026**

# EcoQuest — Atualização do Painel Administrativo

## Alterações realizadas

- Reformulação do painel administrativo, dividido em três seções: Visão geral, Ranking e Participantes.
- Inclusão de indicadores sobre participantes, quizzes realizados, conclusões e média geral.
- Novo ranking com os 10 melhores participantes, considerando apenas quem concluiu os três desafios.
- Criação de detalhes individuais com pontuações e histórico de tentativas.
- Padronização da pontuação dos quizzes de 0 a 100.
- Cálculo da média geral com base nos três desafios: Oceano, Mata e Urbano.
- Consideração da melhor tentativa de cada desafio.
- Atualização do banco de dados para identificar o tema de cada resultado.
- Melhorias visuais e responsividade para celulares e computadores.

## Arquivos modificados

- `admin.html`
- `quiz.html`
- `css/style.css`
- Banco de dados Supabase.

**Observação:** os resultados antigos foram preservados, mas não entram no novo ranking por não possuírem identificação do desafio.
---

## 🚀 Como Rodar o Projeto no seu Computador

Para testar e editar o site, siga estes passos exatamente nesta ordem:

### 1. Clonar ou Baixar o Projeto
* Clique no botão verde **Code** no topo deste repositório e selecione **Download ZIP** (ou clone via Git se souber usar).
* Extraia a pasta no seu computador.

### 2. Abrir no VS Code
* Abra o seu **Visual Studio Code**.
* Vá em *File > Open Folder* (Arquivo > Abrir Pasta) e selecione a pasta descompactada do projeto.
* Se o VS Code perguntar se você confia nos autores, clique em **Yes, I trust the authors**.

### 3. Instalar a Extensão "Live Server"
* No menu lateral esquerdo do VS Code, clique no ícone de **Extensões** (o quadrado que se divide em quatro blocos) ou aperte `Ctrl + Shift + X`.
* Busque por **Live Server** (desenvolvido por *Ritwick Dey*) e clique em **Install**.

### 4. Iniciar o Site
* Na barra lateral de arquivos, abra o arquivo `index.html`.
* No canto inferior direito da barra de status do VS Code, clique no botão **Go Live**.
* O site abrirá automaticamente no seu navegador no endereço padrão `http://localhost:5500`.

---

## 🗄️ Como Usar o Supabase (Painel do Banco de Dados)

O banco de dados e o sistema de login estão hospedados na nuvem do Supabase. Caso você precise gerenciar os dados do projeto, siga as instruções abaixo:

### 1. Acessar o Projeto
* Acesse o site [supabase.com](https://supabase.com) e faça login com a conta do criador do projeto.
* Clique no projeto **EcoQuest** no painel principal.

### 2. Adicionar novos Administradores (Visualmente)
Para que um novo colega consiga fazer login no painel `admin.html` do site, o e-mail dele precisa estar registrado no banco:
* Na barra lateral esquerda do Supabase, clique em **Table Editor** (o ícone de uma tabela/grade).
* Clique na tabela chamada **`admins`**.
* Clique no botão **"Insert row"** (Inserir linha) no topo da tabela.
* Digite o e-mail do seu colega no campo correspondente e clique em **Save**. Pronto, ele já pode fazer login!

### 3. Ver as Notas do Quiz e Usuários Cadastrados
* Ainda no **Table Editor**, você pode clicar nas outras tabelas do sistema para ver as informações em tempo real:
  * Tabela **`profiles`** ou **`users`**: Mostra os usuários que já se cadastraram no site.
  * Tabela **`resultados`** (ou nome similar definido no schema): Mostra as respostas, pontuações e quem concluiu o quiz sobre sustentabilidade.

---

## 🔐 Como Fazer Login no Painel Admin do Site

Para testar o fluxo de login no ambiente local:
1. Acesse a página `cadastro.html` pelo navegador rodando o Live Server.
2. Insira o seu e-mail (que deve estar previamente cadastrado na tabela `admins` do Supabase).
3. Verifique a sua caixa de entrada de e-mail para pegar o código de acesso enviado pelo Supabase.
4. Digite o código na tela do site para validar o seu acesso.

---

## 📂 Organização dos Arquivos
* `css/style.css` — Estilização visual e paleta de cores.
* `js/data.js` — Arquivo contendo as perguntas do quiz e conteúdos textuais (edite aqui para mudar as perguntas).
* `js/supabase.js` — Conexão com o banco de dados (favor manter intacto).
