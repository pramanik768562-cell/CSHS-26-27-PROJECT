let plate = [];

const foodButtons = document.getElementById("food-grid");
const plateList = document.getElementById("plate-list");
const totalBox = document.getElementById("summary");
const chartBox = document.getElementById("chart");

function showFoodButtons() {
  foodButtons.innerHTML = "";

  for (let i = 0; i < FOODS.length; i++) {
    const food = FOODS[i];

    const button = document.createElement("button");
    button.className = "food-btn";
    button.innerHTML = `<span class="emoji">${food.emoji}</span> ${food.name}`;
    button.addEventListener("click", () => addFood(food));
    foodButtons.appendChild(button);
  }
}

function addFood(food) {
  for (let i = 0; i < plate.length; i++) {
    if (plate[i].food.name === food.name) {
      plate[i].grams += 100;
      showPlate();
      return;
    }
  }
  plate.push({ food: food, grams: 100 });
  showPlate();
}

function showPlate() {
  plateList.innerHTML = "";

  if (plate.length === 0) {
    plateList.innerHTML = '<li class="empty-hint">Click a food above to add it here.</li>';
    showTotal();
    return;
  }

  for (let i = 0; i < plate.length; i++) {
    const item = plate[i];
    const co2 = (item.grams / 1000) * item.food.co2PerKg;

    const row = document.createElement("li");
    row.className = "plate-item";
    row.innerHTML = `
      <span class="emoji">${item.food.emoji}</span>
      <span class="name">${item.food.name}</span>
      <input type="number" min="0" step="10" value="${item.grams}" class="grams-input" />
      <span class="unit">g</span>
      <span class="item-co2">${co2.toFixed(2)} kg CO2e</span>
      <button class="remove-btn" title="Remove">x</button>
    `;

    row.querySelector(".grams-input").addEventListener("change", (e) => {
      plate[i].grams = Math.max(0, Number(e.target.value) || 0);
      showPlate();
    });

    row.querySelector(".remove-btn").addEventListener("click", () => {
      plate.splice(i, 1);
      showPlate();
    });

    plateList.appendChild(row);
  }

  showTotal();
}

function showTotal() {
  let totalEmissions = 0;
  for (let i = 0; i < plate.length; i++) {
    totalEmissions += (plate[i].grams / 1000) * plate[i].food.co2PerKg;
  }

  if (totalEmissions === 0) {
    totalBox.innerHTML = "";
    return;
  }

  const kmDriven = totalEmissions / EQUIVALENTS.kmDriven;
  const phoneCharges = totalEmissions / EQUIVALENTS.phoneCharges;
  const treeDays = totalEmissions / EQUIVALENTS.treeDayAbsorption;

  totalBox.innerHTML = `
    <p class="total">Total: ${totalEmissions.toFixed(2)} kg CO2e</p>
    <ul class="equivalents">
      <li>About the same as driving ${kmDriven.toFixed(1)} km</li>
      <li>About ${Math.round(phoneCharges)} smartphone charges</li>
      <li>Takes a tree ~${treeDays.toFixed(0)} days to absorb</li>
    </ul>
  `;
}

function showChart() {
  const sortedFoods = FOODS.slice().sort((a, b) => b.co2PerKg - a.co2PerKg);
  const highest = sortedFoods[0].co2PerKg;

  chartBox.innerHTML = "";
  for (let i = 0; i < sortedFoods.length; i++) {
    const food = sortedFoods[i];
    const barWidth = (food.co2PerKg / highest) * 100;

    let barColor = "green";
    if (food.co2PerKg > 20) barColor = "red";
    else if (food.co2PerKg > 5) barColor = "orange";

    const row = document.createElement("div");
    row.className = "chart-row";
    row.innerHTML = `
      <span class="label">${food.emoji} ${food.name}</span>
      <span class="bar-track">
        <span class="bar-fill" style="width:${barWidth}%; background:${barColor};"></span>
      </span>
      <span class="value">${food.co2PerKg}</span>
    `;
    chartBox.appendChild(row);
  }
}

showFoodButtons();
showPlate();
showChart();
