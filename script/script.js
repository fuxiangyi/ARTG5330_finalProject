/**
 * Created by apple on 15/4/1.
 */
var margin = {t:10,l:10,b:10,r:10},
    width = $('.canvas').width()/4,
    height = 300;

    //.attr('transform',"translate("+width+","+height+")");
var newYears;
var projection = d3.geo.albersUsa()
    .translate([width/2, height/2])
    .scale(500);

var path = d3.geo.path()
    .projection(projection)
    .pointRadius(3);




var force = d3.layout.force()
    .charge(0)
    .gravity(0)
    .size([width, height]) //TODO can I append the circle according to the coordinates in json file??

var scaleColor = d3.scale.linear().domain([0,200]).range(["white", "red"]);
var aqi_val;

////pre-select .custom-tooltip
//
//var customTooltip = d3.select('.custom-tooltip')
//var canvasDiv = d3.select('.canvas').node()

//var dispatch = d3.dispatch('customEvent');

//import data
queue()
    .defer(d3.json, "data/cbsa_centroid.json")
    .defer(d3.csv,"data/USAaqi/aqireport1980.csv",parseData)
    .defer(d3.csv, "data/USAaqi/aqireport1981.csv", parseData)
    .defer(d3.csv, "data/USAaqi/aqireport1982.csv", parseData)
    .defer(d3.csv, "data/USAaqi/aqireport1983.csv", parseData)
    .defer(d3.csv, "data/USAaqi/aqireport1984.csv", parseData)
    .defer(d3.csv, "data/USAaqi/aqireport1985.csv", parseData)
    .defer(d3.csv, "data/USAaqi/aqireport1986.csv", parseData)
    .defer(d3.csv, "data/USAaqi/aqireport1987.csv", parseData)
    .defer(d3.csv, "data/USAaqi/aqireport1988.csv", parseData)
    .defer(d3.csv, "data/USAaqi/aqireport1989.csv", parseData)
    .defer(d3.csv, "data/USAaqi/aqireport1990.csv", parseData)
    .defer(d3.csv, "data/USAaqi/aqireport1991.csv", parseData)
    .defer(d3.csv, "data/USAaqi/aqireport1992.csv", parseData)
    .defer(d3.csv, "data/USAaqi/aqireport1993.csv", parseData)
    .defer(d3.csv, "data/USAaqi/aqireport1994.csv", parseData)
    .defer(d3.csv, "data/USAaqi/aqireport1995.csv", parseData)
    .defer(d3.csv, "data/USAaqi/aqireport1996.csv", parseData)
    .defer(d3.csv, "data/USAaqi/aqireport1997.csv", parseData)
    .defer(d3.csv, "data/USAaqi/aqireport1998.csv", parseData)
    .defer(d3.csv, "data/USAaqi/aqireport1999.csv", parseData)
    .defer(d3.csv, "data/USAaqi/aqireport2000.csv", parseData)
    .defer(d3.csv, "data/USAaqi/aqireport2001.csv", parseData)
    .defer(d3.csv, "data/USAaqi/aqireport2002.csv", parseData)
    .defer(d3.csv, "data/USAaqi/aqireport2003.csv", parseData)
    .defer(d3.csv, "data/USAaqi/aqireport2004.csv", parseData)
    .defer(d3.csv, "data/USAaqi/aqireport2005.csv", parseData)
    .defer(d3.csv, "data/USAaqi/aqireport2006.csv", parseData)
    .defer(d3.csv, "data/USAaqi/aqireport2007.csv", parseData)
    .defer(d3.csv, "data/USAaqi/aqireport2008.csv", parseData)
    .defer(d3.csv, "data/USAaqi/aqireport2009.csv", parseData)
    .defer(d3.csv, "data/USAaqi/aqireport2010.csv", parseData)
    .defer(d3.csv, "data/USAaqi/aqireport2011.csv", parseData)
    .defer(d3.csv, "data/USAaqi/aqireport2012.csv", parseData)
    .defer(d3.csv, "data/USAaqi/aqireport2013.csv", parseData)
    .await(dataLoaded);
    function dataLoaded(err,counties,year1980,year1981,year1982,
                        year1983,year1984,year1985,year1986,year1987,
                        year1988,year1989,year1990,year1991,year1992,
                        year1993,year1994,year1995,year1996,year1997,
                        year1998,year1999,year2000,year2001,year2002,year2003,
                        year2004,year2005,year2006,year2007,year2008,
                        year2009,year2010,year2011,year2012,year2013){
        //console.log(year1980);
        //console.log(counties)


        var map1980 = d3.map(year1980, function(d){ return d.cbas;});
        var map1981 = d3.map(year1981, function(d){ return d.cbas;});
        var map1982 = d3.map(year1982, function(d){ return d.cbas;});
        var map1983 = d3.map(year1983, function(d){ return d.cbas;});
        var map1984 = d3.map(year1984, function(d){ return d.cbas;});
        var map1985 = d3.map(year1985, function(d){ return d.cbas;});
        var map1986 = d3.map(year1986, function(d){ return d.cbas;});
        var map1987 = d3.map(year1987, function(d){ return d.cbas;});
        var map1988 = d3.map(year1988, function(d){ return d.cbas;});
        var map1989 = d3.map(year1989, function(d){ return d.cbas;});
        var map1990 = d3.map(year1990, function(d){ return d.cbas;});
        var map1991 = d3.map(year1991, function(d){ return d.cbas;});
        var map1992 = d3.map(year1992, function(d){ return d.cbas;});
        var map1993 = d3.map(year1993, function(d){ return d.cbas;});
        var map1994 = d3.map(year1994, function(d){ return d.cbas;});
        var map1995 = d3.map(year1995, function(d){ return d.cbas;});
        var map1996 = d3.map(year1996, function(d){ return d.cbas;});
        var map1997 = d3.map(year1997, function(d){ return d.cbas;});
        var map1998 = d3.map(year1998, function(d){ return d.cbas;});
        var map1999 = d3.map(year1999, function(d){ return d.cbas;});
        var map2000 = d3.map(year2000, function(d){ return d.cbas;});
        var map2001 = d3.map(year2001, function(d){ return d.cbas;});
        var map2002 = d3.map(year2002, function(d){ return d.cbas;});
        var map2003 = d3.map(year2003, function(d){ return d.cbas;});
        var map2004 = d3.map(year2004, function(d){ return d.cbas;});
        var map2005 = d3.map(year2005, function(d){ return d.cbas;});
        var map2006 = d3.map(year2006, function(d){ return d.cbas;});
        var map2007 = d3.map(year2007, function(d){ return d.cbas;});
        var map2008 = d3.map(year2008, function(d){ return d.cbas;});
        var map2009 = d3.map(year2009, function(d){ return d.cbas;});
        var map2010 = d3.map(year2010, function(d){ return d.cbas;});
        var map2011 = d3.map(year2011, function(d){ return d.cbas;});
        var map2012 = d3.map(year2012, function(d){ return d.cbas;});
        var map2013 = d3.map(year2013, function(d){ return d.cbas;});

        draw(counties,[
            {year:"1980",series:map1980},
            {year:"1981",series:map1981},
            {year:"1982",series:map1982},
            {year:"1983",series:map1983},
            {year:"1984",series:map1984},
            {year:"1985",series:map1985},
            {year:"1986",series:map1986},
            {year:"1987",series:map1987},
            {year:"1988",series:map1988},
            {year:"1989",series:map1989},
            {year:"1990",series:map1990},
            {year:"1991",series:map1991},
            {year:"1992",series:map1992},
            {year:"1993",series:map1993},
            {year:"1994",series:map1994},
            {year:"1995",series:map1995},
            {year:"1996",series:map1996},
            {year:"1997",series:map1997},
            {year:"1998",series:map1998},
            {year:"1999",series:map1999},
            {year:"2000",series:map2000},
            {year:"2001",series:map2001},
            {year:"2002",series:map2002},
            {year:"2003",series:map2003},
            {year:"2004",series:map2004},
            {year:"2005",series:map2005},
            {year:"2006",series:map2006},
            {year:"2007",series:map2007},
            {year:"2008",series:map2008},
            {year:"2009",series:map2009},
            {year:"2010",series:map2010},
            {year:"2011",series:map2011},
            {year:"2012",series:map2012},
            {year:"2013",series:map2013}
        ]);



    };

