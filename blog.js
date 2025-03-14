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