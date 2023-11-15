const stringSimilarity = require("string-similarity");

function extractSymptoms(text, symptoms) {
  text = text.toLowerCase();
  const words = text.split(" ");
  const extractedSymptoms = {};

  for (let symptom of symptoms) {
    symptom = symptom.toLowerCase();
    for (let word of words) {
      const match = stringSimilarity.findBestMatch(symptom, [word]);
    //   if (match.bestMatch.rating > 0.8) {
        extractedSymptoms[symptom] = match.bestMatch.rating;
    //   }
    }
  }
  return extractedSymptoms;
}

// List of symptoms
const symptoms  = [
  "headache",
  "nausea",
  "fatigue",
  "cough",
  "sore throat",
  "runny nose",
  "fever",
  "rash",
  "itching",
  "skin rash",
  "muscle pain",
  "joint pain",
  "breathing difficulty",
  "chest pain",
  "abdominal pain",
  "vomiting",
  "diarrhea",
  "dizziness",
  "headache",
  "loss of appetite",
  "weight loss",
  "fatigue",
  "swelling",
  "joint pain",
  "muscle pain",
  "skin rash",
  "nodules",
  "skin lesions",
  "skin sores",
  "inflammation",
  "skin redness",
  "skin irritation",
  "skin itching",
  "skin burning",
  "skin peeling",
  "skin cracking",
  "skin flaking",
  "skin scaling",
  "skin shedding",
  "skin crusting",
  "skin hardening",
  "skin thickening",
  "skin tightening",
  "skin dryness",
  "skin roughness",
  "skin redness",
  "skin inflammation",
  "skin irritation",
  "skin itching",
  "skin burning",
  "skin peeling",
  "skin cracking",
  "skin flaking",
  "skin shedding",
  "skin crusting",
  "skin hardening",
  "skin thickening",
  "skin tightening",
  "skin dryness",
  "skin roughness",
  "skin redness",
  "skin inflammation",
  "skin irritation",
  "skin itching",
  "skin burning",
  "skin peeling",
  "skin cracking",
  "skin flaking",
  "skin shedding",
  "skin crusting",
  "skin hardening",
  "skin thickening",
  "skin tightening",
  "skin dryness",
  "skin roughness",
  "skin redness",
  "skin inflammation",
  "skin irritation",
  "skin itching",
  "skin burning",
  "skin peeling",
  "skin cracking",
  "skin flaking",
  "skin shedding",
  "skin crusting",
  "skin hardening",
  "skin thickening",
  "skin tightening",
  "skin dryness",
  "skin roughness",
  "skin redness",
  "skin inflammation",
  "skin irritation",
  "skin itching",
  "skin burning",
  "skin peeling",
  "skin cracking",
  "skin flaking",
  "skin shedding",
  "skin crusting",
  "skin hardening",
  "skin thickening",
  "skin tightening",
  "skin dryness",
  "skin roughness",
  "skin redness",
  "skin inflammation",
  "skin irritation",
  "skin itching",
  "skin burning",
  "skin peeling",
  "skin cracking",
  "skin flaking",
  "skin shedding",
  "skin crusting",
  "skin hardening",
  "skin thickening",
  "skin tightening",
  "skin dryness",
  "skin roughness",
  "skin redness",
  "skin inflammation",
  "skin irritation",
  "skin itching",
  "skin burning",
  "skin peeling",
  "skin cracking",
  "skin flaking",
  "skin shedding",
  "skin crusting",
  "skin hard",
  "skin thickening",
  "skin tightening",
  "skin dryness",
  "skin roughness",
  "skin redness",
  "skin inflammation",
  "skin irritation",
  "skin itching",
  "skin burning",
  "skin peeling",
  "skin cracking",
  "skin flaking",
  "skin shedding",
  "skin crusting",
  "skin hardening",
  "skin thickening",
  "stomach ache",
  "stomach pain",
  "stomach pain",
  "stomach upset",
  "stomach discomfort",
  "stomach cramps",
  "stomach bloating",
];

console.log(
  extractSymptoms(
    "I have a stomachache and a strong hardening ache and nausea",
    symptoms
  )
);
