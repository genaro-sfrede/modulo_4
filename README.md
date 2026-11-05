# Módulo 4: QGIS

## Descripción del Proyecto

En este módulo se trabajan datos geográficos y alfanuméricos con un Sistema de Información Geográfica (SIG), usando QGIS.

El objetivo es que el ingeniero industrial tenga herramientas de análisis espacial y de ingeniería de datos para tomar decisiones territoriales y logísticas. Se aplicaron en dos casos de Mendoza:

- la red de bodegas de la provincia
- la variación de la cobertura de nieve en el Valle de las Lágrimas

---

## Actividad 1: Red de bodegas de Mendoza

### Descripción

Se analizó la distribución espacial de **16 bodegas** de Mendoza, repartidas en dos oasis productivos:

- **Primera zona:** Luján de Cuyo y Maipú (9 bodegas)
- **Valle de Uco:** Tupungato, Tunuyán y San Carlos (7 bodegas)

De cada bodega se registraron cuatro datos:

- empleados
- capacidad de elaboración
- superficie de la finca
- nivel de impacto hídrico, asignado según esa superficie

Con estos datos se estudiaron dos cosas:

- las **zonas de abastecimiento de uva** de cada bodega
- la **red de vecindad** entre bodegas, aplicable a la logística de cosecha

### Metodología y herramientas aplicadas

1. **Capas vectoriales y ráster:**
   - Puntos de las bodegas: se importaron desde un `.csv` (capa de texto delimitado, EPSG:4326) y se convirtieron a Shapefile.
   - Un polígono por finca, digitalizado a mano sobre imagen satelital.
   - Un ráster con el mapa de regiones vitivinícolas por departamento, georreferenciado con el Georreferenciador de QGIS: 5 puntos de control y transformación polinómica de grado 1.
2. **Sistema de referencia:**
   - Las capas de análisis se trabajaron en **EPSG:32719 (WGS 84 / UTM zona 19S)**.
   - Es un sistema métrico, así que las áreas salen en m² y se pasan a hectáreas sin distorsión.
3. **Edición y estructuración de atributos:**
   - Con la conmutación de edición se digitalizaron las fincas y se cargaron sus atributos.
   - Con la Calculadora de Campos se calcularon:
     - `Ha = $area / 10000`: superficie de cada finca en hectáreas.
     - `Imp_hidric`: clasifica cada finca en **Bajo** (< 30 ha), **Medio** (30–100 ha) o **Alto** (≥ 100 ha). Supone que la demanda de agua de riego crece con la superficie cultivada.
4. **Análisis espacial avanzado:**
   - **Polígonos de Voronoi** (buffer del 20 %):
     - Cada celda reúne los puntos del territorio más cercanos a una bodega que a cualquier otra.
     - Se interpreta como su **zona de abastecimiento potencial de uva**.
     - El área de cada celda se calculó en el campo `Ha_influ`.
   - **Triangulación de Delaunay:**
     - Conecta cada bodega con sus vecinas naturales y forma una red base para rutas de recolección.
5. **Exportación web interactiva:**
   - El proyecto se publicó con la extensión `qgis2web` (OpenLayers).
   - El mapa permite prender y apagar capas.
   - Cada elemento muestra sus atributos en una ventana emergente.

### Resultados

| Indicador | Valor |
| --- | --- |
| Bodegas analizadas | 16 (9 en Primera zona, 7 en Valle de Uco) |
| Triángulos de Delaunay | 21 (36 conexiones entre bodegas) |
| Superficie total de fincas digitalizadas | 437,5 ha |
| Finca de mayor superficie | Catena Zapata, 208,1 ha |
| Fincas por impacto hídrico | 14 Bajo · 1 Medio (Andeluna) · 1 Alto (Catena Zapata) |
| Mayor zona de influencia (Voronoi) | Zuccardi Valle de Uco, 211.929 ha |
| Menor zona de influencia (Voronoi) | Trapiche, 4.708 ha |
| Zona de influencia promedio | Primera zona: 40.866 ha · Valle de Uco: 80.938 ha |
| Conexión más corta (Delaunay) | Trapiche – La Rural, 1,6 km |
| Conexión más larga (Delaunay) | Familia Zuccardi (Maipú) – Zuccardi Valle de Uco, 89,8 km |

### Análisis

- **Competencia por la uva en Maipú.** Trapiche, La Rural y López están a menos de 3 km entre sí. Por eso se reparten las celdas de Voronoi más chicas de toda la red (entre 4.700 y 37.000 ha). Compiten por la misma zona de abastecimiento.
- **Dos oasis, dos densidades.** El área de influencia promedio del Valle de Uco duplica a la de Primera zona (80.938 ha contra 40.866 ha). Las bodegas del Valle de Uco están más dispersas, así que cada una tiene más territorio propio del cual abastecerse.
- **Red de vecindad.** La triangulación muestra dos agrupamientos bien definidos, unidos por unas pocas conexiones largas: entre 39 y 90 km, por ejemplo Catena Zapata – Salentein. Las conexiones cortas dentro de cada grupo son los tramos más convenientes para compartir rutas de recolección. Las largas indican dónde la logística entre oasis se encarece.
- **Impacto hídrico.** La mayoría de las fincas digitalizadas mide menos de 30 ha (mediana de 16,8 ha). Por eso predomina el impacto Bajo. Catena Zapata es la excepción, con más de 200 ha de viñedo propio.

### Notas sobre los datos

- La ubicación de las bodegas es **aproximada**: tiene un error estimado de 1 a 3 km respecto de la posición real del edificio.
- **Empleados y capacidad (millones de litros) son valores estimados con fines didácticos.** No son datos oficiales de las empresas.
- La superficie de las fincas es la del polígono digitalizado, no la superficie declarada por cada bodega.
- Las celdas de Voronoi del borde quedan abiertas hasta el área de buffer (20 % de la extensión). Su superficie depende de ese parámetro, y por eso la mayor zona de influencia (Zuccardi Valle de Uco) está sobredimensionada.
- Los límites departamentales del mapa de regiones vienen de [mgaitan/departamentos_argentina](https://github.com/mgaitan/departamentos_argentina). La asignación de departamentos a regiones vitivinícolas es una clasificación simplificada.

### 🌐 Mapa Web Interactivo

Podés explorar el mapa web interactivo en el siguiente enlace: 👉 [Ver Mapa Interactivo de Bodegas de Mendoza](https://github.com/genaro-sfrede/modulo_4/blob/main/mapa_bodegas/index.html)

---

## Actividad 2: Cobertura de nieve en el Valle de las Lágrimas

*En preparación.*

En esta actividad se va a cuantificar la variación de la superficie cubierta por nieve en el Valle de las Lágrimas (Malargüe, Mendoza). Se van a comparar dos imágenes Sentinel-2 del mismo mes, con unos dos años de diferencia, trabajadas en EPSG:32719. La superficie se va a calcular con `$area / 10000` sobre polígonos digitalizados para cada fecha.

---

## 📥 Descargas

El archivo `.zip` del proyecto se puede descargar desde este enlace:

[Descargá acá el paquete de la Actividad 1 (.zip)](https://raw.githubusercontent.com/genaro-sfrede/modulo_4/main/M4A1.zip)

Para abrirlo, descomprimí el `.zip` sin cambiar la estructura de carpetas y abrí `M4A1.qgz` con QGIS 3.x. El proyecto usa rutas relativas.
