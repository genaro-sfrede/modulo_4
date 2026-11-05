# Módulo 4: QGIS

## Descripción del Proyecto

En este módulo se trabajan datos geográficos y alfanuméricos con un Sistema de Información Geográfica (SIG), usando QGIS.

El objetivo es que el ingeniero industrial tenga herramientas de análisis espacial y de ingeniería de datos para tomar decisiones territoriales y logísticas. Se aplicaron en dos casos de Mendoza: la red de bodegas de la provincia y la variación de la cobertura de nieve en el Valle de las Lágrimas.

---

## Actividad 1: Red de bodegas de Mendoza

### Descripción

Se analizó la distribución espacial de 16 bodegas de Mendoza en dos oasis productivos:

- **Primera zona:** Luján de Cuyo y Maipú.
- **Valle de Uco:** Tupungato, Tunuyán y San Carlos.

Para cada bodega se registró el empleo, la capacidad de elaboración y la superficie de su finca. Con esa superficie se le asignó un nivel de impacto hídrico. Con estos datos se estudiaron dos cosas:

- las **zonas de abastecimiento de uva** de cada bodega,
- la **red de vecindad** entre bodegas, útil para planificar la logística de cosecha.

### Metodología y herramientas aplicadas

1. **Capas vectoriales y ráster:**
   - Puntos de las bodegas, importados desde un archivo `.csv` y convertidos a Shapefile.
   - Polígonos de las fincas.
   - Un ráster georreferenciado con el mapa de regiones vitivinícolas por departamento. Se georreferenció con el Georreferenciador de QGIS, con [COMPLETAR: N] puntos de control y transformación polinómica de grado 1.
2. **Sistema de referencia:** todas las capas se trabajaron en **EPSG:32719 (WGS 84 / UTM zona 19S)**. Es un sistema métrico, así que las áreas salen en m² y se pueden convertir a hectáreas sin distorsión.
3. **Edición y atributos:**
   - Se corrigió con el modo de edición la ubicación de cada bodega sobre la imagen satelital.
   - Se digitalizó a mano un polígono por finca.
   - En la Calculadora de Campos se calcularon:
     - `Ha = $area / 10000` (superficie de la finca en hectáreas).
     - `Imp_hidric`: clasifica la finca en **Bajo** (< 30 ha), **Medio** (30–100 ha) o **Alto** (≥ 100 ha). Supone que la demanda de agua de riego crece con la superficie cultivada.
4. **Análisis espacial:**
   - **Polígonos de Voronoi:** cada celda contiene los puntos del territorio que están más cerca de una bodega que de cualquier otra. Se interpreta como su zona de abastecimiento potencial. El área de cada celda se calculó en el campo `Ha_influ`.
   - **Triangulación de Delaunay:** conecta cada bodega con sus vecinas naturales y forma una red que sirve de base para rutas de recolección.
5. **Exportación web:** el proyecto se publicó con la extensión `qgis2web` (OpenLayers). Desde el panel se pueden prender y apagar las capas, y cada elemento muestra sus atributos en una ventana emergente.

### Resultados

| Indicador | Valor |
| --- | --- |
| Bodega con mayor zona de influencia (Voronoi) | [COMPLETAR: nombre] – [COMPLETAR] ha |
| Bodega con menor zona de influencia | [COMPLETAR: nombre] – [COMPLETAR] ha |
| Finca de mayor superficie | [COMPLETAR: nombre] – [COMPLETAR] ha |
| Fincas por impacto hídrico (Bajo / Medio / Alto) | [COMPLETAR] / [COMPLETAR] / [COMPLETAR] |
| Triángulos de Delaunay generados | [COMPLETAR] |

**Análisis:**

- Las bodegas de Maipú están muy juntas, así que se reparten celdas de Voronoi chicas. Eso indica **competencia por la misma uva**.
- Las bodegas aisladas concentran zonas de abastecimiento extensas.
- En la red de Delaunay aparecen dos agrupamientos bien separados: Primera zona y Valle de Uco. Los unen pocos lados largos.
- Desde el punto de vista logístico, los lados cortos son los tramos más convenientes para compartir rutas de recolección.

[COMPLETAR: agregar 1–2 observaciones propias sobre lo que se ve en el mapa]

### Notas sobre los datos

