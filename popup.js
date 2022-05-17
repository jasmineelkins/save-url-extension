console.log("Popup opened");

const addButton = document.getElementById("addBtn");
addButton.addEventListener("click", function () {
  console.log("Button clicked");

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    //get URL of current tab
    let current_url = tabs[0].url;

    console.log(current_url);

    // GET current User:
    fetch(`http://localhost:3000/me`)
      .then((res) => res.json())
      .then((userObj) => {
        console.log(userObj);

        // POST create new Article with url and user_id
        fetch(`http://localhost:3000/articles`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            url: current_url,
            user_id: userObj.id,
            newsletter_id: 1,
          }),
        })
          .then((res) => res.json())
          .then((data) => console.log(data))
          .catch((error) => console.log(error.message));
      })
      .catch((error) => console.log(error.message));
  });
});

// chrome.tabs.onActivated.addListener(function (activeInfo) {
//   chrome.tabs.get(activeInfo.tabId, function (tab) {
//     y = tab.url;
//     console.log("you are here: " + y);
//   });
// });
