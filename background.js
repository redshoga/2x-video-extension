chrome.browserAction.onClicked.addListener(() => {
  chrome.tabs.executeScript(null, {
    code: "document.getElementsByTagName('video')[0].playbackRate = 2;"
  });
});
