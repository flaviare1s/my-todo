# Etapa 1: Construção da aplicação
FROM node:18 AS build

# Define o diretório de trabalho no contêiner
WORKDIR /app

# Copia os arquivos de configuração do projeto (package.json e package-lock.json)
COPY package.json package-lock.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código fonte
COPY . .

# Executa a build do projeto
RUN npm run build

# Etapa 2: Servir a aplicação com um servidor estático
FROM nginx:alpine

# Copia os arquivos gerados pela build para o diretório de arquivos estáticos do Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Expõe a porta onde o Nginx vai servir os arquivos
EXPOSE 80

# Comando para rodar o Nginx
CMD ["nginx", "-g", "daemon off;"]
