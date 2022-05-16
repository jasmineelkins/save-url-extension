// document.addEventListener("DOMContentLoaded", function () {
//   const addButton = document.getElementById("addBtn");
//   addButton.addEventListener("click", function () {
//     console.log("clicked");
//   });
// });

// chrome.browserAction.onClicked.addListener(function (tab) {
//   const addButton = document.getElementById("addBtn");
//   addButton.addEventListener("click", function () {
//     console.log("clicked");
//   });
// console.log("clicked");

//   console.log(tab.url);

//   chrome.tabs.executeScript({
//     code: 'document.body.style.backgroundColor="red"',
//   });
//   chrome.tabs.query({}, function (tabs) {
//     console.log("tabs", tabs);
//   });

// chrome.tabs.onActivated.addListener(function (activeInfo) {
//     chrome.tabs.get(activeInfo.tabId, function (tab) {
//       y = tab.url;
//       console.log("you are here: " + y);
//     });
//   });
// });

chrome.runtime.onInstalled.addListener(() => {
  console.log("Chrome extension successfully installed!");
  return;
});
