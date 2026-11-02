var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_geometryfixedKTR_1 = new ol.format.GeoJSON();
var features_geometryfixedKTR_1 = format_geometryfixedKTR_1.readFeatures(json_geometryfixedKTR_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_geometryfixedKTR_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_geometryfixedKTR_1.addFeatures(features_geometryfixedKTR_1);
var lyr_geometryfixedKTR_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_geometryfixedKTR_1, 
                style: style_geometryfixedKTR_1,
                popuplayertitle: 'geometry fixed KTR',
                interactive: false,
                title: '<img src="styles/legend/geometryfixedKTR_1.png" /> geometry fixed KTR'
            });
var format_geologyclip_2 = new ol.format.GeoJSON();
var features_geologyclip_2 = format_geologyclip_2.readFeatures(json_geologyclip_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_geologyclip_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_geologyclip_2.addFeatures(features_geologyclip_2);
var lyr_geologyclip_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_geologyclip_2, 
                style: style_geologyclip_2,
                popuplayertitle: 'geology clip',
                interactive: false,
    title: 'geology clip<br />\
    <img src="styles/legend/geologyclip_2_0.png" /> Khondalite Group of rocks<br />\
    <img src="styles/legend/geologyclip_2_1.png" /> Migmatite Complex<br />\
    <img src="styles/legend/geologyclip_2_2.png" /> Sand and Silt<br />\
    <img src="styles/legend/geologyclip_2_3.png" /> <br />' });
var format_GEOMORKTR_3 = new ol.format.GeoJSON();
var features_GEOMORKTR_3 = format_GEOMORKTR_3.readFeatures(json_GEOMORKTR_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GEOMORKTR_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GEOMORKTR_3.addFeatures(features_GEOMORKTR_3);
var lyr_GEOMORKTR_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GEOMORKTR_3, 
                style: style_GEOMORKTR_3,
                popuplayertitle: 'GEOMOR KTR',
                interactive: false,
    title: 'GEOMOR KTR<br />\
    <img src="styles/legend/GEOMORKTR_3_0.png" /> Linear ridge(Lower Plateau)<br />\
    <img src="styles/legend/GEOMORKTR_3_1.png" /> Lower Plateau (Lateritic) - Dissected<br />\
    <img src="styles/legend/GEOMORKTR_3_2.png" /> Residual Mount<br />\
    <img src="styles/legend/GEOMORKTR_3_3.png" /> Valley Fill<br />' });
var format_KTRBUILDINGGEOJSON_4 = new ol.format.GeoJSON();
var features_KTRBUILDINGGEOJSON_4 = format_KTRBUILDINGGEOJSON_4.readFeatures(json_KTRBUILDINGGEOJSON_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KTRBUILDINGGEOJSON_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KTRBUILDINGGEOJSON_4.addFeatures(features_KTRBUILDINGGEOJSON_4);
var lyr_KTRBUILDINGGEOJSON_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KTRBUILDINGGEOJSON_4, 
                style: style_KTRBUILDINGGEOJSON_4,
                popuplayertitle: 'KTR BUILDING GEOJSON',
                interactive: false,
                title: '<img src="styles/legend/KTRBUILDINGGEOJSON_4.png" /> KTR BUILDING GEOJSON'
            });
var format_clippedroadktr_5 = new ol.format.GeoJSON();
var features_clippedroadktr_5 = format_clippedroadktr_5.readFeatures(json_clippedroadktr_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clippedroadktr_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clippedroadktr_5.addFeatures(features_clippedroadktr_5);
var lyr_clippedroadktr_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clippedroadktr_5, 
                style: style_clippedroadktr_5,
                popuplayertitle: 'clipped road ktr',
                interactive: false,
                title: '<img src="styles/legend/clippedroadktr_5.png" /> clipped road ktr'
            });
var format_drainageclip_6 = new ol.format.GeoJSON();
var features_drainageclip_6 = format_drainageclip_6.readFeatures(json_drainageclip_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_drainageclip_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_drainageclip_6.addFeatures(features_drainageclip_6);
var lyr_drainageclip_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_drainageclip_6, 
                style: style_drainageclip_6,
                popuplayertitle: 'drainage clip',
                interactive: false,
    title: 'drainage clip<br />\
    <img src="styles/legend/drainageclip_6_0.png" /> 1<br />\
    <img src="styles/legend/drainageclip_6_1.png" /> 2<br />\
    <img src="styles/legend/drainageclip_6_2.png" /> 3<br />\
    <img src="styles/legend/drainageclip_6_3.png" /> 4<br />' });
