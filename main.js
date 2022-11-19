let genre = prompt("Quel est le genre de votre tamagotchi ?");

function saisie_valide(saisie) {
  genre = saisie.toLowerCase();
  if (
    genre.indexOf("femelle") >= 0 ||
    genre.indexOf("male") >= 0 ||
    genre.indexOf("mâle") >= 0
  ) {
    return false;
  } else {
    return true;
  }
}

while (saisie_valide(genre)) {
  genre = prompt("Je n'ai pas compris, veuillez réessayer");
}

if (genre.indexOf("femelle") >= 0) {
  alert(
    "Bien reçu, vous avez un tamagotchi " +
      genre.substring(genre.indexOf("femelle"), genre.indexOf("femelle") + 7)
  );
} else if (genre.indexOf("male") >= 0) {
  alert(
    "Bien reçu, vous avez un tamagotchi " +
      genre.substring(genre.indexOf("male"), genre.indexOf("male") + 4)
  );
} else {
  alert(
    "Bien reçu, vous avez un tamagotchi " +
      genre.substring(genre.indexOf("mâle"), genre.indexOf("mâle") + 4)
  );
}
