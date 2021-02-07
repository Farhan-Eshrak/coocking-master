const apiBaseMealName = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
function searchMeal() {
  const mealValue = document.getElementById("mealNameInput").value;
  const mealName = mealValue;
  const url = `${apiBaseMealName}${mealName}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayFoodNames(data.meals))
    .catch((err) =>
      alert("sorry! food not found. please search anything else")
    );
}
const displayFoodNames = (meals) => {
  const foodsCont = document.getElementById("foods");
  meals.forEach((meal) => {
    const foodDiv = document.createElement("div");
    foodDiv.className = "foodDivDesign";
    const foodInfo = `
            <img src=${meal.strMealThumb} onclick="fun('${meal.strMeal}')">
            <h5 class="foodName" onclick="fun('${meal.strMeal}')">${meal.strMeal}</h5>`;
    foodDiv.innerHTML = foodInfo;
    foodsCont.appendChild(foodDiv);
  });
};
const fun = (name) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const fnam = data.meals[0].strMeal;
      document.getElementById("name").innerText = fnam;
      const dispFodDet = (fddet) => {
        const detcont = document.getElementById("ul");
        const detdiv = document.createElement("ul");
        detdiv.className = "detdesign";
        const imgdy = data.meals[0].strMealThumb;
        document.getElementById("dimg").src = imgdy;
        const detinfo = `
            <li>${data.meals[0].strIngredient1}</li>
            <li>${data.meals[0].strIngredient2}</li>
            <li>${data.meals[0].strIngredient3}</li>
            <li>${data.meals[0].strIngredient4}</li>
            <li>${data.meals[0].strIngredient5}</li>
            <li>${data.meals[0].strIngredient6}</li>
            <li>${data.meals[0].strIngredient7}</li>
            <li>${data.meals[0].strIngredient8}</li>
            <li>${data.meals[0].strIngredient9}</li>
            <li>${data.meals[0].strIngredient10}</li>
            `;
        detdiv.innerHTML = detinfo;
        detcont.appendChild(detdiv);
        document.getElementById("detailsoffood").style.display = "block";
        document.getElementById("foods").style.display = "none";
      };
      dispFodDet();
    });
};
const out = () => {
  document.getElementById("detailsoffood").style.display = "none";
  document.getElementById("foods").style.display = "inline-flex";
  document.getElementById("ul").innerHTML = "";
};
