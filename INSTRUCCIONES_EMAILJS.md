# 📧 Configuración de EmailJS para Formulario de Contacto

## 🎯 Objetivo
Configurar el formulario de contacto para que envíe emails automáticamente a **towoverland@gmail.com**

---

## 📝 Pasos para Configurar EmailJS (GRATIS)

### 1️⃣ Crear Cuenta en EmailJS

1. Ve a: **https://www.emailjs.com/**
2. Click en **"Sign Up Free"**
3. Regístrate con tu email (puedes usar towoverland@gmail.com)
4. Confirma tu email

### 2️⃣ Conectar tu Gmail

1. En el Dashboard de EmailJS, ve a **"Email Services"**
2. Click en **"Add New Service"**
3. Selecciona **"Gmail"**
4. Click en **"Connect Account"**
5. Inicia sesión con **towoverland@gmail.com**
6. Autoriza el acceso
7. Copia el **Service ID** (algo como `service_abc123`)

### 3️⃣ Crear Plantilla de Email

1. Ve a **"Email Templates"**
2. Click en **"Create New Template"**
3. Configura la plantilla así:

**Subject (Asunto):**
```
Nueva consulta de {{nombre}} - TOW OVERLAND
```

**Content (Contenido del email):**
```
Has recibido un nuevo mensaje desde el formulario de contacto de TOW OVERLAND:

-------------------------------------------
INFORMACIÓN DEL CONTACTO
-------------------------------------------

Nombre: {{nombre}}
Email: {{email}}

-------------------------------------------
MENSAJE
-------------------------------------------

{{mensaje}}

-------------------------------------------

Este mensaje fue enviado desde: https://towoverland.com/contacto
Fecha: {{current_date}}
```

4. Click en **"Save"**
5. Copia el **Template ID** (algo como `template_xyz789`)

### 4️⃣ Obtener tu Public Key

1. Ve a **"Account"** (tu foto de perfil arriba a la derecha)
2. En la sección **"API Keys"**
3. Copia tu **Public Key** (algo como `Wk8a_abc123xyz`)

### 5️⃣ Configurar en tu Código

Abre el archivo: **`src/pages/Contacto.tsx`**

En las **líneas 31-33**, reemplaza los valores:

```typescript
const result = await emailjs.sendForm(
  'service_abc123',      // ⬅️ Pega aquí tu Service ID
  'template_xyz789',     // ⬅️ Pega aquí tu Template ID
  form.current!,
  'Wk8a_abc123xyz'       // ⬅️ Pega aquí tu Public Key
);
```

**Ejemplo real:**
```typescript
const result = await emailjs.sendForm(
  'service_j8k3l2m',
  'template_a9b8c7d',
  form.current!,
  'Wk8a_XyZ123AbC456'
);
```

### 6️⃣ Guardar y Probar

1. Guarda el archivo `Contacto.tsx`
2. Ve a tu sitio: http://localhost:5173/contacto
3. Llena el formulario y envía un mensaje de prueba
4. Verifica que llegue a **towoverland@gmail.com**

---

## 🎁 Plan Gratuito de EmailJS

✅ **200 emails gratis al mes**
✅ Sin límite de formularios
✅ Sin tarjeta de crédito requerida
✅ Perfecto para sitios pequeños/medianos

Si necesitas más emails, puedes:
- Upgrade al plan Personal ($7/mes - 1000 emails)
- O usar otro servicio como FormSubmit, Formspree, etc.

---

## 🔧 Alternativa Rápida (Sin Registro)

Si prefieres una solución MÁS SIMPLE (pero menos personalizable), puedes usar **FormSubmit**:

### Usando FormSubmit:

1. En `src/pages/Contacto.tsx`, cambia la línea del `<form>`:

```tsx
<form 
  action="https://formsubmit.co/towoverland@gmail.com" 
  method="POST"
  className="contact-form"
>
```

2. Agrega campos ocultos después del primer `<div className="form-group">`:

```tsx
<input type="hidden" name="_subject" value="Nueva consulta - TOW OVERLAND" />
<input type="hidden" name="_captcha" value="false" />
<input type="hidden" name="_next" value="http://localhost:5173/contacto?enviado=true" />
```

3. Cambia `name="nombre"` a `name="name"` en el input de nombre

4. La primera vez que envíes un formulario, recibirás un email de confirmación en towoverland@gmail.com

**Ventajas:**
- ✅ Más simple, sin configuración
- ✅ Sin límite de emails

**Desventajas:**
- ❌ Menos control sobre el formato del email
- ❌ No puedes personalizar tanto
- ❌ Redirecciona la página (no es SPA)

---

## 🆘 Solución de Problemas

### Error: "Service ID not found"
- Verifica que copiaste correctamente el Service ID de EmailJS
- Asegúrate de estar usando el Service ID, NO el Service Name

### Error: "Template ID not found"
- Verifica el Template ID en EmailJS
- Asegúrate de que la plantilla esté guardada

### No llegan los emails
- Revisa la carpeta de SPAM de towoverland@gmail.com
- Verifica que autorizaste correctamente tu cuenta de Gmail en EmailJS
- Revisa el dashboard de EmailJS para ver si hay errores

### Error CORS
- EmailJS debería funcionar sin problemas
- Si tienes problemas, verifica que tu Public Key sea correcta

---

## 📞 Contacto Actual Configurado

- **Email destino:** towoverland@gmail.com
- **Teléfono WhatsApp:** +56 9 8511 2929
- **Formato número WhatsApp:** 56985112929

---

## ✅ Checklist de Configuración

- [ ] Crear cuenta en EmailJS
- [ ] Conectar Gmail (towoverland@gmail.com)
- [ ] Crear plantilla de email
- [ ] Copiar Service ID
- [ ] Copiar Template ID
- [ ] Copiar Public Key
- [ ] Pegar los 3 valores en Contacto.tsx
- [ ] Probar formulario
- [ ] Verificar email recibido

---

¡Una vez configurado, todos los mensajes del formulario llegarán automáticamente a towoverland@gmail.com! 📬