var format_KTR_7 = new ol.format.GeoJSON();
var features_KTR_7 = format_KTR_7.readFeatures(json_KTR_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KTR_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KTR_7.addFeatures(features_KTR_7);
var lyr_KTR_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KTR_7, 
                style: style_KTR_7,
                popuplayertitle: 'KTR',
                interactive: true,
    title: 'KTR<br />\
    <img src="styles/legend/KTR_7_0.png" /> ALUMPARA<br />\
    <img src="styles/legend/KTR_7_1.png" /> AMBALAPPURAM<br />\
    <img src="styles/legend/KTR_7_2.png" /> AMMUMMAMUKKU<br />\
    <img src="styles/legend/KTR_7_3.png" /> AVANOOR<br />\
    <img src="styles/legend/KTR_7_4.png" /> CHANTHAMUKKU<br />\
    <img src="styles/legend/KTR_7_5.png" /> CHENTHARA<br />\
    <img src="styles/legend/KTR_7_6.png" /> COLLEGE<br />\
    <img src="styles/legend/KTR_7_7.png" /> E.T.C<br />\
    <img src="styles/legend/KTR_7_8.png" /> EYAMKUNNU<br />\
    <img src="styles/legend/KTR_7_9.png" /> GANDHI NAGAR<br />\
    <img src="styles/legend/KTR_7_10.png" /> GANDHIMUKKU<br />\
    <img src="styles/legend/KTR_7_11.png" /> ICEMUKKU<br />\
    <img src="styles/legend/KTR_7_12.png" /> K.S.R.T.C<br />\
    <img src="styles/legend/KTR_7_13.png" /> KADALAVILA<br />\
    <img src="styles/legend/KTR_7_14.png" /> KADAMKULAM<br />\
    <img src="styles/legend/KTR_7_15.png" /> KALLUVATHUKKAL<br />\
    <img src="styles/legend/KTR_7_16.png" /> KIZHAKKEKKARA<br />\
    <img src="styles/legend/KTR_7_17.png" /> KULASEKHARANALLOOR<br />\
    <img src="styles/legend/KTR_7_18.png" /> MUSLIM STREET<br />\
    <img src="styles/legend/KTR_7_19.png" /> NEELESWARAM<br />\
    <img src="styles/legend/KTR_7_20.png" /> PADINJATTINKARA<br />\
    <img src="styles/legend/KTR_7_21.png" /> PALAMOODU<br />\
    <img src="styles/legend/KTR_7_22.png" /> PAZHAYATHERUVU<br />\
    <img src="styles/legend/KTR_7_23.png" /> PULAMON TOWN<br />\
    <img src="styles/legend/KTR_7_24.png" /> RAILWAY STATION<br />\
    <img src="styles/legend/KTR_7_25.png" /> SASTHAMMUKAL<br />\
    <img src="styles/legend/KTR_7_26.png" /> THOTTOM MUKKU<br />\
    <img src="styles/legend/KTR_7_27.png" /> THRIKKANNAMANGAL<br />\
    <img src="styles/legend/KTR_7_28.png" /> TOWN<br />\
    <img src="styles/legend/KTR_7_29.png" /> VELAMKONAM<br />\
    <img src="styles/legend/KTR_7_30.png" /> <br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_geometryfixedKTR_1.setVisible(true);lyr_geologyclip_2.setVisible(true);lyr_GEOMORKTR_3.setVisible(true);lyr_KTRBUILDINGGEOJSON_4.setVisible(true);lyr_clippedroadktr_5.setVisible(true);lyr_drainageclip_6.setVisible(true);lyr_KTR_7.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_geometryfixedKTR_1,lyr_geologyclip_2,lyr_GEOMORKTR_3,lyr_KTRBUILDINGGEOJSON_4,lyr_clippedroadktr_5,lyr_drainageclip_6,lyr_KTR_7];
lyr_geometryfixedKTR_1.set('fieldAliases', {'id': 'id', });
lyr_geologyclip_2.set('fieldAliases', {'fid': 'fid', 'ROCK_GROUP': 'ROCK_GROUP', 'NAME': 'NAME', });
lyr_GEOMORKTR_3.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'TYPE1': 'TYPE1', 'TYPE2': 'TYPE2', });
lyr_KTRBUILDINGGEOJSON_4.set('fieldAliases', {'source': 'source', 'height': 'height', });
lyr_clippedroadktr_5.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'Length': 'Length', });
lyr_drainageclip_6.set('fieldAliases', {'fid': 'fid', 'ORDER1': 'ORDER1', });
lyr_KTR_7.set('fieldAliases', {'gml_parent': 'gml_parent', 'gml_pare_1': 'gml_pare_1', 'gml_id': 'gml_id', 'geom': 'geom', 'District': 'District', 'LSGD': 'LSGD', 'Ward_Name': 'Ward_Name', 'Ward_No': 'Ward_No', 'Lsgd_Type': 'Lsgd_Type', 'Created_Da': 'Created_Da', 'Surveyor': 'Surveyor', 'Mob_No': 'Mob_No', 'Remarks': 'Remarks', '_distLsgd': '_distLsgd', 'OBJECTID': 'OBJECTID', '_result': '_result', '_ulid': '_ulid', '_distLsgd2': '_distLsgd2', });
lyr_geometryfixedKTR_1.set('fieldImages', {'id': 'TextEdit', });
lyr_geologyclip_2.set('fieldImages', {'fid': 'TextEdit', 'ROCK_GROUP': 'TextEdit', 'NAME': 'TextEdit', });
lyr_GEOMORKTR_3.set('fieldImages', {'fid': 'TextEdit', 'NAME': 'TextEdit', 'TYPE1': 'TextEdit', 'TYPE2': 'TextEdit', });
lyr_KTRBUILDINGGEOJSON_4.set('fieldImages', {'source': 'TextEdit', 'height': 'TextEdit', });
lyr_clippedroadktr_5.set('fieldImages', {'fid': 'TextEdit', 'NAME': 'TextEdit', 'Length': 'TextEdit', });
lyr_drainageclip_6.set('fieldImages', {'fid': 'TextEdit', 'ORDER1': 'Range', });
lyr_KTR_7.set('fieldImages', {'gml_parent': 'TextEdit', 'gml_pare_1': 'TextEdit', 'gml_id': 'TextEdit', 'geom': 'TextEdit', 'District': 'TextEdit', 'LSGD': 'TextEdit', 'Ward_Name': 'TextEdit', 'Ward_No': 'TextEdit', 'Lsgd_Type': 'TextEdit', 'Created_Da': 'TextEdit', 'Surveyor': 'TextEdit', 'Mob_No': 'TextEdit', 'Remarks': 'TextEdit', '_distLsgd': 'TextEdit', 'OBJECTID': 'TextEdit', '_result': 'TextEdit', '_ulid': 'TextEdit', '_distLsgd2': 'TextEdit', });
lyr_geometryfixedKTR_1.set('fieldLabels', {'id': 'no label', });
lyr_geologyclip_2.set('fieldLabels', {'fid': 'no label', 'ROCK_GROUP': 'no label', 'NAME': 'no label', });
lyr_GEOMORKTR_3.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'TYPE1': 'no label', 'TYPE2': 'no label', });
lyr_KTRBUILDINGGEOJSON_4.set('fieldLabels', {'source': 'no label', 'height': 'no label', });
lyr_clippedroadktr_5.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'Length': 'no label', });
lyr_drainageclip_6.set('fieldLabels', {'fid': 'no label', 'ORDER1': 'no label', });
lyr_KTR_7.set('fieldLabels', {'gml_parent': 'no label', 'gml_pare_1': 'no label', 'gml_id': 'no label', 'geom': 'no label', 'District': 'no label', 'LSGD': 'no label', 'Ward_Name': 'inline label - always visible', 'Ward_No': 'no label', 'Lsgd_Type': 'no label', 'Created_Da': 'no label', 'Surveyor': 'no label', 'Mob_No': 'no label', 'Remarks': 'no label', '_distLsgd': 'no label', 'OBJECTID': 'no label', '_result': 'no label', '_ulid': 'no label', '_distLsgd2': 'no label', });
lyr_KTR_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});