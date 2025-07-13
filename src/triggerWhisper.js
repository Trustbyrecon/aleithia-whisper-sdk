// Wrapper function to trigger Alethia Whisper voice

function triggerWhisper(eventTag, message) {
  const voiceId = "AlethiaWhisper";
  return {
    voiceId,
    eventTag,
    message,
    options: {
      tone: "calm",
      pace: "slow",
      cadence: "natural"
    }
  };
}

module.exports = { triggerWhisper };