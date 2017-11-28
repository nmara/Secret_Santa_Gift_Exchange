var participants = ["Aga", "Mati", "Ania", "Gabi", "Tosia"];// wszyscy
var activeParticipants = []; //wszyscy minus losujący
var alreadyChosenParticipants = []; // już wylosowani
var chosenParticipant;
var currentParticipant; //osoba losująca

// wybierz losującego
currentParticipant = [participants[4]];
console.log("Obecnie losuje: " + currentParticipant);
// do jego puli wrzyć wszystkich niewybranych minus on
for (var i = 0; i < participants.length; i++) {
    if(currentParticipant != participants[i]) {
        activeParticipants.push(participants[i]);
    }
}
console.log(activeParticipants);
// losuje spośród nich i wyświetla wybranego
//function lottery() {
    var x = Math.floor((Math.random() * activeParticipants.length));
    var chosenParticipant = activeParticipants[x];
    console.log(chosenParticipant);
    alreadyChosenParticipants.push(chosenParticipant);
    //return chosenParticipant;
//}
//lottery();

console.log(alreadyChosenParticipants);
// wyświetla wybranego
