var ingredientAmnts = {"Flour":0,"Whole Wheat Flour":0,"Eggs":0,"Sugar":0,"Brown Sugar":0,"Butter":0,"Vegetable Oil":0,"Olive Oil":0,"Baking Soda":0,"Baking Powder":0,"Cocoa Powder":0,"Yeast":0,"Milk":0,"Water":0}
var ingredientAmntsGrams = {"Flour":0,"Whole Wheat Flour":0,"Eggs":0,"Sugar":0, "Brown Sugar":0,"Butter":0,"Vegetable Oil":0,"Olive Oil":0,"Baking Soda":0,"Baking Powder":0,"Cocoa Powder":0,"Yeast":0,"Milk":0,"Water":0}


const nutritionPerCup =
  {"Flour":           {"cals":455,"fat":1,"satFat":0,"transFat":0,"sodium":0,"carbs":95,"sugar":0,"sugAdd":0,"fiber":3.4,"chol":0,"protein":13},
  "Whole Wheat Flour":{"cals":407,"fat":2,"transFat":0,"satFat":1,"sodium":0,"carbs":87,"sugar":1,"sugAdd":0,"fiber":15,"chol":0,"protein":16},
  "Eggs":             {"cals":357,"fat":24,"satFat":8,"transFat":0,"sodium":340,"carbs":2,"sugar":2,"sugAdd":0,"fiber":0,"chol":904,"protein":31},
  "Sugar":            {"cals":774,"fat":0,"satFat":0,"transFat":0,"sodium":2,"carbs":200,"sugar":200,"sugAdd":200,"fiber":0,"chol":0,"protein":0},
  "Brown Sugar":      {"cals":836,"fat":0,"satFat":0,"transFat":0,"sodium":62,"carbs":216,"sugar":213,"sugAdd":213,"fiber":0,"chol":0,"protein":0},
  "Butter":           {"cals":1628,"fat":184,"satFat":117,"transFat":7,"sodium":1460,"carbs":0,"sugar":0,"sugAdd":0,"fiber":0,"chol":488,"protein":2},
  "Vegetable Oil":    {"cals":1927,"fat":218,"satFat":16,"transFat":6,"sodium":0,"carbs":0,"sugar":0,"sugAdd":0,"fiber":0,"chol":0,"protein":0},
  "Olive Oil":        {"cals":1909,"fat":216,"satFat":30,"transFat":0,"sodium":4,"carbs":0,"sugar":0,"sugAdd":0,"fiber":0,"chol":0,"protein":0},
  "Baking Soda":      {"cals":0,"fat":0,"satFat":0,"transFat":0,"sodium":60432,"carbs":0,"sugar":0,"sugAdd":0,"fiber":0,"chol":0,"protein":0},
  "Baking Powder":    {"cals":117,"fat":0,"satFat":0,"transFat":0,"sodium":23405,"carbs":61,"sugar":0,"sugAdd":0,"fiber":0,"chol":0,"protein":0},
  "Cocoa Powder":     {"cals":197,"fat":12,"satFat":7,"transFat":0,"sodium":18,"carbs":47,"sugar":2,"sugAdd":0,"fiber":29,"chol":0,"protein":17},
  "Yeast":            {"cals":624,"fat":15,"satFat":2,"transFat":0,"sodium":98,"carbs":79,"sugar":0,"sugAdd":0,"fiber":52,"chol":0,"protein":78},
  "Milk":             {"cals":122,"fat":5,"satFat":3,"transFat":0,"sodium":115,"carbs":12,"sugar":12,"sugAdd":0,"fiber":0,"chol":20,"protein":8},
  "Water":            {"cals":0,"fat":0,"satFat":0,"transFat":0,"sodium":10,"carbs":0,"sugar":0,"sugAdd":0,"fiber":0,"chol":0,"protein":0}}


const nutritionDailyVal = {"cals":2000,"fat":65,"satFat":20,"transFat":0,"sodium":2400,"carbs":300,"sugar":0,"sugAdd":100,"fiber":25,"chol":300,"protein":50}


var nutrition = {"cals":0,"fat":0,"satFat":0,"transFat":0,"sodium":0,"carbs":0,"sugar":0,"sugAdd":0,"fiber":0,"chol":0,"protein":0}


