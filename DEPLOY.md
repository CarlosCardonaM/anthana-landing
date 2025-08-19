# 🚀 Deploy a GitHub Pages

## 📋 Pasos para Deploy Automático

### 1. **Configurar GitHub Pages en tu repositorio:**
- Ve a tu repositorio en GitHub
- Click en **Settings** → **Pages**
- En **Source**, selecciona **Deploy from a branch**
- Selecciona la rama **gh-pages** (se creará automáticamente)
- Click en **Save**

### 2. **Configurar GitHub Actions:**
- El workflow ya está configurado en `.github/workflows/deploy.yml`
- Se ejecutará automáticamente en cada push a `main`
- Construirá y desplegará tu sitio automáticamente

### 3. **Hacer Commit y Push:**
```bash
git add .
git commit -m "Configure GitHub Pages deployment"
git push origin main
```

### 4. **Verificar el Deploy:**
- Ve a **Actions** en tu repositorio
- Verifica que el workflow se ejecute correctamente
- Espera unos minutos para que se active GitHub Pages

## 🔧 Configuración del Sitio

### **Base Path:**
- El sitio está configurado para funcionar en `/anthanaai-site`
- Si cambias el nombre del repositorio, actualiza `next.config.js`

### **Archivos Importantes:**
- `next.config.js` - Configuración de Next.js
- `.github/workflows/deploy.yml` - Workflow de deploy
- `public/.nojekyll` - Evita procesamiento con Jekyll

## 🌐 URL del Sitio

Una vez desplegado, tu sitio estará disponible en:
```
https://[tu-usuario].github.io/anthanaai-site/
```

## 🚨 Solución de Problemas

### **Si el sitio no se muestra:**
1. Verifica que GitHub Pages esté activado
2. Revisa los logs en **Actions**
3. Espera 5-10 minutos para la activación
4. Verifica que la rama `gh-pages` se haya creado

### **Si las imágenes no se cargan:**
1. Verifica que las rutas en `next.config.js` sean correctas
2. Asegúrate de que las imágenes estén en `public/`
3. Verifica que el `basePath` coincida con el nombre del repositorio

## 📱 Personalización

### **Dominio Personalizado:**
Si tienes un dominio, agrégalo en:
1. `next.config.js` (basePath)
2. `.github/workflows/deploy.yml` (cname)
3. Configuración de DNS de tu proveedor

¡Tu landing page estará disponible en GitHub Pages en pocos minutos! 🎉
