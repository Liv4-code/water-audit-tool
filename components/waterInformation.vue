<template>
  <div>
    <!-- <div class="progressDisplayBar"></div> -->
    <div id="containerOnSiteDetails" class="p-3 d-flex flex-column">
      <div class="headingOnSite">
        <h3 class="text-center mb-4">Water Information & Rates</h3>
      </div>
      <div
        class="inputWaterInfo d-flex flex-column align-items-center justify-content-center"
      >
        <div class="inputWaterUsageInfo p-3 rounded">
          <h6 class="mt-2">Industry Standard Consumption Per Unit</h6>
          <input
            class="form-control"
            id="industryStandardConsumption"
            v-model="accountDetails.industry_standard_placeholder"
            type="text"
            step="0.00001"
            placeholder="Go Back To Select Gallons/Liters"
            disabled
          />
          <h6 class="mt-3">Total Water Consumption (Last Month)</h6>
          <input
            ref="total_water_consumption"
            class="form-control waterDetails"
            v-model="waterInformation.t_water_consumption"
            type="number"
            step="0.00001"
            placeholder="Please Complete Account Information"
          />
          <h6 class="mt-3">Total Water Cost (Last Month)</h6>
          <input
            ref="total_water_cost"
            class="form-control waterDetails"
            v-model="waterInformation.t_water_cost"
            type="number"
            step="0.00001"
            placeholder="Please Complete Account Information"
          />
          <h6 class="mt-3">Combined Sewer and Water Cost</h6>
          <input
            ref="total_water_and_sewer"
            class="form-control waterDetails"
            id="tSewerAndWaterCost"
            v-model="waterInformation.t_water_and_sewer_cost"
            type="number"
            step="0.0000001"
            placeholder="Please Complete Account Information"
          />
        </div>
        <div class="d-grid mt-3">
          <h5 class="text-center">Water Quality Details</h5>
          <h6>(Refer To Testing Strip)</h6>
          <div class="row">
            <input
              class="col form-control m-1"
              type="number"
              v-model="waterInformation.total_hardness"
              placeholder="Total Hardness"
            />
            <input
              class="col form-control m-1"
              type="number"
              v-model="waterInformation.free_chlorine"
              placeholder="Free Chlorine"
            />
          </div>
          <div class="row">
            <input
              class="col form-control m-1"
              type="number"
              v-model="waterInformation.total_chlorine"
              placeholder="Total Chlorine"
            />
            <input
              class="col form-control m-1"
              type="number"
              v-model="waterInformation.cyanuric_acid"
              placeholder="Cyanuric Acid"
            />
          </div>
          <div class="row">
            <input
              class="col form-control m-1"
              type="number"
              v-model="waterInformation.total_alkalinity"
              placeholder="Total Alkalinity"
            />
            <input
              class="col form-control m-1"
              type="number"
              v-model="waterInformation.ph"
              placeholder="pH"
            />
          </div>
        </div>
        <div class="proposedConsumptionRates mt-4 p-3 rounded">
          <h5>Proposed Consumption Rates</h5>
          <h6 class="mb-4 text-capitalize">
            ( Fill Out Details Below In {{ accountDetails.measurement_unit }} )
          </h6>
          <div class="proposedConsumptionRate">
            <h6 class="mt-2">Kitchen Faucet</h6>
            <input
              class="form-control proposedConsumptionRate"
              id="kfProposedConsumptionRate"
              v-model="waterInformation.kf_proposed_consumption_rate"
              type="number"
              step="0.00001"
              placeholder="Per Minute"
              required
            />
          </div>
          <div class="proposedConsumptionRate">
            <h6 class="mt-2">Bathroom Faucet</h6>
            <input
              class="form-control proposedConsumptionRate"
              id="bfProposedConsumptionRate"
              v-model="waterInformation.bf_proposed_consumption_rate"
              type="number"
              step="0.00001"
              placeholder="Per Minute"
              required
            />
          </div>
          <div class="proposedConsumptionRate">
            <h6 class="mt-2">Showerhead</h6>
            <input
              class="form-control proposedConsumptionRate"
              id="shProposedConsumptionRate"
              v-model="waterInformation.sh_proposed_consumption_rate"
              type="number"
              step="0.00001"
              placeholder="Per Minute"
              required
            />
          </div>
          <div class="proposedConsumptionRate">
            <h6 class="mt-2">Toilet</h6>
            <input
              class="form-control proposedConsumptionRate"
              id="tProposedConsumptionRate"
              v-model="waterInformation.t_proposed_consumption_rate"
              type="number"
              step="0.00001"
              placeholder="Per Flush"
              required
            />
          </div>
        </div>
      </div>
    </div>
    <div class="navButtons d-inline d-flex justify-content-around m-3">
      <button type="button" @click.prevent="$emit('getPrev', 2)">
        Previous
      </button>
      <button type="button" @click.prevent="$emit('getNext', 4)">
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
    waterInformation() {
      return this.$store.state.waterInformationData;
    },
  },
  mounted() {
    if (this.accountDetails.measurement_unit === "gallons") {
      this.$refs.total_water_consumption.placeholder =
        "In Gallons (m³ x 264.2 for conversion )";
    } else if (this.accountDetails.measurement_unit === "liters") {
      this.$refs.total_water_consumption.placeholder =
        "In Liters (m³ x 1000 for conversion )";
    }
    if (this.accountDetails.currency === "USD") {
      this.$refs.total_water_cost.placeholder = "USD";
      this.$refs.total_water_and_sewer.placeholder = "USD";
    } else if (this.accountDetails.currency === "CAD") {
      this.$refs.total_water_cost.placeholder = "CAD";
      this.$refs.total_water_and_sewer.placeholder = "CAD";
    }
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  },
};
</script>

<style scoped>
.progressDisplayBar {
  width: 20%;
}

#containerOnSiteDetails {
  border: 5px solid #749399;
  border-radius: 10px;
}

.inputWaterUsageInfo {
  background-color: #eee;
}

.waterDetails {
  font-size: 0.78rem;
}

#industryStandardConsumption {
  background: #404040 !important;
  font-size: 14px;
  color: rgb(240, 240, 240);
  text-align: center;
}

#industryStandardConsumption::placeholder {
  color: rgb(240, 240, 240);
}

.proposedConsumptionRates {
  background-color: #eee;
}
</style>
