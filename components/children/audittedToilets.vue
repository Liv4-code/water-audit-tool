<template>
  <li class="cardFixtures mb-4 d-flex flex-column">
    <h5>Toilets</h5>
    <div class="d-flex justify-content-between">
      <h6>Audited Fixtures</h6>
      <h6>Consumption Rate Per Flush</h6>
      <h6>Measurement Unit</h6>
    </div>
    <!-- toilet units green -->
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
          id="t_units_green"
          type="number"
          step="1"
          v-model="tData.t_units_green"
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
          id="t_green_flow_rate"
          step="0.000001"
          v-model="baselineFlowRate"
          placeholder="Set Baseline In Previous Step"
          disabled
        />
        <div class="greenFRLegend">B</div>
      </div>
      <select
        v-model="tData.t_measurement_unit_green"
        class="tMeasurementUnitSelect form-control w-50 py-2"
      >
        <option disabled value>Select</option>
        <option value="gallons">Gallons</option>
        <option value="liters">Liters</option>
      </select>
    </div>
    <!-- toilet units yellow -->
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
          id="t_units_yellow"
          type="number"
          step="1"
          v-model="tData.t_units_yellow"
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
          class="form-control mx-1 w-100"
          type="number"
          id="t_yellow_flow_rate"
          step="0.000001"
          v-model="tData.t_yellow_flow_rate"
        />
        <div class="yellowFRLegend">L</div>
      </div>
      <select
        v-model="tData.t_measurement_unit_yellow"
        class="tMeasurementUnitSelect form-control w-50 py-2"
      >
        <option disabled value>Select</option>
        <option value="gallons">Gallons</option>
        <option value="liters">Liters</option>
      </select>
    </div>
    <!-- toilet units orange -->
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
          id="t_units_orange"
          type="number"
          step="1"
          v-model="tData.t_units_orange"
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
          id="t_orange_flow_rate"
          step="0.000001"
          v-model="tData.t_orange_flow_rate"
        />
        <div class="orangeFRLegend">M</div>
      </div>
      <select
        v-model="tData.t_measurement_unit_orange"
        class="tMeasurementUnitSelect form-control w-50 py-2"
      >
        <option disabled value>Select</option>
        <option value="gallons">Gallons</option>
        <option value="liters">Liters</option>
      </select>
    </div>
    <!-- toilet units red -->
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
          id="t_units_red"
          type="number"
          step="1"
          v-model="tData.t_units_red"
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
          id="t_red_flow_rate"
          step="0.000001"
          v-model="tData.t_red_flow_rate"
        />
        <div class="redFRLegend">H</div>
      </div>
      <select
        v-model="tData.t_measurement_unit_red"
        class="tMeasurementUnitSelect form-control w-50 py-2"
      >
        <option disabled value>Select</option>
        <option value="gallons">Gallons</option>
        <option value="liters">Liters</option>
      </select>
    </div>
    <!-- toilet units leaking -->
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
          id="t_units_leaking"
          type="number"
          step="1"
          v-model="tData.t_units_leaking"
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
  name: "audittedToilets",
  computed: {
    baselineFlowRate() {
      return this.$store.state.waterInformationData.t_proposed_consumption_rate;
    },
    tData() {
      return this.$store.state.pointOfUseAuditData;
    },
  },
};
</script>

<style scoped>
#t_green_flow_rate::placeholder {
  font-size: 0.84rem;
}
</style>
