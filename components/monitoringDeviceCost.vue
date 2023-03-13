<template>
  <div>
    <!-- <div class="progressDisplayBar" id="progressDisplayBar"></div> -->
    <div>
      <div>
        <div class="containerMDevices">
          <h4 class="my-2">Monitoring Devices</h4>
          <div class="d-flex justify-content-center mb-2"></div>
          <div class="cardMDevices d-grid rounded p-3">
            <!-- WATER MONKEY -->
            <h5 class="headingWM mt-2">Water Monkey</h5>
            <div class="deviceIcons">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="2.9em"
                height="2.9em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M21.163 13.184a2.852 2.852 0 0 0-.678.084a8.737 8.737 0 0 0-6.917-6.445a8.393 8.393 0 0 0-.441-.067c.026-.825.064-1.779 1.278-2.636l-.192-.484s-2.37.735-2.639 2.76c-.117-.551-1.22-1.24-1.767-1.371l-.272.438s.724.362.901 1.361a8.737 8.737 0 0 0-6.92 6.44a2.834 2.834 0 1 0-1.362 5.502a2.835 2.835 0 0 0 1.72-.114a8.682 8.682 0 0 0 .92 1.712l2.352-1.585c-.638-.807-1.02-1.988-1.087-3.173c-.07-1.294.244-2.576 1.07-3.33c1.702-1.449 3.556-.788 4.713.6h.312c1.16-1.388 3.017-2.048 4.713-.6c.825.754 1.14 2.038 1.07 3.33c-.065 1.185-.448 2.366-1.087 3.173l2.353 1.585a8.685 8.685 0 0 0 .922-1.712a2.833 2.833 0 0 0 2.082-5.27a2.835 2.835 0 0 0-1.044-.198zM2.786 16.848a.836.836 0 0 1 0-1.672a.844.844 0 0 1 .469.144c.007.44.037.878.09 1.314c-.148.134-.374.233-.559.214zm18.427 0a.836.836 0 0 1-.558-.215a12.679 12.679 0 0 0 .09-1.314a.835.835 0 0 1 1.304.693c.007.457-.383.858-.836.836z"
                />
              </svg>
            </div>
            <div class="row">
              <div class="col cost">
                <p class="text-center m-0">Cost</p>
                <input
                  @input="$store.commit('waterMonkeyRetail')"
                  class="form-control"
                  id="wmCost"
                  type="number"
                  placeholder="Cost"
                  step="0.0001"
                  v-model="mdData.water_monkey_cost"
                />
              </div>
              <div class="col markup">
                <p class="text-center m-0">Markup</p>
                <input
                  @input="$store.commit('waterMonkeyRetail')"
                  class="form-control"
                  id="wmMarkup"
                  type="number"
                  placeholder="Markup"
                  step="0.0001"
                  v-model="mdData.water_monkey_markup"
                />
              </div>
            </div>
            <div class="row">
              <div class="col quantity">
                <p class="text-center m-0">Quantity</p>
                <input
                  @input="$store.commit('waterMonkeyRetail')"
                  class="form-control"
                  id="wmQuantity"
                  type="number"
                  placeholder="Quantity"
                  step="0.0001"
                  v-model="mdData.water_monkey_quantity"
                />
              </div>
              <div class="col retail">
                <p class="text-center m-0">Total Retail Cost</p>
                <input
                  class="output form-control bg-light"
                  id="wmOutput"
                  ref="wmRetail"
                  v-model="
                    $store.state.monitoringDevicesData.water_monkey_retail
                  "
                  disabled
                />
              </div>
            </div>
            <!-- ODEUS -->
            <h5 class="headingOdeus mt-4">ODEUS</h5>
            <div class="deviceIcons">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="2.6em"
                height="2.6em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m4.93 4.92l1.41 1.41c3.12-3.13 8.19-3.13 11.32 0l1.41-1.41C15.17 1 8.84 1 4.93 4.92m2.83 2.83l1.41 1.41a4.008 4.008 0 0 1 5.66 0l1.41-1.41a6 6 0 0 0-8.48 0M18 11H6a2 2 0 0 0-2 2v8c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2v-8a2 2 0 0 0-2-2m0 6H6v-3h12v3Z"
                />
              </svg>
            </div>
            <div class="row">
              <div class="col costOdeus">
                <p class="text-center m-0">Cost</p>
                <input
                  @input="$store.commit('odeusRetail')"
                  class="form-control"
                  id="odeusCost"
                  type="number"
                  placeholder="Cost"
                  step="0.0001"
                  v-model="mdData.odeus_cost"
                />
              </div>
              <div class="col markupOdeus">
                <p class="text-center m-0">Markup</p>
                <input
                  @input="$store.commit('odeusRetail')"
                  class="form-control"
                  id="odeusMarkup"
                  type="number"
                  placeholder="Markup"
                  step="0.0001"
                  v-model="mdData.odeus_markup"
                />
              </div>
            </div>
            <div class="row">
              <div class="col quantityOdeus">
                <p class="text-center m-0">Quantity</p>
                <input
                  @input="$store.commit('odeusRetail')"
                  class="form-control"
                  id="odeusQuantity"
                  type="number"
                  placeholder="Quantity"
                  step="0.0001"
                  v-model="mdData.odeus_quantity"
                />
              </div>
              <div class="col retailOdeus">
                <p class="text-center m-0">Total Retail Cost</p>
                <input
                  class="output form-control bg-light"
                  id="odeusOutput"
                  ref="odeusRetail"
                  v-model="$store.state.monitoringDevicesData.odeus_retail"
                  disabled
                />
              </div>
            </div>
            <h5 class="headingOdeus mt-4">Water Sniffer</h5>
            <div class="deviceIcons">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="2.6em"
                height="2.6em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m4.93 4.92l1.41 1.41c3.12-3.13 8.19-3.13 11.32 0l1.41-1.41C15.17 1 8.84 1 4.93 4.92m2.83 2.83l1.41 1.41a4.008 4.008 0 0 1 5.66 0l1.41-1.41a6 6 0 0 0-8.48 0M18 11H6a2 2 0 0 0-2 2v8c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2v-8a2 2 0 0 0-2-2m0 6H6v-3h12v3Z"
                />
              </svg>
            </div>
            <div class="row">
              <div class="col costWaterSniffer">
                <p class="text-center m-0">Cost</p>
                <input
                  @input="$store.commit('waterSnifferRetail')"
                  class="form-control"
                  id="wsCost"
                  type="number"
                  placeholder="Cost"
                  step="0.0001"
                  v-model="mdData.water_sniffer_cost"
                />
              </div>
              <div class="col markupWaterSniffer">
                <p class="text-center m-0">Markup</p>
                <input
                  @input="$store.commit('waterSnifferRetail')"
                  class="form-control"
                  id="wsMarkup"
                  type="number"
                  placeholder="Markup"
                  step="0.0001"
                  v-model="mdData.water_sniffer_markup"
                />
              </div>
            </div>
            <div class="row">
              <div class="col quantityWaterSniffer">
                <p class="text-center m-0">Quantity</p>
                <input
                  @input="$store.commit('waterSnifferRetail')"
                  class="form-control"
                  id="wsQuantity"
                  type="number"
                  placeholder="Quantity"
                  step="0.0001"
                  v-model="mdData.water_sniffer_quantity"
                />
              </div>
              <div class="col retailWaterSniffer">
                <p class="text-center m-0">Total Retail Cost</p>
                <input
                  class="output form-control bg-light"
                  id="wsOutput"
                  ref="wsRetail"
                  v-model="
                    $store.state.monitoringDevicesData.water_sniffer_retail
                  "
                  disabled
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="navButtons d-inline d-flex justify-content-around m-3">
      <button type="button" @click.prevent="$emit('getPrev', 6)">
        Previous
      </button>
      <button id="submitAudit" ref="submitAuditButton" type="submit">
        <p v-if="!mdData.showSpinner" class="m-0">Submit Audit</p>
        <div
          v-if="mdData.showSpinner"
          class="mt-1 spinner-border text-dark"
          role="status"
        >
          <span class="sr-only">Loading...</span>
        </div>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    mdData() {
      return this.$store.state.monitoringDevicesData;
    },
  },
  methods: {
    showSpinner() {
      this.$refs.submitAuditButton.innerHTML = ``;
    },
  },
  mounted() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  },
};
</script>

<style>
#progressDisplayBar {
  width: 100%;
}

.deviceIcons {
  display: flex;
  justify-content: center;
}

.containerMDevices {
  border: 5px solid #749399;
  border-radius: 10px;
  padding: 10px;
}

.cardMDevices {
  background-color: #eee;
}

.output {
  padding: 5px 10px 5px 10px;
  width: 100%;
  background-color: white;
}

.submit {
  background-color: #292561;
  color: white;
}

@media screen and (min-width: 620px) {
  .quantityLabourPerUnit input {
    min-width: 95%;
  }
}
</style>
