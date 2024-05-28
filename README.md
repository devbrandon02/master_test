# Master Test

Prueba Tecnica Backend

## Instalación

Para instalar las dependencias, ejecuta:

npm install

## Uso

Para ejecutar el proyecto en modo de desarrollo, utiliza el siguiente comando:

npm run dev


El proyecto se ejecutará en `http://localhost:8080` por defecto.

## Variables de Entorno

El proyecto utiliza un archivo TypeScript llamado `env.ts` para definir las variables de entorno. Asegúrate de configurar este archivo correctamente antes de ejecutar el proyecto.

## Configuración de Variables de Entorno

Crea un archivo `env.ts` en la raíz del proyecto y define las variables de entorno necesarias utilizando TypeScript. Aquí hay un ejemplo:

```typescript
export const ENV = {
  REDIS_HOST: "127.0.0.1",
  REDIS_PORT: 6379,
  REDIS_DB: "0",
  GITHUB_TOKEN: "",
};
```

## Descripción de Variables de Entorno
#### REDIS_HOST: Especifica la dirección IP del servidor Redis al que se conectará la aplicación.
#### REDIS_PORT: Especifica el puerto en el que el servidor Redis está escuchando las conexiones.
#### REDIS_DB: Especifica el índice de la base de datos Redis que se utilizará.
#### GITHUB_TOKEN: Especifica el token de acceso para autenticar las solicitudes a la API de GitHub.
#### Asegúrate de proporcionar valores válidos para estas variables de entorno antes de ejecutar el proyecto.
