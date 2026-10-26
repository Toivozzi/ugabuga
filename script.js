let nälkä = 80;
let onnellisuus = 80;
let energia = 80;
let kuollut = false;
let nukuSpämmi = 0;

function päivitä() {
  document.getElementById("nalka").textContent = nälkä;
  document.getElementById("onnellisuus").textContent = onnellisuus;
  document.getElementById("energia").textContent = energia;
}

function sano(teksti) {
  document.getElementById("puhe").textContent = teksti;
}

function kuole() {
  if (kuollut) return;

  kuollut = true;
  sano("Ugabuga kuoli");
  document.getElementById("lemmikki").style.display = "none";

  document.querySelectorAll("button").forEach(function(nappi) {
    nappi.disabled = true;
  });
}

function ruoki() {
  if (kuollut) return;

  if (nälkä >= 100) {
    kuole();
    return;
  }

  nälkä = Math.min(100, nälkä + 20);
  onnellisuus = Math.min(100, onnellisuus + 5);

  sano("NAM NAM NAM! Ugabuga tykkää ruoasta, niinkuin sinäkin.");
  päivitä();
}

function leiki() {
  if (kuollut) return;

  if (energia < 15) {
    sano("Ugabuga on liian väsynyt leikkimään :((");
    return;
  }

  onnellisuus = Math.min(100, onnellisuus + 20);
  energia = Math.max(0, energia - 15);
  nälkä = Math.max(0, nälkä - 10);

  if (nälkä === 0) {
    päivitä();
    kuole();
    return;
  }

  sano("UGABUGA ON LIIAN ONNELLINEN!");
  päivitä();
}

function nuku() {
  if (kuollut) return;

  nukuSpämmi++;

  if (nukuSpämmi >= 5) {
    kuollut = true;
    sano("Ugabuga räjäytti itsensä");
    document.getElementById("lemmikki").style.display = "none";

    document.querySelectorAll("button").forEach(function(nappi) {
      nappi.disabled = true;
    });

    return;
  }

  energia = Math.min(100, energia + 30);
  nälkä = Math.max(0, nälkä - 5);

  if (nälkä === 0) {
    päivitä();
    kuole();
    return;
  }

  sano("Zzz... Ugabuga näkee unta mäkkäristä ja makkarista.");
  päivitä();
}

function siivoa() {
  if (kuollut) return;

  onnellisuus = Math.min(100, onnellisuus + 10);
  sano("Ugabugan koti kotoisa on nyt puhdas :)!");
  päivitä();
}

document.getElementById("lemmikki").onclick = function() {
  if (kuollut) return;

  onnellisuus = Math.min(100, onnellisuus + 5);
  sano("Ugabuga: UGABUGA BUNGA!");
  päivitä();
};

document.getElementById("kuva").onchange = function(tapahtuma) {
  if (kuollut) return;

  const tiedosto = tapahtuma.target.files[0];

  if (tiedosto) {
    document.getElementById("lemmikki").src =
      URL.createObjectURL(tiedosto);
    sano("Uusi Ugabuga saapui :OOOOOO!");
  }
};

setInterval(function() {
  if (kuollut) return;

  nälkä = Math.max(0, nälkä - 3);
  energia = Math.max(0, energia - 2);

  if (nälkä < 30 || energia < 20) {
    onnellisuus = Math.max(0, onnellisuus - 5);
  }

  päivitä();

  if (nälkä === 0) {
    kuole();
  } else if (energia === 0) {
    sano("Ugabuga on aivan loppu! Anna sen nukkua!");
  }
}, 3000);

päivitä();
