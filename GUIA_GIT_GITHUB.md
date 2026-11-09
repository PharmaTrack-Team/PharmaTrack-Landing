# Guía de Git, organización y entrega

## 1. Crear el proyecto en WebStorm
1. Descarga y descomprime la carpeta.
2. Abre **WebStorm → Open** y elige `PharmaTrack-Landing-Original`.
3. Comprueba que la página funciona abriendo `public/index.html`.
4. En WebStorm selecciona **VCS → Enable Version Control Integration → Git** (o utiliza la terminal, si no está iniciado).

## 2. Inicializar Git y ramas
En la terminal, desde la raíz del proyecto, ejecuta **una sola vez**:
```bash
git init -b main
git add .
git commit -m "chore: estructura y avance inicial de PharmaTrack"
git switch -c develop
git switch -c feature/landing-page
```
Haz cualquier cambio real en la landing (por ejemplo, modifica una descripción) y registra el avance:
```bash
git add .
git commit -m "feat: mejora de contenido en landing page"
```

## 3. Publicar en GitHub
Crea un repositorio vacío en tu cuenta de GitHub, preferiblemente **sin** agregar README ni .gitignore (ya están incluidos). Sustituye la URL por la que GitHub te proporcione:
```bash
git remote add origin https://github.com/TU_USUARIO/PharmaTrack-Landing.git
git push -u origin main
git push -u origin develop
git push -u origin feature/landing-page
```
Si GitHub pide autenticación, usa la ventana de autenticación o el método habilitado en tu instalación de Git.

## 4. Organización
Desde GitHub crea una organización para tu equipo (o usa la ya existente). En el repositorio usa **Settings → General → Danger Zone → Transfer** para moverlo a la organización; se necesitan permisos adecuados y aceptar la transferencia cuando corresponda. Después actualiza la URL de `origin`, si fuera necesario:
```bash
git remote set-url origin https://github.com/TU_ORGANIZACION/PharmaTrack-Landing.git
```
Comprueba que la organización es dueña del repositorio, no solo una colaboradora.

## 5. Evidencias / PDF
1. Abre la landing y haz una captura real del avance.
2. Visita tu repositorio en GitHub y abre **Insights** para tomar una captura de esa sección.
3. Incorpora ambas capturas en el documento PDF de entrega.
4. Agrega el enlace real de GitHub y los nombres de los integrantes.
5. Entrega el PDF según las indicaciones del profesor.

## Verificación final
- [ ] Proyecto abre en WebStorm.
- [ ] Git está habilitado.
- [ ] Repositorio remoto visible en GitHub.
- [ ] Repositorio ubicado dentro de una organización.
- [ ] Las ramas `main`, `develop` y `feature/landing-page` existen en GitHub.
- [ ] README completo con autores reales.
- [ ] Imágenes de landing e Insights colocadas en el PDF.
- [ ] Enlace al repositorio incluido en el PDF.
