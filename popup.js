let goToUrl = "chrome://newtab";

chrome.storage.sync.get({
  baseUrl: "https://github.com/org/repo/issues/",
  matchingPattern: "(\\d+).*"
}, function(items) {
  let baseUrl = items.baseUrl;
  let patternString = items.matchingPattern;

  if (baseUrl != null && patternString != null) {
    chrome.tabs.query({ active: true }, function(tabs) {
      var tab = tabs[0];

      if (tab.url.startsWith("https://github.com/")) {
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          func: generateUrl,
          args: [baseUrl, patternString],
        },
        (res) => {
          if (res[0].result != "") {
            goToUrl = res[0].result;
            document.getElementById("copyUrl").value = goToUrl;
          }
        });
      }
    });
  }
});

function generateUrl(baseUrl, patternString) {
  var matchingPattern = new RegExp(patternString);
  var headRefElement = document.querySelector(".head-ref > a > span");
  var url = "";

  if (headRefElement != null) {
    let branchName = headRefElement.innerHTML;
    let reg = branchName.match(matchingPattern)
    url = baseUrl + reg[1];
  }

  return url;
}

document.getElementById("openIssue").addEventListener("click", async () => {
  chrome.tabs.create({ url: goToUrl });
});

document.getElementById("copyUrl").addEventListener("click", async () => {
  document.getElementById("copyUrl").select();
  document.execCommand("copy");
});

document.getElementById("showOption").addEventListener("click", function() {
  window.open(chrome.runtime.getURL("options.html"));
});