const recipeTemplates = {
  "cookies":{"Flour":[2.5, "Cups"], "Baking Powder":[2, "Tsps"], "Butter":[1, "Cups"], "Sugar":[1, "Cups"], "Eggs":[6,"Tbsps"], "knead":0, "rest":0},
  "cake":{"Flour":[2.66, "Cups"], "Baking Powder":[1, "Tbsps"], "Vegetable Oil":[0.75, "Cups"], "Sugar":[1, "Cups"], "Eggs":[12,"Tbsps"], "Milk":[0.75,"Cups"], "knead":0, "rest":0},
  "bread":{"Water":[2.5, "Cups"], "Yeast":[1.5, "Tbsps"], "Sugar":[2, "Tsps"], "Olive Oil":[2, "Tbsps"], "Whole Wheat Flour":[5.5, "Cups"], "knead":7, "rest":1.5},
}


const gramsPerCup = {"Flour":120,"Whole Wheat Flour":120,"Eggs":245,"Sugar":200,"Brown Sugar":213,"Butter":227,"Vegetable Oil":225,"Olive Oil":225,"Baking Soda":120,"Baking Powder":150,"Cocoa Powder":100,"Yeast":120,"Milk":249,"Water":240}


const unitConversions = {"Cups":1, "Tbsps":16, "Tsps":48}


var techniques = {"knead":0, "rest":0, "temp":350}


const ingredientImgs = {
  "Flour": "C:\\Users\\rcbec\\Downloads\\flour.jpg",
  "Whole Wheat Flour": "C:\\Users\\rcbec\\Downloads\\WWFlour.jpg",
  "Eggs": "C:\\Users\\rcbec\\Downloads\\Eggs.jpg",
  "Sugar": "C:\\Users\\rcbec\\Downloads\\Sugar.jpg",
  "Brown Sugar": "C:\\Users\\rcbec\\Downloads\\BSugar.jpg",
  "Butter": "C:\\Users\\rcbec\\Downloads\\Butter.jpg",
  "Vegetable Oil": "C:\\Users\\rcbec\\Downloads\\Oil.jpg",
  "Olive Oil": "C:\\Users\\rcbec\\Downloads\\OOil.jpg",
  "Baking Soda": "C:\\Users\\rcbec\\Downloads\\Baking Soda.jpg",
  "Baking Powder": "C:\\Users\\rcbec\\Downloads\\Baking Powder.jpg",
  "Cocoa Powder": "C:\\Users\\rcbec\\Downloads\\Cocoa.jpg",
  "Yeast": "C:\\Users\\rcbec\\Downloads\\Yeast.jpg",
  "Milk": "C:\\Users\\rcbec\\Downloads\\Milk.jpg",
  "Water": "C:\\Users\\rcbec\\Downloads\\Water.jpg",
}


const ingredientInfo = {
  "Flour": "Flour is the main building block in a baked good, creating structure and texture as it becomes hydrated. A healthier alternative in whole wheat flour.",
  "Whole Wheat Flour": "A higher fiber alternative to normal flour, acting similarly but results in denser products being harder to form gluten structure with",
  "Eggs": "Provides structural support, fat, and helps emulsify your batter.",
  "Sugar": "Provides sweetness while absorbing water, slowing the creation of gluten and allowing for goods to be fluffier and spread more.",
  "Brown Sugar": "More complex flavor than sugar. Provides acidity for baking soda.",
  "Butter": "placeHolder",
  "Vegetable Oil": "placeHolder",
  "Olive Oil": "A healthier alternative for vegeteble oil with a less complex, more noticeable flavor.",
  "Baking Soda": "Leavens your product with the presence of an acidic ingredient (brown sugar, cocoa powder, buttermilk).",
  "Baking Powder": "Leavens your product without the presence of an acidic ingredient.",
  "Cocoa Powder": "Gives your product a chocolate flavor. Provides acidity for baking soda.",
  "Yeast": "Leavens your product more powerfully but requiring more time to take action and warm water and sugar to activate. ",
  "Milk": "An alternative to water that adds some fat and flavor to your product.",
  "Water": "Nececary for the creation of gluten which makes structure.",
}


