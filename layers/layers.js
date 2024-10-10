var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 0.500000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_naturetrip_1 = new ol.format.GeoJSON();
var features_naturetrip_1 = format_naturetrip_1.readFeatures(json_naturetrip_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_naturetrip_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_naturetrip_1.addFeatures(features_naturetrip_1);
var lyr_naturetrip_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_naturetrip_1, 
                style: style_naturetrip_1,
                popuplayertitle: "nature trip",
                interactive: true,
                title: '<img src="styles/legend/naturetrip_1.png" /> nature trip'
            });
var format_tripto9temples_2 = new ol.format.GeoJSON();
var features_tripto9temples_2 = format_tripto9temples_2.readFeatures(json_tripto9temples_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tripto9temples_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tripto9temples_2.addFeatures(features_tripto9temples_2);
var lyr_tripto9temples_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tripto9temples_2, 
                style: style_tripto9temples_2,
                popuplayertitle: "trip to 9 temples",
                interactive: true,
                title: '<img src="styles/legend/tripto9temples_2.png" /> trip to 9 temples'
            });
var format_cafekhaotaozone_3 = new ol.format.GeoJSON();
var features_cafekhaotaozone_3 = format_cafekhaotaozone_3.readFeatures(json_cafekhaotaozone_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cafekhaotaozone_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cafekhaotaozone_3.addFeatures(features_cafekhaotaozone_3);
var lyr_cafekhaotaozone_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cafekhaotaozone_3, 
                style: style_cafekhaotaozone_3,
                popuplayertitle: "cafe khao tao zone",
                interactive: true,
                title: '<img src="styles/legend/cafekhaotaozone_3.png" /> cafe khao tao zone'
            });
var format_beachtripinhuahin_4 = new ol.format.GeoJSON();
var features_beachtripinhuahin_4 = format_beachtripinhuahin_4.readFeatures(json_beachtripinhuahin_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_beachtripinhuahin_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_beachtripinhuahin_4.addFeatures(features_beachtripinhuahin_4);
var lyr_beachtripinhuahin_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_beachtripinhuahin_4, 
                style: style_beachtripinhuahin_4,
                popuplayertitle: "beach trip in hua hin",
                interactive: true,
                title: '<img src="styles/legend/beachtripinhuahin_4.png" /> beach trip in hua hin'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_naturetrip_1.setVisible(true);lyr_tripto9temples_2.setVisible(true);lyr_cafekhaotaozone_3.setVisible(true);lyr_beachtripinhuahin_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_naturetrip_1,lyr_tripto9temples_2,lyr_cafekhaotaozone_3,lyr_beachtripinhuahin_4];
lyr_naturetrip_1.set('fieldAliases', {'id': 'id', 'name': 'name', 'picture': 'picture', });
lyr_tripto9temples_2.set('fieldAliases', {'id': 'id', 'name': 'name', 'picture': 'picture', });
lyr_cafekhaotaozone_3.set('fieldAliases', {'id': 'id', 'name': 'name', 'picture': 'picture', });
lyr_beachtripinhuahin_4.set('fieldAliases', {'id': 'id', 'name': 'name', 'picture': 'picture', });
lyr_naturetrip_1.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'picture': 'TextEdit', });
lyr_tripto9temples_2.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'picture': 'TextEdit', });
lyr_cafekhaotaozone_3.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'picture': 'TextEdit', });
lyr_beachtripinhuahin_4.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'picture': 'TextEdit', });
lyr_naturetrip_1.set('fieldLabels', {'id': 'hidden field', 'name': 'header label - always visible', 'picture': 'header label - always visible', });
lyr_tripto9temples_2.set('fieldLabels', {'id': 'hidden field', 'name': 'header label - always visible', 'picture': 'header label - always visible', });
lyr_cafekhaotaozone_3.set('fieldLabels', {'id': 'hidden field', 'name': 'header label - always visible', 'picture': 'header label - always visible', });
lyr_beachtripinhuahin_4.set('fieldLabels', {'id': 'hidden field', 'name': 'header label - always visible', 'picture': 'header label - always visible', });
lyr_beachtripinhuahin_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});