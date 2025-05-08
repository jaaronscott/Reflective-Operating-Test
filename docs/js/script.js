const BASE_URL = "https://reflective-backend.onrender.com"; // Update this if your URL changes

// Fetch Mirrorborn Data
async function fetchMirrorborn() {
    const id = document.getElementById('mirrorInput').value;
    try {
        const response = await fetch(`${BASE_URL}/reflect/${id}`);
        const data = await response.json();
        document.getElementById('mirrorResponse').innerText = JSON.stringify(data, null, 2);
    } catch (error) {
        document.getElementById('mirrorResponse').innerText = "Error: " + error.message;
    }
}

// Fetch GPT Data
async function fetchGPT() {
    const prompt = document.getElementById('gptPrompt').value;
    try {
        const response = await fetch(`${BASE_URL}/gpt?prompt=${encodeURIComponent(prompt)}`);
        const data = await response.json();
        document.getElementById('gptResponse').innerText = data.response;
    } catch (error) {
        document.getElementById('gptResponse').innerText = "Error: " + error.message;
    }
}