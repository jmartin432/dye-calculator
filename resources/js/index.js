const dyes = {
    brightYellow: {
        name: "Bright Yellow",
        value: "brightYellow",
        color: "yellow",
        percentOWG: 0,
        gramsPerPound: 0,
        ouncesPerPound: 0,
        turquoise: false,
    },
    daffodil: {
        name: "Daffodil",
        value: "daffodil",
        color: "yellow",
        percentOWG: 0,
        gramsPerPound: 0,
        ouncesPerPound: 0,
        turquoise: false,
    },
    deepYellow: {
        name: "Deep Yellow",
        value: "deepYellow",
        color: "yellow",
        percentOWG: 0,
        gramsPerPound: 0,
        ouncesPerPound: 0,
        turquoise: false,
    },
    orangeSorbet: {
        name: "Orange Sorbet",
        value: "orangeSorbet",
        color: "orange",
        percentOWG: 2,
        gramsPerPound: 9.1,
        ouncesPerPound: 0.32,
        turquoise: false,
    },
    watermelon: {
        name: "Watermelon",
        value: "watermelon",
        color: "orange",
        percentOWG: 2,
        gramsPerPound: 9.1,
        ouncesPerPound: 0.32,
        turquoise: false,
    },
    softOrange: {
        name: "Soft Orange",
        value: "softOrange",
        color: "orange",
        percentOWG: 0,
        gramsPerPound: 0,
        ouncesPerPound: 0,
        turquoise: false,
    },
    dragonFruit: {
        name: "Dragon Fruit",
        value: "dragonFruit",
        color: "red",
        percentOWG: 2,
        gramsPerPound: 9.1,
        ouncesPerPound: 0.32,
        turquoise: false,
    },
    hotHibiscus: {
        name: "Hot Hibiscus",
        value: "hotHibiscus",
        color: "red",
        percentOWG: 0,
        gramsPerPound: 0,
        ouncesPerPound: 0,
        turquoise: false,
    },
    hotPink: {
        name: "Hot Pink",
        value: "hotPink",
        color: "red",
        percentOWG: 0,
        gramsPerPound: 0,
        ouncesPerPound: 0,
        turquoise: false,
    },
    pomegranate: {
        name: "Pomegranate",
        value: "pomegranate",
        color: "red",
        percentOWG: 4,
        gramsPerPound: 18.1,
        ouncesPerPound: 0.64,
        turquoise: false,
    },
    powderPink: {
        name: "Powder Pink",
        value: "powderPink",
        color: "red",
        percentOWG: 2,
        gramsPerPound: 9.1,
        ouncesPerPound: 0.32,
        turquoise: false,
    },
    amethyst: {
        name: "Amethyst",
        value: "amethyst",
        color: "purple",
        percentOWG: 2.4,
        gramsPerPound: 10.8,
        ouncesPerPound: 0.38,
        turquoise: false,
    },
    hydrangea: {
        name: "Hydrangea",
        value: "hydrangea",
        color: "purple",
        percentOWG: 2,
        gramsPerPound: 9.1,
        ouncesPerPound: 0.32,
        turquoise: false,
    },
    lilac: {
        name: "Lilac",
        value: "lilac",
        color: "purple",
        percentOWG: 1.8,
        gramsPerPound: 8.2,
        ouncesPerPound: 0.29,
        turquoise: false,
    },
    orchid: {
        name: "Orchid",
        value: "orchid",
        color: "purple",
        percentOWG: 2.4,
        gramsPerPound: 10.8,
        ouncesPerPound: 0.38,
        turquoise: false,
    },
    plum: {
        name: "Plum",
        value: "plum",
        color: "purple",
        percentOWG: 2.9,
        gramsPerPound: 13,
        ouncesPerPound: 0.46,
        turquoise: false,
    },
    ultraViolet: {
        name: "Ultra Violet",
        value: "ultraViolet",
        color: "purple",
        percentOWG: 2.2,
        gramsPerPound: 9.9,
        ouncesPerPound: 0.35,
        turquoise: false,
    },
    wisteria: {
        name: "Wisteria",
        value: "wisteria",
        color: "purple",
        percentOWG: 3.5,
        gramsPerPound: 15.9,
        ouncesPerPound: 0.56,
        turquoise: false,
    },
    pewter: {
        name: "Pewter",
        value: "pewter",
        color: "grey",
        percentOWG: 2.4,
        gramsPerPound: 10.8,
        ouncesPerPound: 0.38,
        turquoise: false,
    },
    gunMetalGrey: {
        name: "Gun Metal Grey",
        value: "gunMetalGrey",
        color: "grey",
        percentOWG: 2,
        gramsPerPound: 9.1,
        ouncesPerPound: 0.32,
        turquoise: false,
    },
    silverLining: {
        name: "Silver Lining",
        value: "silverLining",
        color: "grey",
        percentOWG: 2,
        gramsPerPound: 9.1,
        ouncesPerPound: 0.32,
        turquoise: false,
    },
    timberWolf: {
        name: "Timber Wolf",
        value: "timberWolf",
        color: "grey",
        percentOWG: 2,
        gramsPerPound: 9.1,
        ouncesPerPound: 0.32,
        turquoise: false,
    },
};

