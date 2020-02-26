<template>
  <div>
    <header class="header">
      <div class="text-box">
        <h1 class="heading-primary">
          <span class="heading-primary-main">OUTDOORS</span>
          <span class="heading-primary-sub">IS WHERE LIFE HAPPENS</span>
        </h1>

        <a href="JavaScript:Void(0);" class="btn btn-white btn-animated">Discovery Our Tours</a>
      </div>
    </header>
    <button class="kgfd-btn kgfd-btn-default" style="margin:20px 0;" @click="test = !test">
      <span v-if="!test">Başlat</span>
      <span v-else>Durdur</span>
    </button>

    <div :class="{animation: test}" class="square" style="margin-bottom:50px;">
      <p>Fatih</p>
    </div>

    <!-- <div class="kafa">
      <div class="goz">
        <div class="govde">
          <div class="dalga"></div>
        </div>
        <div class="kol"></div>
      </div>
    </div>
    <div class="got">M</div>

    <div class="kafa2">
      <div class="goz2">
        <div class="govde2">
          <div class="dalga2"></div>
        </div>
        <div class="kol2"></div>
      </div>
    </div>
    <div class="got2">M</div> -->

    

    <!-- <div class="kgfd-col kgfd-col-6">
      <div class="perde">
        <img class="element" src="../../assets/images/expresso.jpg" alt="expresso" />
      </div>
      <p>Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.Yinelenen bir sayfa içeriğinin okuyucunun dikkatini dağıttığı bilinen bir gerçektir. Lorem Ipsum kullanmanın amacı, sürekli 'buraya metin gelecek, buraya metin gelecek' yazmaya kıyasla daha dengeli bir harf dağılımı sağlayarak okunurluğu artırmasıdır.</p>
    </div>-->
  </div>
</template>
<script>
export default {
  data() {
    return {
      test: true
    };
  }
};
</script>
<style scoped>
.kafa2 {
  position: absolute;
  bottom: 100px;
  height: 30px;
  width: 30px;
  border-radius: 20px;
  background: #e4d0bd;
  animation: yatay 1s linear infinite;
}
.goz2 {
  position: absolute;
  bottom: 10px;
  left: 12px;
  height: 5px;
  width: 5px;
  border-radius: 10px;
  background: black;
}
.govde2 {
  position: absolute;
  bottom: 0px;
  left: 17px;
  height: 4px;
  width: 60px;
  background: #f1d6bb;
}

.dalga2 {
  position: absolute;
  bottom: 3px;
  left: 35px;
  height: 27px;
  width: 7px;
  background: black;
  border-radius: 8px 8px 0px 0px;
}
.got2 {
  position: absolute;
  left: 52px;
  bottom: 140px;
  font-size: 35px;
  transform: rotate(180deg);
  font-weight: bold;
  /* animation: oynat2 3s linear infinite; */
}
.kafa {
  height: 30px;
  width: 30px;
  border-radius: 20px;
  background: #e4d0bd;
}
.goz {
  position: absolute;
  bottom: 355px;
  left: 12px;
  height: 5px;
  width: 5px;
  border-radius: 10px;
  background: black;
}
.govde {
  position: absolute;
  bottom: -55px;
  height: 40px;
  width: 4px;
  background: #f1d6bb;
}
.kol {
  position: absolute;
  width: 20px;
  height: 4px;
  background: black;
  top: 30px;
  transform: rotate(20deg);
  animation: kol 3s linear infinite;
}
.dalga {
  position: absolute;
  bottom: 10px;
  left: 3px;
  height: 7px;
  width: 25px;
  background: black;
  border-radius: 0px 8px 8px 0px;
  animation: ileri 2s linear infinite;
}
.got {
  position: absolute;
  left: 25px;
  bottom: 290px;
  font-size: 35px;
  transform: rotate(270deg);
  font-weight: bold;
  animation: oynat 3s linear infinite;
}

/* @keyframes ileri {
  0% {
    width: 30px;
  }

  50% {
    width: 40px;
  }
  75% {
    width: 30px;
  }
  100% {
    width: 40px;
  }
} */
@keyframes oynat {
  0% {
    left: 25px;
  }

  50% {
    left: 15px;
  }
  75% {
    left: 25px;
  }
  100% {
    left: 15px;
  }
}
@keyframes oynat2 {
  0% {
    bottom: 140px;
  }

  50% {
    bottom: 128px;
  }
  75% {
    bottom: 140px;
  }
  100% {
    bottom: 128px;
  }
}
@keyframes kol {
  0% {
    width: 20px;
  }

  50% {
    width: 15px;
  }
  75% {
    width: 20px;
  }
  100% {
    width: 14px;
  }
}
@keyframes yatay {
  0% {
    bottom: 120px;
  }

  50% {
    bottom: 140px;
  }
  75% {
    bottom: 130px;
  }
  100% {
    bottom: 140px;
  }
}
.element {
  width: 280px;
  height: 250px;
  border-radius: 200px;
  float: left;
  shape-outside: circle(50%);
  opacity: 0.7;
  margin-right: 10px;
}
p {
  font-size: 16px;
  font-weight: bold;
  color: rgb(117, 117, 117);
  letter-spacing: 1px;
}

