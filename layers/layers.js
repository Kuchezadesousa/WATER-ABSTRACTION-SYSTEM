ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([3392013.409342, -2030751.193020, 3440429.664038, -2005764.947292]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_TOTALPHOSPHORUS_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "TOTAL PHOSPHORUS",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/TOTALPHOSPHORUS_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [3395570.847575, -2030154.367818, 3436889.998476, -2006388.191079]
                            })
                        });
var lyr_Waterdepth_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Water depth",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Waterdepth_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [3395548.159987, -2030134.842163, 3436874.125282, -2006359.901862]
                            })
                        });
var lyr_TotalSuspendedMatter_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Total Suspended Matter",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/TotalSuspendedMatter_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [3395570.847575, -2030154.367818, 3436889.998476, -2006388.191079]
                            })
                        });
var lyr_NDVI_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "NDVI",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NDVI_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [3395570.847575, -2030154.367818, 3436889.998476, -2006388.191079]
                            })
                        });
var lyr_Turbidity_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "Turbidity",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Turbidity_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [3395570.847575, -2030154.367818, 3436889.998476, -2006388.191079]
                            })
                        });
var lyr_Chlorophyll_a_6 = new ol.layer.Image({
                            opacity: 1,
                            title: "Chlorophyll_a",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Chlorophyll_a_6.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [3395570.847575, -2030154.367818, 3436889.998476, -2006388.191079]
                            })
                        });
var format_LakesChiveroManyame_7 = new ol.format.GeoJSON();
var features_LakesChiveroManyame_7 = format_LakesChiveroManyame_7.readFeatures(json_LakesChiveroManyame_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LakesChiveroManyame_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LakesChiveroManyame_7.addFeatures(features_LakesChiveroManyame_7);
var lyr_LakesChiveroManyame_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LakesChiveroManyame_7, 
                style: style_LakesChiveroManyame_7,
                popuplayertitle: "Lakes Chivero & Manyame",
                interactive: true,
                    title: '<img src="styles/legend/LakesChiveroManyame_7.png" /> Lakes Chivero & Manyame'
                });

lyr_OSMStandard_0.setVisible(true);lyr_TOTALPHOSPHORUS_1.setVisible(true);lyr_Waterdepth_2.setVisible(true);lyr_TotalSuspendedMatter_3.setVisible(true);lyr_NDVI_4.setVisible(true);lyr_Turbidity_5.setVisible(true);lyr_Chlorophyll_a_6.setVisible(true);lyr_LakesChiveroManyame_7.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_TOTALPHOSPHORUS_1,lyr_Waterdepth_2,lyr_TotalSuspendedMatter_3,lyr_NDVI_4,lyr_Turbidity_5,lyr_Chlorophyll_a_6,lyr_LakesChiveroManyame_7];
lyr_LakesChiveroManyame_7.set('fieldAliases', {'name': 'name', 'name_en': 'name_en', 'waterway': 'waterway', 'covered': 'covered', 'width': 'width', 'depth': 'depth', 'layer': 'layer', 'blockage': 'blockage', 'tunnel': 'tunnel', 'natural': 'natural', 'water': 'water', 'source': 'source', 'name_ny': 'name_ny', 'name_chj': 'name_chj', 'name_kck': 'name_kck', 'name_kho': 'name_kho', 'name_nmq': 'name_nmq', 'name_nde': 'name_nde', 'name_nr': 'name_nr', 'name_shk': 'name_shk', 'name_sn': 'name_sn', 'name_st': 'name_st', 'name_toi': 'name_toi', 'name_tna': 'name_tna', 'name_ven': 'name_ven', 'name_xh': 'name_xh', 'osm_id': 'osm_id', 'osm_type': 'osm_type', });
lyr_LakesChiveroManyame_7.set('fieldImages', {'name': 'TextEdit', 'name_en': 'TextEdit', 'waterway': 'TextEdit', 'covered': 'TextEdit', 'width': 'TextEdit', 'depth': 'TextEdit', 'layer': 'TextEdit', 'blockage': 'TextEdit', 'tunnel': 'TextEdit', 'natural': 'TextEdit', 'water': 'TextEdit', 'source': 'TextEdit', 'name_ny': 'TextEdit', 'name_chj': 'TextEdit', 'name_kck': 'TextEdit', 'name_kho': 'TextEdit', 'name_nmq': 'TextEdit', 'name_nde': 'TextEdit', 'name_nr': 'TextEdit', 'name_shk': 'TextEdit', 'name_sn': 'TextEdit', 'name_st': 'TextEdit', 'name_toi': 'TextEdit', 'name_tna': 'TextEdit', 'name_ven': 'TextEdit', 'name_xh': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', });
lyr_LakesChiveroManyame_7.set('fieldLabels', {'name': 'no label', 'name_en': 'no label', 'waterway': 'no label', 'covered': 'no label', 'width': 'no label', 'depth': 'no label', 'layer': 'no label', 'blockage': 'no label', 'tunnel': 'no label', 'natural': 'no label', 'water': 'no label', 'source': 'no label', 'name_ny': 'no label', 'name_chj': 'no label', 'name_kck': 'header label - always visible', 'name_kho': 'no label', 'name_nmq': 'no label', 'name_nde': 'no label', 'name_nr': 'no label', 'name_shk': 'no label', 'name_sn': 'no label', 'name_st': 'no label', 'name_toi': 'no label', 'name_tna': 'no label', 'name_ven': 'no label', 'name_xh': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', });
lyr_LakesChiveroManyame_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});