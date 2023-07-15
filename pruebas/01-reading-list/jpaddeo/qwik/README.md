# Book's reading list challenge

## Stack utilizado

- [Qwik](https://qwik.builder.io/)
- [QwikCity](https://qwik.builder.io/qwikcity/overview/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [pnpm](https://pnpm.io/)

---

## Estructura del proyecto

El proyecto cuenta con la siguiente estructura de carpetas:

```
├── public/
│   └── ...
└── src/
    ├── components/
    │   └── ...
    └── routes/
        └── ...
```

- `src/routes`: rutas basadas en carpetas que pueden heredar el layout de los archivos `layout.tsx` y tienen un `index.tsx` como archivo de la páginas. Para más información, se recomienda leer [documentación de rutas](https://qwik.builder.io/qwikcity/routing/overview/).

- `src/components`: carpeta de componentes reutilizables de la aplicación.

- `public`: contenido estático, como p.e. imágenes, favicon, etcétera. Para más información, se recomienda leer [carpeta public vitejs](https://vitejs.dev/guide/assets.html#the-public-directory).

## Ejecución local (desarrollo)

Para levantar el entorno local o desarrollo, ejecutar el siguiente comando:

```shell
pnpm start
```

## Construcción (build)

Para construir la solución ejecutar el siguiente comando:

```shell
pnpm build
```