const dyeStrengthOptions = [
    {
        name: "25%",
        value: 0.25,
    },
    {
        name: "50%",
        value: 0.5,
    },
    {
        name: "75%",
        value: 0.75,
    },
    {
        name: "100%",
        value: 1,
    },
];

let dyeGramsPerPound = 0;
let ouncesOfFabric = 16;
let poundsOfFabric = ouncesOfFabric / 16;
let dyeStrength = 1;
let gramsOfDye = 0;
let water = 0;
let salt = 0;
let sodaAsh = 0;
let calsoleneOil = 0;

function setDyeOptions(dyes) {
    const element = document.getElementById("dye-select");
    element.addEventListener("input", (e) => {
        dyeGramsPerPound = dyes[e.target.value].gramsPerPound;
        document.getElementById("dye-grams-per-pound-output").innerText =
            dyeGramsPerPound;
        document.getElementById("dye-output").innerText =
            dyes[e.target.value].name;
        calculate();
    });
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
}

function setFabricWeightOptions() {
    const element = document.getElementById("fabric-weight-select");
    element.addEventListener("input", (e) => {
        ouncesOfFabric = e.target.value;
        poundsOfFabric = ouncesOfFabric / 16;
        document.getElementById("pounds-of-fabric-output").innerText =
            poundsOfFabric;
        calculate();
    });
    for (let i = 1; i < 20; i++) {
        const option = document.createElement("option");
        option.setAttribute("value", i * 2);
        option.innerText = i * 2;
        element.appendChild(option);
    }
    element.value = ouncesOfFabric;
}

function setDyeStrengthOptions(options) {
    const element = document.getElementById("dye-strength-select");
    element.addEventListener("input", (e) => {
        dyeStrength = e.target.value;
        document.getElementById("dye-strength-output").innerText =
            100 * dyeStrength;
        calculate();
    });
    for (let i = 0; i < options.length; i++) {
        const option = document.createElement("option");
        option.setAttribute("value", options[i].value);
        option.innerText = options[i].name;
        element.appendChild(option);
    }
    element.value = dyeStrength;
}

function setInitialValues() {}

function calculate() {
    document.getElementById("dye-grams-per-pound-output").innerText =
        dyeGramsPerPound;
    document.getElementById("pounds-of-fabric-output").innerText =
        poundsOfFabric;
    document.getElementById("dye-strength-output").innerText =
        100 * dyeStrength;
    document.getElementById("total-grams-of-dye-output").innerText = (
        dyeGramsPerPound *
        poundsOfFabric *
        dyeStrength
    ).toFixed(2);
    let gallonsOfWater = poundsOfFabric * 3;
    document.getElementById("water-output").innerText = gallonsOfWater;
    document.getElementById("salt-output").innerText = gallonsOfWater;
    document.getElementById("soda-ash-output").innerText = (
        gallonsOfWater / 9
    ).toFixed(2);
    document.getElementById("calsolene-output").innerText = (
        gallonsOfWater * 0.5
    ).toFixed(2);
}

setDyeOptions(dyes);
setFabricWeightOptions();
setDyeStrengthOptions(dyeStrengthOptions);
calculate();

const footerYear = document.getElementById("footer-text");
footerYear.innerText = `   \xa9 ${new Date().getFullYear()} - Yay Soap!   `;
