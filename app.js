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
    newUpgradeBox.textContent = `${apiData[i].name}:  ${apiData[i].cost}`;
    newUpgradeBox.classList.add("upgrade");
    newUpgradeBox.id = i;
    shopContainer.appendChild(newUpgradeBox);

    newUpgradeBox.addEventListener("click", addUpgrade(), {}); //this runs on load, but shouldnt, as it will buy available upgrades automatically when possible!!!!!!!!!!
  }
}

// async function addEvents(apiData) {
//   apiData = await getUpgradeData();
//   const button = document.querySelector(".upgrade");
//   button.addEventlistener("click", addUpgrade());
// }

const shopContainer = document.getElementById("shop-container");

upgradesToPage(getUpgradeData());

//values to update and replace previous locally stored data
let cookieCountValue = 0;
let cpsValue = 0;

//Local Data Storage
let userData = {
  cookieCount: cookieCountValue,
  cps: cpsValue,
};

//function to save data (every second in loop)

setInterval(function saveAndUpdateDisplay() {
  // this function is not overwriting the locally saved data (or maybe it is, but the values have not updated?) !!!!!!!!!!!!!!!
  const dataStringy = JSON.stringify(userData);
  localStorage.setItem("userData", dataStringy);
  console.log("data saved");
  displayScore();
}, 1000);

console.log(cookieCountValue); //this value is not updating!!!!!!!!!!!!!!!!!!!!

// function saveData(userData) {
//   const stringifiedUserData = JSON.stringify(userData);
//   localStorage.setItem("userData", stringifiedUserData);
// }
// saveData(userData);

//event listener for cookie click
const cookienautButton = document.getElementById("cookienaut");

cookienautButton.addEventListener("click", function () {
  cookieCountValue = cookieCountValue + 1;
  displayScore();
});

//display score info
const scoreInfo = document.getElementById("total-cookie-count");
const cpsInfo = document.getElementById("cookies-per-second");

function displayScore() {
  scoreInfo.textContent = `Total Cookie Count: ${cookieCountValue}`;
  cpsInfo.textContent = `Cookies Per Second: ${cpsValue}`;
}
displayScore();

//use upgrade buttons

const button = document.querySelector(".upgrade");

button.addEventlistener("click", addUpgrade()); //This logs "Uncaught TypeError: Cannot read properties of null (reading 'addEventlistener')"

function addUpgrade() {
  if (cpsValue >= this.cost) {
    cookieCountValue = cookieCountValue - this.cost;
    cpsValue = cpsValue + this.increase;
    console.log("upgrade button clicked");
  } else {
    console.log("too expensive!");
  }
}
