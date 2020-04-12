var movie = {
    "titlu": "2012",
    "durata": 120,
    "actori": ["Liviu Bouruc", "Petru Bouruc"]
};

function afis(film) {
    console.log(film["titlu"] + " a durat " + film["durata"] + " minute. Actori: " + film["actori"][0] + ", " + film["actori"][1] + ".");
}

afis(movie);