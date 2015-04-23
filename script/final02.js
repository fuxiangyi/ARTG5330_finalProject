/**
 * Created by apple on 15/4/1.
 */
var margin = {t:25,l:25,b:25,r:25},
    width = $('.canvas').width()/3-margin.l-margin.r,
    height = 300;

//.attr('transform',"translate("+width+","+height+")");

var projection = d3.geo.albersUsa()
    .translate([width/2, height/2])
    .scale(450);

var path = d3.geo.path()
    .projection(projection)
    .pointRadius(2);




var force = d3.layout.force()
    .charge(0)
    .gravity(0)
    .size([width, height])

var scaleColor = d3.scale.linear().domain([0,100]).range(["#fff","green"]);

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
        {year:"1980",values:map1980},
        {year:"1981",values:map1981},
        {year:"1982",values:map1982},
        {year:"1983",values:map1983},
        {year:"1984",values:map1984},
        {year:"1985",values:map1985},
        {year:"1986",values:map1986},
        {year:"1987",values:map1987},
        {year:"1988",values:map1988},
        {year:"1989",values:map1989},
        {year:"1990",values:map1990},
        {year:"1991",values:map1991},
        {year:"1992",values:map1992},
        {year:"1993",values:map1993},
        {year:"1994",values:map1994},
        {year:"1995",values:map1995},
        {year:"1996",values:map1996},
        {year:"1997",values:map1997},
        {year:"1998",values:map1998},
        {year:"1999",values:map1999},
        {year:"2000",values:map2000},
        {year:"2001",values:map2001},
        {year:"2002",values:map2002},
        {year:"2003",values:map2003},
        {year:"2004",values:map2004},
        {year:"2005",values:map2005},
        {year:"2006",values:map2006},
        {year:"2007",values:map2007},
        {year:"2008",values:map2008},
        {year:"2009",values:map2009},
        {year:"2010",values:map2010},
        {year:"2011",values:map2011},
        {year:"2012",values:map2012},
        {year:"2013",values:map2013}
    ]);

};

function draw(counties,data) {
    //console.log(counties),
    console.log(data);


    var svg = d3.select('.canvas')
        .selectAll('.small-canvas')
        .data(data)
        .enter()
        .append('div')
        .attr('class', 'small-canvas') //how many of these?
        .append('svg')
        .attr('width', width + margin.l + margin.r)
        .attr('height', height + margin.t + margin.b)
        .append('g');
    svg.append('p')
        .text(data.year)
        .attr('class', 'legend');


    /*var aqimap = svg.append('g')
     //.attr('class','county')


     aqimap*/
    svg
        .selectAll('.county')
        .data(counties.features)
        .enter()
        .append('path')
        .attr('class', 'county')
        .attr('d', path)
        .style('fill', function (d) {
            var value = data.values[+d.properties.GEOID];
            return scaleColor(value);
        })


        .attr('class', function (d) {
            return d.properties.GEN.toLowerCase()
        })
        .on('mouseenter', function (d, i) {
            notify('.' + d.properties.GEN.toLowerCase(), 'select')
        })
        .on('mouseleave', function (d) {
            notify('.' + d.properties.GEN.toLowerCase(), 'unselect')
        })
        .on('select', function (self) {
            var geoData = self.data();
            self.node().parentNode.parentNode.getElementsByTagName('p')[0].innerHTML = data.values[geoData[0].properties.GEN];
        })
        .on('unselect', function (self) {
            self.node().parentNode.parentNode.getElementsByTagName('p')[0].innerHTML = data.key;
        })

    function notify(selector, eventName) {
        d3.selectAll(selector)[0].forEach(function (el, i) {
            var shape = d3.select(el);
            shape.on(eventName)(shape);
        });
    }
}



function parseData(d){
    //console.log(d)
    //rateById.set(formatNumber(+d.id), +d.rate);
    //var cbas = +d['CBSA Code'];
    //var AQImedian = +d['AQI Median'];
    //medianByCbas.set(cbas, AQImedian);//TODO check this later
    return{
        name: d['CBSA'],
        cbas:+d['CBSA Code'],
        value : +d['AQI Median']?+d['AQI Median']:undefined
    }

}



