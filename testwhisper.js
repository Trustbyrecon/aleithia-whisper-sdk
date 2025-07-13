// testWhisper.js
const fetch = require('node-fetch');

async function testWhisper() {
  const res = await fetch('http://localhost:8888/.netlify/functions/whisperHandler', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ input: "Echo this as Alethia" })
  });

  const data = await res.json();
  console.log("✅ Whisper Response:", data);
}

testWhisper();
