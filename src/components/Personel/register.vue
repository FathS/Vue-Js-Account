<template>
  <div class="kgfd">
    <div class="kgfd-row kgfd-col-align-center">
      <div class="kgfd-col kgfd-col-12"></div>
      <div v-if="form" id="signup" class="kgfd-col kgfd-col-12 kgfd-col-m12 kgfd-col-s12">
        <form @submit.prevent="register(user)">
          <div class="kgfd-row kgfd-col-align-center">
            <div class="kgfd-col kgfd-col-3 kgfd-col-m12 kgfd-col-s12">
              <h1>Kayıt Ol</h1>
              <div style="color:red;">{{errorMsg}} {{okMsg}}</div>
              <br />
              <div class="kgfd-formbox">
                <label for>Name</label>
                <input type="text" class="kgfd-form-input" id="name" v-model="user.name" />
                <span class="warning-star">*</span>
              </div>
            </div>
          </div>
          <div class="kgfd-row kgfd-col-align-center">
            <div class="kgfd-col kgfd-col-3 kgfd-col-m12 kgfd-col-s12">
              <div class="kgfd-formbox">
                <label for>Surname</label>
                <input type="text" class="kgfd-form-input" id="surname" v-model="user.surname" />
                <span class="warning-star">*</span>
              </div>
            </div>
          </div>
          <div class="kgfd-row kgfd-col-align-center">
            <div class="kgfd-col kgfd-col-3 kgfd-col-m12 kgfd-col-s12">
              <div class="kgfd-formbox" :class="{invalid: $v.user.email.$error}">
                <label for>E-mail</label>
                <input
                  type="email"
                  class="kgfd-form-input"
                  id="email"
                  @input="$v.user.email.$touch()"
                  v-model="user.email"
                  title="Lütfen Geçerli Mail Adresi Giriniz"
                  placeholder="example@example.com"
                />
                <div v-if="!$v.user.email.email">Lütfen Geçerli Mail Adresi Giriniz</div>

                <p v-if="!$v.user.email.required">
                  <span class="warning-star">*</span>
                </p>
              </div>
            </div>
          </div>
          <div class="kgfd-row kgfd-col-align-center">
            <div class="kgfd-col kgfd-col-3 kgfd-col-m12 kgfd-col-s12">
              <div class="kgfd-formbox" :class="{invalid: $v.user.age.$error}">
                <label for>Age</label>
                <input
                  type="number"
                  class="kgfd-form-input"
                  id="number"
                  @input="$v.user.age.$touch()"
                  v-model.number="user.age"
                />
                <p
                  v-if="!$v.user.age.minVal"
                >Your Have To Be At Least {{$v.user.age.$params.minVal.min}} years old</p>
              </div>
            </div>
          </div>
          <div class="kgfd-row kgfd-col-align-center">
            <div class="kgfd-col kgfd-col-3 kgfd-col-m12 kgfd-col-s12">
              <div class="kgfd-formbox" :class="{invalid: $v.user.password.$error}">
                <label for>Password</label>
                <input
                  :type="type"
                  class="kgfd-form-input"
                  id="password"
                  v-model="user.password"
                  @blur="$v.user.password.$touch()"
                />
                <a @click="ShowPassword()" class="showhidebtn" v-html="btn"></a>
                <div v-if="!$v.user.password.minLen">Paraola en az 8 karakter olmalıdır</div>
              </div>
            </div>
          </div>
          <div class="kgfd-row kgfd-col-align-center">
            <div class="kgfd-col kgfd-col-3 kgfd-col-m12 kgfd-col-s12">
              <div class="kgfd-formbox" :class="{invalid: $v.user.confirPassword.$error}">
                <label for>Confirm Password</label>
                <input
                  :type="type"
                  class="kgfd-form-input"
                  id="confirmPassword"
                  v-model="user.confirPassword"
                  @input="$v.user.confirPassword.$touch()"
                />
                <a @click="ShowPassword()" class="showhidebtn" v-html="btn"></a>
                <div v-if="!$v.user.confirPassword.sameAs">Parola Eşleşmedi</div>
              </div>
            </div>
          </div>
          <div class="kgfd-row kgfd-col-align-center">
            <div class="kgfd-col kgfd-col-3 kgfd-col-m12 kgfd-col-s12">
              <div class="kgfd-formbox-check" :class="{invalid: $v.terms.$error}">
                <input type="checkbox" id="terms" @change="check()" v-model="terms" />
                <label for="terms" class="kgf-checklabel">
                  Sözleşmeli
                  <a style="color:red;"
                    href="C:\Users\is97788\Desktop\BasicVueJs\BasicVueJs\src\assets\images"
                  >Satış Mesafesini</a> Okudum, Onaylıyorum.
                </label>
              </div>
            </div>
          </div>
          <div class="kgfd-row kgfd-col-align-center">
            <div class="kgfd-col kgfd-col-3 kgfd-col-m12 kgfd-col-s12">
              <div class="kgfd-formbox">
                <button
                  type="submit"
                  :disabled="$v.$invalid"
                  v-bind:style="{display: mystyle.display, cursor: mystyle.cursor}"
                  class="kgfd-btn kgfd-btn-success"
                >Kayıt Ol</button>
              </div>
            </div>
          </div>
          <div class="kgfd-row kgfd-col-align-center">
            <div class="kgfd-col kgfd-col-3 kgfd-col-m12 kgfd-col-s12">
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
          <div class="kgfd-row kgfd-col-align-center">
            <div class="kgfd-col kgfd-col-3 kgfd-col-m12 kgfd-col-s12">
              <div class="kgfd-formbox">
                <Button @click="addAlan()" class="kgfd-btn kgfd-btn-primary">Alan Ekle</Button>
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

