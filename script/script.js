/**
 * Created by apple on 15/4/1.
 */
var margin = {t:30,l:250,b:20,r:250},
    width = 1170/5,
    height = 150;

    //.attr('transform',"translate("+width+","+height+")");

var projection = d3.geo.albersUsa()
    .translate([width/2, height/2])
    .scale(300);

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
    .defer(d3.csv,"data/USAaqi/aqireport1980.csv",parseData)
    .defer(d3.csv, "data/USAaqi/aqireport1981.csv", parseData)
    .await(dataLoaded);
    function dataLoaded(err,counties,year1980,year1981){
        //console.log(year1980);
        draw(counties,[
            {year:"1980",series:year1980},
            {year:"1981",series:year1981}
        ]);

    };

function draw(counties,years){
    console.log(counties)
    console.log(years)

    var svg = d3.select('.canvas')
        .selectAll('.small-canvas')
        .data(years)
        .enter()
        .append('div')
        .attr('class','small-canvas') //how many of these?
        //.style('height',(height+margin.t+margin.b)+'px')
        .append('svg')
        .attr('width',width)
        .attr('height',height)
        .append('g')
        //.attr('transform','translate('+margin.l+','+margin.t+')')

       var aqimap = svg.append('g')
           //.attr('class','aqimap');

            aqimap
                .append('path')
            .datum(counties.features)
            .attr('d',path)//4000 pathes for counties
            .style('fill',function(d){
            var cbas = +d.properties.GEOID;

            if(medianByCbas.get(cbas) == undefined){
                return 'none';
            };
            var airPollution = medianByCbas.get(cbas);

            return scaleColor(airPollution);
        });

}


function parseData(d){
    //console.log(d)
    //rateById.set(formatNumber(+d.id), +d.rate);
    var cbas = d['CBSA Code'];
    var AQImedian = d['AQI Median'];
    medianByCbas.set(cbas, AQImedian);
    return{
        cbas:d['CBSA Code'],
        AQImedian : d['AQI Median']
    }

}
