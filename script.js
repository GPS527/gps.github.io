function uploadMemory() {
    const fileInput = document.getElementById('uploadMemory');
    const files = fileInput.files;
    const container = document.getElementById('polaroidsContainer');

    for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const polaroid = document.createElement('div');
            polaroid.className = 'polaroid';
            polaroid.innerHTML = `
                <img src="${event.target.result}" alt="Memory">
                <button type="button" onclick="deleteMemory(this)">Delete</button>
            `;
            container.appendChild(polaroid);
        };
        reader.readAsDataURL(files[i]);
    }
}

function deleteMemory(button) {
    const polaroid = button.parentElement;
    polaroid.remove();
}

function sendLetter() {
    const letterContent = document.getElementById('valentineLetter').value;
    const polaroids = document.getElementById('polaroidsContainer').innerHTML;
    const letterData = {
        letter: letterContent,
        memories: polaroids
    };

    // Use GitHub API to upload the letter and memories (simplified example)
    console.log('Sending letter:', letterData);

    alert('Your Valentine letter has been sent!');
}
