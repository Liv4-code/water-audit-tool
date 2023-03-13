<template>
  <li class="cardFixtures mb-4 d-flex flex-column">
    <h5 class="fixtureHeading">Bathroom Faucet</h5>
    <div class="d-flex justify-content-around">
      <h6>Audited Fixtures</h6>
      <h6 class="text-capitalize">
        Consumption Rate Per Min - {{ accountDetails.measurement_unit }}
      </h6>
    </div>
    <!-- bathroom faucet units green -->
    <div class="d-flex">
      <div
        class="d-flex justify-content-center input-group w-auto justify-content-end align-items-center"
      >
        <input
          @click="$store.commit('decrementValue', $event)"
          type="button"
          value="-"
          class="btn button-minus border icon-shape icon-sm lh-0 bg-dark text-light"
          data-field="quantity"
        />
        <input
          id="bf_units_green"
          type="number"
          step="1"
          v-model="bfData.bf_units_green"
          name="quantity"
          class="form-control quantity-field border-0 text-center w-25"
        />
        <input
          @click="$store.commit('incrementValue', $event)"
          type="button"
          value="+"
          class="btn button-plus border icon-shape icon-sm lh-0 bg-dark text-light"
          data-field="quantity"
        />
      </div>
      <div class="greenFlowRateInput d-flex align-items-center w-75">
        <input
          class="greenFRInput form-control mx-1 w-100 bg-light"
          type="number"
          id="bf_green_flow_rate"
          step="0.0001"
          v-model="baselineFlowRate"
          placeholder="Set Baseline In Previous Step"
          disabled
        />
        <div class="greenFRLegend">Baseline</div>
      </div>
    </div>
    <!-- bathroom faucet units yellow -->
    <div class="d-flex">
      <div
        class="d-flex justify-content-center input-group w-auto justify-content-end align-items-center"
      >
        <input
          @click="$store.commit('decrementValue', $event)"
          type="button"
          value="-"
          class="btn button-minus border icon-shape icon-sm lh-0 bg-dark text-light"
          data-field="quantity"
        />
        <input
          id="bf_units_yellow"
          type="number"
          step="1"
          v-model="bfData.bf_units_yellow"
          name="quantity"
          class="form-control quantity-field border-0 text-center w-25"
        />
        <input
          @click="$store.commit('incrementValue', $event)"
          type="button"
          value="+"
          class="btn button-plus border icon-shape icon-sm lh-0 bg-dark text-light"
          data-field="quantity"
        />
      </div>
      <div class="yellowFlowRateInput d-flex align-items-center w-75">
        <input
          class="yellowFRInput form-control mx-1 w-100"
          type="number"
          id="bf_yellow_flow_rate"
          step="0.0001"
          v-model="bfData.bf_yellow_flow_rate"
        />
        <div class="yellowFRLegend">Low</div>
      </div>
    </div>
    <!-- bathroom faucet units orange -->
    <div class="d-flex">
      <div
        class="d-flex justify-content-center input-group w-auto justify-content-end align-items-center"
      >
        <input
          @click="$store.commit('decrementValue', $event)"
          type="button"
          value="-"
          class="btn button-minus border icon-shape icon-sm lh-0 bg-dark text-light"
          data-field="quantity"
        />
        <input
          id="bf_units_orange"
          type="number"
          step="1"
          v-model="bfData.bf_units_orange"
          name="quantity"
          class="form-control quantity-field border-0 text-center w-25"
        />
        <input
          @click="$store.commit('incrementValue', $event)"
          type="button"
          value="+"
          class="btn button-plus border icon-shape icon-sm lh-0 bg-dark text-light"
          data-field="quantity"
        />
      </div>
      <div class="orangeFlowRateInput d-flex align-items-center w-75">
        <input
          class="orangeFRInput form-control mx-1 w-100"
          type="number"
          id="bf_orange_flow_rate"
          step="0.0001"
          v-model="bfData.bf_orange_flow_rate"
        />
        <div class="orangeFRLegend">Moderate</div>
      </div>
    </div>
    <!-- bathroom faucet units red -->
    <div class="d-flex">
      <div
        class="d-flex justify-content-center input-group w-auto justify-content-end align-items-center"
      >
        <input
          @click="$store.commit('decrementValue', $event)"
          type="button"
          value="-"
          class="btn button-minus border icon-shape icon-sm lh-0 bg-dark text-light"
          data-field="quantity"
        />
        <input
          id="bf_units_red"
          type="number"
          step="1"
          v-model="bfData.bf_units_red"
          name="quantity"
          class="form-control quantity-field border-0 text-center w-25"
        />
        <input
          @click="$store.commit('incrementValue', $event)"
          type="button"
          value="+"
          class="btn button-plus border icon-shape icon-sm lh-0 bg-dark text-light"
          data-field="quantity"
        />
      </div>
      <div class="redFlowRateInput d-flex align-items-center w-75">
        <input
          class="redFRInput form-control mx-1 w-100"
          type="number"
          id="bf_red_flow_rate"
          step="0.0001"
          v-model="bfData.bf_red_flow_rate"
        />
        <div class="redFRLegend">High</div>
      </div>
    </div>
    <!-- bathroom faucets units leaking -->
    <div class="d-flex flex-column justify-content-center align-items-center">
      <label class="mt-2">Defective / Leaking</label>

      <div
        class="d-flex justify-content-center input-group w-auto justify-content-end align-items-center"
      >
        <input
          @click="$store.commit('decrementValue', $event)"
          type="button"
          value="-"
          class="btn button-minus border icon-shape icon-sm lh-0 bg-dark text-light"
          data-field="quantity"
        />
        <input
          id="bf_units_leaking"
          type="number"
          step="1"
          v-model="bfData.bf_units_leaking"
          name="quantity"
          class="form-control quantity-field border-0 text-center w-25"
        />
        <input
          @click="$store.commit('incrementValue', $event)"
          type="button"
          value="+"
          class="btn button-plus border icon-shape icon-sm lh-0 bg-dark text-light"
          data-field="quantity"
        />
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: "audittedBathroomFaucets",
  computed: {
    accountDetails() {
      return this.$store.state.accountData;
    },
    baselineFlowRate() {
      return this.$store.state.waterInformationData
        .bf_proposed_consumption_rate;
    },
    bfData() {
      return this.$store.state.pointOfUseAuditData;
    },
  },
};
</script>

<style scoped>
#bf_green_flow_rate::placeholder {
  font-size: 0.84rem;
}
</style>
