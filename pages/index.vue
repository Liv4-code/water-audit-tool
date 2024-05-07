<template>
  <div class="d-flex flex-column align-items-center">
    <div>
      <h1>Building Water Audit</h1>
    </div>
    <form @submit.prevent="$store.dispatch('provisionAuditDevice')">
      <accountDetails v-if="activeDisplay === 1" @getNext="validateForm1" />
      <buildingDetails
        v-if="activeDisplay === 2"
        @getPrev="changeForm"
        @getNext="validateForm2"
      />
      <waterInformation
        v-if="activeDisplay === 3"
        @getPrev="changeForm"
        @getNext="validateForm3"
      />
      <pouAudit
        v-if="activeDisplay === 4"
        @getPrev="changeForm"
        @getNext="changeForm"
      />
      <partCost
        v-if="activeDisplay === 5"
        @getPrev="changeForm"
        @getNext="changeForm"
      />
      <labourCost
        v-if="activeDisplay === 6"
        @getPrev="changeForm"
        @getNext="changeForm"
      />
      <monitoringDeviceCost v-if="activeDisplay === 7" @getPrev="changeForm" />
    </form>
  </div>
</template>

<script>
import { store } from "../store/store";
import accountDetails from "~/components/accountDetails.vue";
import waterInformation from "~/components/waterInformation.vue";

export default {
  store: store,
  components: { accountDetails, waterInformation },
  data() {
    return {
      activeDisplay: 1,
    };
  },
  methods: {
    validateForm1(step) {
      if (!this.$store.state.accountData.organization) {
        alert("Please enter in your organization name.");
      } else if (this.$store.state.accountData.contact === "") {
        alert("Please enter in your email.");
      } else if (this.$store.state.accountData.currency === "") {
        alert("Please select a currency.");
      } else if (this.$store.state.accountData.measurement_unit === "") {
        alert("Please select a measurement unit.");
      } else {
        this.$store.state.accountData.organization =
          this.$store.state.accountData.organization.trim().split(" ").join("");
        this.activeDisplay = step;
      }
    },
    validateForm2(step) {
      if (!this.$store.state.buildingData.total_units) {
        alert("Please enter in the total unit count.");
      } else {
        this.activeDisplay = step;
      }
    },
    validateForm3(step) {
      if (!this.$store.state.waterInformationData.t_water_consumption) {
        alert("Please enter total water consumption.");
      } else if (!this.$store.state.waterInformationData.t_water_cost) {
        alert("Please enter total water cost.");
      } else if (
        !this.$store.state.waterInformationData.t_water_and_sewer_cost
      ) {
        alert("Please enter total sewer & water cost for the property.");
      } else {
        this.activeDisplay = step;
      }
    },
    changeForm(step) {
      this.activeDisplay = step;
    },
  },
  mounted() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;600&display=swap");

* {
  font-family: "Fira Sans", sans-serif;
}

form {
  position: relative;
}

h1 {
  margin: 3.7rem;
  font-size: 2.5rem;
  font-weight: 600;
  text-align: center;
}

h2 {
  font-weight: 500;
  text-align: center;
  font-size: 1.6rem;
}

h4 {
  text-align: center;
}

h5 {
  margin-top: 2%;
  text-align: center;
}

h6 {
  text-align: center;
  font-size: 14px;
  font-weight: bold;
}

button {
  color: white;
  background: #363636;
  padding: 2%;
  border-radius: 10px;
  border: none;
}
button:hover {
  background: #749399;
}

#submitAudit {
  background: #e8a736;
  padding: 2%;
  border-radius: 10px;
}
#submitAudit:hover {
  background: #cf9e4a;
}
</style>
