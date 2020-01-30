<template>
  <div class="kgfd">
    <div class="kgfd-row">
      <div class="kgfd-col kgfd-col-12">
        <h1>Login</h1>
      </div>
      <div id="signup" class="kgfd-col kgfd-col-12">
        <form @submit.prevent="onSubmit">
          <div class="kgfd-row">
            <div class="kgfd-col kgfd-col-2">
              <div class="kgfd-formbox">
                <label for>Name</label>
                <input type="text" class="kgfd-form-input" id="name" v-model="user.name" />
              </div>
            </div>
          </div>
          <div class="kgfd-row">
            <div class="kgfd-col kgfd-col-2">
              <div class="kgfd-formbox">
                <label for>Surname</label>
                <input type="text" class="kgfd-form-input" id="surname" v-model="user.surname" />
              </div>
            </div>
          </div>
          <div class="kgfd-row">
            <div class="kgfd-col kgfd-col-2">
              <div class="kgfd-formbox" :class="{invalid: $v.email.$error}">
                <label for>E-mail</label>
                <input
                  type="email"
                  class="kgfd-form-input"
                  id="email"
                  @input="$v.email.$touch()"
                  v-model="email"
                  title="Lütfen Geçerli Mail Adresi Giriniz"
                />
                <div v-if="!$v.email.email">Lütfen Geçerli Mail Adresi Giriniz</div>
                <p v-if="!$v.email.required">
                  <span class="warning-star">*</span>
                </p>
              </div>
            </div>
          </div>
          <div class="kgfd-row">
            <div class="kgfd-col kgfd-col-2">
              <div class="kgfd-formbox" :class="{invalid: $v.age.$error}">
                <label for>Age</label>
                <input
                  type="number"
                  class="kgfd-form-input"
                  id="number"
                  @input="$v.age.$touch()"
                  v-model.number="age"
                />
                <p
                  v-if="!$v.age.minVal"
                >Your Have To Be At Least {{$v.age.$params.minVal.min}} years old</p>
              </div>
            </div>
          </div>
          <div class="kgfd-row">
            <div class="kgfd-col kgfd-col-2">
              <div class="kgfd-formbox" :class="{invalid: $v.password.$error}">
                <label for>Password</label>
                <input
                  :type="type"
                  class="kgfd-form-input"
                  id="password"
                  v-model="password"
                  @blur="$v.password.$touch()"
                />
                <a @click="ShowPassword()" class="showhidebtn" v-html="btn"></a>
                <div v-if="!$v.password.minLen">Paraola en az 8 karakter olmalıdır</div>
              </div>
            </div>
          </div>
          <div class="kgfd-row">
            <div class="kgfd-col kgfd-col-2">
              <div class="kgfd-formbox" :class="{invalid: $v.confirmPassword.$error}">
                <label for>Confirm Password</label>
                <input
                  :type="type"
                  class="kgfd-form-input"
                  id="confirmPassword"
                  v-model="confirmPassword"
                  @input="$v.confirmPassword.$touch()"
                />
                <a @click="ShowPassword()" class="showhidebtn" v-html="btn"></a>
                <div v-if="!$v.confirmPassword.sameAs">Parola Eşleşmedi</div>
              </div>
            </div>
          </div>
          <div class="kgfd-row">
            <div class="kgfd-col kgfd-col-2">
              <div class="kgfd-formbox">
                <Button @click="addAlan()" class="kgfd-btn kgfd-btn-primary">Alan Ekle</Button>
              </div>
            </div>
          </div>
          <div class="kgfd-row">
            <div class="kgfd-col kgfd-col-2">
              <div class="kgfd-formbox" v-for="(input, index) in inputs" :key="input.id">
                <label :for="input.id">Alan</label>
                <input
                  type="text"
                  style="width:94%;"
                  :id="input.id"
                  v-model="input.value"
                  class="kgfd-form-input"
                />
                <a href="JavaScript:Void(0);" @click="onDeleteAlan(index)">
                  <i class="fa fa-trash" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="kgfd-row">
            <div class="kgfd-col kgfd-col-2">
              <div class="kgfd-formbox" :class="{invalid: $v.terms.$invalid}">
                <input
                  type="checkbox"
                  style="width:0%;"
                  id="terms"
                  @change="$v.terms.$touch()"
                  v-model="terms"
                />
                <label style="display:inline-block;" for="terms">Accept Terms of Use</label>
              </div>
            </div>
          </div>
          <div class="kgfd-row">
            <div class="kgfd-col kgfd-col-2">
              <div class="kgfd-formbox">
                <button
                  v-on:click="login(user)"
                  v-bind:style="{display: mystyle.display, cursor: mystyle.cursor}"
                  class="kgfd-btn kgfd-btn-success"
                >Giriş Yap</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    <transition name="fade">
      <div
        v-if="!show"
        v-bind:style="{backgroundColor: color, display: btndisplay}"
        class="alert alert-error"
      >{{btnuser}}</div>
    </transition>
  </div>
