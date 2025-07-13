async function uploadAudio() {
  const fileInput = document.getElementById("audioInput");
  const resultBox = document.getElementById("result");

  if (!fileInput.files.length) {
    resultBox.textContent = "Please select an audio file.";
    return;
  }

  const formData = new FormData();
  formData.append("audio", fileInput.files[0]);

  resultBox.textContent = "Uploading...";

  try {
    const response = await fetch("/.netlify/functions/whisperhandler", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    resultBox.textContent = JSON.stringify(data, null, 2);
  } catch (err) {
    resultBox.textContent = `Error: ${err.message}`;
  }
}
