async function getUpgradeData() {
  const response = await fetch(
    "https://cookie-upgrade-api.vercel.app/api/upgrades"
  );
  const apiData = await response.json();
  console.log(apiData);
  return apiData;
}

async function upgradesToPage(apiData) {
  apiData = await getUpgradeData();
  for (let i = 0; i < apiData.length; i++) {
    const newUpgradeBox = document.createElement("p");
    newUpgradeBox.textContent = `${apiData[i].name} \n cost: ${apiData[i].cost} oxygen`;
    newUpgradeBox.classList.add("upgrade");
    newUpgradeBox.id = i;
    console.log("appended");
    shopContainer.appendChild(newUpgradeBox);
  }
}

const shopContainer = document.getElementById("shop-container");

upgradesToPage(getUpgradeData());

//Local Data Storage

let userData = {
  cookieCount: 0,
  cps: 0,
  name: "",
  text: "colour",
};
const stringifiedUserData = JSON.stringify(userData);
localStorage.setItem("user data", stringifiedUserData);

//event listener for cookie click
const cookienaut = document.getElementById("cookienaut");

function saveData() {}

cookienaut.addEventListener("click", function () {
  console.log("clicked");
  //add 1 to stored data
});

//display score info
const scoreInfo = document.getElementById("score-info");
