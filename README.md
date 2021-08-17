# Webpack configurado

Para usar este repositorio, deberán ejecutar el comando de ```npm install```
Luego construir el build con ```npm run build```

Hay que instalar el Git y GitHub para utilizar el repositorio de la nube.

Webapack --> es un conjunto de módulos para realizar tareas automáticas de JavaScript.
Tales como minificar, ofuscar, desplegar para desarrollo y para producción en un servidor, entre otros.
Esta carpeta pretende ser una configuración inicial de dichos módulos para que pueda ser utilizado como cascarón de cualquier aplicación que se quiera crear desde 0. 
Hay realizar ciertas comprobaciones para que todo funcione correctamente. 

1. Comprobar que tenemos instalado el node.js, con: node --version
2. Comprobar que tenemos el NPM (Node Package Manager): npm --version

Luego, crearemos el package.json.
3. Haciendo un npm init y rellenando los datos que pide.
4. Luego, vamos a la web de Webpack y seguimos las instrucciones para la creación del proyecto y su estructura.

Problemas con uuid
npm uninstall --save node-uuid
npm install --save uuid
npm update -g uuid

---
git init
npm run build
git add .
git commit -m "Primer commit"
Enlazar el local con el de la nube:
git remote add origin https://github.com/RoxyWTF/todo-js.git

