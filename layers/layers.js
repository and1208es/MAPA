var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_satelite_1 = new ol.layer.Tile({
            'title': 'satelite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_CCATUN_RUMI_LOTES_2 = new ol.format.GeoJSON();
var features_CCATUN_RUMI_LOTES_2 = format_CCATUN_RUMI_LOTES_2.readFeatures(json_CCATUN_RUMI_LOTES_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CCATUN_RUMI_LOTES_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CCATUN_RUMI_LOTES_2.addFeatures(features_CCATUN_RUMI_LOTES_2);
var lyr_CCATUN_RUMI_LOTES_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CCATUN_RUMI_LOTES_2, 
                style: style_CCATUN_RUMI_LOTES_2,
                popuplayertitle: 'CCATUN_RUMI_LOTES',
                interactive: true,
                title: '<img src="styles/legend/CCATUN_RUMI_LOTES_2.png" /> CCATUN_RUMI_LOTES'
            });
var format_GRAN_SHINONGARI_LOTES_3 = new ol.format.GeoJSON();
var features_GRAN_SHINONGARI_LOTES_3 = format_GRAN_SHINONGARI_LOTES_3.readFeatures(json_GRAN_SHINONGARI_LOTES_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRAN_SHINONGARI_LOTES_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRAN_SHINONGARI_LOTES_3.addFeatures(features_GRAN_SHINONGARI_LOTES_3);
var lyr_GRAN_SHINONGARI_LOTES_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRAN_SHINONGARI_LOTES_3, 
                style: style_GRAN_SHINONGARI_LOTES_3,
                popuplayertitle: 'GRAN_SHINONGARI_LOTES',
                interactive: true,
                title: '<img src="styles/legend/GRAN_SHINONGARI_LOTES_3.png" /> GRAN_SHINONGARI_LOTES'
            });
var format_LOS_CEDROS_LOTES_4 = new ol.format.GeoJSON();
var features_LOS_CEDROS_LOTES_4 = format_LOS_CEDROS_LOTES_4.readFeatures(json_LOS_CEDROS_LOTES_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOS_CEDROS_LOTES_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOS_CEDROS_LOTES_4.addFeatures(features_LOS_CEDROS_LOTES_4);
var lyr_LOS_CEDROS_LOTES_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOS_CEDROS_LOTES_4, 
                style: style_LOS_CEDROS_LOTES_4,
                popuplayertitle: 'LOS_CEDROS_LOTES',
                interactive: true,
                title: '<img src="styles/legend/LOS_CEDROS_LOTES_4.png" /> LOS_CEDROS_LOTES'
            });
var format_NOGALPAMPA_LOTES_5 = new ol.format.GeoJSON();
var features_NOGALPAMPA_LOTES_5 = format_NOGALPAMPA_LOTES_5.readFeatures(json_NOGALPAMPA_LOTES_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NOGALPAMPA_LOTES_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NOGALPAMPA_LOTES_5.addFeatures(features_NOGALPAMPA_LOTES_5);
var lyr_NOGALPAMPA_LOTES_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NOGALPAMPA_LOTES_5, 
                style: style_NOGALPAMPA_LOTES_5,
                popuplayertitle: 'NOGALPAMPA_LOTES',
                interactive: true,
                title: '<img src="styles/legend/NOGALPAMPA_LOTES_5.png" /> NOGALPAMPA_LOTES'
            });
var format_PICHARI_BAJA_LOTES_2_6 = new ol.format.GeoJSON();
var features_PICHARI_BAJA_LOTES_2_6 = format_PICHARI_BAJA_LOTES_2_6.readFeatures(json_PICHARI_BAJA_LOTES_2_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PICHARI_BAJA_LOTES_2_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PICHARI_BAJA_LOTES_2_6.addFeatures(features_PICHARI_BAJA_LOTES_2_6);
var lyr_PICHARI_BAJA_LOTES_2_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PICHARI_BAJA_LOTES_2_6, 
                style: style_PICHARI_BAJA_LOTES_2_6,
                popuplayertitle: 'PICHARI_BAJA_LOTES_2',
                interactive: true,
                title: '<img src="styles/legend/PICHARI_BAJA_LOTES_2_6.png" /> PICHARI_BAJA_LOTES_2'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_satelite_1.setVisible(true);lyr_CCATUN_RUMI_LOTES_2.setVisible(true);lyr_GRAN_SHINONGARI_LOTES_3.setVisible(true);lyr_LOS_CEDROS_LOTES_4.setVisible(true);lyr_NOGALPAMPA_LOTES_5.setVisible(true);lyr_PICHARI_BAJA_LOTES_2_6.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_satelite_1,lyr_CCATUN_RUMI_LOTES_2,lyr_GRAN_SHINONGARI_LOTES_3,lyr_LOS_CEDROS_LOTES_4,lyr_NOGALPAMPA_LOTES_5,lyr_PICHARI_BAJA_LOTES_2_6];
