exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Alethia Whisper test endpoint active",
      timestamp: new Date().toISOString(),
    }),
  };
};
