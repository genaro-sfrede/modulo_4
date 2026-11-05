var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_poligono_1 = new ol.format.GeoJSON();
var features_poligono_1 = format_poligono_1.readFeatures(json_poligono_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_poligono_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poligono_1.addFeatures(features_poligono_1);
var lyr_poligono_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_poligono_1, 
                style: style_poligono_1,
                popuplayertitle: 'Finca',
                interactive: true,
    title: 'Fincas – impacto hídrico<br />\
        <img src="styles/legend/poligono_1_1.png" /> Alto<br />\
    <img src="styles/legend/poligono_1_2.png" /> Bajo<br />\
    <img src="styles/legend/poligono_1_3.png" /> Medio<br />' });
var format_voronoi_bodegas_4 = new ol.format.GeoJSON();
var features_voronoi_bodegas_4 = format_voronoi_bodegas_4.readFeatures(json_voronoi_bodegas_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_voronoi_bodegas_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_voronoi_bodegas_4.addFeatures(features_voronoi_bodegas_4);
var lyr_voronoi_bodegas_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_voronoi_bodegas_4, 
                style: style_voronoi_bodegas_4,
                popuplayertitle: 'Zona de influencia (Voronoi)',
                interactive: true,
                title: '<img src="styles/legend/voronoi_bodegas_4.png" /> Zonas de influencia (Voronoi)'
            });
var format_delaunay_bodegas_2 = new ol.format.GeoJSON();
var features_delaunay_bodegas_2 = format_delaunay_bodegas_2.readFeatures(json_delaunay_bodegas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_delaunay_bodegas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_delaunay_bodegas_2.addFeatures(features_delaunay_bodegas_2);
var lyr_delaunay_bodegas_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_delaunay_bodegas_2, 
                style: style_delaunay_bodegas_2,
                popuplayertitle: 'Triángulo de Delaunay',
                interactive: true,
                title: '<img src="styles/legend/delaunay_bodegas_2.png" /> Red de vecindad (Delaunay)'
            });
var format_bodegas_3 = new ol.format.GeoJSON();
var features_bodegas_3 = format_bodegas_3.readFeatures(json_bodegas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bodegas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bodegas_3.addFeatures(features_bodegas_3);
var lyr_bodegas_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bodegas_3, 
                style: style_bodegas_3,
                popuplayertitle: 'Bodega',
                interactive: true,
    title: 'Bodegas – empleados<br />\
    <img src="styles/legend/bodegas_3_0.png" /> 40 - 60<br />\
    <img src="styles/legend/bodegas_3_1.png" /> 60 - 150<br />\
    <img src="styles/legend/bodegas_3_2.png" /> 150 - 200<br />\
    <img src="styles/legend/bodegas_3_3.png" /> 200 - 300<br />\
    <img src="styles/legend/bodegas_3_4.png" /> 300 - 400<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_poligono_1.setVisible(true);lyr_voronoi_bodegas_4.setVisible(true);lyr_delaunay_bodegas_2.setVisible(true);lyr_bodegas_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_poligono_1,lyr_voronoi_bodegas_4,lyr_delaunay_bodegas_2,lyr_bodegas_3];
lyr_poligono_1.set('fieldAliases', {'id': 'id', 'Nombre': 'Nombre', 'Ha': 'Superficie (ha)', 'Imp_hidric': 'Impacto hídrico', });
lyr_delaunay_bodegas_2.set('fieldAliases', {'fid': 'fid', 'POINTA': 'POINTA', 'POINTB': 'POINTB', 'POINTC': 'POINTC', });
lyr_bodegas_3.set('fieldAliases', {'id': 'id', 'Nombre': 'Nombre', 'Departamen': 'Departamento', 'Zona': 'Zona', 'lat': 'lat', 'lon': 'lon', 'Empleados': 'Empleados', 'Cap_ML': 'Capacidad (millones de litros)', 'Fuente_att': 'Fuente_att', });
lyr_poligono_1.set('fieldImages', {'id': 'TextEdit', 'Nombre': 'TextEdit', 'Ha': 'TextEdit', 'Imp_hidric': 'TextEdit', });
lyr_delaunay_bodegas_2.set('fieldImages', {'fid': 'TextEdit', 'POINTA': 'TextEdit', 'POINTB': 'TextEdit', 'POINTC': 'TextEdit', });
lyr_bodegas_3.set('fieldImages', {'id': 'TextEdit', 'Nombre': 'TextEdit', 'Departamen': 'TextEdit', 'Zona': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', 'Empleados': 'TextEdit', 'Cap_ML': 'TextEdit', 'Fuente_att': 'TextEdit', });
lyr_poligono_1.set('fieldLabels', {'id': 'no label', 'Nombre': 'inline label - always visible', 'Ha': 'inline label - always visible', 'Imp_hidric': 'inline label - always visible', });
lyr_delaunay_bodegas_2.set('fieldLabels', {'fid': 'no label', 'POINTA': 'no label', 'POINTB': 'no label', 'POINTC': 'no label', });
lyr_bodegas_3.set('fieldLabels', {'id': 'no label', 'Nombre': 'inline label - always visible', 'Departamen': 'header label - always visible', 'Zona': 'inline label - always visible', 'lat': 'no label', 'lon': 'no label', 'Empleados': 'inline label - always visible', 'Cap_ML': 'inline label - always visible', 'Fuente_att': 'no label', });
lyr_voronoi_bodegas_4.set('fieldAliases', {'id': 'id', 'Nombre': 'Bodega', 'Zona': 'Zona', 'Ha_influ': 'Área de influencia (ha)', });
lyr_voronoi_bodegas_4.set('fieldImages', {'id': 'TextEdit', 'Nombre': 'TextEdit', 'Zona': 'TextEdit', 'Ha_influ': 'TextEdit', });
lyr_voronoi_bodegas_4.set('fieldLabels', {'id': 'no label', 'Nombre': 'inline label - always visible', 'Zona': 'inline label - always visible', 'Ha_influ': 'inline label - always visible', });
lyr_delaunay_bodegas_2.set('interactive', false);
lyr_bodegas_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});