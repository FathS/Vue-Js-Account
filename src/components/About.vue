<template>
  <div class="kgfd">
    <div class="kgfd-container" style="margin-bottom:900px;">
      <div class="kgfd-row">
        <div class="kgfd-col kgfd-col-1">
          <div class="tab-btn" :class="{activebtn: activeTab == 1}" @click="TabChange(1)">Biz Kimiz?</div>
        </div>
        <div class="kgfd-col kgfd-col-1">
          <div class="tab-btn" :class="{activebtn: activeTab == 2}" @click="TabChange(2)">Tarihçe</div>
        </div>
        <div class="kgfd-col kgfd-col-1">
          <div class="tab-btn" :class="{activebtn: activeTab == 3}" @click="TabChange(3)">Ailemiz</div>
        </div>
      </div>
      <div class="kgfd-row">
        <div class="kgfd-col kgfd-col-6">
          <div
            class="tab-content"
            :class="{'active-tab': activeTab == 1, 'tab-accordion' : toggleAccr }"
          >
            <span @click="toggleAccr = !toggleAccr" @click.prevent="accordion()" v-html="icon"></span>
            <p>Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Yinelenen bir sayfa içeriğinin okuyucunun dikkatini dağıttığı bilinen bir gerçektir. Lorem Ipsum kullanmanın amacı, sürekli 'buraya metin gelecek, buraya metin gelecek' yazmaya kıyasla daha dengeli bir harf dağılımı sağlayarak okunurluğu artırmasıdır.</p>
          </div>
          <div
            class="tab-content"
            :class="{'active-tab': activeTab == 2, 'tab-accordion' : toggleAccr }"
          >
            <span @click="toggleAccr = !toggleAccr" @click.prevent="accordion()" v-html="icon"></span>
            <p>Yinelenen bir sayfa içeriğinin okuyucunun dikkatini dağıttığı bilinen bir gerçektir. Lorem Ipsum kullanmanın amacı, sürekli 'buraya metin gelecek, buraya metin gelecek' yazmaya kıyasla daha dengeli bir harf dağılımı sağlayarak okunurluğu artırmasıdır.</p>
          </div>
          <div
            class="tab-content"
            :class="{'active-tab': activeTab == 3, 'tab-accordion' : toggleAccr }"
          >
            <span @click="toggleAccr = !toggleAccr" @click.prevent="accordion()" v-html="icon"></span>
            <p>Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Yinelenen bir sayfa içeriğinin okuyucunun dikkatini dağıttığı bilinen bir gerçektir. Lorem Ipsum kullanmanın amacı, sürekli 'buraya metin gelecek, buraya metin gelecek' yazmaya kıyasla daha dengeli bir harf dağılımı sağlayarak okunurluğu artırmasıdır.</p>
          </div>
        </div>
      </div>
    </div>
    <!-- <a id="scrolTop" href="#"></a> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeTab: 1,
      icon: '<i class="fa fa-plus"></i>',
      toggleAccr: false,
    };
  },
  methods: {
    TabChange(tabid) {
      this.activeTab = tabid;
    },
    accordion() {
      //   if (this.heights == "auto") {
      //     this.heights = "";
      //     this.icon = '<i class="fa fa-plus"></i>';
      //   } else {
      //     this.heights = "auto";
      //     this.icon = '<i class="fa fa-times" aria-hidden="true"></i>';
      //   }
      if (this.toggleAccr) {
        this.icon = '<i class="fa fa-minus" aria-hidden="true"></i>';
      } else {
        this.icon = '<i class="fa fa-plus"></i>';
      }
    },
    test() {
      console.log("Test");
      if (window.location.hash > 5) {
        console.log("Test10");
        this.scrolTop = true;
      } else {
        console.log("Test1");
        this.scrolTop = false;
      }
    }
  },
  created() {
    this.test();
  },
  mounted() {
    window.onscroll = function() {
      scrollFunction();
    };

    function scrollFunction() {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        document.getElementById("scrolTop").style.display = "block";
      } else {
        document.getElementById("scrolTop").style.display = "none";
      }
    }
  }
};
</script>




<style scoped>
#scrolTop {
  position: fixed;
  bottom: 20px;
  right: 10px;
  width: 40px;
  height: 40px;
  background-color: black;
  border-radius: 20px;
  display: none;
  cursor: pointer;
  animation: opacityScroll 1s ease;
}
@keyframes opacityScroll {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
.tab-btn {
  position: relative;
  display: inline-block;
  background-color: transparent;
  color: #5c5b5b;
  font-weight: bold;
  padding: 10px 20px 0 20px;
  margin-top: 0;
  margin-right: 10px;
  text-align: center;
  cursor: pointer;
  border-color: #86bde2;
}
.tab-btn::after {
  content: "";
  position: absolute;
  margin: 0;
  padding: 0;
  transform-origin: center;
  transform: scaleX(0);
  left: 0;
  bottom: -2px;
  width: 100%;
  height: 2px;
  background-color: #86bde2;
  transition: all 200ms ease;
}
.tab-btn:hover::after {
  content: "";
  position: absolute;
  margin: 0;
  padding: 0;
  transform-origin: center;
  transform: scaleX(0.8);
  left: 0;
  bottom: -2px;
  width: 100%;
  height: 2px;
  background-color: #86bde2;
  transition: all 200ms ease;
}

.activebtn {
  border-bottom: 2px solid #86bde2;
  color: #3a3939;
  margin-top: 10px;
}
.tab-content {
  position: relative;
  width: 100%;
  padding: 10px 30px 10px 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  background-color: rgb(255, 255, 255, 0.7);
  box-shadow: 2px 1px 4px 1px #cccbcb;
  display: none;
  transition: all 300ms ease;
  height: 60px;
  overflow: hidden;
}
.active-tab {
  display: block;
  transition: all 300ms ease;
  animation: opacity 1s ease;
}
@keyframes opacity {
  0% {
    opacity: 0.2;
    position: absolute;
    top: -50px;
    z-index: -1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
    position: absolute;
    top: 0;
  }
}

.tab-content span {
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 20px;
  cursor: pointer;
}

.tab-accordion {
  height: 120px;
}
</style>
