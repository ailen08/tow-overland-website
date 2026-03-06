# 🚀 Guía Completa: Configurar towoverland.com con Cloudflare Pages

## ✅ YA TIENES EL DOMINIO - Ahora vamos a publicar tu sitio

---

## PASO 1: Asegurarte que tu código está en GitHub

### Opción A: Si YA tienes el código en GitHub
✅ Si ya hiciste push a tu repositorio `tow-overland-website`, pasa al PASO 2

### Opción B: Si AÚN NO has subido el código a GitHub
Ejecuta estos comandos en tu terminal:

```bash
# 1. Ir a tu proyecto
cd /Users/azuluagam/Documents/tow_overland

# 2. Verificar el estado de git
git status

# 3. Si ves cambios, agrégalos
git add .

# 4. Hacer commit
git commit -m "Agregar meta tag de Google verification"

# 5. Subir a GitHub
git push origin main
```

---

## PASO 2: Crear proyecto en Cloudflare Pages

1. **Inicia sesión en Cloudflare**
   - Ve a: https://dash.cloudflare.com
   - Usa la misma cuenta donde compraste el dominio

2. **Ir a Pages**
   - En el menú lateral izquierdo, haz clic en **"Workers & Pages"**
   - O ve directamente a: https://dash.cloudflare.com/?to=/:account/pages

3. **Crear nuevo proyecto**
   - Haz clic en el botón **"Create application"**
   - Selecciona **"Pages"**
   - Luego **"Connect to Git"**

4. **Conectar con GitHub**
   - Autoriza a Cloudflare para acceder a tu GitHub
   - Selecciona el repositorio: **"tow-overland-website"** (o como lo hayas llamado)
   - Haz clic en **"Begin setup"**

5. **Configurar el proyecto**
   ```
   Project name: tow-overland (o como quieras llamarlo)
   Production branch: main
   Framework preset: Vite
   Build command: npm run build
   Build output directory: dist
   ```

6. **Variables de entorno** (opcional)
   - Puedes dejarlas vacías por ahora
   - Haz clic en **"Save and Deploy"**

7. **Esperar el despliegue**
   - Cloudflare construirá tu sitio (toma 2-5 minutos)
   - Te dará una URL temporal como: `tow-overland.pages.dev`

---

## PASO 3: Conectar tu dominio personalizado towoverland.com

1. **En la página de tu proyecto en Cloudflare Pages:**
   - Una vez que el despliegue termine, haz clic en tu proyecto
   - Ve a la pestaña **"Custom domains"**

2. **Agregar dominio:**
   - Haz clic en **"Set up a custom domain"**
   - Escribe: `towoverland.com`
   - Haz clic en **"Continue"**

3. **Configuración automática (¡MAGIA! ✨)**
   - Como el dominio YA ESTÁ en Cloudflare, la configuración es **AUTOMÁTICA**
   - Cloudflare creará los registros DNS por ti
   - Haz clic en **"Activate domain"**

4. **Agregar www (opcional pero recomendado):**
   - En la misma sección **"Custom domains"**
   - Haz clic en **"Set up a custom domain"** otra vez
   - Escribe: `www.towoverland.com`
   - Haz clic en **"Continue"** y **"Activate domain"**

---

## PASO 4: Configurar redirecciones (www a dominio principal)

Para que tanto `www.towoverland.com` como `towoverland.com` funcionen:

1. **En Cloudflare Pages:**
   - Ve a tu proyecto
   - Busca **"Custom domains"**
   - Asegúrate de tener ambos dominios listados:
     - ✅ `towoverland.com` (Primary)
     - ✅ `www.towoverland.com`

2. **Cloudflare redirigirá automáticamente** www → dominio principal

---

## PASO 5: Configurar HTTPS/SSL

1. **En el Dashboard de Cloudflare:**
   - Ve a la sección de tu dominio `towoverland.com`
   - En el menú lateral, haz clic en **"SSL/TLS"**

2. **Configuración recomendada:**
   ```
   SSL/TLS encryption mode: Full (strict)
   ```

3. **Habilitar Always Use HTTPS:**
   - Ve a **"SSL/TLS"** → **"Edge Certificates"**
   - Activa **"Always Use HTTPS"** (toggle a ON)
   - Activa **"Automatic HTTPS Rewrites"** (toggle a ON)

4. **HSTS (Opcional pero recomendado):**
   - En la misma página, baja hasta **"HTTP Strict Transport Security (HSTS)"**
   - Haz clic en **"Enable HSTS"**
   - Acepta los valores predeterminados

---

## PASO 6: Optimizaciones adicionales de Cloudflare

### A) Configurar Cache y Performance

1. **En el Dashboard → Caching:**
   - **Caching Level**: Standard
   - **Browser Cache TTL**: 4 hours (o más si prefieres)

