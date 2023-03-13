<template>
  <div>
    <!-- <div class="progressDisplayBar"></div> -->
    <ul class="partList px-2">
      <div
        class="my-4 d-flex flex-column justify-content-center align-items-center"
      >
        <h4>Part Cost Calculator</h4>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          width="2.9em"
          height="2.9em"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M352 256h-38.54c-15.76-13.5-35.56-23.1-57.46-28v-47.5l-32-3.5l-32 3.5V228c-21.9 5-41.7 14.6-57.5 28H16c-8.875 0-16 7.1-16 16v96c0 8.9 7.125 16 16 16h92.78C129.4 421.8 173 448 224 448s94.59-26.25 115.2-64H352c17.62 0 32 14.29 32 31.91S398.4 448 416 448h64c17.62 0 32-14.31 32-31.94C512 327.7 440.4 256 352 256zM81.63 159.9l142.37-15l142.4 15c9.5 1 17.6-6.8 17.6-16.8v-30.2c0-10-8.125-17.74-17.62-16.74L256 107.8V80c0-8.88-7.1-16-16-16h-32c-8.9 0-16 7.12-16 16v27.75L81.63 96.14c-9.5-1-17.63 6.76-17.63 16.76v30.24c0 9.96 8.13 17.76 17.63 16.76z"
          />
        </svg>
      </div>
      <li class="kitchenPart cardParts mb-4">
        <div class="fixture">
          <h5 class="rounded-top p-2 text-light">Faucet Aerator</h5>
        </div>
        <div class="grid">
          <div class="cost col">
            <p class="text-center">Cost</p>
            <input
              @input="updateFaucetAeratorRetail"
              class="form-control"
              id="faucetAeratorCost"
              type="number"
              placeholder="Cost"
              step="0.0001"
              v-model="partCostData.faucet_aerator_cost"
            />
          </div>
          <div class="row">
            <div class="markup col">
              <p class="text-center">Markup</p>
              <input
                @input="updateFaucetAeratorRetail"
                class="form-control"
                id="faucetAeratorMarkup"
                type="number"
                placeholder="Markup"
                step="0.0001"
                v-model="partCostData.faucet_aerator_markup"
              />
            </div>
            <div class="quantity col">
              <p class="text-center">Quantity</p>
              <input
                @input="updateFaucetAeratorRetail"
                class="form-control bg-light"
                id="faucetAeratorQuantity"
                type="number"
                placeholder="Quantity"
                step="0.0001"
                v-model="$store.state.partCostData.faucet_aerator_quantity"
                disabled
              />
            </div>
          </div>
          <div class="retail col rounded p-2">
            <p class="text-center text-light">Total Retail Cost</p>
            <input
              class="output"
              id="faucetAeratorRetail"
              ref="faucetAeratorRetail"
              v-model="$store.state.partCostData.faucet_aerator_retail"
              disabled
            />
          </div>
        </div>
      </li>
      <li class="kitchenPart cardParts mb-4">
        <div class="fixture">
          <h5 class="rounded-top p-2 text-light">Kitchen Faucet</h5>
        </div>
        <div class="grid">
          <div class="cost">
            <p class="text-center">Cost</p>
            <input
              @input="updateKitchenFaucetRetail"
              class="form-control"
              id="kitchenPartCost"
              type="number"
              placeholder="Cost"
              step="0.0001"
              v-model="partCostData.kitchen_faucet_cost"
            />
          </div>
          <div class="row">
            <div class="markup col">
              <p class="text-center">Markup</p>
              <input
                @input="updateKitchenFaucetRetail"
                class="form-control"
                id="kitchenPartMarkup"
                type="number"
                placeholder="Markup"
                step="0.0001"
                v-model="partCostData.kitchen_faucet_markup"
              />
            </div>
            <div class="quantity col">
              <p class="text-center">Quantity</p>
              <input
                @input="updateKitchenFaucetRetail"
                class="form-control bg-light"
                id="kitchenPartQuantity"
                type="number"
                placeholder="Quantity"
                step="0.0001"
                v-model="pouAuditData.kf_units_leaking"
                disabled
              />
            </div>
          </div>
          <div class="retail rounded p-2">
            <p class="text-center text-light">Total Retail Cost</p>
            <input
              class="output"
              id="kitchenPartRetail"
              v-model="$store.state.partCostData.kitchen_faucet_retail"
              disabled
            />
          </div>
        </div>
      </li>
      <li class="bathroomPart cardParts mb-4">
        <div class="fixture">
          <h5 class="rounded-top p-2 text-light">Bathroom Faucet</h5>
        </div>
        <div class="grid">
          <div class="cost">
            <p class="text-center">Cost</p>
            <input
              @input="updateBathroomFaucetRetail"
              class="form-control"
              id="bathroomPartCost"
              type="number"
              placeholder="Cost"
              step="0.0001"
              v-model="partCostData.bathroom_faucet_cost"
            />
          </div>
          <div class="row">
            <div class="markup col">
              <p class="text-center">Markup</p>
              <input
                @input="updateBathroomFaucetRetail"
                class="form-control"
                id="bathroomPartMarkup"
                type="number"
                placeholder="Markup"
                step="0.0001"
                v-model="partCostData.bathroom_faucet_markup"
              />
            </div>
            <div class="quantity col">
              <p class="text-center">Quantity</p>
              <input
                @input="updateBathroomFaucetRetail"
                class="form-control bg-light"
                id="bathroomPartQuantity"
                type="number"
                placeholder="Quantity"
                step="0.0001"
                v-model="pouAuditData.bf_units_leaking"
                disabled
              />
            </div>
          </div>
          <div class="retail rounded p-2">
            <p class="text-center text-light">Total Retail Cost</p>
            <input
              class="output"
              id="bathroomPartRetail"
              v-model="$store.state.partCostData.bathroom_faucet_retail"
              disabled
            />
          </div>
        </div>
      </li>
      <li class="showerheadPart cardParts mb-4">
        <div class="fixture">
          <h5 class="rounded-top p-2 text-light">Showerhead</h5>
        </div>
        <div class="grid">
          <div class="cost">
            <p class="text-center">Cost</p>
            <input
              @input="updateShowerheadRetail"
              class="form-control"
              id="showerheadPartCost"
              type="number"
              placeholder="Cost"
              step="0.0001"
              v-model="partCostData.showerhead_cost"
            />
          </div>
          <div class="row">
            <div class="markup col">
              <p class="text-center">Markup</p>
              <input
                @input="updateShowerheadRetail"
                class="form-control"
                id="showerheadPartMarkup"
                type="number"
                placeholder="Markup"
                step="0.0001"
                v-model="partCostData.showerhead_markup"
              />
            </div>
            <div class="quantity col">
              <p class="text-center">Quantity</p>
              <input
                @input="updateShowerheadRetail"
                class="form-control bg-light"
                id="showerheadPartQuantity"
                type="number"
                placeholder="Quantity"
                step="0.0001"
                v-model="$store.state.partCostData.showerhead_quantity"
                disabled
              />
            </div>
          </div>
          <div class="retail rounded p-2">
            <p class="text-center text-light">Total Retail Cost</p>
            <input
              class="output"
              id="showerheadPartRetail"
              v-model="$store.state.partCostData.showerhead_retail"
              disabled
            />
          </div>
        </div>
      </li>
      <li class="toiletPart cardParts mb-4">
        <div class="fixture">
          <h5 class="rounded-top p-2 text-light">Toilet</h5>
        </div>
        <div class="grid">
          <div class="cost">
            <p class="text-center">Cost</p>
            <input
              @input="updateToiletRetail"
              class="form-control"
              id="toiletPartCost"
              type="number"
              placeholder="Cost"
              step="0.0001"
              v-model="partCostData.toilet_cost"
            />
          </div>
          <div class="row">
            <div class="markup col">
              <p class="text-center">Markup</p>
              <input
                @input="updateToiletRetail"
                class="form-control"
                id="toiletPartMarkup"
                type="number"
                placeholder="Markup"
                step="0.0001"
                v-model="partCostData.toilet_markup"
              />
            </div>
            <div class="quantity col">
              <p class="text-center">Quantity</p>
              <input
                @input="updateToiletRetail"
                class="form-control bg-light"
                id="toiletPartQuantity"
                type="number"
                placeholder="Quantity"
                step="0.0001"
                v-model="pouAuditData.t_units_leaking"
                disabled
              />
            </div>
          </div>
          <div class="retail rounded p-2">
            <p class="text-center text-light">Total Retail Cost</p>
            <input
              class="output"
              id="toiletPartRetail"
              v-model="$store.state.partCostData.toilet_retail"
              disabled
            />
          </div>
        </div>
      </li>
      <li class="toiletRepairKit cardParts mb-4">
        <div class="fixture">
          <h5 class="rounded-top p-2 text-light">Toilet Repair Kit</h5>
        </div>
        <div class="grid">
          <div class="cost">
            <p class="text-center">Cost</p>
            <input
              @input="updateToiletRepairKitRetail"
              class="form-control"
              id="toiletRepairKitCost"
              type="number"
              placeholder="Cost"
              step="0.0001"
              v-model="partCostData.toilet_repair_kit_cost"
            />
          </div>
          <div class="row">
            <div class="markup col">
              <p class="text-center">Markup</p>
              <input
                @input="updateToiletRepairKitRetail"
                class="form-control"
                id="toiletRepairKitMarkup"
                type="number"
                placeholder="Markup"
                step="0.0001"
                v-model="partCostData.toilet_repair_kit_markup"
              />
            </div>
            <div class="quantity col">
              <p class="text-center">Quantity</p>
              <input
                @input="updateToiletRepairKitRetail"
                class="form-control bg-light"
                id="toiletRepairKitQuantity"
                type="number"
                placeholder="Quantity"
                step="0.0001"
                v-model="$store.state.partCostData.toilet_repair_kit_quantity"
                disabled
              />
            </div>
          </div>
          <div class="retail rounded p-2">
            <p class="text-center text-light">Total Retail Cost</p>
            <input
              class="output"
              id="toiletRepairKitRetail"
              v-model="$store.state.partCostData.toilet_repair_kit_retail"
              disabled
            />
          </div>
        </div>
      </li>
    </ul>
    <div class="navButtons d-inline d-flex justify-content-around m-3">
      <button type="button" @click.prevent="$emit('getPrev', 4)">
        Previous
      </button>
      <button
        type="button"
        @click.prevent="
          $emit('getNext', 6);
          updateLabourQuantities();
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
    pouAuditData() {
      return this.$store.state.pointOfUseAuditData;
    },
    partCostData() {
      return this.$store.state.partCostData;
    },
  },
  methods: {
    updateFaucetAeratorRetail() {
      this.$store.commit("faucetAeratorRetail");
    },
    updateKitchenFaucetRetail() {
      this.$store.commit("kitchenFaucetRetail");
    },
    updateBathroomFaucetRetail() {
      this.$store.commit("bathroomFaucetRetail");
    },
    updateShowerheadRetail() {
      this.$store.commit("showerheadRetail");
    },
    updateToiletRetail() {
      this.$store.commit("toiletRetail");
    },
    updateToiletRepairKitRetail() {
      this.$store.commit("toiletRepairKitRetail");
    },
    updateLabourQuantities() {
      this.$store.commit("aeratorInstallQuantity");
      this.$store.commit("fixtureInstallQuantity");
      this.$store.commit("toiletInstallQuantity");
    },
    // showTip() {},
  },
  mounted() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  },
};
</script>

<style scoped>
.progressDisplayBar {
  width: 62%;
}

p {
  margin: 0;
}

h5 {
  margin: 0;
  background-color: #51b3c4;
}

.partList {
  display: flex;
  flex-direction: column;
  border: 5px solid #749399;
  border-radius: 10px;
}

.cardParts {
  position: relative;
  padding-bottom: 15px;
  border-radius: 5px;
  background-color: #eeeeee;
  list-style-type: none;
}

.cost {
  margin: 9px 5px 0 5px;
}

.quantity {
  margin: 9px 5px 0 5px;
}

.markup {
  margin: 9px 5px 0 5px;
}

.retail {
  background-color: #e8a736;
  margin-top: 9px;
}
</style>