function selectIngredient(ingredient, ingredientAmnt = 1, ingredientUnit = "Cups"){


  if(document.getElementById(ingredient)){
    return 0
  }


  var newIngredient = document.getElementsByTagName("template")[0].content.firstElementChild.cloneNode(true)
  document.getElementById("selectedIngredients").appendChild(newIngredient)


  newIngredient.setAttribute("id", ingredient)
  newIngredient.querySelector("img").setAttribute("src", ingredientImgs[ingredient])
  newIngredient.querySelector("h1").innerHTML = ingredient


  if(["Baking Soda", "Vegetable Oil","Baking Powder", "Brown Sugar", "Cocoa Powder"].includes(ingredient)){
    newIngredient.querySelector("h1").style.fontSize = "24px"
    newIngredient.querySelector("h1").style.marginTop = "8px"
  }
  else if(["Whole Wheat Flour"].includes(ingredient)){
    newIngredient.querySelector("h1").style.fontSize = "21px"
  }

  newIngredient.querySelector("p").insertAdjacentHTML("afterbegin",ingredientInfo[ingredient])
  newIngredient.querySelectorAll("p")[1].insertAdjacentHTML("afterbegin", "<h1>Flour</h1><div>Flour is the building block of most baked goods and is what forms structure and texture within a product. It consists primarily of starch and protein.</div><div>When flour is hydrated, the proteins in flour, gliadin and glutenin, link together to form long strands of proteins called gluten. When dough is kneaded or mixed, the water forms even more gluten and the gluten strands then uncoil and align which provides strength and toughness to a product. This is why overmixing can lead to a tough product.</div><div>The amount of protein in flour can vary but determines both how much gluten is formed and how much water will be absorbed (causing a dough to become dry). All purpose flour has 9-12% protein making it good for general use. Bread flour has 12-16% protein making it great for breads and things that need to have very strong structure. Whole wheat flour has around 13% protein, but it also contains the bran, another part of the wheat that is filtered out in other flours, which act like little blades cutting up the gluten. This results in it being mediocre for forming large gluten networks. Finally, cake flour has around 10% protein, making it better for cakes where strong gluten networks are not desired.<div></div>Flour is also made up of 70% starch which when hydrated forms a gel. This gel when heated becomes hard, providing the structure and crust of a baked good.<div>A healthier alternative to all purpose or bread flour, is whole wheat flour. It can usually be substituted in for up to 50% or more of a different type of flour, although it may result in a drier product or less leavening due to absorbing more water and containing bran.</div>")


  newIngredient.querySelector("select").value = ingredientUnit
  newIngredient.querySelector("input").value = ingredientAmnt




  document.getElementById("selectedIngredients").appendChild(newIngredient)


  ingredientAmnts[ingredient] = ingredientAmnt / unitConversions[ingredientUnit]


  calculateNutrition()
}


function deleteIngredient(ingredient){


document.getElementById(ingredient).remove()


ingredientAmnts[ingredient] = 0


calculateNutrition()
}


function refreshIngredientAmnt(ingredient){


  const ingredientNode = document.getElementById(ingredient)


  inputBox = ingredientNode.querySelector("input")
  unitBox = ingredientNode.querySelector("select")


  var ingredientAmnt = parseFloat(inputBox.value)


  if(unitBox.value == "Cups"){
    ingredientAmnt = ingredientAmnt
  }
  else if(unitBox.value == "Tbsps"){
    ingredientAmnt /= 16
  }
  else if(unitBox.value == "Tsps"){
    ingredientAmnt /=  48
  }
  ingredientAmnts[ingredient] = ingredientAmnt


  calculateNutrition()
}


function openInfoBox(ingredient){
  const infoBox = document.getElementById(ingredient).querySelector("p")
    infoBox.classList.toggle("hidden")
}

function toggleMoreInfoBox(ingredient){
  const moreInfoBox = document.getElementById(ingredient).querySelectorAll("p")[1]
    moreInfoBox.classList.toggle("hidden")
}


