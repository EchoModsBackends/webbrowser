function loadURL() {
    const urlInput = document.getElementById('url-input').value;
    const iframe = document.getElementById('iframe');

    
    const validUrl = urlInput.startsWith('http://') || urlInput.startsWith('https://')
        ? urlInput
        : 'http://' + urlInput;

    iframe.src = validUrl;
}

function displayImage(event) {
    const uploadedImage = document.getElementById('uploaded-image');
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function(e) {
            uploadedImage.src = e.target.result; // Set the image source
        };

        reader.readAsDataURL(file);
    }
}
