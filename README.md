# Projeto Mongodb Commerce

32 duas queries em mongoDB desenvolvidas durante os meus estudos em mongo.

# Como preparar o ambiente para testar as queries 

### 1- Entre na pasta /assets/produtos e extraia o arquivo produtos.tar.gz na raiz do projeto

<br>

### 2- Abra o terminal na raiz do projeto 

<br>

### 3- Use o mongoexport para restaurar o banco

Comando: 
~~~
mongorestore --maintainInsertionOrder --db=commerce produtos.bson
~~~