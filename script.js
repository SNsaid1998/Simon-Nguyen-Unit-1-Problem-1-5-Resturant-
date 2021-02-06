var mymap = L.map("mapid").setView([38.675890, -90.377550], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

var marker1 = L.marker([38.6731, -90.34]).addTo(mymap);
var marker2 = L.marker([38.656071, -90.304543]).addTo(mymap);
var marker3 = L.marker([38.650459, -90.338058]).addTo(mymap);
var marker4 = L.marker([38.673130, -90.423440]).addTo(mymap);
var marker5 = L.marker([38.690180, -90.381380]).addTo(mymap);

marker1.bindPopup("<b>Resturant 1</b><br>Cate Zone").openPopup();
marker2.bindPopup("<b>Resturant 2</b><br>Salt & Smoke").openPopup();
marker3.bindPopup("<b>Resturant 3</b><br>Sushi Ai").openPopup();
marker4.bindPopup("<b>Resturant 4</b><br>Thai Nivas Cafe").openPopup();
marker5.bindPopup("<b>Resturant 5</b><br>Side of Seoul").openPopup();
