
function MiembroSquad(nombre, edad, hobbies){
    this.nombre = nombre;
    this.edad = edad;
    this.hobbies = hobbies;
	}


var arr = [];
	var carolina = new MiembroSquad("Carolina Quintana", 31 , ["Patinar", "Comer sushi", "Acariciar a sus gatas"]);
		arr.push(carolina);
	var muriel = new MiembroSquad("Muriel Bahamondes", 25, ["Fumar hierba", "Jugar pool", "Navegar en internet"]);
		arr.push(muriel);
	var anayn = new MiembroSquad("Anayn Pavez", 27, ["Dibujar", "Pastelear", "Andar en bici"]);
		arr.push(anayn);
	var josefa = new MiembroSquad("Josefa Herrera", 21, ["Bailar Pop", "Ver series", "Codear"]);
		arr.push(josefa);
	var anais = new MiembroSquad("Anais Araya", 19, ["Estar con la amelia", "Ver Netflix" , "Estar con su pareja"]);
		arr.push(anais);
	var maibeet = new MiembroSquad("Maibeet Torres", 15, ["Jugar juegos de RPG", "Leer", "dormir"]);
		arr.push(maibeet);


function myFunction() { // text area
    var x = document.getElementById("myTextarea").value;
    document.getElementById("demo").innerHTML += x + "<br>" ;
}
function myFunction() { // text area
    var x = document.getElementById("myTextarea").value;
    document.getElementById("demo1").innerHTML += x + "<br>" ;
}
function myFunction() { // text area
    var x = document.getElementById("myTextarea").value;
    document.getElementById("demo2").innerHTML += x + "<br>" ;
}
function myFunction() { // text area
    var x = document.getElementById("myTextarea").value;
    document.getElementById("demo3").innerHTML += x + "<br>" ;
}
function myFunction() { // text area
    var x = document.getElementById("myTextarea").value;
    document.getElementById("demo4").innerHTML += x + "<br>" ;
}
function myFunction() { // text area
    var x = document.getElementById("myTextarea").value;
    document.getElementById("demo5").innerHTML += x + "<br>" ;
}

var imprimir = document.getElementById("verGrupo");

arr.forEach(function(elementos){

    imprimir.innerHTML += "<b>Nombre:</b> " + elementos.nombre + "<br><b>Edad:</b> " + elementos.edad + "<br><b>Hobbies:</b><br>";
    var lista = "<ul> " + elementos.hobbies.forEach(function(ele){return (imprimir.innerHTML += "<li>" + ele + "</li>")}) + "</ul>";
    imprimir.innerHTML += "<br>"+"<br>";


})

