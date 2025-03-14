document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', function() {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        this.classList.add('active');

        document.querySelectorAll('.content').forEach(c => c.classList.remove('active'));
        document.getElementById(this.dataset.target).classList.add('active');
    });
});

function showGrid() {
    document.getElementById('expandedGrid').classList.toggle('hidden');
}
function showSection(sectionId) {
    hideSections();
    document.getElementById(sectionId).style.display = 'block';
}

function hideSections() {
    let sections = document.querySelectorAll('.work-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
}
// Image & Video Data
const images = {
    graphic: [
        "main.jpg",
        "angel logo.png",
        "brocher.png",
        "heal.png",
        "wrt.png",
        "plumber.png",
        "Pantstyle 1.jpg",
        "Pantstyle 3.jpg",
        "Pantstyle 4.jpg",
        "Pantstyle 5.jpg",
        "Pantstyle 2.jpg",
        "intership.png",
        "1.rjt.png"
    ],
    web: [
        "1.png",
        "2.png",
        "3.png",
        "5.png",
        "6.png",
        "4.png"
    ],
    video: [
        ".mp4",
        " .mp4",
        ".mp4"
    ]
};

// Open Gallery
function openGallery(category) {
    const galleryDiv = document.getElementById('galleryImages');
    galleryDiv.innerHTML = ''; // Clear existing images

    images[category].forEach(mediaSrc => {
        let element;
        if (category === "video") {
            element = document.createElement('video'); // Video element
            element.src = mediaSrc;
            element.controls = true; // Enable play/pause controls
            element.width = 300; // Adjust video size
        } else {
            element = document.createElement('img'); // Image element
            element.src = mediaSrc;
        }
        element.style.margin = "10px"; // Add spacing
        galleryDiv.appendChild(element);
    });

    document.getElementById('galleryModal').style.display = "flex";
}

// Close Gallery
function closeGallery() {
    document.getElementById('galleryModal').style.display = "none";
}
