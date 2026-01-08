const klausimai = [
  { klausimas: "Kokia yra Lietuvos sostinė?", atsakymai: ["Kaunas", "Klaipėda", "Vilnius"], teisingas: "Vilnius" },
  { klausimas: "Kuri upė teka per Vilnių?", atsakymai: ["Neris", "Nemunas", "Daugava"], teisingas: "Neris" },
  { klausimas: "Kuri iš šių yra žymus Vilniaus paminklas?", atsakymai: ["Gedimino pilis", "Trakų pilis", "Klaipėdos uostas"], teisingas: "Gedimino pilis" },
  { klausimas: "Kuri bažnyčia Vilniuje žinoma savo gotikiniu stiliumi?", atsakymai: ["Šv. Onos bažnyčia", "Šv. Petro bazilika", "Sofijos soboras"], teisingas: "Šv. Onos bažnyčia" },
  { klausimas: "Kokia spalvų kombinacija yra Lietuvos vėliavoje?", atsakymai: ["Geltona, žalia, raudona", "Mėlyna, balta, raudona", "Žalia, balta, raudona"], teisingas: "Geltona, žalia, raudona" },
  { klausimas: "Kokia valiuta naudojama Lietuvoje?", atsakymai: ["Euras", "Lito", "Dolerius"], teisingas: "Euras" },
  { klausimas: "Kuri data žymi Lietuvos nepriklausomybės atkūrimą 1918 m.?", atsakymai: ["Vasario 16", "Kovo 11", "Gruodžio 11"], teisingas: "Vasario 16" },
  { klausimas: "Koks yra oficiali kalba Lietuvoje?", atsakymai: ["Lietuvių", "Lenkų", "Rusų"], teisingas: "Lietuvių" },
  { klausimas: "Kaip vadinamas Vilniaus senamiestis pagal UNESCO statusą?", atsakymai: ["Pasaulio paveldo objektas", "Nacionalinis parkas", "Kraštovaizdžio draustinis"], teisingas: "Pasaulio paveldo objektas" },
  { klausimas: "Kur stovi Katedra ir Gedimino pilis?", atsakymai: ["Gedimino kalne", "Trakų ežere", "Palangos smėlyje"], teisingas: "Gedimino kalne" },
  { klausimas: "Kuris iš šių muziejų yra Vilniuje?", atsakymai: ["Lietuvos nacionalinis muziejus", "Lietuvos jūrų muziejus", "Baltijos jūros muziejus"], teisingas: "Lietuvos nacionalinis muziejus" },
  { klausimas: "Kuris Vilniaus universitetas yra vienas seniausių Rytų Europoje?", atsakymai: ["Vilniaus universitetas", "Kauno technologijos universitetas", "Klaipėdos universitetas"], teisingas: "Vilniaus universitetas" },
  { klausimas: "Kokia yra tradicinė lietuviška šventė pavasariui pasitikti?", atsakymai: ["Joninės (Rasos)", "Kalėdos", "Velykos"], teisingas: "Joninės (Rasos)" },
  { klausimas: "Kuris miestas yra didžiausias Lietuvoje pagal gyventojų skaičių?", atsakymai: ["Vilnius", "Kaunas", "Klaipėda"], teisingas: "Vilnius" },
  { klausimas: "Kokia garsioji Vilniaus gatvė žinoma savo senovine architektūra?", atsakymai: ["Pilies gatvė", "Gedimino prospektas", "Laisvės alėja"], teisingas: "Pilies gatvė" },
  { klausimas: "Kuris iš šių faktų yra tiesa apie Lietuvą?", atsakymai: ["Lietuva yra Baltijos valstybė", "Lietuva yra Skandinavijos valstybė", "Lietuva yra Viduržemio jūros saloje"], teisingas: "Lietuva yra Baltijos valstybė" },
  { klausimas: "Koks yra oficialus Lietuvos himnas?", atsakymai: ["Tautiška giesmė", "Marija, Marija", "Lietuva brangi"], teisingas: "Tautiška giesmė" },
  { klausimas: "Kokia religinė tradicija dominuoja istoriniame Vilniaus kontekste?", atsakymai: ["Krikščionybė", "Budizmas", "Hinduizmas"], teisingas: "Krikščionybė" },
  { klausimas: "Kaip vadinamas krikščionių šventas raštas?", atsakymai: ["Biblija", "Koran", "Tripitaka"], teisingas: "Biblija" },
  { klausimas: "Kuris terminas reiškia tikėjimą į vieną Dievą?", atsakymai: ["Monoteizmas", "Politeizmas", "Panteizmas"], teisingas: "Monoteizmas" },
  { klausimas: "Kaip krikščionys dažniausiai vadina Dievą?", atsakymai: ["Dievas", "Šiva", "Alachas"], teisingas: "Dievas" },
  { klausimas: "Kuri šventoji knyga yra islame?", atsakymai: ["Koranas", "Biblija", "Bhagavad Gita"], teisingas: "Koranas" },
  { klausimas: "Kokia sąvoka apibūdina maldą kaip bendravimą su Dievu?", atsakymai: ["Maldavimas", "Mokslo tyrimas", "Sportas"], teisingas: "Maldavimas" },
  { klausimas: "Kuris iš šių miestų yra žinomas kaip Vilniaus istorinis rajonas?", atsakymai: ["Senamiestis", "Naujamiestis", "Šiaurės tiltas"], teisingas: "Senamiestis" },
  { klausimas: "Kur Vilniuje galima rasti Užupio Respubliką?", atsakymai: ["Šalia Vilnios upės", "Trakų rajone", "Klaipėdoje"], teisingas: "Šalia Vilnios upės" },
  { klausimas: "Ką reiškia žodis 'Vilnius'?", atsakymai: ["Miesto pavadinimas lietuviškai", "Upės pavadinimas ispanų kalba", "Kalvos vardas suomiškai"], teisingas: "Miesto pavadinimas lietuviškai" },
  { klausimas: "Kuris paminklas Vilniuje skirtas Gediminui?", atsakymai: ["Gedimino pilis", "Vytauto paminklas", "Mindaugo teismo rūmai"], teisingas: "Gedimino pilis" },
  { klausimas: "Koks yra oficialus Lietuvos simbolis - herbas?", atsakymai: ["Vytis", "Erelis", "Liūtas"], teisingas: "Vytis" },
  { klausimas: "Kuris miestas Lietuvoje garsėja jūra ir uostu?", atsakymai: ["Klaipėda", "Vilnius", "Utena"], teisingas: "Klaipėda" },
  { klausimas: "Kuri šventė žymi Kalėdas Lietuvoje?", atsakymai: ["Gruodžio 25", "Vasario 16", "Gegužės 1"], teisingas: "Gruodžio 25" },
  { klausimas: "Kuri institucija saugo Lietuvos kultūros paveldą Vilniuje?", atsakymai: ["Kultūros ministerija ir muziejai", "Žemės ūkio ministerija", "Policijos departamentas"], teisingas: "Kultūros ministerija ir muziejai" },
  { klausimas: "Kokia religinė šventė yra svarbi krikščionims pavasarį?", atsakymai: ["Velykos", "Rasos", "Halloween"], teisingas: "Velykos" },
  { klausimas: "Kuris žymus universiteto pastatas yra Vilniuje?", atsakymai: ["Vilniaus universiteto biblioteka", "Vilniaus technikos observatorija", "Palangos jūros institutas"], teisingas: "Vilniaus universiteto biblioteka" },
  { klausimas: "Kuris iš šių yra Lietuvos nacionalinis simbolis?", atsakymai: ["Vytis", "Kengūra", "Fėja"], teisingas: "Vytis" }
];

