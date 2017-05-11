/* JavaScript source code
    http://slides.html5rocks.com/
*/
// Request Status
navigator.webkitTemporaryStorage.queryUsageAndQuota(function (used, remaining) {
    console.log("Used quota: " + used + ", remaining quota: " + remaining);
}
);

// Request Quota (only for File System API)
navigator.webkitTemporaryStorage.requestQuota(webkitStorageInfo.PERSISTENT, function (used) {
    console.log("Used quota: " + used);
}
);

// drag and drop
document.addEventListener('dragstart', function (event) {
    event.dataTransfer.setData('text', 'Customized text');
    event.dataTransfer.effectAllowed = 'copy';
}, false);


function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var latLng = new google.maps.LatLng(
                position.coords.latitude, position.coords.longitude);

            console.log("Detected location: " + position.coords.latitude + ", " + position.coords.longitude);
            var marker = new google.maps.Marker({ position: latLng, map: map });
            map.setCenter(latLng);
        }, errorHandler);
    }
}

