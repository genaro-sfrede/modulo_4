# Módulo 4: QGIS

## Descripción del Proyecto

En este módulo se procesan datos geográficos y alfanuméricos con Sistemas de Información Geográfica (SIG) en QGIS. El objetivo es aplicar herramientas de análisis espacial a la toma de decisiones territoriales y logísticas en Mendoza.

---

## Actividad 1: Red de bodegas de Mendoza

Se analizó la distribución espacial de 16 bodegas de **Primera zona** (Luján de Cuyo y Maipú) y del **Valle de Uco** (Tupungato, Tunuyán y San Carlos). Se tuvieron en cuenta el empleo, la capacidad de elaboración, la superficie de las fincas y el impacto hídrico de cada una.

### Metodología

1. **Capas vectoriales y ráster:** puntos de bodegas importados desde `.csv`, polígonos de fincas digitalizados y un mapa de regiones vitivinícolas georreferenciado.
2. **Edición de atributos:** se calcularon `Ha = $area / 10000` e `Imp_hidric`, que vale Bajo para menos de 30 ha, Medio para 30–100 ha y Alto para 100 ha o más. Todo se trabajó en **EPSG:32719 (UTM 19S)**.
3. **Análisis espacial:**
   - **Polígonos de Voronoi:** zona de abastecimiento de uva de cada bodega.
   - **Triangulación de Delaunay:** red de vecindad para la logística de cosecha.
4. **Exportación web:** con `qgis2web` (OpenLayers), en un mapa que permite activar y desactivar capas.

### Resultados

| Indicador | Valor |
| --- | --- |
| Mayor zona de influencia (Voronoi) | Zuccardi Valle de Uco – 211.929 ha |
| Menor zona de influencia (Voronoi) | Trapiche – 4.708 ha |
| Finca de mayor superficie | Catena Zapata – 208,1 ha |
| Impacto hídrico (Bajo / Medio / Alto) | 14 / 1 / 1 |
| Triángulos de Delaunay | 21 |

Las bodegas de Maipú están a menos de 3 km entre sí, así que comparten zonas de abastecimiento chicas y compiten por la misma uva. El Valle de Uco, más disperso, duplica en promedio el área de influencia de Primera zona.

*Empleados y capacidad son valores estimados con fines didácticos.*

### 🌐 Mapa Web Interactivo

👉 [Ver Mapa Interactivo de Bodegas de Mendoza](https://genaro-sfrede.github.io/Modulo_4/mapa_bodegas/index.html)

---

## Actividad 2: Nieve en el Valle de las Lágrimas

Se comparó la superficie cubierta por nieve en el sector cordillerano de Mendoza que incluye el **Valle de las Lágrimas** (Malargüe), en dos fechas de la misma época del año: **24/10/2024** y **27/10/2026**.

### Metodología

1. **Imágenes ráster:** dos GeoTIFF descargados de NASA Worldview.
2. **Proyección:** se pasó de EPSG:4326 (grados) a **EPSG:32719 (UTM 19S, metros)** para medir las áreas sin distorsión.
3. **Vectorización:** se digitalizaron las masas de nieve de cada fecha en dos capas, `vieja_poligono` y `actual_poligono`.
4. **Cálculo de superficies:** con la Calculadora de Campos, `$area / 10000`, para obtener hectáreas.

### Resultados

| Fecha | Superficie nevada (ha) |
| --- | --- |
| 24/10/2024 | 2.916.618,21 |
| 27/10/2026 | 3.662.147,07 |
| **Variación** | **+745.528,86 ha (+25,6 %)** |

La cobertura de nieve de 2026 fue un 25,6 % mayor. Coincide con la nevada histórica de julio de 2026 en Malargüe ([Los Andes](https://www.losandes.com.ar/sociedad/tras-la-nevada-historica-las-lenas-abre-todas-sus-pistas-precios-y-actividades-recorrer-los-valles-malargue-n5999435)).

### 🌐 Mapa Web Interactivo

👉 [Ver Mapa Interactivo del Valle de las Lágrimas](https://genaro-sfrede.github.io/Modulo_4/mapa_nieve/index.html)

---

## 📥 Descargas

- [Descarga aquí el paquete de la Actividad 1 (.zip)](https://raw.githubusercontent.com/genaro-sfrede/Modulo_4/main/M4A1.zip)
- [Descarga aquí el paquete de la Actividad 2 (.zip)](https://raw.githubusercontent.com/genaro-sfrede/Modulo_4/main/M4A2.zip)
