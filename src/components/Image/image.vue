<template>
  <div style="margin-top:500px;">
    <header class="header">
      <div class="text-box">
        <h1 class="heading-primary">
          <span class="heading-primary-main">OUTDOORS</span>
          <span class="heading-primary-sub">IS WHERE LIFE HAPPENS</span>
        </h1>

        <a href="JavaScript:Void(0);" class="btn btn-white btn-animated">Discovery Our Tours</a>
      </div>
    </header>

    <div class="perde">
      <img class="element" src="../../assets/images/expresso.jpg" alt="expresso" />
    </div>
    <p>Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.Yinelenen bir sayfa içeriğinin okuyucunun dikkatini dağıttığı bilinen bir gerçektir. Lorem Ipsum kullanmanın amacı, sürekli 'buraya metin gelecek, buraya metin gelecek' yazmaya kıyasla daha dengeli bir harf dağılımı sağlayarak okunurluğu artırmasıdır.</p>
  </div>
</template>
<style scoped>
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
</style>