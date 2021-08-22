const form = document.getElementById("form");

const input = document.getElementById("input");

const ul = document.getElementById("ul");

const todos = JSON.parse(localStorage.getItem("todos"));


if(todos){
    todos.forEach(todo => {
        add(todo);
    })
}

form.addEventListener("submit", function(event){
    event.preventDefault();
    add();
});

function add(todo) {
    let todotext = input.value;

    if (todo){
        todotext = todo.text;
    }

    if (todotext){
        const li = document.createElement("li");
        li.innerText = todotext;
        li.classList.add("list-group-item");

        if(todo && todo.completed){
            li.classList.add("text-decoration-line-through");
        }

        li.addEventListener("contextmenu", function(event){
            event.preventDefault();
            li.remove();
            saveDate();
        });

        li.addEventListener("click",function(){
            li.classList.toggle("text-decoration-line-through");
            saveDate();
        });

        ul.appendChild(li);
        input.value = "";
        saveDate();
    }
}

function saveDate() {
    const lists = document.querySelectorAll("li");
    let todos =[];

    lists.forEach(list =>{
        let todo = {
            text: list.innerText,
            completed: list.classList.contains(
                "text-decoration-line-through"
            )
        };
        todos.push(todo);
    });
  localStorage.setItem("todos",JSON.stringify(todos));
}


//htmlのul要素（id = 'messages'）を呼び出し
var messageList = document.getElementById('#messages');

//openweathermap（天気予報API）に接続
let request = new XMLHttpRequest();

let cityName ='tokyo'



var owmApiKey ="5a8421ab3c19a4d4cbd2fcf6903ac521";
var owmURL = "http://api.openweathermap.org/data/2.5/weather?q="+ cityName +"&APPID="+ owmApiKey +"";

request.open('GET', owmURL);

request.send();

request.responseType = 'json';

request.onload = function () {
    let weatherMark = document.getElementById("weatherMark");
    if(messageElement= 'clouds'){
        weatherMark.innerHTML="<img src='http://openweathermap.org/img/w/04d.png'>"
    }else if(messageElement = 'clear'){
        weatherMark.innerHTML="<img src='http://openweathermap.org/img/w/01d.png' >"
    }else if(messageElement = 'rain'){
        weatherMark.innerHTML="<img src='http://openweathermap.org/img/w/09d.png' >"
    }




   



 var data = this.response;
 console.log(data);
 document.getElementById('temp').innerHTML = Math.floor((data.main.temp - 273.15) * 100) / 100;
 document.getElementById('humidity').innerHTML = data.main.humidity;
};






 
