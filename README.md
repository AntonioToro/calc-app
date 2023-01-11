# calc-app 
![Version badge](https://img.shields.io/badge/version-1.4.1-blue) ![Node badge](https://img.shields.io/badge/node-v18.12.1-blue) ![Npm badge](https://img.shields.io/badge/npm-v9.2.0-blue) ![Typescript badge](https://img.shields.io/badge/typescript-v4.9.4-blue) ![Status badge](https://img.shields.io/badge/status-success-green) ![License badge](https://img.shields.io/badge/license-MIT-yellow)

>Realiza todos tus calculos haciendo uso de esta calculadora desarrollada en ReactJs.

![calc-app](public/img/Captura%20de%20pantalla%20de%202022-05-10%2020-51-01.png)

[DEMO](https://antoniotoro.github.io/calc-app/)


## 🔧 Instalación.
1. Clona este proyecto.
2. Ve a la carpeta del proyecto:\
    `cd calc-app`
3. Instala las depedencias del proyecto:\
    `npm install`
4. Arranque el proyecto:\
   `npm start`

##  :hammer: Despliegue.
1. Una vez instaladas las depedencias, puedes hacer la build :\
   `npm build`

## 📚 Librerias del Proyecto.
* [ReactJs](https://es.reactjs.org/) (v16.13.1) - El framework web usado.
* [Lodash](https://lodash.com/) (v4.2.0) - Libreria con utilidades de JavaScript.
* [Prop-Types](https://www.npmjs.com/package/prop-types) (v15.7.2) - Libreria de tipados de las propiedades de los componentes.
* [Standard Version](https://www.npmjs.com/package/standard-version) (v9.5.0) - Libreria para el control de versiones de la aplicación.

## 📚🔨 Librerias de Desarrollo.
* [gh-pages](https://www.npmjs.com/package/gh-pages) (v4.0.0) - Libreria para el despliegue web de la app en la rama de gh-pages de GitHub.
* [picocolors](https://www.npmjs.com/package/picocolors) (v1.0.0) - Libreria para añadir colores a los consoles logs de los scripts de mantimiento creados en el proyecto.
* [replace](https://www.npmjs.com/package/replace) (v1.2.2) - Libreria para remplazar el contenido de una archivo.
* [standard-version](https://www.npmjs.com/package/standard-version) (v9.5.0) - Libreria para la generación de versinado de la app.

## 🔖 Generar una nueva versión.
Para generar una nueva versión de la app hacemos uso de la libreria [standard-version](https://www.npmjs.com/package/standard-version).
Cuando queramos generar una nueva versión de la app ejecutaremos el siguiente comando:\
`npm run release -- --release-as <<NumberVersion>>`\
Una vez se nos genere el commit con la nueva versión de la app ejecutaremos el siguiente comando para publicarla:\
`git push --follow-tags origin master`

## 📑 Scripts.
### 🌀 GitHub Actions.
* **publish-new-release**: Script con el que publicamos una nueva versión en la página de la Rama de Github.
* **deploy-page**: Script con el que desplegamos la app en la rama de gh-pages de GitHub.

### 🔧 Mantenimiento.
* **update-version-badge**: Script con el que actualizamos el badge de la versión de la app cada vez que generamos una nueva versión con [standard-version](https://www.npmjs.com/package/standard-version).

## 📄 Licencia.
Copyright © 2022 [AntonioToro](https://github.com/AntonioToro).
Este proyecto está bajo la Licencia (MIT) - mira el archivo [LICENSE](LICENSE) para detalles.

---
Desarrollado por [AntonioToro](https://github.com/AntonioToro)