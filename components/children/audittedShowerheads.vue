<template>
  <li class="cardFixtures mb-4 d-flex flex-column">
    <h5 class="fixtureHeading">Showerheads</h5>
    <div class="d-flex justify-content-around">
      <h6>Audited Fixtures</h6>
      <h6 class="text-capitalize">
        Consumption Rate Per Min - {{ accountDetails.measurement_unit }}
      </h6>
    </div>
    <!-- showerhead units green -->
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
          id="sh_units_green"
          type="number"
          step="1"
          v-model="shData.sh_units_green"
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
          id="sh_green_flow_rate"
          step="0.0001"
          v-model="baselineFlowRate"
          placeholder="Set Baseline In Previous Step"
          disabled
        />
        <div class="greenFRLegend">Baseline</div>
      </div>
    </div>
    <!-- showerhead units yellow -->
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
          id="sh_units_yellow"
          type="number"
          step="1"
          v-model="shData.sh_units_yellow"
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
          id="sh_yellow_flow_rate"
          step="0.0001"
          v-model="shData.sh_yellow_flow_rate"
        />
        <div class="yellowFRLegend">Low</div>
      </div>
    </div>
    <!-- showerhead units orange -->
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
          id="sh_units_orange"
          type="number"
          step="1"
          v-model="shData.sh_units_orange"
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
          id="sh_orange_flow_rate"
          step="0.0001"
          v-model="shData.sh_orange_flow_rate"
        />
        <div class="orangeFRLegend">Moderate</div>
      </div>
    </div>
    <!-- showerhead units red -->
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
          id="sh_units_red"
          type="number"
          step="1"
          v-model="shData.sh_units_red"
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
          id="sh_red_flow_rate"
          step="0.0001"
          v-model="shData.sh_red_flow_rate"
        />
        <div class="redFRLegend">High</div>
      </div>
    </div>
    <!-- showerhead units leaking -->
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
          id="sh_units_leaking"
          type="number"
          step="1"
          v-model="shData.sh_units_leaking"
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
  name: "audittedShowerheads",
  computed: {
    accountDetails() {
      return this.$store.state.accountData;
    },
    baselineFlowRate() {
      return this.$store.state.waterInformationData
        .sh_proposed_consumption_rate;
    },
    shData() {
      return this.$store.state.pointOfUseAuditData;
    },
  },
};
</script>

<style scoped>
#sh_green_flow_rate::placeholder {
  font-size: 0.84rem;
}
</style>
