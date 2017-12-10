console.log('Metushelah');
/*
Metushelah
Build a data structure that represent a family tree, we might make it graphical later, but for now we focus on the data structure:
1)	A person object that has:
i.	an id (1001,1002, etc ), 
ii.	a name, 
iii.	a birthdate (a date object)
iv.	parents – array by size of 2
v.	childs –  array by any size
2)	Build a data structure byId (an object) that will store all people by their ID
3)	write functions:
i.	 addChild(toPersonId, childPerson)
ii.	addParent(toPersonId, parentPerson)

4)	Use those functions to create a tree with some data (i.e. your family, from Adam to Noah, etc.)
5)	Write a function that prints the name of the parents that gave their son, the longest name.


*/


var gNextId         = 1001;
var gPersons        = createPersons();
var gIdToPersonMap  = createPersonsMap(gPersons);

createChild('kain', 1001, 1002);
createChild('hevel', 1001, 1002);
createChild('eshto', 1001, 1002);
createChild('chanoch', 1005, 1003);
createChild('waife', 1001, 1002);
createChild('erad', 1006, 1007);


// function addNewChild() {

//     var childName = prompt('enter new name');

//     // while (childName!==0) {
//     var  parent1Id = prompt('enter id1:');
//     var  parent2Id = prompt('enter id2');
//     createChild(childName, parent1Id, parent2Id)
//     console.log('new id:',(gNextId-1) )
//     // var childName = prompt('enter new name');
    
function longestNamePerntsId() {
    var longestNamePerson = null;
    var lengthName = 0;
    for (var i = 0; i < gPersons.length; i++) {
        if(!longestNamePerson) {
            longestNamePerson =  gPersons[i]
            continue
        }
        var person = gPersons[i];
        if (person.name.length > longestNamePerson.name.length) {
            longestNamePerson =  gPersons[i]
        }  
    }
    var pernt = longestNamePerson.parents
    console.log(pernt[0].id,pernt[1].id)
}




function createChild(childName, parent1Id, parent2Id) {
    var childPerson = addPerson(childName);
    addChild(parent1Id, childPerson);
    addChild(parent2Id, childPerson);

    addParent(childPerson.id, gIdToPersonMap[parent1Id]);
    addParent(childPerson.id, gIdToPersonMap[parent2Id]);

    console.log('gPersons', gPersons);
    console.log('gIdToPersonMap', gIdToPersonMap);
}


function addChild(toPersonId, childPerson) {
    gIdToPersonMap[toPersonId].childs.push(childPerson);
}
function addParent(toPersonId, parentPerson) {
    gIdToPersonMap[toPersonId].parents.push(parentPerson);
}



function createPersonsMap(persons) {
    var byId = {};
    for (var i = 0; i < persons.length; i++) {
        var person = persons[i];
        byId[person.id] = person;
    }
    return byId;
}


function addPerson(name) {
    var newPerson = createPerson(name); 
    // console.log(newPerson);  
    gPersons.push(newPerson);
    gIdToPersonMap[newPerson.id] = newPerson;
    return newPerson;
}


function createPersons() {
    var persons = [];
    var person1 = createPerson('Adam');
    var person2 = createPerson('Hava');
    persons.push(person1);
    persons.push(person2);
    return persons;
}

function createPerson(name) {
    return {
        id: gNextId++,
        name: name,
        birthdate: new Date(1978, 10, 2),
        parents: [],
        childs: []
    };
}

longestNamePerntsId()
