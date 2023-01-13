console.log( "Homework #7");

const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };


function getMyTaxes (salary){
   return this.tax * salary;
};


function getMiddleTaxes(){
   return this.middleSalary * this.tax;
}


function getTotalTaxes(){
   return this.middleSalary * this.tax * this.vacancies;
}


function getMySalary(){

   function getProfit(){
      const min = 1500;
      const max = 2000;
      const averageNumber = max - min;
      const randomNumber = Math.random()*averageNumber;
      let randomSalary = randomNumber+min;
      randomSalary=randomSalary - this.tax * randomSalary;

      return randomSalary = Math.round(randomSalary);
   }

   return{
      salary: this.middleSalary,
      tax: this.tax,
      profit: getProfit.call(this),
   }
}



console.log("Function #1 ", getMyTaxes.call(ukraine, 1600));

console.log("Function #2 ", getMiddleTaxes.call(litva));

console.log("Function #3 ", getTotalTaxes.call(latvia));

setInterval(()=> console.log ("Function #4", getMySalary.call(ukraine)), 10000);


