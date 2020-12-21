O exercicio foi realizado nas linguagems React-Native para o front-end, Node.js para o back-end e
MySQL para o banco de dados.

Apesar do aplicativo possuir conexao com o banco de dados, nao foi possivel realiza-la entre aplicativo
e back-end, devido as limitacoes da emulacao de Android. Ao testar as rotas via Postman, é possivel
ver que elas funcionam, armazenando as informacoes diretamente no banco de dados.

Para executar o aplicativo é necessario ter instalado na maquina previamente: Node.js, Android Studio,
MySQL, e Xcode para sistemas IOS. Os programas sao disponibilizados nos links abaixo:

https://nodejs.org/en/
https://developer.android.com/studio
https://dev.mysql.com/downloads/workbench/
https://apps.apple.com/br/app/xcode/id497799835?mt=12

Siga as instrucoes do link abaixo para o funcionamento do aplicativo:

https://reactnative.dev/docs/environment-setup

Ao finalizar a instalacao e configuracao dos programas, basta utilizar do prompt de comando nas 
devidas pastas do projeto e instalar as dependencias dos mesmos, utilizando o comando "npm install".
Para a execucao do back-end, utilize o comando "nodemon ./index.js".
Para a execucao do aplicativo, utilize o comando "npx react-native run-android" ou 
"npx react-native run-ios".