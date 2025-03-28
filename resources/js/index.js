const dyes = {
    brightYellow: {
        name: "Bright Yellow",
        value: "brightYellow",
        colorFamily: "yellow",
        percentOWG: 0,
        turquoise: false,
    },
    daffodil: {
        name: "Daffodil",
        value: "daffodil",
        colorFamily: "yellow",
        percentOWG: 0,
        turquoise: false,
    },
    deepYellow: {
        name: "Deep Yellow",
        value: "deepYellow",
        colorFamily: "yellow",
        percentOWG: 0,
        turquoise: false,
    },
    orangeSorbet: {
        name: "Orange Sorbet",
        value: "orangeSorbet",
        colorFamily: "orange",
        percentOWG: 2,
        turquoise: false,
    },
    watermelon: {
        name: "Watermelon",
        value: "watermelon",
        colorFamily: "orange",
        percentOWG: 2,
        turquoise: false,
    },
    softOrange: {
        name: "Soft Orange",
        value: "softOrange",
        colorFamily: "orange",
        percentOWG: 0,
        turquoise: false,
    },
    dragonFruit: {
        name: "Dragon Fruit",
        value: "dragonFruit",
        colorFamily: "red",
        percentOWG: 2,
        turquoise: false,
    },
    hotHibiscus: {
        name: "Hot Hibiscus",
        value: "hotHibiscus",
        colorFamily: "red",
        percentOWG: 0,
        turquoise: false,
    },
    hotPink: {
        name: "Hot Pink",
        value: "hotPink",
        colorFamily: "red",
        percentOWG: 0,
        turquoise: false,
    },
    pomegranate: {
        name: "Pomegranate",
        value: "pomegranate",
        colorFamily: "red",
        percentOWG: 4,
        turquoise: false,
    },
    powderPink: {
        name: "Powder Pink",
        value: "powderPink",
        colorFamily: "red",
        percentOWG: 2,
        turquoise: false,
    },
    amethyst: {
        name: "Amethyst",
        value: "amethyst",
        colorFamily: "purple",
        percentOWG: 2.4,
        turquoise: false,
    },
    hydrangea: {
        name: "Hydrangea",
        value: "hydrangea",
        colorFamily: "purple",
        percentOWG: 2,
        turquoise: false,
    },
    lilac: {
        name: "Lilac",
        value: "lilac",
        colorFamily: "purple",
        percentOWG: 1.8,
        turquoise: false,
    },
    orchid: {
        name: "Orchid",
        value: "orchid",
        colorFamily: "purple",
        percentOWG: 2.4,
        turquoise: false,
    },
    plum: {
        name: "Plum",
        value: "plum",
        colorFamily: "purple",
        percentOWG: 2.9,
        turquoise: false,
    },
    ultraViolet: {
        name: "Ultra Violet",
        value: "ultraViolet",
        colorFamily: "purple",
        percentOWG: 2.2,
        turquoise: false,
    },
    wisteria: {
        name: "Wisteria",
        value: "wisteria",
        colorFamily: "purple",
        percentOWG: 3.5,
        turquoise: false,
    },
    bahamaBlue: {
        name: "Bahama Blue",
        value: "bahamaBlue",
        colorFamily: "blue",
        percentOWG: 2.1,
        turquoise: true,
    },
    brilliantBlue: {
        name: "Brilliant Blue",
        value: "brilliantBlue",
        colorFamily: "blue",
        percentOWG: 2.4,
        turquoise: false,
    },
    kingfisherBlue: {
        name: "Kingfisher Blue",
        value: "kingfisherBlue",
        colorFamily: "blue",
        percentOWG: 4.0,
        turquoise: false,
    },
    pewter: {
        name: "Pewter",
        value: "pewter",
        colorFamily: "grey",
        percentOWG: 2.4,
        turquoise: false,
    },
    gunMetalGrey: {
        name: "Gun Metal Grey",
        value: "gunMetalGrey",
        colorFamily: "grey",
        percentOWG: 2,
        turquoise: false,
    },
    silverLining: {
        name: "Silver Lining",
        value: "silverLining",
        colorFamily: "grey",
        percentOWG: 2,
        turquoise: false,
    },
    timberWolf: {
        name: "Timber Wolf",
        value: "timberWolf",
        colorFamily: "grey",
        percentOWG: 2,
        turquoise: false,
    },
};

