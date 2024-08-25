# Next.js: Prueba tecnica (ParkourDevs)

Desarrolla una aplicación web utilizando el stack de programación Next.js 14 y React que permita a los usuarios autenticarse, ingresar información personal y visualizarla en una lista. La aplicación debe incluir las siguientes características:

## Clonar el repositorio

```
git clone git@github.com:jrosasr/parkourdevs-tech.git
```

## Copiar el archivo .env.example
```
cp .env.example .env
```

### Configurar variables de entorno: Edita el archivo .env y configura las siguientes variables:

```
NODE_ENV="production"

# Prisma Connect to DB
DATABASE_URL=postgres://parkourdevs:parkourdevs@localhost:5434/parkourdevs

# NextAuth
NEXTAUTH_SECRET="NEXT_AUTH_SECRET"
NEXTAUTH_URL=http://localhost:3000

#Resend
RESEND_API_KEY=

# Docker PostgreSql
POSTGRES_DB=parkourdevs
POSTGRES_USER=parkourdevs
POSTGRES_PASSWORD=parkourdevs
```
Nota: Los valores de POSTGRES_DB, POSTGRES_USER y POSTGRES_PASSWORD deben coincidir con los configurados en el servicio de Docker.

## Configuración de Docker
1. Se debe crear un volumen externo para el contenedor de la DB

```
docker volume create parkourdevs-db
```

2. Iniciar el contenedor de la base de datos
```
docker-compose up -d --build
```
Este comando levantará un contenedor Docker para PostgreSQL.

## Instalación de Dependencias
1. Instalar dependencias de React
```
npm install
```

# Ejecución del Proyecto
1. Crear la base de datos y ejecutar las migraciones
```
npm run db:generate
```
```
npm run db:migrate
```
2. Iniciar el servidor de desarrollo de React: En una terminal separada, ejecuta
```
npm run dev
```

# Lista de tareas completadas
1. Autenticación y Manejo de Sesión:
- ✅ Los usuarios deben poder registrarse e iniciar sesión con el correo electrónico.
- ✅ Los usuarios deben poder cerrar sesión de manera segura.
- ✅ Utilizar Auth.js (NextAuth)

2. Subida de Datos a una Base de Datos:
- ✅ La aplicación debe permitir a los usuarios agregar información personal
- ✅ Cada entrada de información personal debe incluir campos como nombre, cédula, teléfono, dirección y salario.
- ✅ Debes utilizar una base de datos PostgreSQL o MySQL para almacenar la información personal de los usuarios.
- ❌️ Crear un reporte que liste los users con mejor salario y saque la media y promedios

3. Manejo de Formularios con Validaciones:
- ✅ Debes implementar validaciones en los formularios para garantizar que los datos ingresados sean correctos. Por ejemplo, asegúrate de que la cédula sea un número válido, que el salario sea un número positivo y que los campos obligatorios no estén vacíos.
- ✅ Proporciona mensajes de error claros en caso de que las validaciones no se cumplan.

4. Presentación de Datos de la Base de Datos:
- ✅ Los usuarios autenticados deben poder ver una lista de las entradas de información personal que han agregado.
- ✅ Implementar el data table de shadcn.
- ✅ Debe haber una página donde se muestren las entradas de información personal ordenadas por nombre u otros criterios relevantes.
- 🕓 Implementa una barra de búsqueda que permita a los usuarios buscar entradas de información personal utilizando diferentes criterios, como nombre, cédula, o dirección.googl (Solo se implemento con el campo nombre)

5. Compilado exitoso
- ✅ Asegurarse de que no haya errores en el build.

## Lista de tareas pendientes
1. Internacionalización:
- 🕓 Usar alguna librería de internacionalización para manejar las traducciones de la aplicación entre español e inglés.

2. Correos transaccionales:
- 🕓 Validar el correo que el usuario usa para registrarse enviándole un link de verificación, implementar Resend y react-email.

3. Gráfico
- 🕓 Usando el punto anterior crear una gráfica que muestra la tendencia de los salarios