function calculateNutrition(){
  for(let ingredient in ingredientAmnts){
    ingredientAmntsGrams[ingredient] = ingredientAmnts[ingredient] * gramsPerCup[ingredient]
  }


  for(let info in nutrition){
    nutrition[info] = 0


    for(let ingredient in ingredientAmnts){
      nutrition[info] += nutritionPerCup[ingredient][info] * ingredientAmnts[ingredient]
    }


    if(info == "cals"){
      nutrition[info] = Math.round(nutrition[info])
    }
    else{
      nutrition[info] = Math.round(nutrition[info] * 10) / 10
    }


    document.getElementById(info).innerText = nutrition[info]


    if(!["cals", "transFat", "sugar"].includes(info)){
      document.getElementById(info).parentElement.nextElementSibling.innerText = Math.round(nutrition[info] / nutritionDailyVal[info] * 10) / 10 + "%"
    }
  }


  var totalMass = 0
  for(let ingredientWeight in ingredientAmntsGrams){
    totalMass += ingredientAmntsGrams[ingredientWeight]
  }


  var prcntHydration = (ingredientAmntsGrams["Water"] + ingredientAmntsGrams["Milk"] * 0.87 + ingredientAmntsGrams["Eggs"] * 0.8 + ingredientAmntsGrams["Butter"] * 0.17) / Math.max(ingredientAmntsGrams["Flour"] + ingredientAmntsGrams["Whole Wheat Flour"], 1)
  var prcntFat = (ingredientAmntsGrams["Olive Oil"] + ingredientAmntsGrams["Vegetable Oil"] + ingredientAmntsGrams["Butter"] * 0.8 + ingredientAmntsGrams["Eggs"] * 0.1 + ingredientAmntsGrams["Milk"] * 0.03) / Math.max( totalMass,1)
  var prcntSugar = (ingredientAmntsGrams["Sugar"] + ingredientAmntsGrams["Brown Sugar"]) / Math.max(totalMass, 1)
  var prcntYeast = ingredientAmntsGrams["Yeast"] / Math.max(totalMass,1)


  var activeBS = Math.min((ingredientAmntsGrams["Brown Sugar"] + ingredientAmntsGrams["Cocoa Powder"]) / Math.max(ingredientAmntsGrams["Baking Soda"],1),192) / 192
  var prcntActiveBS = (ingredientAmntsGrams["Baking Powder"] + ingredientAmntsGrams["Baking Soda"] * 3.33 * activeBS) / Math.max(1,totalMass)


  var amntProtein = (0.12 * ingredientAmntsGrams["Flour"] + 0.09 * ingredientAmntsGrams["Whole Wheat Flour"]) / Math.max( totalMass,1)


  var glutenContent = ((amntProtein * prcntHydration * (techniques["rest"]/2 + 1) * (techniques["knead"]/30 + 1)) / (prcntSugar + 1)) * 10


  var browning = prcntSugar + amntProtein * 4 * techniques["rest"]


  var moistness = prcntFat + (prcntHydration * prcntSugar)


  var leavening = prcntHydration/3 + 25 * prcntYeast * techniques["rest"] * (prcntSugar*10 + 1) * 1.5 + prcntActiveBS * 35


  document.getElementById("sweetness").value = prcntSugar * 1.5
  document.getElementById("structure").value = glutenContent
  document.getElementById("browning").value = browning
  document.getElementById("moistness").value = moistness * 1.5
  document.getElementById("leavening").value = leavening


  if(ingredientAmnts["Yeast"] > 0){
    document.getElementById("classification").innerText = "Bread"
  }
  else if(leavening > 0.5 && moistness * 1.5 > 0.5 && glutenContent > 0.3){
    document.getElementById("classification").innerText = "Cake"
  }
  else if(glutenContent > 0.1 && moistness * 1.5 > 0.2){
    document.getElementById("classification").innerText = "Cookies"
  }
  else{
    document.getElementById("classification").innerText = "Unknown"
  }






  for(let warning of document.getElementById("techniqueSelector").querySelectorAll("h4")){
    warning.remove()
  }


  if(ingredientAmnts["Vegetable Oil"] > 0){
    createWarning("Using olive oil instead of vegeteble oil can increase nutrition", 1)
  }
  if(ingredientAmnts["Flour"] > 0){
    createWarning("Using some whole wheat flour instead of all purpose can increase nutrition", 1)
  }
  if(ingredientAmnts["Baking Powder"] + ingredientAmnts["Baking Soda"] + ingredientAmnts["Yeast"] == 0){
    createWarning("A leavening agent is recomended (Baking Powder/Soda or Yeast)", 2)
  }
  if(ingredientAmnts["Flour"] + ingredientAmnts["Whole Wheat Flour"] == 0){
    createWarning("Flour is needed for structure", 2)
  }
  if(prcntHydration == 0){
    createWarning("A liquid is needed to form gluten", 2)
  }
  if(ingredientAmnts["Yeast"] > 0 && techniques["rest"] == 0){
    createWarning("Resting is needed for yeast to activate", 2)
  }
  if(ingredientAmnts["Yeast"] > 0 && ingredientAmnts["Water"] == 0){
    createWarning("Warm water is needed for yeast to activate", 2)
  }
  if(ingredientAmnts["Baking Soda"] && !(ingredientAmnts["Cocoa Powder"] + ingredientAmnts["Brown Sugar"])){
    createWarning("An acidic ingredient is recomended if using baking soda. (Cocoa powder, brown sugar)", 2)
  }
  if((ingredientAmntsGrams["Flour"] + ingredientAmntsGrams["Whole Wheat Flour"]) / (ingredientAmntsGrams["Baking Soda"] * activeBS + ingredientAmntsGrams["Baking Powder"] * 0.3) < 72){
    createWarning("No more than 1/2 tsp baking soda or 1 1/2 tsp baking powder should be used per cup of flour.", 2)
  }
}


