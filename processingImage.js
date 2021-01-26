// Video
let video;
let label = "Cargando...";
let classifier;
let modelURL = 'https://storage.googleapis.com/tm-models/YadBJmj5/';

// 1. Cargar el video
function preload() {
  classifier = ml5.imageClassifier(modelURL + 'model.json');
}

// Definir el entonrno
function setup() {
  createCanvas(640, 520);
  // Crear el video
  video = createCapture(VIDEO);
  video.hide();
  // Empezar a clasificar
  classifyVideo();
}

// 2. Clasificar los frames del video
function classifyVideo() {
  classifier.classify(video, gotResults);
}

// Agregar los emojis a los frames en el video
function draw() {
  background(0);

  // Arrancar con el video
  image(video, 0, 0);

  // 3. Agregar las etiquetas
  textSize(32);
  textAlign(CENTER, CENTER);
  fill(255);
  text(label, width / 2, height - 16);

  // 4. Tomar un emoji, por defecto toma RELLENAR
  let emoji = "🚂";
  if (label == "Rainbow") {
    emoji = "🌈";
  } else if (label == "Unicorn") {
    emoji = "🦄";
  } else if (label == "Ukulele") {
    emoji = "🎸";
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
  classifyVideo();
}