let index = 0;
let taskai = 0;
let answered = false;
let timerInterval = null;
const QUESTION_TIME = 60; // seconds
let timeLeft = QUESTION_TIME;

function shuffle(arr) {
  return arr.slice().sort(() => Math.random() - 0.5);
}

function startTimer() {
  stopTimer();
  timeLeft = QUESTION_TIME;
  updateTimerDisplay();
  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();
    if (timeLeft <= 0) {
      stopTimer();
      timeUp();
    }
  }, 1000);
}

function stopTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

function updateTimerDisplay() {
  const min = String(Math.floor(timeLeft / 60)).padStart(2, '0');
  const sec = String(timeLeft % 60).padStart(2, '0');
  document.getElementById('timer').innerText = `Laikas: ${min}:${sec}`;
}

function rodyti() {
  answered = false;
  const q = klausimai[index];
  document.getElementById("klausimas").innerText = q.klausimas;
  document.getElementById("rezultatas").innerText = "";
  document.getElementById("progress").innerText = `Klausimas ${index + 1} iš ${klausimai.length}`;

  let div = document.getElementById("atsakymai");
  div.innerHTML = "";

  const answers = shuffle(q.atsakymai);

  answers.forEach(a => {
    let btn = document.createElement("button");
    btn.innerText = a;
    btn.className = 'answer-btn';
    btn.onclick = () => tikrinti(a, btn);
    div.appendChild(btn);
  });

  document.getElementById("nextBtn").disabled = true;
  startTimer();
}

function tikrinti(ats, btn) {
  if (answered) return;
  answered = true;
  stopTimer();
  const q = klausimai[index];
  const buttons = document.querySelectorAll('.answer-btn');
  buttons.forEach(b => b.disabled = true);

  if (ats === q.teisingas) {
    taskai++;
    btn.classList.add('correct');
    document.getElementById("rezultatas").innerText = "✅ Teisingai!";
  } else {
    btn.classList.add('wrong');
    buttons.forEach(b => {
      if (b.innerText === q.teisingas) b.classList.add('correct');
    });
    document.getElementById("rezultatas").innerText = "❌ Neteisingai";
  }

  document.getElementById("taskai").innerText = "Taškai: " + taskai;
  document.getElementById("nextBtn").disabled = false;
}

function timeUp() {
  if (answered) return;
  answered = true;
  const q = klausimai[index];
  const buttons = document.querySelectorAll('.answer-btn');
  buttons.forEach(b => {
    b.disabled = true;
    if (b.innerText === q.teisingas) b.classList.add('correct');
  });
  document.getElementById("rezultatas").innerText = "⌛ Laikas baigėsi";
  document.getElementById("nextBtn").disabled = false;
}

function kitas() {
  if (!answered) {
    document.getElementById("rezultatas").innerText = "Pasirinkite atsakymą arba palaukite laiko pabaigos.";
    return;
  }

  index++;
  if (index < klausimai.length) {
    rodyti();
  } else {
    baigta();
  }
}

function baigta() {
  stopTimer();
  document.getElementById("klausimas").innerText = "🎉 Viktorina baigta!";
  document.getElementById("atsakymai").innerHTML = "";
  document.getElementById("rezultatas").innerText = `Galutinis rezultatas: ${taskai} / ${klausimai.length}`;
  document.getElementById("nextBtn").style.display = 'none';
  document.getElementById("restartBtn").style.display = 'inline-block';
  document.getElementById('timer').innerText = '';
}

function restart() {
  index = 0;
  taskai = 0;
  document.getElementById("taskai").innerText = "Taškai: 0";
  document.getElementById("nextBtn").style.display = 'inline-block';
  document.getElementById("restartBtn").style.display = 'none';
  rodyti();
}

// Initialize
rodyti();
