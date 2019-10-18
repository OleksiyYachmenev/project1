   let money, time;
   function start() {
   money = +prompt ("Vash budget na mesyac?", "");
   time = prompt("VVedite daty v formate YYYY-MM-DD", "");  

   while(isNaN(money) || money == "" || money == null){
    money = +prompt ("Vash budget na mesyac?", "");
}
   } 
   start();

    let appData = {
            budget: money,
            expenses: {},
            optionalExpenses: {},
            incom: [],
            timeData: time,
            savings: true
    };
  
        
function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt ("Vvedite obyazatelnuu statyu rashodov v etom mesyace", " "),
            b = prompt ("Vo skolko obojdetsya?", " ");
    if (  (typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null 
    && a != " " && b != " " && a.length < 50) {
        console.log ("done");
    appData.expenses[a] = b;
    } else {
        i = i - 1;
    }
    }
}
chooseExpenses();

function detectDayBudget(){
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Budget na 1den sostavlyaet" + appData.moneyPerDay + "dollars");
}
detectDayBudget();
       
function detectLevel(){
if(appData.moneyPerDay < 100) {
            console.log("Minimalnyy uroven dostatka!");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
        console.log("Srednii uroven dostatka!");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Vysokii uroven dostatka!");
    } else {
        console.log("Oshibochka....");
    }
}
detectLevel();


function checkSavings(){
    if (appData.savings == true){
        let save = +prompt("Kakova suma nakoplenii?"),
            percent = +prompt("Pod kakoi procent?");

            appData.monthIncome = save/100/12*percent;
            alert("Dohod v mesyac s vashego deposita: " + appData.monthIncome);
    }
} 
checkSavings();

function chooseOptExpenses(){
    for (let i = 1; i <=3; i++){
   let questionOptExpenses = prompt ('Statya neobyazatelnyh rashodov?');
   appData.optionalExpenses[i] = questionOptExpenses;
   console.log(appData.optionalExpenses);
}
}
chooseOptExpenses();










    
