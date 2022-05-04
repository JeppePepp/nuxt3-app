<template>
  <div id="hero" style="">
    <div class="texture"></div>

    <video loop muted autoplay preload="auto">
      <source src="/compressed.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <div class="caption">
      <h1>Arner & Partners</h1>
      <h2>This is a subtitle</h2>
    </div>
  </div>
</template>

<script setup></script>

<style lang="css">
#hero {
  height: 100vh;
  width: 100%;
  background: red;
  display: flex;
  align-items: center;
  justify-content: center;
}

#hero::after {
  width: 100%;
  height: 100%;
  content: '';
  position: absolute;
  z-index: 10;
  top: 2px;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
}

#hero video {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  object-fit: cover;
  font-family: 'object-fit: cover';
}

#hero .texture {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 15;
  background: url('/texture.png');
}

#hero .caption {
  position: relative;
  z-index: 20;
  text-align: center;
  color: #ffffff;
}

#hero .caption h1 {
  text-transform: uppercase;
  font-size: 2em;
  font-family: 'Oswald', sans-serif;
  margin-bottom: 0.5rem;
}

#hero .caption h2 {
  font-weight: 400;
  font-size: 1.5rem;
  margin: 0;
  font-family: 'PT Sans', sans-serif;
}

@media screen and (min-width: 768px) {
  #hero .caption h1 {
    font-size: 2.5rem;
  }

  #hero .caption h2 {
    font-size: 1.75rem;
  }
}

@media screen and (min-width: 992px) {
  #hero .caption h1 {
    font-size: 3rem;
  }

  #hero .caption h2 {
    font-size: 2rem;
  }
}

@media screen and (min-width: 1200px) {
  #hero .caption h1 {
    font-size: 4rem;
  }

  #hero .caption h2 {
    font-size: 2.5rem;
  }
}
</style>
