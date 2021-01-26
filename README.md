# Free-Fire-boosting-with-p5.js
Procesamiento de imágenes de los personajes y procesamiento de sonidos para los tipos de armas del juego Free Fire, con el fin de clasificarlos. 

# Introducción

[Free Fire](https://ffsoporte.garena.com/hc/es-419) es uno de los mejores juegos survival battle royale para móviles.
El juego consta de hasta 50 jugadores que caen de un paracaídas en una isla en busca de armas y equipo para matar a los demás jugadores. Los jugadores son libres de elegir su posición inicial, tomar armas y suministros para extender su vida de batalla. 

Sí supieramos qué personajes es nuestro enemigo podríamos intuir sus skill y el daño mínimo que nos podría causar. Y también si conocieramos el tipo de arma que tiene, podríamos prepararnos o plantear un contraataque mucho más efectivo, para obtener un mayor porcentaje de victorias y alcanzar los famosos booyah!

Se puede encontrar una manera efectiva de conocer los personajes y las armas que portan (en tiempo real), por medio de procesamiento de datos.

# Modelo

[Teachable Machine](https://teachablemachine.withgoogle.com/) es una herramienta basada en la Web que hace posible crear modelos de aprendizaje automático de manera rápida, sencilla y accesible para todos.

## Procesamiento de Imágenes

Se definió un modelo en Teachable con 3 personajes principales: Kelly, Miguel y Kla. Se armó un pequeño dataset de 60 imágenes para el entrenamiento. Una vez entrenado el modelo, se integro al proyecto processingImage.js.

![Procesamiento de Imágenes](https://github.com/cabustillo13/Free-Fire-boosting-with-Tensorflow.js/blob/main/ModeloAssets/Resultados/resultados0.png)

Para ejecutar en tiempo real se adjunto el modelo: [Modelo para Procesamiento de Imágenes](https://teachablemachine.withgoogle.com/models/o40lbRfVd/)

## Procesamiento de Audio

Se definión un modelo en Teachable con 4 tipos de armas cortas: Desert Eagle, USP, G18 y M500. Se armó un pequeño dataset con 100 audios para el entrenamiento. Una vez entrenado el modelo, se integro al proyecto processingAudio.js.

![Procesamiento de Audio](https://github.com/cabustillo13/Free-Fire-boosting-with-Tensorflow.js/blob/main/ModeloAssets/Resultados/resultados2.png)

Para ejecutar en tiempo real se adjunto el modelo: [Modelo para Procesamiento de Audio](https://teachablemachine.withgoogle.com/models/_gYqCit1X/)

# Resultados

Cabe destacar que en función a la cantidad de recursos y tiempo invertido, se obtuvieron buenos resultados al ejecutar el programa en tiempo real.

![Resultados](https://github.com/cabustillo13/Free-Fire-boosting-with-Tensorflow.js/blob/main/ModeloAssets/Resultados/resultados.png)

En el videojuego hay muchos assets, skins, modos de juego y entornos, entonces a manera de ensayo en este programa no fueron cubiertos totalmente en su totalidad. Para hacer un sistema más robusto deben ser considerados todos esos factores para un próximo modelo.

# Licencias

Este repositorio tiene Licencia Apache-2.0