</template>
<script>
import { serverBus } from "../../main";
import Alert from "../Alert/alert.vue";
import {
  required,
  email,
  numeric,
  minValue,
  minLength,
  sameAs
} from "vuelidate/lib/validators";
const eye = '<i class="fa fa-eye" aria-hidden="true"></i>';
const eyeSlash = '<i class="fa fa-eye-slash" aria-hidden="true"></i>';
export default {
  data() {
    return {
      hobby: "",
      btn: eye,
      type: "password",
      isSign: true,
      show: true,
      mystyle: {
        display: "block",
        cursor: "pointer"
      },
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
      user: {
        name: "",
        surname: ""
      },
      btnuser: "",
      color: "",
      btndisplay: "",
      inputs: [],
      terms:false
    };
  },
  validations: {
    email: {
      required,
      email
    },
    age: {
      required,
      numeric,
      minVal: minValue(18)
    },
    password: {
      required,
      minLen: minLength(8)
    },
    confirmPassword: {
      // sameAs: sameAs('password')
      sameAs: sameAs(x => {
        return x.password;
      })
    },
    terms: {
      required
    }
  },
  methods: {
    login(user) {
      if (user.name == "" || user.surname == "") {
        this.btnuser = "Hatalı Giriş";
        this.show = false;
        this.timerAlert();
      } else {
        serverBus.$emit("isSign", this.isSign);
        this.successLogin(user);
      }
    },
    successLogin(user) {
      this.btnuser = "Hoş Geldin" + " " + user.name + " " + user.surname;
      this.show = false;
      this.color = "green";
      this.mystyle.display = "none";
      setTimeout(() => {
        this.btndisplay = "none";
      }, 3000);
    },
    timerAlert() {
      setTimeout(() => {
        this.btndisplay = "none";
      }, 3000);
    },
    ShowPassword() {
      if (this.type === "password") {
        this.type = "text";
        this.btn = eyeSlash;
      } else {
        this.type = "password";
        this.btn = eye;
      }
    },
    addAlan() {
      const newAlan = {
        id: Math.random() * Math.random() * 1000,
        value: ""
      };
      this.inputs.push(newAlan);
    },
    onDeleteAlan(id) {
      this.inputs.splice(id, 1);
    }
  },
  mounted() {
    serverBus.$on("mystyle", mystyle => {
      this.mystyle.display = mystyle.display;
    });
  },
  components: {
    appAlert: Alert
  }
};
</script>
<style scoped>
.alert {
  font-size: 20px;
  padding: 20px 0;
  font-weight: bold;
  color: #ffffff;
  width: 200px;
  text-align: center;
  position: fixed;
  right: 0;
  bottom: 0;
  -webkit-transition: all 300ms ease;
  transition: all 300ms ease;
}
.alert-none {
  display: none;
  -webkit-transition: all 300ms ease;
  transition: all 300ms ease;
}
.alert.alert-error {
  background: #9c0404;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.invalid input {
  border: 1px solid red !important;
  background-color: #ffc9aa;
}
.invalid label {
  color: red !important;
}

.warning-star {
  position: absolute;
  top: 35px;
  right: 5px;
  color: red;
  cursor: pointer;
}
.warning-star:hover::after {
  content: " Lütfen Bu Alanı Doldurun!";
  position: absolute;
  top: -30px;
  left: -170px;
  color: red;
}
.showhidebtn,
.deleteinput {
  position: absolute;
  right: 10px;
  top: 20;
  cursor: pointer;
}
</style>