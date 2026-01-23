# 📄 MyTodo

Aplicação de exemplo em React + Vite + TypeScript para gerenciar tarefas (to-do).

## Visão geral

Pequeno projeto que demonstra um gerenciador de tarefas com componentes reutilizáveis, contexto para estado global e exemplos de conceitos React (memoização e refs).

## Principais funcionalidades

- Adicionar, listar e remover tarefas
- Estado global via Context (`TasksContext`)
- Cards de estatísticas
- Componentes demonstrativos de `memoization` e `refs`

## Tecnologias

- TypeScript
- React
- Vite
- SCSS módulos (styles.module.scss)

## Pré-requisitos

- Node.js 16+ (recomendado)
- npm

## Instalação

Clone o repositório e instale dependências:

```bash
npm install
```

## Executando em desenvolvimento

```bash
npm run dev
```

Abra http://localhost:5173 (ou porta indicada pelo Vite).

## Deploy

Aplicação disponível em: https://my-todo-ten-pi.vercel.app/

## Estrutura do projeto (principais arquivos)

- [src/App.tsx](src/App.tsx) — Componente raiz da aplicação
- [src/main.tsx](src/main.tsx) — Ponto de entrada do Vite/React
- [src/context/TasksContext.tsx](src/context/TasksContext.tsx) — Contexto e provedor das tarefas
- [src/components/Tasks/Tasks.tsx](src/components/Tasks/Tasks.tsx) — Lista e lógica de tarefas
- [src/components/Header/Header.tsx](src/components/Header/Header.tsx) — Cabeçalho da aplicação
- [src/components/StatsCard/StatsCard.tsx](src/components/StatsCard/StatsCard.tsx) — Cartões de estatísticas
- [src/components/Concepts/Memoization.tsx](src/components/Concepts/Memoization.tsx) — Exemplo de memoização
- [src/components/Concepts/Refs.tsx](src/components/Concepts/Refs.tsx) — Exemplo de uso de refs
- [vite.config.ts](vite.config.ts) — Configuração do Vite
- [package.json](package.json) — Scripts e dependências

---

Desenvolvido durante os cursos da Ada (Frontend em React e Elas+ Tech)
