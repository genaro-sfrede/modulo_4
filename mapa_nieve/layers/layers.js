var wms_layers = [];

var lyr_imagen_viejatif_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Imagen 24/10/2024' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/imagen_viejatif_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-7897457.325443, -4425497.460756, -7718829.323081, -3860932.211418]
        })
    });
var format_vieja_poligono_1 = new ol.format.GeoJSON();
var features_vieja_poligono_1 = format_vieja_poligono_1.readFeatures(json_vieja_poligono_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vieja_poligono_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vieja_poligono_1.addFeatures(features_vieja_poligono_1);
var lyr_vieja_poligono_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_vieja_poligono_1, 
                style: style_vieja_poligono_1,
                popuplayertitle: 'Nieve 2024',
                interactive: true,
                title: '<img src="styles/legend/vieja_poligono_1.png" /> Nieve 24/10/2024'
            });
var lyr_imagen_actualtif_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Imagen 27/10/2026' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/imagen_actualtif_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-7897457.325443, -4425497.460756, -7718829.323081, -3860932.211418]
        })
    });
var format_actual_poligono_3 = new ol.format.GeoJSON();
var features_actual_poligono_3 = format_actual_poligono_3.readFeatures(json_actual_poligono_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_actual_poligono_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_actual_poligono_3.addFeatures(features_actual_poligono_3);
var lyr_actual_poligono_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_actual_poligono_3, 
                style: style_actual_poligono_3,
                popuplayertitle: 'Nieve 2026',
                interactive: true,
                title: '<img src="styles/legend/actual_poligono_3.png" /> Nieve 27/10/2026'
            });

lyr_imagen_viejatif_0.setVisible(false);lyr_vieja_poligono_1.setVisible(true);lyr_imagen_actualtif_2.setVisible(true);lyr_actual_poligono_3.setVisible(true);
var layersList = [lyr_imagen_viejatif_0,lyr_imagen_actualtif_2,lyr_vieja_poligono_1,lyr_actual_poligono_3];
lyr_vieja_poligono_1.set('fieldAliases', {'id': 'Polígono', 'Year': 'Año', 'Area_ha': 'Superficie (ha)', });
lyr_actual_poligono_3.set('fieldAliases', {'id': 'Polígono', 'Year': 'Año', 'Area_ha': 'Superficie (ha)', });
lyr_vieja_poligono_1.set('fieldImages', {'id': 'TextEdit', 'Year': 'TextEdit', 'Area_ha': 'TextEdit', });
lyr_actual_poligono_3.set('fieldImages', {'id': 'TextEdit', 'Year': 'TextEdit', 'Area_ha': 'TextEdit', });
lyr_vieja_poligono_1.set('fieldLabels', {'id': 'no label', 'Year': 'inline label - always visible', 'Area_ha': 'inline label - always visible', });
lyr_actual_poligono_3.set('fieldLabels', {'id': 'no label', 'Year': 'inline label - always visible', 'Area_ha': 'inline label - always visible', });
lyr_actual_poligono_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});