# Deploy a GitHub Pages

## Configuración del Repositorio

1. **Crear un repositorio en GitHub** llamado `anthana-landing`
2. **Hacer push del código** a la rama `main`
3. **Configurar GitHub Pages**:
   - Ve a Settings > Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` (se creará automáticamente)
   - Folder: `/ (root)`

## Workflow Automático

El proyecto incluye un workflow de GitHub Actions que:
- Se ejecuta automáticamente en cada push a `main`
- Construye el proyecto con `npm run build`
- Hace deploy a la rama `gh-pages`

## Configuración Local

Para probar el build localmente:

```bash
npm run build
```

El sitio se generará en la carpeta `out/`

## Notas Importantes

- El sitio se exporta como HTML estático
- Las imágenes se configuran como `unoptimized: true` para compatibilidad
- Se incluye `basePath: '/anthana-landing'` para el deploy en GitHub Pages
- El archivo `.nojekyll` evita que GitHub Pages procese el sitio con Jekyll

## URL del Sitio

Una vez desplegado, el sitio estará disponible en:
`https://[tu-usuario].github.io/anthana-landing/`
