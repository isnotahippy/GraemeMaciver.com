
function requestError() {
    console.log('There should of been images here...');
}

var request = new XMLHttpRequest();
request.open('GET', '/api/images', true);

request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
        // Success!
        var images = JSON.parse(request.responseText),
            imageContainer = document.getElementById('js--image--container'),
            imageCount = images.length - images.length%3; // only print in multiples of 3

        for(var i=0; i<imageCount; i++) {
            var newImage = document.createElement('img');
            newImage.src = images[i];
            imageContainer.appendChild(newImage);
        }

    } else {
        requestError();
    }
};

request.onerror = function() {
    requestError();
};

request.send();