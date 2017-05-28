console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.body;


//Part 1
var makeMiddleEarth = function(el1, el2){

var middleEarth = document.createElement("section");//creates a section
middleEarth.id = "middle-earth";//gives the section an id

for (var i = 0; i < lands.length; i++) {//iterates through land object
	var articleElem = document.createElement(el1); //creates article
	var h1Elem = document.createElement(el2); //creates h1 tag
	var text = lands[i];//grabs land nams
	var h1Text = document.createTextNode(text);// creates a text node with land name as content
	h1Elem.appendChild(h1Text);//puts the text node in the h1 element
	articleElem.appendChild(h1Elem);//puts the h1 element in the article element
	middleEarth.appendChild(articleElem);//puts the article element in the section
	}

	body.appendChild(middleEarth);//puts the section in the body

};

makeMiddleEarth("article", "h1");//pass article and h1 into the function arguments


//Part 2

var makeHobbits = function(elName){

    var hobbitsList = document.createElement("ul");//creates a unordered list

        for (var i = 0; i < hobbits.length; i++) {//iterates through the hobbit object
            var el = document.createElement(elName);//creates the list element
            el.className = "hobbit";//give a class name to each element
            var text = hobbits[i];//gets the names from the hobbit object
            var elText = document.createTextNode(text);//creates a text node with the hobbit name inside
            el.appendChild(elText);//puts the text node in the list element
            hobbitsList.appendChild(el);//puts the list element in the UL tag
            }

        var list = document.getElementsByTagName("article")[0];// gets The Shire article
        list.append(hobbitsList);//but the hobbit list in the The Shire article
}
makeHobbits("li");//passes list into the function argument


// Part 3
var keepItSecretKeepItSafe = function (){

	var ring = document.createElement("div");//creates a div
	ring.id = "the-ring";//gives the dic and id
	ring.className = "magic-imbued-jewelry";//gives the div a class
	var frodo = document.getElementsByTagName("li")[0];//gets the Frodo li element
	frodo.appendChild(ring);//puts the ring div into the Frodo li element
}

keepItSecretKeepItSafe();

// //Part 4
var makeBuddies = function (elName){

	var buddiesAside = document.createElement("aside");//creates an aside
	var buddiesList = document.createElement("ul");//creates an unordered list

	for (var i = 0; i < buddies.length; i++) {//itereates through the buddies object

		var el = document.createElement(elName);//creates a li element
		var text = buddies[i];//gets the names of each buddy
		var elText = document.createTextNode(text);//creates a text node with the buddy name
		el.appendChild(elText);//put the text node into the li element
		buddiesList.appendChild(el);//puts the li element into the ul element
	}

	buddiesAside.appendChild(buddiesList);//puts the ul element into the aside element

	var riven = document.getElementsByTagName("article")[1];//gets the Rivendell article element
	riven.appendChild(buddiesAside);//buts the aside element into the Rivendell article element
}
makeBuddies("li");//calls the function and passes li into the arguement

//Part 5
var beautifulStranger = function () {
	buddies[3] = "Aragorn";
	document.querySelectorAll("aside ul li")[3].textContent=buddies[3];
}
beautifulStranger();

// // Part 6
var leaveTheShire = function (){

	var newParent = document.getElementsByTagName("ul")[1];//gets the Rivendell list of characters
	var oldParent = document.getElementsByTagName("ul")[0];//gets the hobbit list

	while (oldParent.childNodes.length > 0) {//iterates throught the hobbit list
	newParent.appendChild(oldParent.childNodes[0]);//appends each li to the Rivendell list
	}
}
leaveTheShire();

//Part 7

// var forgeTheFellowship = function(){

// 	var riven = document.getElementsByTagName("article")[1];
// 	var fellow = document.createElement("div");
// 	riven.appendChild(fellow);


// 	var getEverybody = document.querySelectorAll("ul");
// 	var fellowDiv = document.querySelectorAll("div")[2];
// 	fellowDiv.appendChild(getEverybody);
// }
// forgeTheFellowship();





















