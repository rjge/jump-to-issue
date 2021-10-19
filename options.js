// Saves options to chrome.storage
function save_options() {
  var baseUrl = document.getElementById("base_url").value;
  var matchingPattern = document.getElementById("matching_pattern").value;
  chrome.storage.sync.set({
    baseUrl: baseUrl,
    matchingPattern: matchingPattern
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById("status");
    status.textContent = "Options saved.";
    setTimeout(function() {
      status.textContent = "";
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  chrome.storage.sync.get({
    baseUrl: "https://github.com/org/repo/issues/",
    matchingPattern: "([0-9]+).*"
  }, function(items) {
    document.getElementById("base_url").value = items.baseUrl;
    document.getElementById("matching_pattern").value = items.matchingPattern;
  });
}
document.addEventListener("DOMContentLoaded", restore_options);
document.getElementById("save").addEventListener("click", save_options);
