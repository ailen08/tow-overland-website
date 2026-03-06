# 🌐 Guía para Configurar tu Dominio towoverland.cl

## PASO 1: Comprar el dominio

### Opción A: NIC Chile (Oficial)
1. Ve a: https://www.nic.cl
2. Busca disponibilidad de **towoverland.cl**
3. Regístrate con tus datos
4. Completa el pago (aprox. $8.000-12.000 CLP/año)

### Opción B: Registradores Recomendados (Más fácil)
- **Hosting.cl**: https://www.hosting.cl
- **Dinahosting**: https://www.dinahosting.cl  
- **NeuBox**: https://www.neubox.com

**Costo promedio**: $10.000-15.000 CLP por año

---

## PASO 2: Configurar el dominio en Vercel

### En Vercel Dashboard:
1. Ve a: https://vercel.com/dashboard
2. Selecciona tu proyecto **tow-overland-website**
3. Haz clic en **"Settings"** (⚙️)
4. En el menú lateral, haz clic en **"Domains"**
5. Haz clic en el botón **"Add"**
6. Escribe: `towoverland.cl`
7. Haz clic en **"Add"**

### Vercel te mostrará algo como esto:
```
⚠️ Invalid Configuration
Configure your domain's DNS settings:

A Record:
  Name: @
  Value: 76.76.21.21

CNAME Record:
  Name: www
  Value: cname.vercel-dns.com
```

---

## PASO 3: Configurar DNS en tu proveedor

### Si compraste en NIC Chile:
1. Inicia sesión en: https://www.nic.cl
2. Ve a **"Mis Dominios"**
3. Selecciona **towoverland.cl**
4. Busca **"Administrar DNS"** o **"Nameservers"**

### Si compraste en Hosting.cl o similar:
1. Inicia sesión en tu panel de control
2. Ve a **"Dominios"** → **"towoverland.cl"**
3. Busca **"Gestión DNS"** o **"Zone Editor"**

### Agrega estos registros DNS:

#### Registro 1 - Record A (Para dominio principal)
```
Tipo: A
Nombre: @ (o dejar vacío)
Valor: 76.76.21.21
TTL: 3600 (o automático)
```

#### Registro 2 - Record CNAME (Para www)
```
Tipo: CNAME
Nombre: www
Valor: cname.vercel-dns.com
TTL: 3600 (o automático)
```

**Importante**: 
- Los valores exactos los obtendrás de Vercel
- La IP puede variar, usa siempre la que Vercel te indique
- Algunos proveedores usan "Host" en lugar de "Nombre"

---

## PASO 4: Verificar la configuración

### En Vercel:
1. Vuelve a la sección **"Domains"** de tu proyecto
2. Haz clic en **"Refresh"** o **"Verify"**
3. Si todo está bien, verás un ✅ verde

### Tiempos de propagación:
- **Mínimo**: 1-2 horas
- **Máximo**: 24-48 horas
- **Promedio**: 4-6 horas

---

## PASO 5: Configuraciones adicionales en Vercel

### Redirección automática:
Vercel configura automáticamente:
- `www.towoverland.cl` → `towoverland.cl` (o viceversa)
- `http://` → `https://` (SSL automático)

### Para cambiar la redirección:
1. En **"Domains"**, haz clic en los 3 puntos (•••) del dominio
2. Selecciona **"Redirect to"** si quieres cambiar el dominio principal
3. Puedes elegir si prefieres con o sin www

---

## 📧 Configurar email con tu dominio (Opcional)

Si quieres emails como: **contacto@towoverland.cl**

### Opciones:

#### 1. Google Workspace (Pago)
- Costo: USD $6/mes por usuario
- Incluye Gmail, Drive, Calendar
- Web: https://workspace.google.com

#### 2. Zoho Mail (Gratis hasta 5 usuarios)
- Plan gratis: hasta 5GB
- Web: https://www.zoho.com/mail/

#### 3. Titan Email (A través de registradores)
- Incluido con algunos planes de hosting
- Consulta con tu proveedor

### Configuración básica de email:
1. Contrata el servicio de email
2. Agrega los registros MX que te proporcionen
3. Configura tu email: **towoverland@towoverland.cl**

---

## ✅ Verificar que todo funciona

### Prueba estos URLs:
- ✅ http://towoverland.cl → debe redirigir a https://towoverland.cl
- ✅ https://towoverland.cl → debe cargar tu sitio
- ✅ http://www.towoverland.cl → debe redirigir correctamente
- ✅ https://www.towoverland.cl → debe cargar tu sitio

### Herramientas útiles:
- **DNS Checker**: https://dnschecker.org
- **SSL Checker**: https://www.sslshopper.com/ssl-checker.html
- **What's My DNS**: https://whatsmydns.net

---

## 🔧 Solución de problemas comunes

### "Domain is not configured correctly"
- Espera 24 horas para propagación DNS
- Verifica que los valores en DNS sean exactos
- Asegúrate de no tener registros A antiguos

### "SSL Certificate Error"
- Vercel genera el certificado automáticamente
- Puede tomar 1-2 horas después de la verificación
- Si persiste, contacta soporte de Vercel

### "DNS_PROBE_FINISHED_NXDOMAIN"
- El dominio aún no se ha propagado
- Espera más tiempo o limpia caché DNS:
  - Mac: `sudo dscacheutil -flushcache`
  - Windows: `ipconfig /flushdns`

---

## 📞 Contacto y Soporte

### Vercel Support:
- Email: support@vercel.com
- Docs: https://vercel.com/docs

### NIC Chile:
- Web: https://www.nic.cl
- Email: info@nic.cl
- Teléfono: +56 2 2940 7700

---

## 🎯 Resumen

1. ✅ Compra **towoverland.cl** ($10.000-15.000 CLP/año)
2. ✅ Agrega el dominio en Vercel
3. ✅ Configura registros DNS (A y CNAME)
4. ✅ Espera propagación (1-24 horas)
5. ✅ Verifica que funcione
6. ✅ ¡Disfruta tu dominio personalizado!

**Tu sitio estará en:**
- 🌐 https://towoverland.cl
- 📧 Email: towoverland@towoverland.cl (si configuras)
- 📱 WhatsApp: +56 9 8511 2929
- 📷 Instagram: @enganchestowoverland.cl
- 👍 Facebook: TOW OVERLAND

---

## 💡 Tip Final

Puedes empezar usando la URL gratuita de Vercel:
**https://tow-overland-website.vercel.app**

Y comprar el dominio cuando estés listo. El cambio es instantáneo y no pierdes nada. ✨
