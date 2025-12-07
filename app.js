function loadData() {
  if (localStorage.userData) {
    userData = JSON.parse(localStorage.getItem("userData"));
    return userData;
  } else {
    const userData = {
      cookieCount: 0,
      cps: 0,
    };
    return userData;
  }
}
userData = loadData();

async function getUpgradeData() {
  const response = await fetch(
    "https://cookie-upgrade-api.vercel.app/api/upgrades"
  );
  const apiData = await response.json();
  return apiData;
}

async function upgradesToPage(apiData) {
  apiData = await getUpgradeData();
  for (let i = 0; i < apiData.length; i++) {
    const newUpgradeBox = document.createElement("p");
    newUpgradeBox.textContent = `${apiData[i].increase} cookies per second  ( COST - ${apiData[i].cost})`;
    newUpgradeBox.classList.add("upgrade");
    newUpgradeBox.id = i;
    shopContainer.appendChild(newUpgradeBox);
    newUpgradeBox.addEventListener("click", function () {
      if (userData.cookieCount >= apiData[i].cost) {
        console.log("upgrade cliked - purchase successful");
        userData.cookieCount = userData.cookieCount - apiData[i].cost;
        userData.cps = userData.cps + apiData[i].increase;
      } else {
        console.log("upgrade cliked - rejected");
        const flash = setInterval(function () {
          newUpgradeBox.animate({ background: "#d81a3091" }, { duration: 100 });
        }, 280);
        setTimeout(function () {
          clearInterval(flash);
        }, 1400);
      }
    });
  }
}

const shopContainer = document.getElementById("shop-container");

upgradesToPage(getUpgradeData());

setInterval(function saveAndUpdateDisplay() {
  userData.cookieCount = userData.cookieCount + userData.cps;
  const dataStringy = JSON.stringify(userData);
  localStorage.setItem("userData", dataStringy);
  displayScore();
}, 1000);

const cookienautButton = document.getElementById("cookienaut");
cookienautButton.addEventListener("click", function () {
  userData.cookieCount = userData.cookieCount += 1;
  displayScore();
});

const scoreInfo = document.getElementById("total-cookie-count");
const cpsInfo = document.getElementById("cookies-per-second");

function displayScore() {
  scoreInfo.textContent = `Total Cookie Count: ${userData.cookieCount}`;
  cpsInfo.textContent = `Cookies Per Second: ${userData.cps}`;
}
displayScore();

const guideButton = document.getElementById("guide-button");

guideButton.addEventListener("click", function () {
  const guideBox = document.createElement("div");
  guideBox.classList.add("guide-box");
  guideBox.classList.add("font-white");
  guideBox.textContent = `Cookienaut is on a spacewalk, but the shuttle's onboard oxygen generator has stopped working properly! Help the crew of the shuttle keep hand-cranking the generator... by earning them cookies to eat. Clicking cookienaut generates 1 cookie, and with upgrades available to buy with your collection of cookies, you can automatically generate extra cookies every second!`;
  document.body.appendChild(guideBox);
  const emptyDiv = document.createElement("div");
  emptyDiv.classList.add("empty");
  guideBox.appendChild(emptyDiv);
  const optionsDiv = document.createElement("div");
  optionsDiv.classList.add("options-div");
  optionsDiv.textContent =
    "Choose your text colour option for your score info and upgrades:";
  guideBox.appendChild(optionsDiv);
  const colourButton = document.createElement("button");
  const whiteButton = document.createElement("button");
  colourButton.classList.add("option");
  colourButton.id = "option-colour";
  whiteButton.classList.add("option");
  whiteButton.id = "option-white";
  whiteButton.textContent = "WHITE";
  colourButton.textContent = "COLOUR";
  optionsDiv.appendChild(whiteButton);
  optionsDiv.appendChild(colourButton);

  colourButton.addEventListener("click", function () {
    const colour2 = document.getElementById("shop-container");
    const colour1 = document.getElementById("score-info");
    colour1.classList.remove("font-white");
    colour2.classList.remove("font-white");
    colour1.classList.add("font-colour1");
    colour2.classList.add("font-colour2");
  });

  whiteButton.addEventListener("click", function () {
    const colour2 = document.getElementById("shop-container");
    const colour1 = document.getElementById("score-info");
    colour1.classList.remove("font-colour1");
    colour2.classList.remove("font-colour2");
    colour1.classList.add("font-white");
    colour2.classList.add("font-white");
  });

  const exitButton = document.createElement("button");
  exitButton.classList.add("exit-button");
  exitButton.textContent = "EXIT TO GAME";
  optionsDiv.appendChild(exitButton);
  exitButton.addEventListener("click", function () {
    const openedWindow6 = document.querySelector(".guide-box");
    openedWindow6.remove();
  });
});

// resetButton = document.getElementById("reset");
// resetButton.addEventListener("click", function () {
//   userData.cookieCount = 0;
//   userData.cps = 0;
// });
