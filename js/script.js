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
    polaroid.classList.add('fadeOut');
    setTimeout(() => {
        polaroid.remove();
    }, 1000); // Matches animation duration
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

// Add floating hearts
function createFloatingHearts() {
    const heartContainer = document.getElementById('floatingHearts');

    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.animationDuration = `${Math.random() * 3 + 3}s`; // Random duration between 3s and 6s
        heartContainer.appendChild(heart);
        setTimeout(() => heart.remove(), 6000); // Match the duration of the animation
    }, 500); // Create a new heart every 0.5s
}

createFloatingHearts();