let options = {
    dye: null,
    percentOWG: 0,
    ouncesOfFabric: 16,
    dyeStrength: 1,
};

// results = calculate(options);

let gramsOfDye = 0;
let water = 0;
let salt = 0;
let sodaAsh = 0;
let calsoleneOil = 0;

function setDyeOptions(dyes) {
    const element = document.getElementById("dye-select");
    const firstOption = document.createElement("option");
    firstOption.setAttribute("value", null);
    firstOption.innerText = "Select a Dye";
    element.appendChild(firstOption);
    const sortedDyeNames = Object.keys(dyes).sort();
    for (let i = 0; i < sortedDyeNames.length; i++) {
        const option = document.createElement("option");
        const dye = sortedDyeNames[i];
        option.setAttribute("value", dyes[dye]["value"]);
        option.innerText = dyes[dye]["name"];
        element.appendChild(option);
    }
    element.addEventListener("input", (e) => {
        options.dye = dyes[e.target.value].value;
        options.percentOWG = dyes[e.target.value].percentOWG;
        calculate(options);
    });
}

function setFabricWeightOptions(options) {
    const element = document.getElementById("fabric-weight-select");
    for (let i = 1; i <= 24; i++) {
        const option = document.createElement("option");
        option.setAttribute("value", i * 2);
        option.innerText = i * 2;
        element.appendChild(option);
    }
    element.value = options.ouncesOfFabric;
    element.addEventListener("input", (e) => {
        options.ouncesOfFabric = e.target.value;
        calculate(options);
    });
}

function setDyeStrengthOptions(options) {
    const element = document.getElementById("dye-strength-select");
    for (let i = 1; i < 5; i++) {
        const option = document.createElement("option");
        option.setAttribute("value", i * 0.25);
        option.innerText = (i * 25).toString() + "%";
        element.appendChild(option);
    }
    element.value = options.dyeStrength;
    element.addEventListener("input", (e) => {
        options.dyeStrength = parseFloat(e.target.value);
        calculate(options);
    });
}

function display(results) {
    console.log(results);
    document.getElementById("owg-output").innerText = results.percentOWG;
    document.getElementById("pounds-of-fabric-output").innerText =
        results.poundsOfFabric;
    document.getElementById("grams-of-fabric-output").innerText =
        results.gramsOfFabric;
    document.getElementById("dye-output").innerText = results.dye;
    document.getElementById("grams-of-dye-output").innerText =
        results.gramsOfFabric * results.percentOWG * results.dyeStrength;
    document.getElementById("dye-strength-output").innerText =
        results.dyeStrength * 100;
    document.getElementById("water-output").innerText = results.gallonsOfWater;
    document.getElementById("salt-output").innerText = results.cupsOfSalt;
    document.getElementById("calsolene-output").innerText =
        results.teaspoonsOfCalsoleneOil;
    document.getElementById("soda-ash-output").innerText =
        results.cupsOfSodaAsh;
}

function calculate(options) {
    console.log(options);
    let results = {};
    results.dye = dyes[options.dye] ? dyes[options.dye].name : "None";
    results.percentOWG = dyes[options.dye]
        ? dyes[options.dye].percentOWG / 100
        : 0;
    results.poundsOfFabric = options.ouncesOfFabric / 16;
    results.gramsOfFabric =
        Math.round((100 * options.ouncesOfFabric) / 0.0353) / 100;
    results.dyeStrength = options.dyeStrength;
    results.gramsOfDye =
        Math.round(
            results.percentOWG *
                results.dyeStrength *
                results.gramsOfFabric *
                100
        ) / 100;
    results.gallonsOfWater = Math.round(100 * results.poundsOfFabric * 3) / 100;
    results.cupsOfSalt = Math.round(100 * results.poundsOfFabric * 3) / 100;
    results.teaspoonsOfCalsoleneOil =
        Math.round(100 * results.gallonsOfWater * 0.5) / 100;
    results.cupsOfSodaAsh =
        Math.round((100 * results.gallonsOfWater) / 9) / 100;
    display(results);
}

setDyeOptions(dyes);
setFabricWeightOptions(options);
setDyeStrengthOptions(options);
calculate(options);

const footerYear = document.getElementById("footer-text");
footerYear.innerText = `   \xa9 ${new Date().getFullYear()} - Yay Soap!   `;
