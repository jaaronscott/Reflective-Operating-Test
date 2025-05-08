async function fetchData() {
    const itemId = document.getElementById('itemId').value;

    if (!itemId) {
        document.getElementById('response').innerText = "Please enter a valid ID.";
        return;
    }

    try {
        // Update your Codespace URL here
        const response = await fetch(`https://<your-codespace-id>-8000.preview.app.github.dev/reflect/${itemId}`);
        
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        
        const data = await response.json();
        document.getElementById('response').innerText = JSON.stringify(data, null, 2);
    } catch (error) {
        document.getElementById('response').innerText = error.message;
    }
}