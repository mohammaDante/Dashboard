$(document).ready(function(){info=new Highcharts.Chart({chart:{renderTo:"load",margin:[0,0,0,0],backgroundColor:null,plotBackgroundColor:"none"},title:{text:null},tooltip:{formatter:function(){return this.point.name+": "+this.y+" %"}},series:[{borderWidth:2,borderColor:"#F1F3EB",shadow:!1,type:"pie",name:"Income",innerSize:"65%",data:[{name:"load percentage",y:45,color:"#b2c831"},{name:"rest",y:55,color:"#3d3d3d"}],dataLabels:{enabled:!1,color:"#000000",connectorColor:"#000000"}}]})}),$(document).ready(function(){info=new Highcharts.Chart({chart:{renderTo:"space",margin:[0,0,0,0],backgroundColor:null,plotBackgroundColor:"none"},title:{text:null},tooltip:{formatter:function(){return this.point.name+": "+this.y+" %"}},series:[{borderWidth:2,borderColor:"#F1F3EB",shadow:!1,type:"pie",name:"SiteInfo",innerSize:"65%",data:[{name:"Used",y:65,color:"#fa1d2d"},{name:"Rest",y:35,color:"#3d3d3d"}],dataLabels:{enabled:!1,color:"#000000",connectorColor:"#000000"}}]})});