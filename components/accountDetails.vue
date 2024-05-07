<template>
  <div>
    <div id="containerAccountInfo" class="p-4">
      <div class="headingAccountInfo mb-3">
        <h2>Your Account Information</h2>
      </div>
      <div class="grid">
        <div class="row my-1 person">
          <input
            type="text"
            class="form-control"
            id="person"
            v-model="accountDetails.person"
            placeholder="Your Name"
            autocomplete="off"
          />
        </div>
        <div class="row my-1 contact">
          <input
            type="text"
            class="form-control"
            id="contact"
            v-model="accountDetails.contact"
            placeholder="Email Address"
            required
            autocomplete="off"
          />
        </div>
        <div class="row my-1 name">
          <input
            type="text"
            class="form-control"
            id="organization"
            v-model="accountDetails.organization"
            placeholder="Organisation / Account Name"
            required
            autocomplete="off"
          />
        </div>
        <div class="row my-1 address">
          <input
            type="text"
            class="form-control"
            id="address"
            v-model="accountDetails.address"
            placeholder="Address"
            required
            autocomplete="off"
          />
        </div>
        <div class="row my-1 postalCode">
          <input
            type="text"
            class="form-control"
            id="postal-code"
            v-model="accountDetails.postal_code"
            placeholder="Postal Code"
            autocomplete="off"
          />
        </div>
        <div class="row my-2">
          <div class="col country">
            <label class="text-center"
              >Country
              <select
                class="form-control"
                id="country"
                v-model="accountDetails.country"
              >
                <option value="">Please Select An Option</option>
                <option value="DOC">Canada</option>
                <option value="USA">America</option>
              </select>
            </label>
          </div>
          <div class="col province">
            <label class="text-center"
              >State / Province
              <select
                class="form-control"
                id="province-state"
                v-model="accountDetails.province_state"
              >
                <option value="">Please Select An Option</option>
                <option value="Ontario">Ontario</option>
                <option value="Alberta">Alberta</option>
                <option value="British Columbia">British Columbia</option>
                <option value="Quebec">Quebec</option>
                <option value="Nova Scotia">Nova Scotia</option>
                <option value="Washington">Washington</option>
                <option value="Nevada">Nevada</option>
                <option value="Alabama">Alabama</option>
              </select>
            </label>
          </div>
        </div>
        <div class="fyiHeading row mt-2 p-2 text-light m-auto">
          <h6 class="mb-0">To be used across entire audit:</h6>
        </div>
        <div class="row my-1">
          <div class="col currency">
            <label class="text-center"
              >Currency
              <select
                class="form-control"
                id="currency"
                v-model="accountDetails.currency"
                required
              >
                <option value="">Please Select An Option</option>
                <option value="CAD">CAD</option>
                <option value="USD">USD</option>
              </select>
            </label>
          </div>
          <div class="col measurement_unit">
            <label class="text-center"
              >Measurement Unit
              <select
                class="form-control"
                id="account_measurement_unit"
                v-model="accountDetails.measurement_unit"
                required
              >
                <option value="">Please Select An Option</option>
                <option value="gallons">Gallons</option>
                <option value="liters">Liters</option>
              </select>
            </label>
          </div>
        </div>
      </div>
    </div>
    <div class="navButtons d-inline d-flex justify-content-center m-3">
      <button
        type="button"
        @click.prevent="
          $emit('getNext', 2);
          setWaterInfo();
        "
      >
        Continue
      </button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    accountDetails() {
      return this.$store.state.accountData;
    },
  },
  methods: {
    setWaterInfo() {
      this.$store.commit("setIndustryStandardConsumption");
    },
  },
  mounted() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  },
};
</script>

<style scoped>
* {
  font-family: "Fira Sans", sans-serif;
}

.fyiHeading {
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #e89a00d9;
}

img {
  transform: scale(0.7);
}

ul {
  padding: 0;
}

#containerAccountInfo {
  font-family: "Fira Sans", sans-serif;
  border: 5px solid #749399;
  border-radius: 10px;
}

.headingAccountInfo {
  text-align: center;
  grid-area: headingAccountInfo;
  height: 50px;
}

.fyiHeading {
  text-align: start;
  border-radius: 100px;
}
</style>
