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
    newUpgradeBox.textContent = `${apiData[i].increase} cookies per second  ( COST - ${apiData[i].cost} cookies )`;
    newUpgradeBox.classList.add("upgrade");
    newUpgradeBox.id = i;
    shopContainer.appendChild(newUpgradeBox);
    newUpgradeBox.addEventListener("click", function () {
      addUpgrade(apiData[i]);
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

function addUpgrade(item) {
  if (userData.cookieCount >= item.cost) {
    userData.cookieCount = userData.cookieCount - item.cost;
    userData.cps = userData.cps + item.increase;
  } else {
    alert("too expensive!");
  }
}
