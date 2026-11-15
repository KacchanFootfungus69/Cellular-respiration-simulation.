

const stages = [
    {
        name: "Glycolysis",
        location: "Cytoplasm",
        visual: "🍬",
        description: "Breaking down glucose",
        explanation:
            "One glucose molecule (6 carbons) is split into two pyruvate molecules (3 carbons each). The process uses 2 ATP and produces 4 ATP, giving a net gain of 2 ATP and 2 NADH.",
        products: "2 Pyruvate, 2 ATP net, 2 NADH",
        atp: 2,
        nadh: 2,
        fadh: 0,
        co2: 0
    },
    {
        name: "Pyruvate Oxidation",
        location: "Mitochondrial Matrix",
        visual: "🧬",
        description: "Preparing pyruvate",
        explanation:
            "The two pyruvate molecules are converted into two acetyl-CoA molecules. This produces 2 NADH and releases 2 CO₂.",
        products: "2 Acetyl-CoA, 2 NADH, 2 CO₂",
        atp: 0,
        nadh: 2,
        fadh: 0,
        co2: 2
    },
    {
        name: "Krebs Cycle",
        location: "Mitochondrial Matrix",
        visual: "🔄",
        description: "Harvesting energy",
        explanation:
            "The two acetyl-CoA molecules enter the Krebs cycle. Across two turns, the cycle produces 2 ATP, 6 NADH, 2 FADH₂, and 4 CO₂.",
        products: "2 ATP, 6 NADH, 2 FADH₂, 4 CO₂",
        atp: 2,
        nadh: 6,
        fadh: 2,
        co2: 4
    },
    {
        name: "Electron Transport Chain",
        location: "Inner Mitochondrial Membrane",
        visual: "⚡",
        description: "Producing most of the ATP",
        explanation:
            "NADH and FADH₂ deliver electrons to the electron transport chain. Their energy helps pump protons across the inner mitochondrial membrane. Protons flow back through ATP synthase, producing ATP. Oxygen accepts the electrons at the end and combines with protons to form water.",
        products: "About 26–28 ATP and H₂O",
        atp: 28,
        nadh: -10,
        fadh: -2,
        co2: 0
    }
];

let currentStage = 0;

function showStage(index) {
    currentStage = index;

    const stage = stages[index];

    document.getElementById("stageName").textContent =
        stage.name;

    document.getElementById("location").textContent =
        stage.location;

    document.getElementById("visual").textContent =
        stage.visual;

    document.getElementById("description").textContent =
        stage.description;

    document.getElementById("explanation").textContent =
        stage.explanation;

    document.getElementById("products").textContent =
        stage.products;

    updateCounters();

    document.getElementById("nextButton").textContent =
        index === 3 ? "Simulation Complete!" : "Next Stage →";
}

function updateCounters() {
    let atp = 0;
    let nadh = 0;
    let fadh = 0;
    let co2 = 0;

    for (let i = 0; i <= currentStage; i++) {
        atp += stages[i].atp;
        nadh += stages[i].nadh;
        fadh += stages[i].fadh;
        co2 += stages[i].co2;
    }

    document.getElementById("atp").textContent =
       currentStage === 3 ? "30–32" : atp;

    document.getElementById("nadh").textContent = nadh;
    document.getElementById("fadh").textContent = fadh;
    document.getElementById("co2").textContent = co2;
}

function nextStage() {
    alert("The button works!");

    if (currentStage < 3) {
        showStage(currentStage + 1);
    }
}
    }
}

function resetSimulation() {
    showStage(0);
}

showStage(0);