function useTemplate(product){
  for(let ingredient in ingredientAmnts){


    if(ingredientAmnts[ingredient] > 0){
      deleteIngredient(ingredient)
      ingredientAmnts[ingredient] = 0
    }
  }


  for(let ingredient in recipeTemplates[product]){


    if(!["knead", "rest", "temp"].includes(ingredient)){
      selectIngredient(ingredient, recipeTemplates[product][ingredient][0], recipeTemplates[product][ingredient][1])
    }
    else{
      document.getElementById(ingredient).value = recipeTemplates[product][ingredient]
      refreshTechniques(ingredient)
    }
  }
}


function refreshTechniques(technique){
  techniques[technique] = parseFloat(document.getElementById(technique).value)
  calculateNutrition()
}


function createWarning(text, type){
  let newSuggestion = document.getElementsByTagName("template")[type].content.firstElementChild.cloneNode(true)
  document.getElementById("warnings").appendChild(newSuggestion)


  newSuggestion.insertAdjacentHTML("beforeend",text)
}


function makeHealthy(){
  if(ingredientAmnts["Flour"] > ingredientAmnts["Whole Wheat Flour"]){


    let totalFlour = ingredientAmnts["Flour"] + ingredientAmnts["Whole Wheat Flour"]
    document.getElementById("Flour").querySelector("input").value = totalFlour / 2


    if(!ingredientAmnts["Whole Wheat Flour"]){
      selectIngredient("Whole Wheat Flour")
    }


    document.getElementById("Whole Wheat Flour").querySelector("input").value = totalFlour / 2
  }


  if(document.getElementById("sweetness").value / 1.5 > 0.2){
    document.getElementById("Sugar").querySelector("input").value = ingredientAmnts["Sugar"] * 0.6
  }


  if(ingredientAmnts["Vegetable Oil"]){
    if(!ingredientAmnts["Olive Oil"]){
      selectIngredient("Olive Oil")
    }
    document.getElementById("Olive Oil").querySelector("input").value = ingredientAmnts["Vegeteble Oil"]
    deleteIngredient("Vegetable Oil")
  }


  if(ingredientAmnts["Olive Oil"] + ingredientAmnts["Butter"] > 0.1){
    if(ingredientAmnts["Olive Oil"]){
      document.getElementById("Olive Oil").querySelector("input").value = ingredientAmnts["Olive Oil"] * 0.75
    }
    if(ingredientAmnts["Butter"]){
      document.getElementById("Butter").querySelector("input").value = ingredientAmnts["Butter"] * 0.75
    }
  }




  for (let ingredient in ingredientAmnts) {
    if(ingredientAmnts[ingredient]){
      refreshIngredientAmnt(ingredient)
    }
}
 
}
