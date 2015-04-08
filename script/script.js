/**
 * Created by apple on 15/4/1.
 */
var margin = {t:50,l:50,b:50,r:50},
    width = $('.canvas').width()-margin.l-margin.r,
    height = $('.canvas').height()-margin.t-margin.b;

var svg = d3.select('.canvas')
    .append('svg')
    .attr('width',width+margin.l+margin.r)
    .attr('height',height+margin.t+margin.b)
    .append('g')
    .attr('transform',"translate("+margin.l+","+margin.t+")");

var projection = d3.geo.albersUsa()
    .translate([width/2, height/2]);

var path = d3.geo.path()
    .projection(projection);

var medianByCbas = d3.map();

var scaleColor = d3.scale.linear().domain([0,100]).range(["#fff","green"]);

//pre-select .custom-tooltip

//var customTooltip = d3.select('.custom-tooltip')
//var canvasDiv = d3.select('.canvas').node()

//import data
queue()
    .defer(d3.json, "data/cbsa.tiger2013.json")
    //.defer(d3.json,"data/CBSA_Feb2103_delineation.json")
    //.defer(d3.json, "data/gz_2010_us_040_00_5m.json")
    .defer(d3.csv, "data/USAaqi/aqireport1999.csv", parseData)
    .defer(d3.csv,"data/USAaqi/aqireport1998.csv", parseData)
    .await(function(err, counties, states){

        draw(counties, states);
    })

function draw(counties, states){
    console.log(counties.features)

    svg.selectAll('.county')
        .data(counties.features)
        .enter()
        .append('path')
        .attr('class','county')
        .attr('d',path)//4000 pathes for counties
        .style('fill',function(d){
            var cbas = d.properties.GEOID

            if(medianByCbas.get(cbas) == undefined){
                return 'none';
            };
            var airPollution = medianByCbas.get(cbas);

            return scaleColor(airPollution);
        });

    //svg.append('path')
    //    .datum(states)
    //    .attr('class','state')
    //    .attr('d',path)//datum give one path for states
}

function parseData(d){
    //console.log(d)
    //rateById.set(formatNumber(+d.id), +d.rate);
    var cbas = d['CBSA Code'];
    var AQImedian = d['AQI Median']
    medianByCbas.set(cbas, AQImedian);
}
