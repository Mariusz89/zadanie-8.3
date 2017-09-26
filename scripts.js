var text = "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.";
var dinosaur = "triceratops";

//content var dinosaur is uppercase
var dinosaurUpperCase = dinosaur.toUpperCase();
//replaced word "Velociraptor" on "TRICERATOPS"
var textReplace = text.replace("Velociraptor", dinosaurUpperCase);
//divorced content var textReplace on two parts and I kept length half string
var textReplace1 = textReplace.length/2;
//half string has 72 signs
console.log(textReplace.substr(0, textReplace1));