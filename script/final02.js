/**
 * Created by apple on 15/4/11.
 */
 /* this is NOT the one I have problem now! please see SCRIPT!!!!!*/ 
/* this not finish yet!*/
/* i trying to write the code like http://bost.ocks.org/mike/drought/, but I don't know how to queue data*/







var margin = {t:30,l:250,b:20,r:250},
    width = 1170/5,
    height = 150;


var svg = d3.select('.canvas')
    .append('svg')
    .attr('width',width)
    .attr('height',height)
    .append('g')


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
