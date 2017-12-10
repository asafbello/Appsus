'use strict';
console.log('53');

// 53.Airline
//  Build a data structure for an airline:
//  plane
// i. seatCount




//  passenger
// i. id (7 digits random number)
// ii. fullName
// iii. flights (array)

function getPassengers() {

}

//  flight
// i. at (date)
// ii. src (origin airport)
// iii. dest
// iv. plane (pointer to a plane)
// v. passengers (array)
//  Initialize with consistent data (data that makes sense):
//  Create an array with 5 passengers
//  Create an array of 2 planes
//  Create an array with 2 flights, each flight has a plane property
// that points to a plane object, and an array of pointers to
// passengers

var gPlanes = CreatePplanes();
var gPassengers = CreatePassengers();
var gFlights = CreateFlight();

//var flights =
function CreatePassengers() {
    var passengers = [];
    var passenger1 = {
        id: Math.floor(100000 + Math.random() * 900000),
        fullName: 'moshe ben',
        flights: []
    }

    var passenger2 = {
        id: Math.floor(100000 + Math.random() * 900000),
        fullName: 'yosef ben',
        flights: []
    }
    var passenger3 = {
        id: Math.floor(100000 + Math.random() * 900000),
        fullName: 'avraham ben',
        flights: []
    }
    var passenger4 = {
        id: Math.floor(100000 + Math.random() * 900000),
        fullName: 'jojo ben',
        flights: []
    }
    var passenger5 = {
        id: Math.floor(100000 + Math.random() * 900000),
        fullName: 'nana ben',
        flights: []
    }

    passengers.push(passenger1);
    passengers.push(passenger2);
    passengers.push(passenger3);
    passengers.push(passenger4);
    passengers.push(passenger5);

    return passengers;
}
// console.log(CreatePassengers())



function CreatePplanes() {

    var planes = []
    var plane1 = { seatCount: 3 }
    var plane2 = { seatCount: 2 }

    planes.push(plane1);
    planes.push(plane2);

    return planes
}
//console.log(CreatePplanes())

function CreateFlight() {

    var flights = [];

    var flight1 = {
        date: '13/06/2017',
        src: 'Tlv',
        dest: 'rodus',
        plane: gPlanes[0],
        passengers: [gPassengers[0], gPassengers[1], gPassengers[2]]
    }

    var flight2 = {
        date: '13/08/2017',
        src: 'Tlv',
        dest: 'india',
        plane: gPlanes[1],
        passengers: [gPassengers[3], gPassengers[4]]
    }

    flights.push(flight1);
    flights.push(flight2);

    return flights;
}

function isFlightFullyBooked(flight) {
    var seatAvailable = flight.plane.seatCount
    var passengerCaunt = flight.passengers.length
    if (passengerCaunt < seatAvailable) {
        return ('not full')
    } else {
        return  ('full!')
    }
}
var a = isFlightFullyBooked(gFlights[1]);
console.log(a)



