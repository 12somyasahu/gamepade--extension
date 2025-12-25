// Lightweight background service worker
// Just handles installation and default settings

chrome.runtime.onInstalled.addListener(() => {
  console.log('Gamepad Controller v2.0 installed');
  
  // Set defaults only if not already set
  chrome.storage.local.get(['enabled', 'customMap'], (result) => {
    const defaults = {};
    if (result.enabled === undefined) defaults.enabled = true;
    if (result.customMap === undefined) defaults.customMap = {};
    
    if (Object.keys(defaults).length > 0) {
      chrome.storage.local.set(defaults);
    }
  });
});
