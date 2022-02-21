# Skill Test FCamara & Tok&Stok

Desenvolver uma aplicação web para gerenciamento de fornecedores da Tok&Stok.

## Config
Siga o passo a passo:
1° `npm install`

## Config with docker
Siga o passo a passo:
1° `docker build --pull --rm -f "fcamara-api\Dockerfile" -t fcamara:latest "fcamara-api" <`

## Config DB
Siga o passo a passo:
1° `mysql> source path/to/fcamara-api/database/sql/database.sql`
2° `node ace migration:run`
3° `node ace db:seed`

## Run App
Siga o passo a passo:
1° `npm run dev`
