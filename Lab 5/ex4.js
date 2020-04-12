var blackFridayCart = {
    telefon: "350",
    consola: "250",
    televizor: "450",
    iepurasPlus: "10.60",
    cercei: "20.34",
    geanta: "22.36"
};

function getCartValue(cos) {
    return parseFloat(cos["telefon"]) + parseFloat(cos["consola"]) + parseFloat(cos["televizor"]) + parseFloat(cos["iepurasPlus"]) + parseFloat(cos["cercei"]) + parseFloat(cos["geanta"]);
}

console.log(getCartValue(blackFridayCart));