2. **En Speed → Optimization:**
   - Activa **"Auto Minify"**:
     - ☑️ JavaScript
     - ☑️ CSS
     - ☑️ HTML
   - Activa **"Brotli"** (compresión mejorada)

### B) Configurar Security (Seguridad contra bots)

1. **En Security → Settings:**
   - **Security Level**: Medium (o High si tienes problemas de spam)
   - Activa **"Bot Fight Mode"** (plan gratuito)

### C) Redirecciones adicionales (si necesitas)

Si quieres forzar que siempre use el dominio sin www:

1. **Crear una Page Rule:**
   - Ve a **"Rules"** → **"Page Rules"**
   - Haz clic en **"Create Page Rule"**
   - URL: `www.towoverland.com/*`
   - Setting: **"Forwarding URL"** → **"301 - Permanent Redirect"**
   - Destination: `https://towoverland.com/$1`
   - Save

---

## PASO 7: Verificar que todo funciona

### Probar estos URLs:
1. ✅ `https://towoverland.com` → Debe cargar tu sitio
2. ✅ `https://www.towoverland.com` → Debe redirigir a towoverland.com
3. ✅ `http://towoverland.com` → Debe redirigir a https://towoverland.com

### Herramientas de verificación:
- **SSL**: https://www.ssllabs.com/ssltest/analyze.html?d=towoverland.com
- **DNS**: https://dnschecker.org/#A/towoverland.com
- **Performance**: https://pagespeed.web.dev/

---

## PASO 8: Actualizaciones futuras (Despliegue continuo)

### ¡Es automático! 🎉

Cada vez que hagas cambios:

```bash
# 1. Hacer cambios en tu código local
# 2. Guardar los cambios
git add .
git commit -m "Descripción de los cambios"
git push origin main

# 3. Cloudflare Pages detectará el cambio automáticamente
# 4. Construirá y desplegará en 2-3 minutos
# 5. Tu sitio se actualizará automáticamente
```

### Ver el estado del despliegue:
- Ve a tu proyecto en Cloudflare Pages
- Pestaña **"Deployments"**
- Verás el historial de todos los despliegues

---

## 📊 PASO 9: Configurar Google Search Console (SEO)

Ya agregamos el meta tag de verificación. Ahora:

1. **Ve a Google Search Console:**
   - https://search.google.com/search-console

2. **Agregar propiedad:**
   - Haz clic en **"Agregar propiedad"**
   - Selecciona **"Prefijo de URL"**
   - Escribe: `https://towoverland.com`

3. **Verificar propiedad:**
   - Selecciona método: **"Etiqueta HTML"**
   - Google detectará el meta tag que ya agregamos
   - Haz clic en **"Verificar"**

4. **Enviar sitemap:**
   - Una vez verificado, ve a **"Sitemaps"**
   - Agrega: `https://towoverland.com/sitemap.xml`
   - (Necesitaremos crear este archivo, lo haremos después)

---

## 🎯 Ventajas de Cloudflare Pages

✅ **Gratis** - Plan generoso sin costo
✅ **Automático** - DNS configurado automáticamente
✅ **Rápido** - CDN global incluido
✅ **Seguro** - HTTPS/SSL gratis y automático
✅ **Despliegue continuo** - Se actualiza al hacer push
✅ **Builds ilimitados** - Sin límite de despliegues
✅ **Dominio incluido** - Ya tienes el dominio en Cloudflare

---

## 🆘 Solución de problemas

### Problema: "El sitio no carga después de 24 horas"
- Verifica que los DNS apunten correctamente
- Ve a Cloudflare → DNS → Records
- Debe haber registros para `towoverland.com` apuntando a Pages

### Problema: "Error de build en Cloudflare"
- Verifica que `package.json` tenga:
  - `"build": "tsc -b && vite build"`
- Asegúrate que `dist` sea el output directory

### Problema: "SSL/HTTPS no funciona"
- Espera 1-2 horas para que el certificado se active
- Ve a SSL/TLS → Edge Certificates
- Verifica que "Universal SSL" esté Active

---

## 📞 Recursos adicionales

- **Documentación Cloudflare Pages**: https://developers.cloudflare.com/pages/
- **Comunidad Cloudflare**: https://community.cloudflare.com/
- **Status de Cloudflare**: https://www.cloudflarestatus.com/

---

## ✅ Checklist final

- [ ] Código subido a GitHub
- [ ] Proyecto creado en Cloudflare Pages
- [ ] Build exitoso (página .pages.dev funciona)
- [ ] Dominio personalizado conectado (towoverland.com)
- [ ] www.towoverland.com configurado
- [ ] HTTPS funcionando
- [ ] Sitio accesible desde navegador
- [ ] Google Search Console verificado
- [ ] Despliegue automático funcionando

---

🎉 **¡Una vez completado todo, tu sitio estará en vivo con tu dominio personalizado!**
