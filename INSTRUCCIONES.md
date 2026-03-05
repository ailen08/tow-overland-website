# 📋 Instrucciones para Personalizar TOW OVERLAND

## 🖼️ CÓMO AGREGAR TU LOGO

### Opción 1: Logo en la carpeta PUBLIC (Recomendado)

1. **Copia tu archivo de logo** (puede ser .png, .jpg, .svg) a la carpeta `public/`
   - Ejemplo: `public/logo.png`

2. **Edita el archivo** `src/components/Navbar.tsx`:
   - En la línea 9, descomenta: `const logo = '/logo.png';`
   - Si tu logo tiene otro nombre, cámbialo: `const logo = '/tu-logo.png';`

3. **En la línea 18-19**, comenta la línea actual y descomenta las siguientes:
   ```tsx
   {/* Cambia esto: */}
   <span className="logo-text">TOW OVERLAND</span>
   
   {/* Por esto: */}
   <img src={logo} alt="TOW OVERLAND Logo" className="logo-image" />
   <span className="logo-text">TOW OVERLAND</span>
   ```

### Opción 2: Logo en la carpeta ASSETS

1. **Copia tu logo** a `src/assets/logo.png`

2. **Edita** `src/components/Navbar.tsx`:
   - En la línea 7, descomenta: `import logo from '../assets/logo.png';`
   - Sigue el paso 3 de la Opción 1

---

## 📱 CÓMO CONFIGURAR TU NÚMERO DE WHATSAPP

✅ **YA CONFIGURADO:** +56 9 8511 2929

Si necesitas cambiarlo:

1. **Edita el archivo** `src/App.tsx`

2. **En la línea 13**, cambia el número:
   ```tsx
   const whatsappNumber = '56985112929'; // Número actual
   ```

3. **Formato del número:**
   - SIN el símbolo `+`
   - SIN espacios
   - SIN guiones
   - Incluye el código del país
   
   **Ejemplos:**
   - Colombia: `573001234567`
   - México: `525512345678`
   - USA: `15551234567`
   - España: `34612345678`

4. **Personaliza el mensaje** (línea 28-29):
   ```tsx
   message="Hola! Me gustaría hacer una reserva para un enganche americano"
   ```

---

## � CONFIGURAR EMAILS DEL FORMULARIO DE CONTACTO

**IMPORTANTE:** Los emails se enviarán a **towoverland@gmail.com**

Sigue las instrucciones detalladas en: **`INSTRUCCIONES_EMAILJS.md`**

**Resumen rápido:**
1. Crear cuenta gratis en https://www.emailjs.com/
2. Conectar tu Gmail (towoverland@gmail.com)
3. Crear plantilla de email
4. Copiar 3 valores: Service ID, Template ID, Public Key
5. Pegarlos en `src/pages/Contacto.tsx` líneas 31-33

📖 **Lee el archivo `INSTRUCCIONES_EMAILJS.md` para instrucciones paso a paso**

---

## �📸 CÓMO AGREGAR TUS FOTOS DE ENGANCHES AMERICANOS

### Opción A: Usar tus propias imágenes locales

1. **Crea una carpeta** `src/assets/enganches/`

2. **Copia tus fotos** allí (ej: `enganche1.jpg`, `enganche2.jpg`, etc.)

3. **Edita** `src/pages/Nosotros.tsx`:
   
   ```tsx
   // Importa tus imágenes
   import enganche1 from '../assets/enganches/enganche1.jpg';
   import enganche2 from '../assets/enganches/enganche2.jpg';
   import enganche3 from '../assets/enganches/enganche3.jpg';
   // ... más imágenes
   
   // En la línea 6-13, reemplaza el array:
   const enganchesImages = [
     enganche1,
     enganche2,
     enganche3,
     // ... más imágenes
   ];
   ```

### Opción B: Usar imágenes desde carpeta PUBLIC

1. **Copia tus fotos** a `public/enganches/`

2. **Edita** `src/pages/Nosotros.tsx`:
   
   ```tsx
   const enganchesImages = [
     '/enganches/foto1.jpg',
     '/enganches/foto2.jpg',
     '/enganches/foto3.jpg',
     // ... más fotos
   ];
   ```

### Opción C: Usar URLs de imágenes en línea

Si tus imágenes están en un servidor o servicio de hosting:

```tsx
const enganchesImages = [
  'https://tu-servidor.com/imagen1.jpg',
  'https://tu-servidor.com/imagen2.jpg',
  // ... más URLs
];
```

---

## 🎨 PERSONALIZAR COLORES

Si quieres cambiar los colores naranja por otros:

1. **Busca y reemplaza** en todos los archivos CSS:
   - `#ff8800` → Tu color primario
   - `#ffaa44` → Tu color hover/secundario

2. **Archivos a modificar:**
   - `src/index.css`
   - `src/components/Navbar.css`
   - `src/components/Footer.css`
   - `src/pages/Home.css`
   - `src/pages/Nosotros.css`
   - `src/pages/Contacto.css`
   - `src/components/ImageCarousel.css`

---

## 🚀 COMANDOS ÚTILES

```bash
# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Vista previa de la versión de producción
npm run preview
```

---

## ✅ CHECKLIST DE PERSONALIZACIÓN

- [ ] Agregar logo de la empresa
- [x] Configurar número de WhatsApp (+56 9 8511 2929) ✅
- [x] Actualizar email de contacto (towoverland@gmail.com) ✅
- [ ] Configurar EmailJS para recibir emails del formulario
- [ ] Reemplazar fotos de enganches americanos
- [ ] Cambiar textos "Lorem Ipsum" por contenido real
- [ ] Actualizar información de contacto (dirección física)
- [ ] Actualizar links de redes sociales en Footer
- [ ] (Opcional) Personalizar colores

---

## 📞 INFORMACIÓN DE CONTACTO ACTUAL

- **Email:** towoverland@gmail.com ✅
- **WhatsApp:** +56 9 8511 2929 ✅
- **Dirección:** Calle Principal 123, Ciudad, País ⚠️ (Actualizar)
- **Redes Sociales:** Por configurar ⚠️

---

¡Tu sitio web está listo! 🎉
Visita: http://localhost:5173/
