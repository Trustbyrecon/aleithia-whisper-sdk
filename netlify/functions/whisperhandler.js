// /netlify/functions/whisperHandler.js
exports.handler = async (event, context) => {
  try {
    const body = JSON.parse(event.body);

    // Simulate whisper processing logic
    const input = body.input || "";
    const response = `🌀 Alethia Whisper received: ${input}`;

    return {
      statusCode: 200,
      body: JSON.stringify({ message: response })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Whisper handler failed.", details: error.message })
    };
  }
};
