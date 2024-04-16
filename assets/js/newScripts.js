
// // Set the date we're counting down to
// var countDownDate = new Date("Aug 4, 2024 18:00:00").getTime();

// // Update the count down every 1 second
// var x = setInterval(function() {

//   // Get today's date and time
//   var now = new Date().getTime();

//   // Find the distance between now and the count down date
//   var distance = countDownDate - now;

//   // Time calculations for days, hours, minutes and seconds
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   var sekunteTekst = " sekundi";
//   if(seconds == 4 || seconds == 3 || seconds == 2){
//     sekunteTekst = " sekunde";
//   }
//   if(minutes == 2){

//   }
//   // Display the result in the element with id="demo"
//   document.getElementById("demo").innerHTML = days + " dana, " + hours + " sati, "
//   + minutes + " minuta, " + seconds + sekunteTekst;

//   // If the count down is finished, write some text
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("demo").innerHTML = "EXPIRED";
//   }
// }, 1000);
var countDownDate = new Date("Aug 4, 2024 18:00:00").getTime();
var x = setInterval(function() {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update the HTML elements with the calculated values
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);

// function authenticate() {
//     var password = document.getElementById("passwordInput").value;

//     // Ovdje provjerite ispravnost lozinke
//     if (password === "test") {
//         // Sakrij login formu nakon 1 sekunde od uspješnog logiranja
//         setTimeout(function() {
//             document.getElementById("loginPage").classList.add("hidden");
//             // Prikaži sadržaj stranice nakon 0.5 sekundi od sakrivanja login forme
//             setTimeout(function() {
//                 document.getElementById("testDiv").style.opacity = "1";
//             }, 500);
//         }, 1000);
//     } else {
//         alert("Wrong password. Please try again.");
//     }
// }


function authenticate() {
    var password = document.getElementById("lozinka").value;

    // Ovdje provjerite ispravnost lozinke
    if (password === "test") {
        // Sakrij login formu nakon 1 sekunde od uspješnog logiranja
        setTimeout(function() {
            document.getElementById("loginPage").classList.add("hidden");
            // Omogući interakciju s navigacijom nakon što se login forma sakrije
            document.getElementById("header").style.pointerEvents = "auto";
            // Prikaži sadržaj stranice nakon što se login forma sakrije
            setTimeout(function() {
                document.getElementById("testDiv").style.opacity = 1;
            }, 1000);
        }, 1000);
    } else {
        alert("Wrong password. Please try again.");
    }
}






// Funkcija koja će se pozvati kada se promijeni odabir korisnika
function toggleNameField() {
  var app = document.getElementById('app');
  var nameField = document.getElementById('nameField1');

  // Provjeri koji radio button je odabran
  var selectedOption = app.querySelector('input[name="sort"]:checked').id;

  // Ako je odabran radio button s ID-em "popular", prikaži polje za unos imena i prezimena
  if (selectedOption === 'popular') {
      nameField.style.display = 'block';
  } else {
      // Inače, sakrij polje za unos imena i prezimena
      nameField.style.display = 'none';
  }
}

// Dodaj event listener koji će osluškivati promjene u odabiru korisnika
document.querySelectorAll('input[name="sort"]').forEach(function(elem) {
  elem.addEventListener('change', toggleNameField);
});

// Inicijalno pozovi funkciju kako bi se prikazalo/sakrilo polje za unos imena i prezimena ovisno o trenutnom odabiru
toggleNameField();


// Funkcija koja će se pozvati kada se promijeni odabir korisnika
function toggleNameField2() {
  var app = document.getElementById('app2');
  var nameField = document.getElementById('nameField2');

  // Provjeri koji radio button je odabran
  var selectedOption = app.querySelector('input[name="sort2"]:checked').id;

  // Ako je odabran radio button s ID-em "popular", prikaži polje za unos imena i prezimena
  if (selectedOption === 'obitelj-da') {
      nameField.style.display = 'block';
  } else {
      // Inače, sakrij polje za unos imena i prezimena
      nameField.style.display = 'none';
  }
}

// Dodaj event listener koji će osluškivati promjene u odabiru korisnika
document.querySelectorAll('input[name="sort2"]').forEach(function(elem) {
  elem.addEventListener('change', toggleNameField2);
});

// Inicijalno pozovi funkciju kako bi se prikazalo/sakrilo polje za unos imena i prezimena ovisno o trenutnom odabiru
toggleNameField2();



var firebaseConfig = {
apiKey: "AIzaSyCfTRBwTE6Ro1e8bAZ--LzU5vz6iayMu64",
authDomain: "vjencanje-d2587.firebaseapp.com",
projectId: "vjencanje-d2587",
storageBucket: "vjencanje-d2587.appspot.com",
databaseURL: "https://vjencanje-d2587-default-rtdb.europe-west1.firebasedatabase.app/",
messagingSenderId: "622573155011",
appId: "1:622573155011:web:db71839a6db336f560a876",
measurementId: "G-CQES036Z8J"
};


// Inicijalizirajte Firebase
firebase.initializeApp(firebaseConfig);

// Spremanje podataka iz forme u Firestore
function saveFormData() {

    //AKO ŽELIM KORISTIT REALTIME DDB
    // var db = firebase.database();
var db = firebase.firestore();
var name = document.getElementById('name').value;
var name1 = document.getElementById('name1').value;
var name2 = document.getElementById('name2').value;
var email = document.getElementById('email').value;
var sort = document.querySelector('input[name="sort"]:checked').value;
var checkbox = document.getElementById('terms-checkbox-37').value;
var checkedValue = document.querySelector('.checkbox2').value;

var smjestajChecked = "Nije potreban";
if (document.getElementById('terms-checkbox-37').checked) {
    smjestajChecked = "Potreban";
} else {
    smjestajChecked = "Nije potreban";
}


var today = new Date();
var date = today.getDate() +'.'+(today.getMonth()+1)+'.'+ today.getFullYear()+'.';
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+'   '+time;


//removeeeedddd
//console.log(sort);

var sort2 = document.querySelector('input[name="sort2"]:checked').value;
//console.log(sort2);
var message = document.getElementById('message').value;

// Dodajte podatke u Firestore kolekciju
//AKO ZELIM KORISTIT REALTIME DATABASE
//db.ref("formResponses").push({

db.collection("formResponses").add({
    ime: name,
    pratnja: name1,
    obitelj: name2,
    telefon: email,
    dolazim_s_pratnjom: sort,
    dolazim_s_obitelji: sort2,
    poruka_za_mladence: message,
    smjestaj: smjestajChecked,
    datum_prijave: dateTime
})
.then(function(docRef) {
    console.log("Saved!");
    //console.log("Document written with ID: ", docRef.id);
    // Prikazati sent-message div ako je podatak uspješno poslan
    document.querySelector('.sent-message').style.display = 'block';

    document.getElementById("saveButton").disabled = true;
})
.catch(function(error) {
    console.error("Error adding document: ", error);
    // Prikazati error-message div ako dođe do greške pri slanju podataka
    document.querySelector('.error-message').style.display = 'block';
});
}