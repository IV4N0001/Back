# RestAPI con TypeScript, Express, PostgreSQL y TypeORM

## Requisitos Previos

Asegúrate de tener instalados los siguientes programas en tu entorno antes de comenzar:

- [NodeJS](https://nodejs.org/)

## Instalación

### 1. Configuración Inicial

#### 1.1. Instala TypeScript de manera global:
   
    npm install -g typescript

#### 1.2. Inicializa el proyecto con los valores por defecto:
   
    npm init -y

#### 1.3. Crea una carpeta para el proyecto y muevete a ella:
    
    cd mi-proyecto

#### 1.4. Instala TypeScript como dependencia de desarrollo:
    
    npm install typescript -D

#### 1.5. Instala ts-node-dev para hot-reload durante el desarrollo:
    
    npm install ts-node-dev -D

#### 1.6. Genera el archivo tsconfig.json
    
    tsc --init

#### 1.7. Crea carpetas para el proyecto: 

Dentro de la carpeta del proyecto, crea dos carpetas: src y build. Todo el código fuente se ubicará en src

#### 1.8. Configura el archivo tsconfig.json: 

Abre el archivo tsconfig.json y habilite las siguientes opciones con los valores que se muestran:
    
    {
        "experimentalDecorators": true,
        "emitDecoratorMetadata": true,
        "rootDir": "./src",
        "outDir": "./build",
        "strictPropertyInitialization": false
    }

### 2. Configuración de scripts en package.json
    
    "scripts": {
        "dev": "ts-node-dev --respawn src/index.ts",
        "build": "tsc",
        "start": "node build/index.js",
        "test": "echo \"Error: no test specified\" && exit 1"
    }

### 3. Instalacion de dependencias

#### 3.1. Instala Express:

    npm install express

#### 3.2. Instala CORS para permitir solicitudes HTTP desde diferentes orígenes:

    npm install cors

#### 3.3. Instala morgan para registrar solicitudes HTTP en la consola:

    npm install morgan

#### 3.4. Instala definiciones de TypeScript para las dependencias:

    npm install @types/express @types/cors @types/morgan -D

#### 3.5. Instala las definiciones de TypeScript para Node:

    npm install @types/node --save-dev

#### 3.6. Instala TypeORM para la gestión de la base de datos:

    npm install typeorm --save

#### 3.7. Instala reflect-metadata para habilitar decoradores:

    npm install reflect-metadata --save

#### 3.8. Instala el driver de PostgreSQL:

    npm install pg --save

### 4. Archivos del proyecto

#### 4.1. Archivo /.env/config.ts

En este archivo se encuentra variables de entorno que utilizaremos en nuestro proyecto, tales como la 
IP y el puerto de nuestro servidor, asi como tambien el nombre, tipo, usuario, puerto y contraseña de nuestra 
base de datos.

#### 4.2. Archivo /database/connection.ts

Define la conexion de nuestra base de datos, importamos el archivo /.env/.config.ts para pasar las variables de entorno de nuestra base de datos. En la clave entities: [] indicamos las entidades de nuestra base de datos (tablas), podemos importar desde nuestra carpeta entities una instancia de cada una de ellas y añadirlo manualmente, como por ejemplo:
    
    entities: [Product]
    
O indicar el directorio de nuestra carpeta en donde se encuentran nuestras entidades:
    
    entities: ["src/entities/*.ts"],

#### 4.3. Carpeta entities

En esta carpeta se añaden todos los archivos donde crearemos nuestras entidades (tablas) con typeorm. El nombre de cada archivo se escribira con el formato "nuestra-entidad.entity.ts"

#### 4.4. Carpeta controllers

En esta se añaden todos los archivos que se encargar de manipular los registros de las entidades en nuestra base de datos a traves de metodos (API's, endpoints). El nombre de cada archivo se escribira con el formato "nuestra-entidad.controller.ts"

#### 4.5. Carpeta routes

En esta se añaden todos los archivos que definen las rutas de nuestras API's. El nombre de cada archivo se escribira con el formato "nuestra-entidad.routes.ts"

#### 4.6. Archivo app.ts

Indicamos los servicios que nuestro proyecto usara, tales como el framework express, morgan, cors, JSON, etc

#### 4.7. Archivo index.ts

Importa el objeto app de nuestro archivo app.ts y arranca el servidor
    
> NOTA:
> La configuración del entorno y demás cosas se obtuvieron del siguiente [video](https://www.youtube.com/watch?v=RwkvTRXAqZU)