function draw(counties,years){
    console.log(counties),
    console.log(years);


    var svg = d3.select('.canvas')
        .selectAll('.small-canvas')
        .data(years)
        .enter()
        .append('div')
        .attr('class','small-canvas')//how many of these?

        .append('svg')
        .attr('width',width+margin.l+margin.r)
        .attr('height',height+margin.t+margin.b)
        .append('g')
        .attr('transform','translate('+margin.l+','+margin.t+')')
        .on('click', function(d){
            console.log(d.year);//TODO
        });



    var aqimap = svg.append('g')
           //.attr('class','county')


        aqimap
            .selectAll('.county')
            .data(counties.features)
            .enter()
            .append('path')
            .attr('class','county')
            .attr('d',path)
            //.style('fill','orange')
            // TODO how to combine csv to json???
            .style('fill',function(d) {
                //var aqi_val;
                //console.log(d);
                var this_year =  this.parentElement.parentElement.__data__.year;
                //var data_year;
                //console.log(this_year);

                years.forEach((function(each) {
                     //console.log(each)

                        //var year_series;
                        if (each.year == this_year) {
                            //console.log("if statement works");
                            //year_series = each.series;
                            /*return {
                                aqi_val : (each.series["_"][d.properties.CBSAFP].AQI)?(each.series["_"][d.properties.CBSAFP].AQI):undefined
                            }*/
                            if (each.series["_"][d.properties.CBSAFP] != undefined) {
                                aqi_val = each.series["_"][d.properties.CBSAFP].AQI; //TODO
                            }
                            //console.log(aqi_val);
                            return
                        }
                }))
                //console.log("data_year",data_year);
                //data_year = years.filter( function(d) {
                //        console.log($(svg));
                //        return d.year == svg.datum().year;
                //    }
                //
                //)
                //console.log("data_year", data_year)


                return scaleColor(aqi_val);
                //return scaleColor(d.AQI)
            })




                /*.style('fill',function(d){
                  var value = years.AQI[+d.properties.GEOID];

                   return scaleColor(value)

                })*/
                .on('mouseenter',onMouseEnter)
                .on('mousemove',onMouseMove)
                .on('mouseleave',onMouseLeave);



    var tooltip = d3.select('.custom-tooltip');
    tooltip
        .append('h2')


var target =svg
    .append('rect')
    .attr('x',125)
    .attr('y',0)
    .attr('width',100)
    .attr('height',30)
    .attr('class','target')
    .attr('fill','rgb(200,200,200)')
    .style('stroke','rgb(80,80,80)')
    .style('stroke-width','0.2px')
    .style('visibility','hidden');
var yearText = aqimap
    .append('text')
    .text(function(d){
        return d.year;
    })
    .attr('class','year')
    .attr('x',width/2)
    .attr('y',height)
    .attr('text-anchor','middle')
    .style('fill','black');
    var valueText = aqimap
        .append('span')
        .attr('class','value');//TODO how can I show up the value text in canvas
    var thisEl;
    function onMouseEnter(){
        var myText = d3.select(this);
        var thisText = myText[0][0].__data__.properties.NAME;
        target.style('visibility','visible');
        tooltip
            .style('visibility','visible')
            .style('fill', 'black')
            .select('h2')
            .html(thisText);
        valueText
            .style('visibility','visible')
            .style('fill', 'black')
            .select('h2')
            .html(thisText);

        //thisEl = d3.select(this);
        //d3.select('.custom-tooltip')
        //    .append('p')



        /*var parentElem = d3.select('.canvas').node();
        var mouse = d3.mouse(parentElem);
        //console.log(mouse);
        svg.each(function(d){
            console.log(d)
            var tooltip = d3.select('.custom-tooltip')
                .style('visibility','visible');

            tooltip
                .select('h2')
                .html(d.name);
            tooltip
                .style('left',mouse[0]+10 + 'px')
                .style('top',mouse[1] +10 + 'px');


        })*/
    }

    function onMouseMove(){

        //console.log(d3.event);

        var parentElem = d3.select('.canvas').node(); //TODO what node() do here?
        var mouse = d3.mouse(parentElem);
        //console.log(mouse);
        aqimap.forEach(function(d){
            //console.log(d)

            //var tooltip = d3.select('.custom-tooltip')
            //    .style('visibility','visible');
                //
                //tooltip
                //.select('h2')
                //.html('span');//TODO
            tooltip
                .style('left',mouse[0]+10 + 'px')
                .style('top',mouse[1] +10 + 'px');

})

    }

    function onMouseLeave(){
        target.style('visibility','hidden');
        valueText.text(null);
        d3.select('.custom-tooltip')
            .style('visibility','hidden');
    }
}


function parseData(d){
    //var cbas = +d['CBSA Code'];
    //var AQImedian = +d['AQI Median'];
    //medianByCbas.set(cbas, AQImedian);//TODO check this later
    return{
        name: d['CBSA'],
        cbas:+d['CBSA Code'],
        AQI : +d['AQI Median']?+d['AQI Median']:undefined


        //medianCbas: medianByCbas.set(d.cbas, d.AQI);
    }

}



