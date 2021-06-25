# BLOG PERSONAL HECHO CON EXPRESS Y HANDLEBARS 

_Página Web en donde se muestra un blog personal sobre mi vida, mi información personal, hoja de vida, portafolio, skills, estudios, y la forma de como poder contactarse conmigo mediante correo o redes sociales._

## Pre-requisitos 📋

_Para la realización y ejecución de esta aplicación, debe tener instalado lo siguiente en su máquina:_

* **VISUAL STUDIO CODE**
* **NODE-JS**
* **NPM**
* **HEROKU**

_Librerías necesarias para que el programa funcione, pero si es que no desea hacerlo, el archivo llamado **package.json** ya contiene estas librerías._

* **hbs**
* **express**

## Instalación 🔧

_Primer vamos a instalar lo más importante, **Visual Studio Code**, para ello podemos guiarnos en la siguiente página, en donde nos enseña paso a paso cómo instalar **Visual Studio Code**._

_https://support.academicsoftware.eu/hc/es/articles/360006916138-C%C3%B3mo-instalar-Microsoft-Visual-Studio-Code_

_Ahora tenemos que instalar NodeJs y npm en nuestro **Visual Studio Code** y de la misma manera podemos guiarnos en la siguiente página para poder instalarlo sin complicaciones._

_https://developer.ibm.com/languages/node-js/tutorials/learn-nodejs-installing-node-nvm-and-vscode/_

_Ahora procedemos a descargar e instalar Heroku en nuestra máquina, aquí se facilita el link de donde descargar la aplicación y otro link en donde se detalla paso a paso de como instalarlo de manera correcta._

Descargar Aplicación:

_https://devcenter.heroku.com/articles/heroku-cli_

Guía para instalación de Heroku:

_https://ichi.pro/es/como-instalar-heroku-cli-en-una-pc-con-windows-250480736384174_

_Ahora dentro de nuestro Visual Studio Code, abrimos un nuevo terminal e inicializamos npm con el siguiente comando:_

```
npm init
```

_Una vez hecho todo lo anterior, si esque no se tiene el archivo **package.json**, entonces podemos instalar las librerías con el siguiente comando desde el terminal:_

```
npm install <librería> --save
```

_Al acabar la instalación de todas las librerías podremos verlas dentro del archivo **package.json**_

![json](https://user-images.githubusercontent.com/76794301/123401455-6d305380-d56c-11eb-9aec-981ec07d3282.JPG)

_Ahora para ahorra tiempo se hizo uso de plantillas de Bootstrap para generar estilos (CSS) que ayuden que nuestra página se vea mucho mejor y agradable a simple vista, para ello ingresamos a la página principal de Bootstrap y descargamos un archivo comprimido con todos los css y js que nos ofrece esta página._

Página de Bootstrap:

_https://getbootstrap.com/docs/5.0/getting-started/download/_

_Una vez haya finalizado la descarga, descomprimimos el archivo y lo ubicamos en nuestra carpeta raiz del programa, dentro de esta la ubicamos dentro de la carpeta **assets** que se encuentra dentro de la carpeta **public**._ 

![bootstrap](https://user-images.githubusercontent.com/76794301/123403163-1cb9f580-d56e-11eb-8e82-3b6f23aa160f.JPG)

_Luego de tener las plantillas que facilitarán la parte del frontend, creamos otra carpeta en nuestra carpeta raíz, llamada **views**, y dentro de esta carpeta se encuentran nuestros archivos **handlebars** que contendrán código html bien estructurado para nuestrá página web._

![handlebars](https://user-images.githubusercontent.com/76794301/123405103-1ed08400-d56f-11eb-84d8-ba100afcaf55.JPG)

_Y finalmente creamos un archivo en nuestra carpeta raíz llamado **server.js** en donde se tendrá el código que establecerá el motor para que nuestras vistas (handlebars) se puedan ejecutar y visualizar, aquí se adjunta una imágen con parte del código:_

![server](https://user-images.githubusercontent.com/76794301/123405643-a28a7080-d56f-11eb-9922-8e85c006430c.JPG)

_Ahora nos dirijimos a nuestro archivo **package.json** y agregamos una línea de código más en la parte de scripts:_

Línea de código a agregar:

```
"start": "node server.js"
```

_Esto hará que mediante consola el programa se pueda ejecutar con el siguiente comando:_

```
npm start
```

![start](https://user-images.githubusercontent.com/76794301/123407092-327cea00-d571-11eb-9609-c2cc6eb0e041.JPG)

## Ejecutando las pruebas ⚙️

_Al ver la imágen anterior podemos deducir que el servidor en el cual se está ejecutando la página es en el 3000, así que para poder observar nuestra página web, lo único que tenemos que hacer es abrir nuestro navegador y en el buscador escribir lo siguiente:_

```
localhost:3000
```

_Y como resultado obtendremos lo siguiente:_

![localhost](https://user-images.githubusercontent.com/76794301/123407682-d4043b80-d571-11eb-99c7-6adefcbe3fc1.JPG)

_Para finalizar, hicimos uso de una herramienta muy útil para levantar y alojar nuestra página en la WEB, ésta herramienta es **Heroku**, en donde guardamos todos nuestros archivos para que se despliegue en la Web._

_Antes que nada, debemos crearnos una cuenta en Heroku para poder continuar, luego ya registrados dentro del sistema, se procede crear una nueva App y se le define con el nombre de **personal-blog-franks-sanay**, ahora nos pide que elijamos un método de despligue, y en este caso elegiremos conectarnos con **GitHub**, recordar que el motivo por el cual se eligió Github es porque buscaremos el repositorio con todos nuestros archivos del programa realizado, así que antes de seguir con la parte de Heroku
se debe subir todos los archivos a un nuevo repositorio de GitHub, una vez hecho todo esto, elegiremos el repositorio que contiene nuestro programa y a continuación nos aparecera lo siguiente:_

![github](https://user-images.githubusercontent.com/76794301/123409217-8f799f80-d573-11eb-9eff-b3d8d54baf34.JPG)

_Esto quiere decir que nos conectamos con nuestro repositorio de forma satisfactoria._

_Ahora lo unico que nos toca hacer es elegir la forma de despliegue de nuestro página, en este caso nos ubicamos en Manual deploy y seleccionamos **Deploy Branch**, esperamos que Heroku lea todos nuestros archivos proveniente de GitHub y una vez termine de hacerlo y esté todo correcto, podremos ver lo siguiente:_

![manual](https://user-images.githubusercontent.com/76794301/123409933-5beb4500-d574-11eb-8767-20888b810a01.JPG)

_Damos click en **View** y automáticamente se desplegará nuestra página web, nuetro blog personal en otro pestaña del navegador, pero esta vez ya alojado en **Heroku**._

![blog](https://user-images.githubusercontent.com/76794301/123410230-b1275680-d574-11eb-8797-082cacb862c8.JPG)

LINK DEL BLOG:

https://personal-blog-franks-sanay.herokuapp.com/

## Construido con 🛠️

* [Visual Studio Code](https://code.visualstudio.com/) - IDE de desarrollo
* [NodeJs](https://nodejs.org/es/) - Entorno de ejecución para JavaScript
* [Handlebars](https://handlebarsjs.com/) - Escritura de etiquetas HTML
* [Express](https://expressjs.com/es/) - Marco y motor de aplicación web de back-end para Node.js
* [Heroku](https://www.heroku.com/) - Plataforma como servicio de computación en la Nube

## Autores ✒️

* **Franks Sañay** - *Trabajo Inicial, Documentación* - [Franks2695](https://github.com/Franks2695)
---
