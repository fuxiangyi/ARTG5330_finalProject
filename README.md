# ARTG5330_finalProject
Description

This is a small multiples map to show the AQI through 1980 to 2013 in USA, using D3 library, there are still a lot of things in the process.

Main task

The AQI raw data are coming from a lot of different csv file sort by year, how to combine multiple csv files' data to one single json file's data is the main task for me.

Problem Need to fixed

1.In my script file, the way to fill the color to the circle is kind of complicate:

 .style('fill',function(d) {
 
  var this_year =  this.parentElement.parentElement.__data__.year;

  years.forEach((function(each) {

  if (each.year == this_year) {
  
       if (each.series["_"][d.properties.CBSAFP] != undefined) {
       
          aqi_val = each.series["_"][d.properties.CBSAFP].AQI; 
          
   }
   
 }
 
}))

         return scaleColor(aqi_val);
         
})

Is there any possible to have a easier method in logical to finish this function??

2.From the line 297 in script file,how to show the AQI value text in when the mouse move into the canvas.

Next step

Trying to append pie chart to each point, when click on each circle the pie chart  relate to more detail information(how may days with AQI, how many good days,moderate days, bad days, etc.) about the selected city would show up. 


