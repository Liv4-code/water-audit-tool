<template>
  <div>
    <!-- <div class="progressDisplayBar"></div> -->
    <div class="containerLabour">
      <div
        class="mb-4 d-flex flex-column justify-content-center align-items-center"
      >
        <h4>Labour</h4>
        <svg
          class="mb-2"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          width="3em"
          height="3em"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M16.25 2a.75.75 0 0 0-.67.415l-1 2a.75.75 0 0 0 .019.707L15.5 6.7V12h-.75a.75.75 0 0 0-.75.75v5.75a3.5 3.5 0 1 0 7 0v-5.75a.75.75 0 0 0-.75-.75h-.75V6.7l.901-1.578a.75.75 0 0 0 .02-.707l-1-2A.75.75 0 0 0 18.75 2h-2.5ZM18 12h-1V6.5a.75.75 0 0 0-.099-.372l-.8-1.402l.613-1.226h1.573l.613 1.226l-.801 1.402A.75.75 0 0 0 18 6.5V12Zm-2.5 6.5V16h4v2.5a2 2 0 1 1-4 0Zm4-4h-4v-1h4v1ZM9.526 2.136a.75.75 0 0 0-1.026.697V6.5a1 1 0 0 1-2 0V2.833a.75.75 0 0 0-1.027-.697a5.502 5.502 0 0 0-.509 9.996v7.332a2.536 2.536 0 0 0 5.072 0v-7.332a5.502 5.502 0 0 0-.51-9.996ZM10 6.5V4.127a4.002 4.002 0 0 1-.996 6.831a.75.75 0 0 0-.468.695v7.811a1.036 1.036 0 0 1-2.072 0v-7.811a.75.75 0 0 0-.468-.695A4.002 4.002 0 0 1 5 4.128V6.5a2.5 2.5 0 1 0 5 0Z"
          />
        </svg>
        <p class="m-0">Enter The Cost & Markup Only</p>
      </div>
      <!-- AERATOR INSTALLATION LABOUR COST -->
      <div class="cardLabour d-grid rounded p-3">
        <h5 class="headingAeratorInstall my-3">Aerator Installation Labour</h5>
        <div class="row mb-2">
          <div class="costAeratorInstall col">
            <input
              @input="$store.commit('aeratorInstallRetail')"
              class="form-control"
              id="aeratorInstallCost"
              type="number"
              placeholder="Cost"
              step="0.0001"
              v-model="$store.state.labourCostData.aerator_install_cost"
            />
          </div>
          <div class="markupAeratorInstall col">
            <input
              @input="$store.commit('aeratorInstallRetail')"
              class="form-control"
              id="aeratorInstallMarkup"
              type="number"
              placeholder="Markup"
              step="0.0001"
              v-model="$store.state.labourCostData.aerator_install_markup"
            />
          </div>
        </div>
        <div class="row mb-2">
          <div class="quantityAeratorInstall col">
            <input
              class="form-control"
              id="aeratorInstallQuantity"
              type="number"
              placeholder="Quantity"
              step="0.0001"
              v-model="$store.state.labourCostData.aerator_install_quantity"
              disabled
            />
          </div>
          <div class="retailAeratorInstall col">
            <input
              class="output form-control"
              id="aeratorInstallOutput"
              v-model="$store.state.labourCostData.aerator_install_retail"
              disabled
            />
          </div>
        </div>
      </div>
      <!-- FIXTURE INSTALLATION LABOUR COST -->
      <div class="cardLabour d-grid rounded p-3">
        <h5 class="headingFixtureInstall my-3">Fixture Installation Labour</h5>
        <div class="row mb-2">
          <div class="costFixtureInstall col">
            <input
              @input="$store.commit('fixtureInstallRetail')"
              class="form-control"
              id="fixtureInstallCost"
              type="number"
              placeholder="Cost"
              step="0.0001"
              v-model="$store.state.labourCostData.fixture_install_cost"
            />
          </div>
          <div class="markupFixtureInstall col">
            <input
              @input="$store.commit('fixtureInstallRetail')"
              class="form-control"
              id="fixtureInstallMarkup"
              type="number"
              placeholder="Markup"
              step="0.0001"
              v-model="$store.state.labourCostData.fixture_install_markup"
            />
          </div>
        </div>
        <div class="row mb-2">
          <div class="quantityFixtureInstall col">
            <input
              class="form-control"
              id="fixtureInstallQuantity"
              type="number"
              placeholder="Quantity"
              step="0.0001"
              v-model="$store.state.labourCostData.fixture_install_quantity"
              disabled
            />
          </div>
          <div class="retailFixtureInstall col">
            <input
              class="output form-control"
              id="fixtureInstallOutput"
              v-model="$store.state.labourCostData.fixture_install_retail"
              disabled
            />
          </div>
        </div>
        <!-- TOILET INSTALL LABOUR COST -->
        <h5 class="headingToiletInstall my-3">Toilet Install</h5>
        <div class="row mb-2">
          <div class="costToiletInstall col">
            <input
              @input="$store.commit('toiletInstallRetail')"
              class="form-control"
              id="toiletInstallCost"
              type="number"
              placeholder="Cost"
              step="0.0001"
              v-model="$store.state.labourCostData.toilet_install_cost"
            />
          </div>
          <div class="markupToiletInstall col">
            <input
              @input="$store.commit('toiletInstallRetail')"
              class="form-control"
              id="toiletInstallMarkup"
              type="number"
              placeholder="Markup"
              step="0.0001"
              v-model="$store.state.labourCostData.toilet_install_markup"
            />
          </div>
        </div>
        <div class="row mb-2">
          <div class="quantityToiletInstall col">
            <input
              class="form-control"
              id="toiletInstallQuantity"
              type="number"
              placeholder="Quantity"
              step="0.0001"
              v-model="$store.state.labourCostData.toilet_install_quantity"
              disabled
            />
          </div>
          <div class="retailToiletInstall col">
            <input
              class="output form-control"
              id="toiletInstallOutput"
              v-model="$store.state.labourCostData.toilet_install_retail"
              disabled
            />
          </div>
        </div>
        <!-- TOILET REPAIR LABOUR COST -->
        <h5 class="headingToiletrepair my-3">Toilet Repairs</h5>
        <div class="row mb-2">
          <div class="costToiletRepair col">
            <input
              @input="$store.commit('toiletRepairRetail')"
              class="form-control"
              id="toiletrepairCost"
              type="number"
              placeholder="Cost"
              step="0.0001"
              v-model="$store.state.labourCostData.toilet_repair_cost"
            />
          </div>
          <div class="markupToiletrepair col">
            <input
              @input="$store.commit('toiletRepairRetail')"
              class="form-control"
              id="toiletrepairMarkup"
              type="number"
              placeholder="Markup"
              step="0.0001"
              v-model="$store.state.labourCostData.toilet_repair_markup"
            />
          </div>
        </div>
        <div class="row mb-2">
          <div class="quantityToiletrepair col">
            <input
              class="form-control"
              id="toiletrepairQuantity"
              type="number"
              placeholder="Quantity"
              step="0.0001"
              v-model="$store.state.partCostData.toilet_repair_kit_quantity"
              disabled
            />
          </div>
          <div class="retailToiletrepair col">
            <input
              class="output form-control"
              id="toiletrepairOutput"
              v-model="$store.state.labourCostData.toilet_repair_retail"
              disabled
            />
          </div>
        </div>
      </div>
    </div>
    <div class="navButtons d-inline d-flex justify-content-around m-3">
      <button type="button" @click.prevent="$emit('getPrev', 5)">
        Previous
      </button>
      <button type="button" @click.prevent="$emit('getNext', 7)">
        Continue
      </button>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  },
};
</script>

<style scoped>
.progressDisplayBar {
  width: 87%;
}

.form-control {
  background-color: white;
}

.output {
  padding: 5px 10px 5px 10px;
  height: 100%;
  width: 100%;
  background-color: white;
}

/* LABOUR section */

.containerLabour {
  border: 5px solid #749399;
  padding: 20px 10px 20px 10px;
  border-radius: 10px;
}

.cardLabour {
  background-color: #eee;
}
</style>
