# Autix - Simulador de Examen de Manejo (Uruguay)

Este proyecto es una aplicación web interactiva para practicar el examen teórico de manejo de Uruguay.

## Tecnologías

- **Framework**: Next.js 16 (App Router)
- **Base de Datos**: PostgreSQL (via Vercel Postgres)
- **ORM**: Prisma
- **Estilos**: Tailwind CSS + Framer Motion

## Guía de Despliegue (Gratis en Vercel)

Sigue estos pasos para poner tu aplicación en línea completamente gratis.

### 1. Preparación en GitHub
1. Crea un nuevo repositorio en [GitHub](https://github.com/new).
2. Sube este código a tu repositorio haciendo "push". (Si ya has inicializado git y hecho commit):
   ```bash
   git branch -M main
   # Reemplaza TU_USUARIO y TU_REPO con los tuyos
   git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
   git push -u origin main
   ```

### 2. Configuración en Vercel
1. Ve a [Vercel](https://vercel.com) e inicia sesión con GitHub.
2. Haz clic en **"Add New..."** > **"Project"**.
3. Importa el repositorio de GitHub que acabas de crear.
4. En la configuración del proyecto, haz clic en **Deploy**.

### 3. Crear la Base de Datos
1. Una vez creado el proyecto en Vercel, ve a la pestaña **Storage**.
2. Haz clic en **Create Database** y selecciona **Postgres**.
3. Acepta los términos y crea la base de datos (selecciona la región más cercana, ej. Washington D.C.).
4. Una vez creada, ve a la pestaña **Settings** > **Environment Variables**. Verás que se han añadido variables como `POSTGRES_PRISMA_URL` automáticamente.
5. Ve a la pestaña **Deployments**, haz clic en el botón de tres puntos en el último despliegue y selecciona **Redeploy** para que tome la configuración de la base de datos.

### 4. Inicializar los Datos (Localmente)
Para cargar las preguntas en la base de datos de producción (la de Vercel):

1. En el panel de Vercel (Storage > Postgres), busca la sección **.env.local** y copia los valores (especialmente `POSTGRES_PRISMA_URL` y `POSTGRES_URL_NON_POOLING`).
2. Pégalos en tu archivo `.env` local.
3. Ejecuta en tu terminal:
   ```bash
   # Sube el esquema a la base de datos remota
   npx prisma db push

   # Carga las 129 preguntas
   npx prisma db seed
   ```
4. ¡Listo! Tu web debería mostrar las preguntas correctamente.

## Comandos Útiles

- `npm run dev`: Inicia el servidor de desarrollo local.
- `npx prisma studio`: Abre una interfaz visual para ver tu base de datos.
