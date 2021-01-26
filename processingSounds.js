// Audio
let label = "Cargando...";
let classifier;
let modelURL = 'https://teachablemachine.withgoogle.com/models/_gYqCit1X/';

// 1. Cargar el video
function preload() {
  classifier = ml5.soundClassifier(modelURL + 'model.json');
}

// Definir el entonrno
function setup() {
  createCanvas(640, 520);
  
  // Empezar a clasificar
  classifyAudio();
}

// 2. Clasificar los dataframes del audio
function classifyAudio() {
  classifier.classify(gotResults);
}

// Agregar los emojis a los frames en el audio
function draw() {
  background(0);

  // 3. Agregar las etiquetas
  textSize(32);
  textAlign(CENTER, CENTER);
  fill(255);
  text(label, width / 2, height - 16);

  // 4. Definir los labels, por defecto esta el label Ruido de fondo
  let emoji = "🔊";
  if (label == "Desert Eagle") {
    emoji = "😱";
  } else if (label == "USP") {
    emoji = "👻";
  } else if (label == "G18") {
    emoji = "😓";
  } else if (label == "M500") {
    emoji = "🖖";
  }

  // Dibujar el emoji
  textSize(256);
  text(emoji, width / 2, height / 2);
}

// 5. Obtén la clasificación
function gotResults(error, results) {
  // POr si aparece algún error.
  if (error) {
    console.error(error);
    return;
  }
  // Guarda la etiqueta y siga clasificando.
  label = results[0].label;
}