.perde {
  width: 280px;
  height: 250px;
  border-radius: 200px;
  float: left;
  shape-outside: circle(50%);
  background-color: #000000;
  border: none;
  box-shadow: 0px 0px 20px 4px #7e7e7e;
  margin-right: 10px;
}
.header {
  position: relative;
  height: 700px;
  background-image: linear-gradient(
      to right bottom rgba(119, 148, 114, 0.7),
      rgba(85, 88, 88, 0.7)
    ),
    url("../../assets/images/login_back.jpg");
  background-size: cover;
  background-position: top;
  clip-path: polygon(0 0, 100% 0, 100% 550px, 0 100%);
}

.logo-box {
  position: absolute;
  top: 40px;
  left: 40px;
}

.logo {
  height: 70px;
  cursor: pointer;
  display: block;
  animation: logo 3s ease-out;
}

.text-box {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.heading-primary {
  text-align: center;
  color: #ffffff;
  text-transform: uppercase;
  backface-visibility: hidden;
  margin-bottom: 50px;
}
.heading-primary-main {
  display: block;
  font-weight: bold;
  letter-spacing: 35px;
  font-size: 60px;
  animation-name: moveInLeft;
  animation-duration: 2s;
}
.heading-primary-sub {
  display: block;
  font-weight: bold;
  letter-spacing: 14px;
  font-size: 20px;
  animation: moveInRight 2s ease-out;

  /* 3 Tekrar Olacak 
    animation-iteration-count: 3;*/

  /* 3 saniye sonra olacak 
     animation-delay: 1s;  */
}
@keyframes moveInLeft {
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }

  50% {
    opacity: 0.5;
    transform: translateX(100px);
  }
  75% {
    opacity: 0.7;
    transform: translateX(-75px);
  }
  100% {
    opacity: 1;
    transform: translate(0) rotate(360deg) scale(2);
  }
}
@keyframes moveInRight {
  0% {
    opacity: 0;
    transform: translateX(100px);
  }
  50% {
    opacity: 0.5;
    transform: translateX(-100px);
  }
  75% {
    opacity: 0.7;
    transform: translateX(75px);
  }
  100% {
    opacity: 1;
    transform: translate(0);
  }
}

@keyframes logo {
  0% {
    transform: scale(0);
  }
  25% {
    transform: scale(1.5);
  }
  50% {
    transform: scale(2);
  }
  75% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(0);
  }
}

@keyframes moveInBottom {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translate(0);
  }
}

.btn:link,
.btn:visited {
  text-decoration: none;
  border-radius: 40px;
  font-weight: bold;
  padding: 15px 40px;
  display: inline-block;
  transition: all 200ms ease-in-out;
  position: relative;
}

.btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(194, 193, 193, 0.2);
}
.btn:active {
  transform: translateY(-1px);
  box-shadow: 0 10px 20px rgba(194, 193, 193, 0.2);
}

.btn-white {
  color: #474747;
  background-color: #ffffff;
}

.btn::after {
  content: "";
  display: inline-block;
  height: 100%;
  width: 100%;
  border-radius: 40px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  transition: all 300ms ease-in-out;
}

.btn-white::after {
  background-color: #ffffff;
}

.btn:hover::after {
  transform: scaleX(1.4) scaleY(1.6);
  opacity: 0;
}

.btn-animated {
  animation: moveInBottom 0.5s ease-out 0.75s;
  animation-fill-mode: backwards;
}

.btn-test {
  color: #ffffff;
  background: rgb(238, 174, 202);
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
}

.btn-test:hover {
  background: rgb(148, 187, 233);
  background: radial-gradient(
    circle,
    rgba(148, 187, 233, 1) 0%,
    rgba(238, 174, 202, 1) 100%
  );
}

.square {
  height: 100px;
  width: 100px;
  background: red;
  border: 1px dotted #302e2e;
  border-radius: 30px;

  padding: 40px 20px 40px 20px;
  text-align: center;
}
.square.animation {
  animation: squares 4s linear infinite;
}
@keyframes squares {
  0% {
    opacity: 0.2;
    transform: rotate(0deg) scale(1);
  }

  35% {
    opacity: 0.4;
    transform: scale(1.4) translateX(100px);
  }
  70% {
    opacity: 0.6;
    transform: rotate(360deg) scale(1.9);
  }
  80% {
    opacity: 0.6;
    transform: translateX(-100px) scale(1.4);
  }
  85% {
    opacity: 0.6;
    transform: rotate(0deg) scale(1.5);
  }
  90% {
    opacity: 0.6;
    transform: rotate(-360deg) scale(1.3);
  }
  100% {
    opacity: 0.9;
    transform: rotate(0deg) scale(1.8);
  }
}
</style>