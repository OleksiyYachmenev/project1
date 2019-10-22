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
            income: [],
            timeData: time,
            savings: true,
            chooseExpenses: function () {
                for (let i = 0; i < 2; i++) {
                    let a = prompt ("Vvedite obyazatelnuu statyu rashodov v etom mesyace", ""),
                        b = prompt ("Vo skolko obojdetsya?", "");
                if ( typeof(a) === "string" && typeof(a) != null && typeof(b) != null 
                && a != "" && b != "" && a.length < 50) {
                    console.log ("done");
                appData.expenses[a] = b;
                } else {
                console.log ("bad result");
                i--;
                }
                }
            },
            detectDayBudget: function() {
                appData.moneyPerDay = (appData.budget / 30).toFixed();
                alert("Budget na 1den sostavlyaet" + appData.moneyPerDay + "dollars");
            },
            
            detectLevel: function () {
                if(appData.moneyPerDay < 100) {
                    console.log("Minimalnyy uroven dostatka!");
                } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
                console.log ("Srednii uroven dostatka!");
            } else if ( appData.moneyPerDay > 2000) {
                console.log ("Vysokii uroven dostatka!");
            } else {
                console.log("Oshibochka...."); 
            }
        },
        checkSaving: function () {
            if (appData.savings == true) {
                let save = +prompt("Kakova suma nakoplenii?"),
                    percent = +prompt("Pod kakoi procent?");
        
                    appData.monthIncome = save/100/12*percent;
                    alert("Dohod v mesyac s vashego deposita: " + appData.monthIncome);
            }
        },
        chooseOptExpenses: function() {
    for (let i = 1; i <=3; i++){
        let questionOptExpenses = prompt ('Statya neobyazatelnyh rashodov?');
        appData.optionalExpenses[i] = questionOptExpenses;
        console.log(appData.optionalExpenses);
     }
},
        chooseIncome: function() {
    let items = prompt('Shto prineset dopolnitelnyy dohod? (Perechislite cherz zapyatuu)', '');
    if (typeof(items) !="string" || items == "" || typeof(items) == null) {
        console.log("Vy vveli nekorektnye dannye ili ih vovse net");
    } else {
        appData.income = items.split(', ');  
        appData.income.push(prompt("Mozhet shto-to eshe?"));
        appData.income.sort();
    }
    appData.income.forEach (function (itemmassive, i) {
        alert("Sposoby dop.zarabotka: " + (i+1) + " - " + itemmassive);
    });
}
};

for (let key in appData) {
    console.log("Nasha proga vkluchaet v sebya dannye: " + key + " - " + appData[key]);
}