import {
  required,
  email,
  numeric,
  minValue,
  minLength,
  sameAs,
  requiredUnless
} from "vuelidate/lib/validators";
const eye = '<i class="fa fa-eye" aria-hidden="true"></i>';
const eyeSlash = '<i class="fa fa-eye-slash" aria-hidden="true"></i>';
export default {
  data() {
    return {
      form: true,
      hobby: "",
      btn: eye,
      type: "password",
      isSign: true,
      show: true,
      mystyle: {
        display: "block",
        cursor: "pointer"
      },

      user: {
        name: "",
        surname: "",
        email: "",
        age: "",
        password: "",
        confirPassword: "",
        isActive: false
      },
      btnuser: "",
      color: "",
      btndisplay: "",
      inputs: [],
      terms: false,
      errorMsg: "",
      okMsg: ""
    };
  },
  validations: {
    user: {
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
      confirPassword: {
        // sameAs: sameAs('password')
        sameAs: sameAs(x => {
          return x.password;
        })
      }
    },
    terms: {
      required: requiredUnless(vm => {
        return false;
      })
    }
  },
  methods: {
    register(user) {
      const response = this.$axios
        .post("Account/Register/", user)
        .then(response => {
          this.okMsg = response.data;
          setTimeout(() => {
            this.$router.push("/login");
          }, 3000);
        })
        .catch(error => {
          this.errorMsg = error.response.data;
        });
      // this.$store.dispatch("register", user);
    },
    successLogin(user) {
      this.btnuser = "Hoş Geldin" + " " + user.name + " " + user.surname;
      this.show = false;
      this.color = "green";
      this.mystyle.display = "none";
      this.timerAlert();
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
    },
    check() {
      if (this.user.isActive == false) {
        this.user.isActive = true;
      } else {
        this.user.isActive = false;
      }
    }
  },
  mounted() {
    serverBus.$on("mystyle", mystyle => {
      this.mystyle.display = mystyle.display;
    });
    serverBus.$on("form", form => {
      this.form = form;
    });
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
  border-bottom: 2px solid red !important;
  background-color: transparent;
  border-radius: 0;
}
.invalid label {
  color: red !important;
}

.warning-star {
  position: absolute;
  top: 35px;
  right: 5px;
  color: #b30505;
  cursor: pointer;
  -webkit-transition: all 300ms ease-out;
  transition: all 300ms ease-out;
}
.warning-star:hover::after {
  content: "Boş Bırakılamaz!";
  position: absolute;
  top: -50px;
  left: -150px;
  color: #b30505;
  font-weight: bold;
  background-color: #ffffff;
  /* box-shadow: 0px 0px 7px 15px #e6dfdf; */
  border-radius: 6px;
  line-height: normal;
  padding: 10px 15px 15px 15px;
  letter-spacing: 1px;
  -webkit-transition: all 300ms ease;
  transition: all 300ms ease;
  clip-path: polygon(
    0% 0%,
    100% 0%,
    100% 80%,
    75% 85%,
    65% 100%,
    50% 80%,
    0% 80%
  );
}
.showhidebtn,
.deleteinput {
  position: absolute;
  right: 10px;
  top: 20;
  cursor: pointer;
}
.kgf-checklabel {
  color: #910505;
}
input[type="checkbox"]:checked + .kgf-checklabel {
  color: #109703;
  font-weight: bold;
}
</style>