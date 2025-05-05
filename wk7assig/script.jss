// Function to store user preferences in localStorage
function storePreference(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
        console.log(`Stored ${key}: ${value}`);
    } catch (error) {
        console.error("Error storing data in localStorage:", error);
    }
}

// Function to retrieve user preferences from localStorage
function getPreference(key) {
    try {
        const storedValue = localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : null;
    } catch (error) {
        console.error("Error retrieving data from localStorage:", error);
        return null;
    }
}

// --- Animated Button ---
const animatedButton = document.getElementById('animatedButton');
if (animatedButton) {
    animatedButton.addEventListener('click', () => {
        animatedButton.classList.add('pulsate');
        // Remove the class after the animation to allow re-triggering
        setTimeout(() => {
            animatedButton.classList.remove('pulsate');
        }, 1000); // Duration of the pulse animation
    });
}

// --- Fading Image ---
const fadingImage = document.getElementById('fadingImage');
const toggleFadeButton = document.getElementById('toggleFade');
if (fadingImage && toggleFadeButton) {
    toggleFadeButton.addEventListener('click', () => {
        fadingImage.classList.toggle('faded-out');
    });
}

// --- Theme Color Preference ---
const themeColorInput = document.getElementById('themeColor');
if (themeColorInput) {
    // Load saved theme color on page load
    const savedColor = getPreference('themeColor');
    if (savedColor) {
        document.body.style.backgroundColor = savedColor;
        themeColorInput.value = savedColor;
    }

    // Save theme color when the input changes
    themeColorInput.addEventListener('input', (event) => {
        const newColor = event.target.value;
        document.body.style.backgroundColor = newColor;
        storePreference('themeColor', newColor);
    });
}

console.log("Smooth interactions and local storage magic happening in Kitengela!)