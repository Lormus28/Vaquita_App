# Vaquita Backend

## 1. Stup del proyecto

-Inicializar Node Js 'npm instal --yes'
- Set up de express usando Nodemon. Nodemon permite reiniciar el servidor de Express.js en caso de que se modifique el código
'npm i express nodemon'
- Instalar cors que permite saltar la validación de seguridad debido a que el back y front se levantan en diferentes puertos
'npm i cors'

## 2. Setup de base de datos (environment variables)
- Crear un archivo en la raíz del proyecto con el nombre .env
- Copiar y pegar todas las variables que se tienen en '.env.example' en '.env'
- Agregar las credenciales y demás variables dependiendo de la configuración (puerto, bd, nombre bd etc.)
