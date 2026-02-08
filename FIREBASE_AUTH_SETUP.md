# Configuración de Firebase Authentication

## Paso 1: Habilitar Authentication en Firebase Console

1. Ve a [Firebase Console](https://console.firebase.google.com/project/aradiz/authentication)
2. Click en **"Get Started"** o **"Sign-in method"**
3. Habilita el proveedor **"Email/Password"**:
   - Click en "Email/Password"
   - Activa el toggle "Enable"
   - Click "Save"

## Paso 2: Crear tu primer usuario admin

1. En Firebase Console, ve a **Authentication** → **Users**
2. Click **"Add user"**
3. Ingresa:
   - **Email**: tu email (ej: `admin@aradiz.com`)
   - **Password**: una contraseña segura
4. Click **"Add user"**
5. **Copia el UID** del usuario que acabas de crear (lo necesitarás en el siguiente paso)

## Paso 3: Agregar el UID a la colección de admins

1. Ve a **Firestore Database**
2. Click **"Start collection"** o busca la colección `admins`
3. Crea una colección llamada `admins` (si no existe)
4. Click **"Add document"**
5. En **"Document ID"**, pega el **UID** que copiaste
6. Deja los campos vacíos (o agrega un campo `email` con tu email para referencia)
7. Click **"Save"**

## Paso 4: Probar el login

1. Ve a `http://localhost:3000/admin/login`
2. Ingresa el email y contraseña que creaste
3. Deberías ser redirigido a `/admin`

## Agregar más administradores

Para agregar más usuarios admin en el futuro:

1. Crea el usuario en **Authentication** → **Users**
2. Copia su UID
3. Agrega un documento en la colección `admins` con ese UID como Document ID

---

**Nota**: Solo los usuarios cuyo UID esté en la colección `admins` podrán acceder al panel de administración.