- La ubicación de las bodegas se tomó de forma aproximada y se corrigió a mano sobre la imagen satelital.
- **Empleados y capacidad (millones de litros) son valores estimados con fines didácticos.** No son datos oficiales de las empresas.
- La superficie de cada finca es la del polígono digitalizado, no la superficie declarada por la bodega.
- Las celdas de Voronoi del borde quedan abiertas hasta el área de buffer (20 % de la extensión). Por eso su superficie depende de ese parámetro y no debe leerse como una zona real.
- Límites departamentales del mapa de regiones: [mgaitan/departamentos_argentina](https://github.com/mgaitan/departamentos_argentina). La asignación de departamentos a regiones vitivinícolas es una clasificación simplificada.

### 🌐 Mapa Web Interactivo

👉 [Ver Mapa Interactivo de Bodegas de Mendoza](https://[USUARIO].github.io/[REPOSITORIO]/Modulo%204/mapa_bodegas/index.html)

---

## Actividad 2: Cobertura de nieve en el Valle de las Lágrimas

### Descripción

Esta actividad se enfocó en el monitoreo ambiental con imágenes satelitales (ráster). Se midió y comparó la superficie cubierta por nieve en el **Valle de las Lágrimas (Malargüe, Mendoza)** en dos fechas del mismo mes, con unos dos años de diferencia: **[COMPLETAR: fecha 1]** y **[COMPLETAR: fecha 2]**.

### Metodología y herramientas aplicadas

1. **Imágenes ráster:**
   - Se descargaron dos imágenes **Sentinel-2 L2A** (color verdadero, 10 m de resolución) desde Copernicus Browser.
   - Se recortaron sobre el valle y se eligieron fechas con nubosidad menor al 10 %.
   - Ambas imágenes son del **mismo mes**, para medir la variación entre años y no el deshielo propio de la temporada.
2. **Sistema de referencia:**
   - El proyecto se trabajó en **EPSG:32719 (WGS 84 / UTM zona 19S)**.
   - Un sistema métrico es indispensable para medir superficies. En grados (EPSG:4326), el tamaño de un "grado²" cambia con la latitud y el área sale distorsionada.
3. **Vectorización:**
   - Se crearon dos capas de polígonos, una por fecha, con los campos `Anio` y `Area_ha`.
   - En cada capa se digitalizaron a mano las superficies nevadas, sin incluir nubes ni sombras.
4. **Cálculo de superficies:**
   - En la Calculadora de Campos, `Area_ha = $area / 10000`.
   - El total de cada año se obtuvo con *Estadísticas básicas*.
   - La variación se calculó como:

   > Δ% = (A₂ − A₁) / A₁ × 100

5. **[Opcional, si se hizo] Validación con NDSI:** se calculó el índice de nieve normalizado con la fórmula `NDSI = (B03 − B11) / (B03 + B11)`. Los píxeles con NDSI > 0,4 se clasificaron como nieve, y esa superficie se comparó con la digitalización manual.

### Resultados

| Fecha | Superficie nevada (ha) |
| --- | --- |
| [COMPLETAR: fecha 1] | [COMPLETAR] |
| [COMPLETAR: fecha 2] | [COMPLETAR] |
| **Variación** | **[COMPLETAR] ha ([COMPLETAR] %)** |

**Análisis:** [COMPLETAR: si la nieve aumentó o disminuyó, en qué sectores del valle se nota más el cambio y una posible explicación, por ejemplo nevadas de la temporada o temperatura. Si se calculó NDSI, mencionar cuánto difiere del cálculo manual.]

### Limitaciones

- La digitalización manual depende del criterio de quien dibuja: bordes difusos, sombras y nieve sucia.
- Dos fechas puntuales no alcanzan para afirmar una tendencia. Muestran el estado de la nieve en esos días.

### 🌐 Mapa Web Interactivo

👉 [Ver Mapa Interactivo del Valle de las Lágrimas](https://[USUARIO].github.io/[REPOSITORIO]/Modulo%204/mapa_nieve/index.html)

---

## 📥 Descargas

Los proyectos completos de QGIS (`.qgz` con rutas relativas, capas, datos e imágenes) se pueden descargar acá:

- [Descargar el paquete de la Actividad 1 (.zip)](https://raw.githubusercontent.com/[USUARIO]/[REPOSITORIO]/main/Modulo%204/M4A1.zip)
- [Descargar el paquete de la Actividad 2 (.zip)](https://raw.githubusercontent.com/[USUARIO]/[REPOSITORIO]/main/Modulo%204/M4A2.zip)

Para abrirlos: descomprimí el `.zip` sin cambiar la estructura de carpetas y abrí el archivo `.qgz` con QGIS 3.x.
