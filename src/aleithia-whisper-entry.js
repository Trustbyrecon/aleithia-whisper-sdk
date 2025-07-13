import { initializeAlethiaWhisper } from './aleithia-whisper-entry';

function handleWhisper(message) {
  // TODO: Replace with actual logic (UI update, agent pulse, etc.)
  alert(`Alethia Whisper says: ${message}`);
}

// Initialize Alethia’s presence
initializeAlethiaWhisper({ onWhisper: handleWhisper });

console.log("App loaded. Alethia is standing by.");
