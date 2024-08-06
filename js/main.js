// API :  Application Program Interface
//الواجهة الأمامية للموقع
// Connection between backend and front end
// API Consists of an array of objects
// Fake API link for sample apis
// API is a simplified version for a database/database table
// API comes out in JSON format to be able to handle
// API Format Array
//
// Browser : Creates XMLHttpRequest Object and sensds through the internet to the server ==> Server : processes HTTPRequest and creates a response and send data back to the browser throguh the internet t the browser ==> Browser : processes the returned data using JavaScript, and updates the page content

// 1. An event occurs in a web page (the page is loaded, a button is clicked)
// 2. An XMLHttpRequest object is created by JavaScript
// 3. The XMLHttpRequest object sends a request to a web server
// 4. The server processes the request
// 5. The server sends a response back to the web page
// 6. The response is read by JavaScript
// 7. Proper action (like page update) is performed by JavaScript

// onload : Defines a function to be called when the request is received (loaded)

//onreadystatechange: function that returns true when request & response & server & Internet are all in good state and running
// onreadystatechange : Defines a function to be called when the readyState property changes

// readyState : Holds the status of the XMLHttpRequest.
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready

// responseText : Returns the response data as a string

// responseXML : Returns the response data as XML data

// status : Returns the status-number of a request
// 200: "OK"
// 403: "Forbidden"
// 404: "Not Found"
// Full List : https://www.w3schools.com/tags/ref_httpmessages.asp

// Synchronus Vs. Asynchronus

// First Way To Get API
// function getAPI() {
// 	var xhttp = new XMLHttpRequest(); // Creates Request
// 	// console.log(xhttp);
// 	// Check the onreadystatechange value and executes function if true
// 	xhttp.onreadystatechange = function () {
// 		// Check readystate and status of request
// 		if (this.readyState == 4 && this.status == 200) {
// 			// Parses the rsponse to JSON file
// 			var item = JSON.parse(this.responseText);
// 			document.querySelector(".test img").src = item[0].url;
// 			// console.log(item);
// 			// document.querySelector("#demo").innerHTML = this / this.responseText;
// 			// console.log(this.responseText);
// 		}
// 	};

// 	xhttp.open("GET", "https://jsonplaceholder.typicode.com/photos", true); // gets api functon asynchronus
// 	xhttp.send(); // sends the request to the server
// }

// //Second Way To Get API
// fetch("https://jsonplaceholder.typicode.com/photos") //returns api
// 	.then(function (data) {
// 		return data.json(); //returns json file (array of objects)
// 	})
// 	.then(function (item) {
// 		console.log(item);
// 	});

// // Third way to Get API
async function getAPI1() {
	var data = await fetch("https://forkify-api.herokuapp.com/api/search?q=pizza");
	var item = await data.json();
	var result = "";
	for (var i = 0; i < 18; i++) {
		var apiItem = `<div class="col-md-4 bg-dark d-block m-auto rounded api-task p-3">
					<img src="${item.recipes[i].image_url}" class="img-fluid m-auto" style="height:300px"/>
					<h3 class="text-center text-light m-1">${item.recipes[i].publisher}</h3>
					<h5 class="text-center text-light m-1">${item.recipes[i].title}</h5>
				</div>`;
		result += apiItem;
	}

	document.querySelector(".api-task-1").innerHTML = result;
}
getAPI1();

async function getAPI2() {
	var data = await fetch("https://jsonplaceholder.typicode.com/photos");
	var item = await data.json();
	var result = "";
	for (var i = 0; i < 18; i++) {
		var apiItem = `<div class="col-md-4 bg-dark d-block m-auto my-2 rounded api-task p-3">
					<img src="${item[i].url}" class="img-fluid m-auto" style="height:300px" />
					<h4 class="text-center text-light m-1">${item[i].id}</h4>
					<h6 class="text-center text-light m-1">${item[i].title}</h6>
				</div>`;
		result += apiItem;
	}

	document.querySelector(".api-task-2").innerHTML = result;
}
getAPI2();

async function getAPI3() {
	var data = await fetch("https://dummyjson.com/products");
	var item = await data.json();
	var result = "";
	console.log(item.products);
	for (var i = 0; i < 18; i++) {
		var apiItem = `<div class="col-md-4 bg-dark d-block m-auto my-2 rounded api-task p-3">
					<img src="${item.products[i].images[0]}" class="img-fluid m-auto" style="height:300px" />
					<h4 class="text-center text-light m-1">${item.products[i].title}</h4>
					<h6 class="text-center text-light m-1">${item.products[i].description}</h6>
				</div>`;
		result += apiItem;
	}

	document.querySelector(".api-task-3").innerHTML = result;
}
getAPI3();

//First Way For Task 1
document.querySelector("#red-1").onclick = function () {
	var x = document.querySelector("#color-demo-1");

	x.style.color = "red";
};
document.querySelector("#yellow-1").onclick = function () {
	var x = document.querySelector("#color-demo-1");
	x.style.color = "yellow";
};
document.querySelector("#green-1").onclick = function () {
	var x = document.querySelector("#color-demo-1");
	x.style.color = "green";
};

//Second Way For Task 1
document.querySelectorAll(".color-task-2").forEach(function (item) {
	item.onclick = function (event) {
		var x = document.querySelector("#color-demo-2");
		// var id = item.getAttribute("id");
		var id = event.target.id;
		x.style.color = id;
	};
});

//Third Way For Task 1
document.querySelectorAll(".color-task-3").forEach(function (item) {
	item.onclick = function (event) {
		var x = document.querySelector("#color-demo-3");
		x.style.color = item.dataset.color;
	};
});

// To Do List Task : Add
document.querySelector("form").onsubmit = function () {
	var task = document.querySelector("#task-add").value;
	var result = document.querySelector("#result");
	if (task.length > 0) {
		var myLi = document.createElement("li");
		myLi.setAttribute("class", "text-light toDo");
		myLi.setAttribute("id", `${task}`);
		myLi.innerHTML = task;
		result.append(myLi);
		document.querySelector("#task-add").value = "";
	}

	return false;
};

// To Do List Task : Remove
document.querySelector("form #remove-button").onclick = function () {
	var tasks = document.querySelectorAll(" .toDo");
	var remove = document.querySelector("#task-remove").value;
	console.log(tasks, remove);
	for (var i = 0; i < tasks.length; i++) {
		var item = tasks[i];
		console.log(item, item.innerHTML, remove);
		if (item.innerHTML == remove) {
			var toBeRemoved = `#${tasks[i].innerHTML}`;
			toBeRemoved += "";
			console.log(toBeRemoved, typeof toBeRemoved);
			// var obj = document.querySelector("#result");
			// console.log(obj.id);
		}
	}
};
