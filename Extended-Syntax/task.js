

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){

    "use strict";

    let a = 2, b = 3, c = 4;
     
      let x = (a ** a + c - b);
      if (x < 0){
        console.log("Корня нет");
      }
      else if (x = 0){
        console.log(x);
      }
      else (x > 0);
        console.log(x);
      return [x];
    }
    
    getResult();

}

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №2 писать здесь
    //console.log(result)
    //return result;
    let name = "Вася";
let dateOfBirthday = 2000;

function askDrink(){
  name;
  dateOfBirthday;
}

function getFullYear(){
  let result = new Date().getFullYear();
  if (result - dateOfBirthday >= 18) {
    console.log("Не желаете ли олд-фэшн, " + name + "?");
  }
  else{
    (result - dateOfBirthday < 18);
       console.log("Сожалею, " + name + " , но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!");
  return result;
  }
}

getFullYear();

}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
 
        var marks = [5, 5, 5, 5, 5, 5, 5, 5];
        var averageMark = 0;
        for (var i = 0; i <= 4; i++) 
        {
          averageMark += marks[i] / 5;
        }
        return averageMark; 
    }
    
     getAverageMark();

