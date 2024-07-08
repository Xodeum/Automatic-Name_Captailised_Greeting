var name = prompt("What is your name?");

var firstChar = name.slice(0,1);

var uppercasefirstChar = firstChar.toUpperCase();

var restOfName = name.slice(1,name.length)

restOfName = restOfName.toLowerCase();

var captailisedName = uppercasefirstChar + restOfName;

alert("Hello " + captailisedName);