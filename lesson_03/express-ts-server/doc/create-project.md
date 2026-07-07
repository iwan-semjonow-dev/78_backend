# Создание проекта на ts
Инициализация проекта
`
npm init -y
`
Установка библиотек
`
npm i express
`
`
npm i -D typescript ts-node-dev @types/express @types/node
`
Создание tsconfig.json файла
`
npx tsc --init
`
Формирование папки node_modules
`
npm i
`


Внесли изменения в package.json
`
  "main": "src/index.ts",
  "scripts": {
    "dev": "ts-node-dev src/index.ts",
    "build": "tsc",
    "start": "node dist/index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
`