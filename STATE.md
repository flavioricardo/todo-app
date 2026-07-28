# STATE.md — todo-app

> Fonte canônica de verdade do projeto. Ler no início de toda sessão. Histórico de chat NÃO é estado.

## O que é

Lista de tarefas (To-Do App) com categorias, prioridades, datas de vencimento, busca e filtros. Tema claro/escuro e idioma PT/EN. Projeto de portfólio — prova domínio de React + Firebase + testes.

## Stack

- **Front:** React + Vite. UI com **Gestalt** (biblioteca de componentes do Pinterest).
- **Dados:** Firebase (Auth + Firestore), com fallback em `localStorage`.
- **Testes:** Vitest + React Testing Library + Testing Library user-event.
- **Deploy:** GitHub Pages, branch `gh-pages` (via pacote `gh-pages`) — **live:** https://flavioricardo.github.io/todo-app/
- **Repo:** https://github.com/flavioricardo/todo-app (público, branch main)

## Funcionalidades

- Adicionar/remover/completar tarefas, categoria + texto
- Filtro (todas/completas/pendentes) e busca por texto
- Datas de vencimento e prioridades
- Limpar tarefas completadas
- Tema claro/escuro, idioma PT/EN (persistidos em `localStorage`)

## Correções feitas (sessão 2026-07-07)

- Fix de violação de regra dos hooks (hook dentro de `.map`)
- Uso correto do `auth.uid()` do Firebase
- Batch deletes e configuração de lint
- Layout restrito a 960px de largura de leitura com fundo full-bleed

## Convenções

- `.nvmrc` fixa versão do Node; `.prettierrc` + `eslint.config.mjs` para formatação/lint.

## Pendências

1. **Revogar o fine-grained PAT do GitHub** usado nesta sessão (STATE.md criado via chat) — https://github.com/settings/tokens | Bloqueia: segurança da conta | Aberto desde: 2026-07-28
2. [x] **Confirmar deploy sincronizado** — ✅ verificado 2026-07-28: `gh-pages` foi buildado 33s após o último commit da `main` (2026-07-07), site em produção reflete o código atual