lyr_CCATUN_RUMI_LOTES_2.set('fieldAliases', {'FID': 'FID', 'area': 'area', 'perimetro': 'perimetro', 'lote': 'lote', 'id_lote': 'id_lote', 'cod_catas': 'cod_catas', 'sector': 'sector', 'manzana': 'manzana', 'descripc': 'descripc', 'frente': 'frente', 'derecha': 'derecha', 'izquierda': 'izquierda', 'fondo': 'fondo', });
lyr_GRAN_SHINONGARI_LOTES_3.set('fieldAliases', {'FID': 'FID', 'id_lote': 'id_lote', 'manzana': 'manzana', 'lote': 'lote', 'sector': 'sector', });
lyr_LOS_CEDROS_LOTES_4.set('fieldAliases', {'FID': 'FID', 'sector': 'sector', 'manzana': 'manzana', 'lote': 'lote', });
lyr_NOGALPAMPA_LOTES_5.set('fieldAliases', {'FID': 'FID', 'sector': 'sector', 'manzana': 'manzana', 'lote': 'lote', });
lyr_PICHARI_BAJA_LOTES_2_6.set('fieldAliases', {'FID': 'FID', 'sector': 'sector', 'manzana': 'manzana', 'lote': 'lote', });
lyr_CCATUN_RUMI_LOTES_2.set('fieldImages', {'FID': 'TextEdit', 'area': 'TextEdit', 'perimetro': 'TextEdit', 'lote': 'Range', 'id_lote': 'TextEdit', 'cod_catas': 'TextEdit', 'sector': 'TextEdit', 'manzana': 'TextEdit', 'descripc': 'TextEdit', 'frente': 'TextEdit', 'derecha': 'TextEdit', 'izquierda': 'TextEdit', 'fondo': 'TextEdit', });
lyr_GRAN_SHINONGARI_LOTES_3.set('fieldImages', {'FID': 'TextEdit', 'id_lote': 'TextEdit', 'manzana': 'TextEdit', 'lote': 'Range', 'sector': 'TextEdit', });
lyr_LOS_CEDROS_LOTES_4.set('fieldImages', {'FID': 'TextEdit', 'sector': 'TextEdit', 'manzana': 'TextEdit', 'lote': 'Range', });
lyr_NOGALPAMPA_LOTES_5.set('fieldImages', {'FID': 'TextEdit', 'sector': 'TextEdit', 'manzana': 'TextEdit', 'lote': 'Range', });
lyr_PICHARI_BAJA_LOTES_2_6.set('fieldImages', {'FID': 'TextEdit', 'sector': 'TextEdit', 'manzana': 'TextEdit', 'lote': 'Range', });
lyr_CCATUN_RUMI_LOTES_2.set('fieldLabels', {'FID': 'hidden field', 'area': 'inline label - always visible', 'perimetro': 'inline label - always visible', 'lote': 'inline label - always visible', 'id_lote': 'inline label - always visible', 'cod_catas': 'inline label - always visible', 'sector': 'inline label - always visible', 'manzana': 'inline label - always visible', 'descripc': 'inline label - always visible', 'frente': 'inline label - always visible', 'derecha': 'inline label - always visible', 'izquierda': 'inline label - always visible', 'fondo': 'inline label - always visible', });
lyr_GRAN_SHINONGARI_LOTES_3.set('fieldLabels', {'FID': 'hidden field', 'id_lote': 'inline label - always visible', 'manzana': 'inline label - always visible', 'lote': 'inline label - always visible', 'sector': 'inline label - always visible', });
lyr_LOS_CEDROS_LOTES_4.set('fieldLabels', {'FID': 'hidden field', 'sector': 'inline label - always visible', 'manzana': 'inline label - always visible', 'lote': 'inline label - always visible', });
lyr_NOGALPAMPA_LOTES_5.set('fieldLabels', {'FID': 'hidden field', 'sector': 'inline label - always visible', 'manzana': 'inline label - always visible', 'lote': 'inline label - always visible', });
lyr_PICHARI_BAJA_LOTES_2_6.set('fieldLabels', {'FID': 'hidden field', 'sector': 'inline label - always visible', 'manzana': 'inline label - always visible', 'lote': 'inline label - always visible', });
lyr_PICHARI_BAJA_LOTES_2_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});