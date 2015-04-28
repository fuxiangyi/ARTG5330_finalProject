# ARTG5330_finalProject
In my script file, the way(logical method?) to fill the color to the circle is kind of complicate:

 .style('fill',function(d) {
 
  var this_year =  this.parentElement.parentElement.__data__.year;

  years.forEach((function(each) {

  if (each.year == this_year) {
  
       if (each.series["_"][d.properties.CBSAFP] != undefined) {
       
          aqi_val = each.series["_"][d.properties.CBSAFP].AQI; //TODO
          
   }
   
 }
 
}))

         return scaleColor(aqi_val);
         
})

Is there any possible to have a easier method in logical to finish this function??
