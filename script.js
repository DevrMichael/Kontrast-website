function initMap() {
    var options = {
        center:{ lat:59.9139,lng:10.7522 },
        zoom:13
    }

    var map = new google.maps.Map(document.getElementById('kart'), options); 

    var marker = new google.maps.Marker({ 
        position:{lat:59.9083,lng:10.7581},
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
    });
    marker.addListener("click", toggleBounce);

    function toggleBounce() {
        if (marker.getAnimation() !== null) {
          marker.setAnimation(null);
        } else {
          marker.setAnimation(google.maps.Animation.BOUNCE);
        }
      }
}
