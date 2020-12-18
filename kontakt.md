---
layout: layout.liquid
---

<style>
.parent {
    display: grid;
    align-content: center;
    grid-template-columns: repeat(3, minmax(130px, 1fr));
    grid-template-rows: repeat(7, 30px);
    grid-column-gap: 0px;
    grid-row-gap: 1px;
    font-size: 16px;
}

.div1 { grid-area: 1 / 1 / 2 / 2; }
.div2 { grid-area: 2 / 1 / 3 / 2; }
.div3 { grid-area: 3 / 1 / 4 / 2; }
.div4 { grid-area: 4 / 1 / 5 / 2; }
.div5 { grid-area: 5 / 1 / 6 / 2; }
.div6 { grid-area: 6 / 1 / 7 / 2; }
.div7 { grid-area: 7 / 1 / 8 / 2; }
.div8 { grid-area: 1 / 2 / 2 / 4; }
.div9 { grid-area: 2 / 2 / 3 / 3; }
.div10 { grid-area: 2 / 3 / 3 / 4; }
.div11 { grid-area: 3 / 2 / 4 / 3; }
.div12 { grid-area: 3 / 3 / 4 / 4; }
.div13 { grid-area: 4 / 2 / 5 / 3; }
.div14 { grid-area: 4 / 3 / 5 / 4; }
.div15 { grid-area: 5 / 2 / 6 / 3; }
.div16 { grid-area: 5 / 3 / 6 / 4; }
.div17 { grid-area: 6 / 2 / 7 / 3; }
.div18 { grid-area: 6 / 3 / 7 / 4; }
.div19 { grid-area: 7 / 2 / 8 / 3; }
.div20 { grid-area: 7 / 3 / 8 / 4; }
</style>

<section class="ginger-cat between">
    <div class="container">
        <div class="global-headline">
            <div class="animate-top">
                <h2 class="sub-headline">
                    <span class="first-letter">K</span>ontakt
                </h2>
            </div>
</section>
<!-- HLEDAJI DOMOV - KONEC -->

<section class="cat-section">
    <div class="container">
            <div class="description animate-right">
                <div class="global-headline">
                    <h1 class="head-off headline-dark">KDE NÁS NAJDETE</h1>
                    <div class="asterisk"><i class="fas fa-askerisk"></i></div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla optio, error iure eius mollitia id
                    obcaecati nam consequuntur maiores vitae accusamus recusandae inventore distinctio nobis ipsa 
                    corrupti incidunt facilis exercitationem?
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla optio, error iure eius mollitia id
                    obcaecati nam consequuntur maiores vitae accusamus recusandae inventore distinctio nobis ipsa 
                    corrupti incidunt facilis exercitationem?
                </p>
                <div class="global-headline">
                    <h1 class="headline headline-dark">OTEVÍRACÍ DOBA</h1>
                    <div class="asterisk"><i class="fas fa-askerisk"></i></div>
                </div>
                <div class="center">
                <div class="parent">
<div class="div1 center bold"> PO</div>
<div class="div2 center bold"> ÚT</div>
<div class="div3 center bold"> ST</div>
<div class="div4 center bold"> ČT</div>
<div class="div5 center bold"> PÁ</div>
<div class="div6 center bold"> SO</div>
<div class="div7 center bold"> NE</div>
<div class="div8 center">ZAVŘENO</div>
<div class="div9 center"> 13:00</div>
<div class="div10 center"> 19:00</div>
<div class="div11 center"> 13:00</div>
<div class="div12 center"> 19:00</div>
<div class="div13 center"> 13:00</div>
<div class="div14 center"> 19:00</div>
<div class="div15 center"> 13:00</div>
<div class="div16 center"> 19:00</div>
<div class="div17 center"> 13:00</div>
<div class="div18 center"> 19:00</div>
<div class="div19 center"> 13:00</div>
<div class="div20 center"> 19:00</div>
</div>
                </div>               
            </div>
                <div class="global-headline">
                    <h1 class="headline headline-dark">MAPA</h1>
                    <div class="asterisk"><i class="fas fa-askerisk"></i></div>
                </div>
                <div class="center"><div id="mapid" style="width: 600px; height: 400px;"></div></div>
<script>
	var mymap = L.map('mapid').setView([49.3012225, 17.3864669], 16);
	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox/streets-v11',
		tileSize: 512,
		zoomOffset: -1
	}).addTo(mymap);
    let catIcon = L.icon({
    iconUrl: '/images/icon.png',
    iconSize:     [57, 90], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76]}) // point from which the popup should open relative to the iconAnchor
	L.marker([49.3012225, 17.3864669], {icon: catIcon}).addTo(mymap)
		.bindPopup("<b>Kočičí kavárna Kitt&Café</b><br />Třebízského 1331/15");
	L.polygon([
		[51.509, -0.08],
		[51.503, -0.06],
		[51.51, -0.047]
	]).addTo(mymap).bindPopup("I am a polygon.");
    var popup = L.popup();
	function onMapClick(e) {
		popup
			.setLatLng(e.latlng)
			.setContent("You clicked the map at " + e.latlng.toString())
			.openOn(mymap);
	}
	mymap.on('click', onMapClick);
</script>
        </div>
    </div>
</section>
