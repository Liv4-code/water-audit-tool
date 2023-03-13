<template>
  <div>
    <ul class="px-2 fixtureList">
      <div
        class="my-4 d-flex flex-column justify-content-center align-items-center"
      >
        <h4>Point Of Use Audit</h4>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          width="2.8em"
          height="2.8em"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 576 512"
        >
          <path
            fill="currentColor"
            d="M288 256c53 0 96-42.1 96-94c0-40-57.1-120.7-83.2-155.6c-6.4-8.5-19.2-8.5-25.6 0C249.1 41.3 192 122 192 162c0 51.9 43 94 96 94zm277.3 72.1c-11.8-10.7-30.2-10-42.6 0L430.3 402c-11.3 9.1-25.4 14-40 14H272c-8.8 0-16-7.2-16-16s7.2-16 16-16h78.3c15.9 0 30.7-10.9 33.3-26.6c3.3-20-12.1-37.4-31.6-37.4H192c-27 0-53.1 9.3-74.1 26.3L71.4 384H16c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h356.8c14.5 0 28.6-4.9 40-14L564 377c15.2-12.1 16.4-35.3 1.3-48.9z"
          />
        </svg>
      </div>
      <audittedKitchenFaucets />
      <audittedBathroomFaucets />
      <audittedShowerheads />
      <audittedToilets />
    </ul>
    <div class="navButtons d-inline d-flex justify-content-around m-3">
      <button type="button" @click.prevent="$emit('getPrev', 3)">
        Previous
      </button>
      <button
        type="button"
        @click.prevent="
          $emit('getNext', 5);
          updateQuantities();
          convertTFlowRates();
        "
      >
        Continue
      </button>
    </div>
  </div>
</template>

<script>
import audittedKitchenFaucets from "@/components/children/audittedKitchenFaucets";
import audittedBathroomFaucets from "@/components/children/audittedBathroomFaucets";
import audittedShowerheads from "@/components/children/audittedShowerheads";
import audittedToilets from "@/components/children/audittedToilets";

export default {
  components: {
    audittedKitchenFaucets,
    audittedBathroomFaucets,
    audittedShowerheads,
    audittedToilets,
  },
  methods: {
    toggleGuide() {
      this.showGuide = !this.showGuide;
      if (this.showGuide === true) {
        this.$refs.guideButton.innerText = "Click To Hide Guide";
      } else if (this.showGuide === false) {
        this.$refs.guideButton.innerText = "Click To Show Guide";
      }
    },
    updateQuantities() {
      this.$store.commit("faucetAeratorQuantity");
      this.$store.commit("kitchenFaucetsQuantity");
      this.$store.commit("bathroomFaucetsQuantity");
      this.$store.commit("showerheadPartsQuantity");
      this.$store.commit("toiletPartsQuantity");
      this.$store.commit("toiletRepairKitsQuantity");
    },
    convertTFlowRates() {
      this.$store.dispatch("convertToiletFlowRates");
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
  width: 43%;
}

.fixtureList {
  border: 5px solid #749399;
  border-radius: 10px;
}

.cardFixtures {
  position: relative;
  border-radius: 5px;
  padding: 15px 10px 15px 10px;
  background-color: #eeeeee;
}

.greenFlowRateInput {
  position: relative;
}
.greenFRInput {
  width: 100%;
  line-height: 1;
  outline: none;
}
.greenFRLegend {
  position: absolute;
  right: 4px;
  border: 0;
  background: #6cc372;
  color: white;
  outline: none;
  padding: 0 5px;
  border-radius: 5px;
}

.yellowFlowRateInput {
  position: relative;
}
.yellowFRInput {
  width: 100%;
  line-height: 1;
  outline: none;
}
.yellowFRLegend {
  position: absolute;
  right: 4px;
  border: 0;
  background: #ccd65b;
  color: white;
  outline: none;
  padding: 0 5px;
  border-radius: 5px;
}

.orangeFlowRateInput {
  position: relative;
}
.orangeFRInput {
  width: 100%;
  line-height: 1;
  outline: none;
}
.orangeFRLegend {
  position: absolute;
  right: 4px;
  border: 0;
  background: #e0ad56;
  color: white;
  outline: none;
  padding: 0 5px;
  border-radius: 5px;
}

.redFlowRateInput {
  position: relative;
}
.redFRInput {
  width: 100%;
  line-height: 1;
  outline: none;
}
.redFRLegend {
  position: absolute;
  right: 4px;
  border: 0;
  background: #f35a5a;
  color: white;
  outline: none;
  padding: 0 5px;
  border-radius: 5px;
}
</style>
