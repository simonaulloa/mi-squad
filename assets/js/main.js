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

	arr.forEach(function(ele){
		innerHTML("nombre: " + ele.nombre + "edad: " + ele.edad);
		
		ele.hobbies.forEach(function(e){
			innerHTML("hobbies: " + e);
		})
		
	})



/*var Carol = document.getElementById("caro");
caro.innerHTML = "<strong>Nombre:</strong> " + carolina.nombre + "<strong><br>Edad:</strong> " + carolina.edad + "<strong><br>Hobbies:</strong> " + carolina.hobbies;
var Murie = document.getElementById("muri");
muri.innerHTML = "<strong>Nombre:</strong> " + muriel.nombre + "<strong><br>Edad:</strong> " + muriel.edad + "<strong><br>Hobbies:</strong> " + muriel.hobbies;
var An = document.getElementById("nanyn");
nanyn.innerHTML = "<strong>Nombre:</strong> " + anayn.nombre + "<strong><br>Edad:</strong> " + anayn.edad + "<strong><br>Hobbies:</strong> " + anayn.hobbies;
var Josef = document.getElementById("jose");
jose.innerHTML = "<strong>Nombre:</strong> " + josefa.nombre + "<strong><br>Edad:</strong> " + josefa.edad + "<strong><br>Hobbies:</strong> " + josefa.hobbies;
var A = document.getElementById("ana");
ana.innerHTML = "<strong>Nombre:</strong> " + anais.nombre + "<strong><br>Edad:</strong> " + anais.edad + "<strong><br>Hobbies:</strong> " + anais.hobbies;
var Maib = document.getElementById("mai");
mai.innerHTML = "<strong>Nombre:</strong> " + maibeet.nombre + "<strong><br>Edad:</strong> " + maibeet.edad + "<strong><br>Hobbies:</strong> " + maibeet.hobbies;