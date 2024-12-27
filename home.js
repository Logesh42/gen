// Photo Scanner (Webcam Capture)
let video = document.getElementById('video');
let canvas = document.getElementById('canvas');
let photoOutput = document.getElementById('photo-output');
let photoStatus = document.getElementById('photo-status');

// Start webcam stream
navigator.mediaDevices.getUserMedia({ video: true })
    .then((stream) => {
        video.srcObject = stream;
    })
    .catch((err) => {
        console.log("Error accessing webcam: " + err);
        photoStatus.textContent = "Unable to access the webcam.";
    });

// Function to capture a photo
function capturePhoto() {
    // Set canvas to video dimensions
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    // Draw the video frame onto the canvas
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

    // Get image data from the canvas
    let dataUrl = canvas.toDataURL('image/png');

    // Display the captured image
    photoOutput.src = dataUrl;
    photoOutput.style.display = 'block';
    photoStatus.textContent = "Photo captured successfully!";
}

// File Upload Handler
document.getElementById("upload-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    const fileInput = document.getElementById("file-input");
    const file = fileInput.files[0];

    if (file) {
        const fileName = file.name;
        const fileSize = (file.size / 1024 / 1024).toFixed(2); // Convert bytes to MB

        // Display file details
        document.getElementById("file-status").textContent = `File uploaded: ${fileName} (${fileSize} MB)`;

        // You can add an actual upload functionality here (e.g., using AJAX to send the file to the server)
    } else {
        document.getElementById("file-status").textContent = "No file selected.";
    }
});
function scanImage() {
    const fileInput = document.getElementById('file-input');
    const notification = document.getElementById('notification');
    
    // Check if a file is selected
    if (fileInput.files.length > 0) {
        // Display the notification after image selection
        notification.classList.remove('hidden');
        
        // Optional: You could add image preview functionality here if needed
        // let file = fileInput.files[0];
        // let reader = new FileReader();
        // reader.onload = function(event) {
        //     let imageElement = document.createElement('img');
        //     imageElement.src = event.target.result;
        //     document.body.appendChild(imageElement); // Display the image
        // };
        // reader.readAsDataURL(file);
    }
}

