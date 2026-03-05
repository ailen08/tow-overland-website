# 🚀 Guía para Publicar TOW OVERLAND en Internet

## OPCIÓN 1: VERCEL (RECOMENDADA - GRATIS Y FÁCIL)

### Paso 1: Crear cuenta en Vercel
1. Ve a: https://vercel.com
2. Haz clic en "Sign Up" (Registrarse)
3. Selecciona "Continue with GitHub" (es la forma más fácil)
4. Si no tienes GitHub, créate una cuenta en https://github.com primero

### Paso 2: Subir tu proyecto a GitHub
1. Ve a https://github.com y haz login
2. Haz clic en el botón verde "New" o "New repository"
3. Ponle un nombre: `tow-overland-website`
4. Déjalo como "Public" (público)
5. Haz clic en "Create repository"

### Paso 3: Subir los archivos desde tu computadora
En tu terminal, ejecuta estos comandos (uno por uno):

```bash
# 1. Inicializar git en tu proyecto
cd /Users/azuluagam/Documents/tow_overland
git init

# 2. Agregar todos los archivos
git add .

# 3. Hacer el primer commit
git commit -m "Primera versión de TOW OVERLAND"

# 4. Conectar con GitHub (reemplaza TU-USUARIO con tu usuario de GitHub)
git remote add origin https://github.com/TU-USUARIO/tow-overland-website.git

# 5. Cambiar a la rama main
git branch -M main

# 6. Subir los archivos
git push -u origin main
```

### Paso 4: Conectar Vercel con tu proyecto
1. Ve a https://vercel.com/dashboard
2. Haz clic en "Add New..." → "Project"
3. Busca tu repositorio `tow-overland-website` y haz clic en "Import"
4. Vercel detectará automáticamente que es un proyecto Vite
5. **NO CAMBIES NADA** en la configuración
6. Haz clic en "Deploy"

### Paso 5: ¡Listo! 🎉
- Vercel te dará una URL gratis como: `tow-overland-website.vercel.app`
- Cada vez que actualices algo en GitHub, se actualizará automáticamente

---

## OPCIÓN 2: NETLIFY (Alternativa también gratis)

### Paso 1: Crear cuenta
1. Ve a: https://www.netlify.com
2. Haz clic en "Sign Up"
3. Usa "Sign up with GitHub"

### Paso 2: Subir tu proyecto
1. Después de subir a GitHub (pasos del Opción 1)
2. En Netlify haz clic en "Add new site" → "Import an existing project"
3. Conecta con GitHub y selecciona tu repositorio
4. Configuración:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Haz clic en "Deploy"

---

## OPCIÓN 3: GitHub Pages (100% Gratis, pero requiere configuración)

### Configuración necesaria:
1. Instalar gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Agregar en package.json:
```json
"homepage": "https://TU-USUARIO.github.io/tow-overland-website",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Actualizar vite.config.ts:
```typescript
base: '/tow-overland-website/'
```

4. Publicar:
```bash
npm run deploy
```

---

## 🎯 RECOMENDACIÓN FINAL

**USA VERCEL** - Es la más fácil y la mejor para tu proyecto:
- ✅ Gratis para siempre
- ✅ URL personalizada gratis (nombre.vercel.app)
- ✅ HTTPS automático
- ✅ Actualizaciones automáticas
- ✅ Rapidísimo
- ✅ No requiere configuración

---

## 📧 Configuración de EmailJS (IMPORTANTE)

Recuerda que EmailJS ya está configurado en tu proyecto:
- Service ID: `service_tqmk6oe`
- Template ID: `template_ugmtskw`
- Public Key: `-9qMzKmGlecL09wkt`

**¡El formulario de contacto funcionará automáticamente cuando publiques!**

---

## 🌐 Después de publicar

Una vez publicado, tu sitio estará disponible 24/7 en:
- URL de Vercel: `https://tu-proyecto.vercel.app`

Puedes compartir esta URL con tus clientes por:
- WhatsApp
- Facebook
- Instagram
- Email

---

## 🔄 Para actualizar tu sitio web en el futuro

Cuando quieras hacer cambios:
1. Edita los archivos en VS Code
2. Guarda los cambios
3. En la terminal:
```bash
git add .
git commit -m "Descripción del cambio"
git push
```
4. ¡Vercel actualizará automáticamente tu sitio en 1-2 minutos!

---

## 📞 CONTACTO TOW OVERLAND
- Email: towoverland@gmail.com
- WhatsApp: +56 9 8511 2929
- Sitio web: [Tu URL aquí después de publicar]
