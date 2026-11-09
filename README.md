# PharmaTrack — Landing Page Work-in-progress

Landing page original para el challenge del curso, elaborada con HTML, CSS y JavaScript **sin frameworks de CSS**.

## Sobre el proyecto
PharmaTrack es una propuesta académica de solución web para organizar inventarios de farmacias y boticas por producto y lote, revisar vencimientos y facilitar decisiones de rotación bajo el principio FEFO (*First Expired, First Out*).

La página presenta el problema, la propuesta de valor, las funcionalidades previstas y un simulador de lotes. No es un sistema productivo de gestión farmacéutica.

## Segmentos objetivo
- Administradores o propietarios de farmacias y boticas.
- Químicos farmacéuticos encargados de la supervisión del inventario.
- Personal autorizado que gestiona ingresos, salidas y almacenamiento.

## Características principales propuestas
- Inventario organizado por productos, cantidades y lotes.
- Identificación de fechas de vencimiento próximas.
- Aplicación del criterio FEFO para priorizar lotes vigentes disponibles.
- Historial previsto de movimientos y trazabilidad.
- Interfaz adaptable a móviles, tabletas y computadoras.

## Estructura
```
public/
├── index.html
├── favicon.ico
└── assets/
    ├── styles/
    │   └── styles.css
    ├── images/
    │   └── logo.svg
    └── scripts/
        └── main.js
README.md
.gitignore
GUIA_GIT_GITHUB.md
evidencias/
```

## Ejecución en WebStorm
Abrir la carpeta raíz del proyecto y ejecutar `public/index.html` en el navegador. No se requiere servidor ni instalación de dependencias.

## Tecnologías
HTML5 · CSS3 · JavaScript Vanilla · Git · GitHub · Google Fonts (con alternativas locales).

## GitFlow
`main` guarda la versión principal, `develop` integra avances y `feature/landing-page` contiene el desarrollo de esta funcionalidad. La rama `feature/landing-page` se crea desde `develop`. Ver [GUIA_GIT_GITHUB.md](GUIA_GIT_GITHUB.md).

## Autores

- Jahuancama Tinco José Francisco(U202421066)
- Sinche pascual, fernando kenedy(u20231e972)
- Ordaya Guerrero, Paolo(U202312723)
- Rivadeneira Cárdenas Santiago Alonso(U20241J300)
- Romero Pasache, Rolando Miguel(U202313521)



## Alcances
Proyecto exclusivamente académico. El panel visual y su información son ilustrativos. El simulador FEFO no sustituye la evaluación profesional y el sitio no cuenta con backend ni base de datos.
