google.maps.event.addDomListener(window, 'load', intilize);

function intilize() {

  var autocomplete, place, lat, lng, latInput, lngInput;

  autocomplete = new google.maps.places.Autocomplete(document.getElementById("addressBox"));

  latInput = document.getElementById('latitude');
  lngInput = document.getElementById('longitude');

  latInput.style.backgroundColor = "rgb(235,235,228)";
  lngInput.style.backgroundColor = "rgb(235,235,228)";

  google.maps.event.addListener(autocomplete, 'place_changed', function() {

    place = autocomplete.getPlace();
    lat = place.geometry.location.lat();
    lng = place.geometry.location.lng();
    latInput.style.backgroundColor = "#fff";
    lngInput.style.backgroundColor = "#fff";
    latInput.value = lat;
    lngInput.value = lng;
  });
};
