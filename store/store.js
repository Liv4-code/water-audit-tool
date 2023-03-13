import Vue from "vue";
import Vuex from "vuex";
import { map, get, size, merge, filter } from "lodash";
Vue.use(Vuex);

export const API_BASE_PATH = "https://cs.api.ubidots.com/api/v2.0";
export const WATER_AUDIT_DEVICE_ENDPOINT = `${API_BASE_PATH}/devices/_/provision/?type=water-audit-device`;

export const store = new Vuex.Store({
  state: {
    accountData: {
      person: "",
      contact: "",
      organization: "",
      address: "",
      postal_code: "",
      country: "",
      province_state: "",
      currency: "",
      measurement_unit: "",
      industry_standard_placeholder: "",
      industry_standard_consumption: null,
    },
    buildingData: {
      date: "",
      location: "",
      address: "",
      building_age: "",
      meter_model: "",
      meter_type: "",
      total_units: undefined,
      floors: "",
      auditted_units: "",
      occupancy: "",
      shared_laundry: "",
    },
    waterInformationData: {
      t_water_consumption: null,
      t_water_cost: null,
      t_water_and_sewer_cost: 0,
      total_hardness: 0,
      free_chlorine: 0,
      total_chlorine: 0,
      cyanuric_acid: 0,
      total_alkalinity: 0,
      ph: 0,
      kf_proposed_consumption_rate: 0,
      bf_proposed_consumption_rate: 0,
      sh_proposed_consumption_rate: 0,
      t_proposed_consumption_rate: 0,
    },
    pointOfUseAuditData: {
      kf_green_flow_rate: 0,
      kf_yellow_flow_rate: 0,
      kf_orange_flow_rate: 0,
      kf_red_flow_rate: 0,
      kf_units_green: 0,
      kf_units_yellow: 0,
      kf_units_orange: 0,
      kf_units_red: 0,
      kf_units_leaking: 0,
      bf_green_flow_rate: 0,
      bf_yellow_flow_rate: 0,
      bf_orange_flow_rate: 0,
      bf_red_flow_rate: 0,
      bf_units_green: 0,
      bf_units_yellow: 0,
      bf_units_orange: 0,
      bf_units_red: 0,
      bf_units_leaking: 0,
      sh_green_flow_rate: 0,
      sh_yellow_flow_rate: 0,
      sh_orange_flow_rate: 0,
      sh_red_flow_rate: 0,
      sh_units_green: 0,
      sh_units_yellow: 0,
      sh_units_orange: 0,
      sh_units_red: 0,
      sh_units_leaking: 0,
      t_green_flow_rate: 0,
      t_yellow_flow_rate: 0,
      t_orange_flow_rate: 0,
      t_red_flow_rate: 0,
      t_units_green: 0,
      t_units_yellow: 0,
      t_units_orange: 0,
      t_units_red: 0,
      t_units_leaking: 0,
      t_measurement_unit_green: "",
      t_measurement_unit_yellow: "",
      t_measurement_unit_orange: "",
      t_measurement_unit_red: "",
    },
    partCostData: {
      faucet_aerator_cost: 0,
      faucet_aerator_quantity: 0,
      faucet_aerator_markup: 0,
      faucet_aerator_retail: 0,
      kitchen_faucet_cost: 0,
      kitchen_faucet_quantity: 0,
      kitchen_faucet_markup: 0,
      kitchen_faucet_retail: 0,
      bathroom_faucet_cost: 0,
      bathroom_faucet_quantity: 0,
      bathroom_faucet_markup: 0,
      bathroom_faucet_retail: 0,
      showerhead_cost: 0,
      showerhead_quantity: 0,
      showerhead_markup: 0,
      showerhead_retail: 0,
      toilet_cost: 0,
      toilet_quantity: 0,
      toilet_markup: 0,
      toilet_retail: 0,
      toilet_repair_kit_cost: 0,
      toilet_repair_kit_quantity: 0,
      toilet_repair_kit_markup: 0,
      toilet_repair_kit_retail: 0,
    },
    labourCostData: {
      aerator_install_cost: undefined,
      aerator_install_quantity: undefined,
      aerator_install_markup: undefined,
      aerator_install_retail: undefined,
      fixture_install_cost: undefined,
      fixture_install_quantity: undefined,
      fixture_install_markup: undefined,
      fixture_install_retail: undefined,
      toilet_install_cost: undefined,
      toilet_install_quantity: undefined,
      toilet_install_markup: undefined,
      toilet_install_retail: undefined,
      toilet_repair_cost: undefined,
      toilet_repair_quantity: undefined,
      toilet_repair_markup: undefined,
      toilet_repair_retail: undefined,
      total_labour: undefined,
    },
    monitoringDevicesData: {
      showSpinner: false,
      water_monkey_cost: 0,
      water_monkey_quantity: 0,
      water_monkey_markup: 0,
      water_monkey_retail: 0,
      odeus_cost: 0,
      odeus_quantity: 0,
      odeus_markup: 0,
      odeus_retail: 0,
      water_sniffer_cost: 0,
      water_sniffer_quantity: 0,
      water_sniffer_markup: 0,
      water_sniffer_retail: 0,
    },
  },
  mutations: {
    setIndustryStandardConsumption(state) {
      const INDUSTRY_STANDARD_CONSUMPTION_FORMULA = 18900 * 3.78541;
      if (get(state, ["accountData", "measurement_unit"]) === "gallons") {
        state.accountData.industry_standard_consumption =
          INDUSTRY_STANDARD_CONSUMPTION_FORMULA;
        return (state.accountData.industry_standard_placeholder =
          INDUSTRY_STANDARD_CONSUMPTION_FORMULA + " Gallons Per Month");
      } else if (get(state, ["accountData", "measurement_unit"]) === "liters") {
        state.accountData.industry_standard_consumption = 18900;
        return (state.accountData.industry_standard_placeholder =
          18900 + " Liters Per Month");
      }
    },
    incrementValue(state, e) {
      state.pointOfUseAuditData[e.target.previousElementSibling.id]++;
    },
    decrementValue(state, e) {
      state.pointOfUseAuditData[e.target.nextElementSibling.id]--;
    },
    convertTGreen(state) {
      if (
        state.pointOfUseAuditData.t_measurement_unit_green !==
          state.accountData.measurement_unit &&
        state.pointOfUseAuditData.t_measurement_unit_green === "gallons"
      ) {
        const convertedFlowRate =
          state.waterInformationData.t_proposed_consumption_rate * 3.785;
        return convertedFlowRate;
      } else if (
        state.pointOfUseAuditData.t_measurement_unit_green !==
          state.accountData.measurement_unit &&
        state.pointOfUseAuditData.t_measurement_unit_green === "liters"
      ) {
        const convertedFlowRate =
          state.waterInformationData.t_proposed_consumption_rate / 3.785;
        return convertedFlowRate;
      }
    },
    convertTYellow(state) {
      if (
        state.pointOfUseAuditData.t_measurement_unit_yellow !==
          state.accountData.measurement_unit &&
        state.pointOfUseAuditData.t_measurement_unit_yellow === "gallons"
      ) {
        const convertedFlowRate =
          state.pointOfUseAuditData.t_yellow_flow_rate * 3.785;
        return convertedFlowRate;
      } else if (
        state.pointOfUseAuditData.t_measurement_unit_yellow !==
          state.accountData.measurement_unit &&
        state.pointOfUseAuditData.t_measurement_unit_yellow === "liters"
      ) {
        const convertedFlowRate =
          state.pointOfUseAuditData.t_yellow_flow_rate / 3.785;
        return convertedFlowRate;
      }
    },
    convertTOrange(state) {
      if (
        state.pointOfUseAuditData.t_measurement_unit_orange !==
          state.accountData.measurement_unit &&
        state.pointOfUseAuditData.t_measurement_unit_orange === "gallons"
      ) {
        const convertedFlowRate =
          state.pointOfUseAuditData.t_orange_flow_rate * 3.785;
        return convertedFlowRate;
      } else if (
        state.pointOfUseAuditData.t_measurement_unit_orange !==
          state.accountData.measurement_unit &&
        state.pointOfUseAuditData.t_measurement_unit_orange === "liters"
      ) {
        const convertedFlowRate =
          state.pointOfUseAuditData.t_orange_flow_rate / 3.785;
        return convertedFlowRate;
      }
    },
    convertTRed(state) {
      if (
        state.pointOfUseAuditData.t_measurement_unit_red !==
          state.accountData.measurement_unit &&
        state.pointOfUseAuditData.t_measurement_unit_red === "gallons"
      ) {
        const convertedFlowRate =
          state.pointOfUseAuditData.t_red_flow_rate * 3.785;
        return convertedFlowRate;
      } else if (
        state.pointOfUseAuditData.t_measurement_unit_red !==
          state.accountData.measurement_unit &&
        state.pointOfUseAuditData.t_measurement_unit_red === "liters"
      ) {
        const convertedFlowRate =
          state.pointOfUseAuditData.t_red_flow_rate / 3.785;
        return convertedFlowRate;
      }
    },
    faucetAeratorQuantity: (state) => {
      return (state.partCostData.faucet_aerator_quantity =
        state.pointOfUseAuditData.kf_units_yellow +
        state.pointOfUseAuditData.kf_units_orange +
        state.pointOfUseAuditData.kf_units_red +
        state.pointOfUseAuditData.bf_units_yellow +
        state.pointOfUseAuditData.bf_units_orange +
        state.pointOfUseAuditData.bf_units_red);
    },
    kitchenFaucetsQuantity: (state) => {
      return (state.partCostData.kitchen_faucet_quantity =
        state.pointOfUseAuditData.kf_units_leaking);
    },
    bathroomFaucetsQuantity: (state) => {
      return (state.partCostData.bathroom_faucet_quantity =
        state.pointOfUseAuditData.bf_units_leaking);
    },
    showerheadPartsQuantity: (state) => {
      return (state.partCostData.showerhead_quantity =
        state.pointOfUseAuditData.sh_units_yellow +
        state.pointOfUseAuditData.sh_units_orange +
        state.pointOfUseAuditData.sh_units_red +
        state.pointOfUseAuditData.sh_units_leaking);
    },
    toiletPartsQuantity: (state) => {
      return (state.partCostData.toilet_quantity =
        state.pointOfUseAuditData.t_units_leaking);
    },
    toiletRepairKitsQuantity: (state) => {
      return (state.partCostData.toilet_repair_kit_quantity =
        state.pointOfUseAuditData.t_units_yellow +
        state.pointOfUseAuditData.t_units_orange +
        state.pointOfUseAuditData.t_units_red);
    },
    faucetAeratorRetail: (state) => {
      const totalCost =
        state.partCostData.faucet_aerator_cost *
        state.partCostData.faucet_aerator_quantity;
      const markup = state.partCostData.faucet_aerator_markup / 100;
      const markedUpCost =
        markup *
        (state.partCostData.faucet_aerator_cost *
          state.partCostData.faucet_aerator_quantity);
      const retailCost = markedUpCost + totalCost;
      return (state.partCostData.faucet_aerator_retail = retailCost);
    },
    kitchenFaucetRetail: (state) => {
      const totalCost =
        state.partCostData.kitchen_faucet_cost *
        state.partCostData.kitchen_faucet_quantity;
      const markup = state.partCostData.kitchen_faucet_markup / 100;
      const markedUpCost =
        markup *
        (state.partCostData.kitchen_faucet_cost *
          state.partCostData.kitchen_faucet_quantity);
      const retailCost = markedUpCost + totalCost;
      return (state.partCostData.kitchen_faucet_retail = retailCost);
    },
    bathroomFaucetRetail: (state) => {
      const totalCost =
        state.partCostData.bathroom_faucet_cost *
        state.partCostData.bathroom_faucet_quantity;
      const markup = state.partCostData.bathroom_faucet_markup / 100;
      const markedUpCost =
        markup *
        (state.partCostData.bathroom_faucet_cost *
          state.partCostData.bathroom_faucet_quantity);
      const retailCost = markedUpCost + totalCost;
      return (state.partCostData.bathroom_faucet_retail = retailCost);
    },
    showerheadRetail: (state) => {
      const totalCost =
        state.partCostData.showerhead_cost *
        state.partCostData.showerhead_quantity;
      const markup = state.partCostData.showerhead_markup / 100;
      const markedUpCost =
        markup *
        (state.partCostData.showerhead_cost *
          state.partCostData.showerhead_quantity);
      const retailCost = markedUpCost + totalCost;
      return (state.partCostData.showerhead_retail = retailCost);
    },
    toiletRetail: (state) => {
      const totalCost =
        state.partCostData.toilet_cost * state.partCostData.toilet_quantity;
      const markup = state.partCostData.toilet_markup / 100;
      const markedUpCost =
        markup *
        (state.partCostData.toilet_cost * state.partCostData.toilet_quantity);
      const retailCost = markedUpCost + totalCost;
      return (state.partCostData.toilet_retail = retailCost);
    },
    toiletRepairKitRetail: (state) => {
      const totalCost =
        state.partCostData.toilet_repair_kit_cost *
        state.partCostData.toilet_repair_kit_quantity;
      const markup = state.partCostData.toilet_repair_kit_markup / 100;
      const markedUpCost =
        markup *
        (state.partCostData.toilet_repair_kit_cost *
          state.partCostData.toilet_repair_kit_quantity);
      const retailCost = markedUpCost + totalCost;
      return (state.partCostData.toilet_repair_kit_retail = retailCost);
    },
    aeratorInstallQuantity: (state) => {
      return (state.labourCostData.aerator_install_quantity =
        state.partCostData.faucet_aerator_quantity);
    },
    fixtureInstallQuantity: (state) => {
      return (state.labourCostData.fixture_install_quantity =
        state.partCostData.kitchen_faucet_quantity +
        state.partCostData.bathroom_faucet_quantity +
        state.partCostData.showerhead_quantity);
    },
    toiletInstallQuantity: (state) => {
      return (state.labourCostData.toilet_install_quantity =
        state.partCostData.toilet_quantity);
    },
    aeratorInstallRetail: (state) => {
      const totalCost =
        state.labourCostData.aerator_install_cost *
        state.labourCostData.aerator_install_quantity;
      const markup = state.labourCostData.aerator_install_markup / 100;
      const markedUpCost =
        markup *
        (state.labourCostData.aerator_install_cost *
          state.labourCostData.aerator_install_quantity);
      const retailCost = markedUpCost + totalCost;
      return (state.labourCostData.aerator_install_retail = retailCost);
    },
    fixtureInstallRetail: (state) => {
      const totalCost =
        state.labourCostData.fixture_install_cost *
        state.labourCostData.fixture_install_quantity;
      const markup = state.labourCostData.fixture_install_markup / 100;
      const markedUpCost =
        markup *
        (state.labourCostData.fixture_install_cost *
          state.labourCostData.fixture_install_quantity);
      const retailCost = markedUpCost + totalCost;
      return (state.labourCostData.fixture_install_retail = retailCost);
    },
    toiletInstallRetail: (state) => {
      const totalCost =
        state.labourCostData.toilet_install_cost *
        state.labourCostData.toilet_install_quantity;
      const markup = state.labourCostData.toilet_install_markup / 100;
      const markedUpCost =
        markup *
        (state.labourCostData.toilet_install_cost *
          state.labourCostData.toilet_install_quantity);
      const retailCost = markedUpCost + totalCost;
      return (state.labourCostData.toilet_install_retail = retailCost);
    },
    toiletRepairRetail: (state) => {
      const totalCost =
        state.labourCostData.toilet_repair_cost *
        state.partCostData.toilet_repair_kit_quantity;
      const markup = state.labourCostData.toilet_repair_markup / 100;
      const markedUpCost =
        markup *
        (state.labourCostData.toilet_repair_cost *
          state.partCostData.toilet_repair_kit_quantity);
      const retailCost = markedUpCost + totalCost;
      return (state.labourCostData.toilet_repair_retail = retailCost);
    },
    waterMonkeyRetail: (state) => {
      const totalCost =
        state.monitoringDevicesData.water_monkey_cost *
        state.monitoringDevicesData.water_monkey_quantity;
      const markup = state.monitoringDevicesData.water_monkey_markup / 100;
      const markedUpCost =
        markup *
        (state.monitoringDevicesData.water_monkey_cost *
          state.monitoringDevicesData.water_monkey_quantity);
      const retailCost = markedUpCost + totalCost;
      return (state.monitoringDevicesData.water_monkey_retail = retailCost);
    },
    odeusRetail: (state) => {
      const totalCost =
        state.monitoringDevicesData.odeus_cost *
        state.monitoringDevicesData.odeus_quantity;
      const markup = state.monitoringDevicesData.odeus_markup / 100;
      const markedUpCost =
        markup *
        (state.monitoringDevicesData.odeus_cost *
          state.monitoringDevicesData.odeus_quantity);
      const retailCost = markedUpCost + totalCost;
      return (state.monitoringDevicesData.odeus_retail = retailCost);
    },
    waterSnifferRetail: (state) => {
      const totalCost =
        state.monitoringDevicesData.water_sniffer_cost *
        state.monitoringDevicesData.water_sniffer_quantity;
      const markup = state.monitoringDevicesData.water_sniffer_markup / 100;
      const markedUpCost =
        markup *
        (state.monitoringDevicesData.water_sniffer_cost *
          state.monitoringDevicesData.water_sniffer_quantity);
      const retailCost = markedUpCost + totalCost;
      return (state.monitoringDevicesData.water_sniffer_retail = retailCost);
    },
    createDevice: (state, context) => {
      fetch(WATER_AUDIT_DEVICE_ENDPOINT, {
        method: "POST",
        headers: {
          "X-Auth-Token": "BBFF-h8Vo5RhlkHVI1WxOtwMDut4iikoVac",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          device: {
            label: get(
              state,
              ["accountData", "organization"],
              "not set properly"
            ),
          },
        }),
      })
        .then(() => {
          context.dispatch("submitAuditData");
        })
        .catch(() => {
          alert(e.message);
        });
    },
  },
  actions: {
    convertToiletFlowRates({ commit }) {
      commit("convertTGreen");
      commit("convertTYellow");
      commit("convertTOrange");
      commit("convertTRed");
    },
    provisionAuditDevice(context) {
      if (confirm("Are you sure you're ready to submit your audit?")) {
        context.commit("createDevice", context);
        context.state.monitoringDevicesData.showSpinner = true;
      }
    },
    buildReport(context, deviceID) {
      fetch(
        "https://functions.cs.api.ubidots.com/prv/ConnectedSensors/report-automation-scheduled-events",
        {
          method: "POST",
          headers: {
            "X-Auth-Token": "BBFF-h8Vo5RhlkHVI1WxOtwMDut4iikoVac",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            new_report_name: `Water Audit Summary`,
            report_id: "6255d5c8c1641e83f53fba21",
            device_id: deviceID,
            role_label: "",
            emails: [this.state.accountData.contact],
            build_report: true,
          }),
        }
      ).then((response) => {
        if (!response.ok) {
          context.state.monitoringDevicesData.showSpinner = false;
          alert(
            "There was an error compiling your report. Please reach out to the Connected Sensors support team."
          );
        } else {
          alert(
            "Thank you, your report will appear in your inbox in the next few minutes."
          );
          context.state.monitoringDevicesData.showSpinner = false;
          return response.json();
        }
      });
    },
    getDeviceID: (context) => {
      fetch(
        `https://cs.api.ubidots.com/api/v2.0/devices/~${get(
          context,
          ["state", "accountData", "organization"],
          "not_set"
        )}/`,
        {
          headers: {
            "X-Auth-Token": "BBFF-h8Vo5RhlkHVI1WxOtwMDut4iikoVac",
          },
        }
      )
        .then((response) => {
          const data = response.json();
          return data;
        })
        .then((data) => {
          context.dispatch("buildReport", data.id);
        });
    },
    submitAuditData(context) {
      const timestamp = new Date().getTime();
      fetch(
        `https://cs.api.ubidots.com/api/v1.6/devices/${this.state.accountData.organization}/`,
        {
          method: "POST",
          headers: {
            "X-Auth-Token": "BBFF-h8Vo5RhlkHVI1WxOtwMDut4iikoVac",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            // ACCOUNT DETAILS
            account: {
              value: 0,
              timestamp: timestamp,
              context: {
                person: get(context, ["state", "accountData", "person"]),
                contact: get(context, ["state", "accountData", "contact"]),
                organization: get(
                  context,
                  ["state", "accountData", "organization"],
                  "not_st"
                ),
                address: context.state.accountData.address,
                postal_code: context.state.accountData.postal_code,
                country: context.state.accountData.country,
                province_state: context.state.accountData.province_state,
                currency: context.state.accountData.currency,
                measurement_unit: context.state.accountData.measurement_unit,
              },
            },
            // BUILDING DETAILS
            building: {
              value: 0,
              timestamp: timestamp,
              context: {
                date: context.state.buildingData.date,
                location: context.state.buildingData.location,
                address: context.state.buildingData.address,
                building_age: context.state.buildingData.building_age,
                meter_model: context.state.buildingData.meter_model,
                shared_laundry: context.state.buildingData.meter_type,
              },
            },
            total_units: {
              value: context.state.buildingData.total_units,
              timestamp: timestamp,
            },
            floors: {
              value: context.state.buildingData.floors,
              timestamp: timestamp,
            },
            auditted_units: {
              value: context.state.buildingData.auditted_units,
              timestamp: timestamp,
            },
            occupancy: {
              value: context.state.buildingData.occupancy,
              timestamp: timestamp,
            },
            // WATER INFORMATION
            industry_standard_consumption: {
              value: context.state.accountData.industry_standard_consumption,
              timestamp: timestamp,
              context: {
                measurement_unit: context.state.accountData.measurement_unit,
              },
            },
            total_water_consumption: {
              value: context.state.waterInformationData.t_water_consumption,
              timestamp: timestamp,
              context: {
                measurement_unit: context.state.accountData.measurement_unit,
              },
            },
            total_water_cost: {
              value: context.state.waterInformationData.t_water_cost,
              timestamp: timestamp,
              context: {
                currency: context.state.accountData.currency,
              },
            },
            total_water_and_sewer: {
              value: context.state.waterInformationData.t_water_and_sewer_cost,
              timestamp: timestamp,
              context: {
                currency: context.state.accountData.currency,
              },
            },
            total_hardness: {
              value: context.state.waterInformationData.total_hardness,
              timestamp: timestamp,
            },
            free_chlorine: {
              value: context.state.waterInformationData.free_chlorine,
              timestamp: timestamp,
            },
            total_chlorine: {
              value: context.state.waterInformationData.total_chlorine,
              timestamp: timestamp,
            },
            cyanuric_acid: {
              value: context.state.waterInformationData.cyanuric_acid,
              timestamp: timestamp,
            },
            total_alkalinity: {
              value: context.state.waterInformationData.total_alkalinity,
              timestamp: timestamp,
            },
            ph: {
              value: context.state.waterInformationData.ph,
              timestamp: timestamp,
            },
            kf_proposed_consumption_rate: {
              value:
                context.state.waterInformationData.kf_proposed_consumption_rate,
              timestamp: timestamp,
            },
            bf_proposed_consumption_rate: {
              value:
                context.state.waterInformationData.bf_proposed_consumption_rate,
              timestamp: timestamp,
            },
            sh_proposed_consumption_rate: {
              value:
                context.state.waterInformationData.sh_proposed_consumption_rate,
              timestamp: timestamp,
            },
            t_proposed_consumption_rate: {
              value:
                context.state.waterInformationData.t_proposed_consumption_rate,
              timestamp: timestamp,
            },
            // POU AUDIT
            kf_units_green: {
              value: context.state.pointOfUseAuditData.kf_units_green,
              timestamp: timestamp,
            },
            kf_units_yellow: {
              value: context.state.pointOfUseAuditData.kf_units_yellow,
              timestamp: timestamp,
            },
            kf_units_orange: {
              value: context.state.pointOfUseAuditData.kf_units_orange,
              timestamp: timestamp,
            },
            kf_units_red: {
              value: context.state.pointOfUseAuditData.kf_units_red,
              timestamp: timestamp,
            },
            bf_units_green: {
              value: context.state.pointOfUseAuditData.bf_units_green,
              timestamp: timestamp,
            },
            bf_units_yellow: {
              value: context.state.pointOfUseAuditData.bf_units_yellow,
              timestamp: timestamp,
            },
            bf_units_orange: {
              value: context.state.pointOfUseAuditData.bf_units_orange,
              timestamp: timestamp,
            },
            bf_units_red: {
              value: context.state.pointOfUseAuditData.bf_units_red,
              timestamp: timestamp,
            },
            sh_units_green: {
              value: context.state.pointOfUseAuditData.sh_units_green,
              timestamp: timestamp,
            },
            sh_units_yellow: {
              value: context.state.pointOfUseAuditData.sh_units_yellow,
              timestamp: timestamp,
            },
            sh_units_orange: {
              value: context.state.pointOfUseAuditData.sh_units_orange,
              timestamp: timestamp,
            },
            sh_units_red: {
              value: context.state.pointOfUseAuditData.sh_units_red,
              timestamp: timestamp,
            },
            t_units_green: {
              value: context.state.pointOfUseAuditData.t_units_green,
              timestamp: timestamp,
            },
            t_units_yellow: {
              value: context.state.pointOfUseAuditData.t_units_yellow,
              timestamp: timestamp,
            },
            t_units_orange: {
              value: context.state.pointOfUseAuditData.t_units_orange,
              timestamp: timestamp,
            },
            t_units_red: {
              value: context.state.pointOfUseAuditData.t_units_red,
              timestamp: timestamp,
            },
            kf_green_flow_rate: {
              value:
                context.state.waterInformationData.kf_proposed_consumption_rate,
              timestamp: timestamp,
            },
            kf_yellow_flow_rate: {
              value: context.state.pointOfUseAuditData.kf_yellow_flow_rate,
              timestamp: timestamp,
            },
            kf_orange_flow_rate: {
              value: context.state.pointOfUseAuditData.kf_orange_flow_rate,
              timestamp: timestamp,
            },
            kf_red_flow_rate: {
              value: context.state.pointOfUseAuditData.kf_red_flow_rate,
              timestamp: timestamp,
            },
            bf_green_flow_rate: {
              value:
                context.state.waterInformationData.bf_proposed_consumption_rate,
              timestamp: timestamp,
            },
            bf_yellow_flow_rate: {
              value: context.state.pointOfUseAuditData.bf_yellow_flow_rate,
              timestamp: timestamp,
            },
            bf_orange_flow_rate: {
              value: context.state.pointOfUseAuditData.bf_orange_flow_rate,
              timestamp: timestamp,
            },
            bf_red_flow_rate: {
              value: context.state.pointOfUseAuditData.bf_red_flow_rate,
              timestamp: timestamp,
            },
            sh_green_flow_rate: {
              value:
                context.state.waterInformationData.sh_proposed_consumption_rate,
              timestamp: timestamp,
            },
            sh_yellow_flow_rate: {
              value: context.state.pointOfUseAuditData.sh_yellow_flow_rate,
              timestamp: timestamp,
            },
            sh_orange_flow_rate: {
              value: context.state.pointOfUseAuditData.sh_orange_flow_rate,
              timestamp: timestamp,
            },
            sh_red_flow_rate: {
              value: context.state.pointOfUseAuditData.sh_red_flow_rate,
              timestamp: timestamp,
            },
            t_green_flow_rate: {
              value:
                context.state.waterInformationData.t_proposed_consumption_rate,
              timestamp: timestamp,
            },
            t_yellow_flow_rate: {
              value: context.state.pointOfUseAuditData.t_yellow_flow_rate,
              timestamp: timestamp,
            },
            t_orange_flow_rate: {
              value: context.state.pointOfUseAuditData.t_orange_flow_rate,
              timestamp: timestamp,
            },
            t_red_flow_rate: {
              value: context.state.pointOfUseAuditData.t_red_flow_rate,
              timestamp: timestamp,
            },
            kf_units_leaking: {
              value: context.state.pointOfUseAuditData.kf_units_leaking,
              timestamp: timestamp,
            },
            bf_units_leaking: {
              value: context.state.pointOfUseAuditData.bf_units_leaking,
              timestamp: timestamp,
            },
            sh_units_leaking: {
              value: context.state.pointOfUseAuditData.sh_units_leaking,
              timestamp: timestamp,
            },
            t_units_leaking: {
              value: context.state.pointOfUseAuditData.t_units_leaking,
              timestamp: timestamp,
            },

            // PART COSTS
            faucet_aerator_cost: {
              value: context.state.partCostData.faucet_aerator_retail,
              timestamp: timestamp,
            },
            kitchen_part_cost: {
              value: context.state.partCostData.kitchen_faucet_retail,
              timestamp: timestamp,
            },
            bathroom_part_cost: {
              value: context.state.partCostData.bathroom_faucet_retail,
              timestamp: timestamp,
            },
            showerhead_cost: {
              value: context.state.partCostData.showerhead_retail,
              timestamp: timestamp,
            },
            toilet_cost: {
              value: context.state.partCostData.toilet_retail,
              timestamp: timestamp,
            },
            toilet_repair_kit_cost: {
              value: context.state.partCostData.toilet_repair_kit_retail,
              timestamp: timestamp,
            },
            aerator_install_cost: {
              value: context.state.labourCostData.aerator_install_retail,
              timestamp: timestamp,
            },
            fixture_install_cost: {
              value: context.state.labourCostData.fixture_install_retail,
              timestamp: timestamp,
            },
            toilet_install_cost: {
              value: context.state.labourCostData.toilet_install_retail,
              timestamp: timestamp,
            },
            toilet_repair_cost: {
              value: context.state.labourCostData.toilet_repair_retail,
              timestamp: timestamp,
            },
            total_labour: {
              value:
                context.state.labourCostData.aerator_install_retail +
                context.state.labourCostData.fixture_install_retail +
                context.state.labourCostData.toilet_install_retail +
                context.state.labourCostData.toilet_repair_retail,
              timestamp: timestamp,
            },
            water_monkey_cost: {
              value: context.state.monitoringDevicesData.water_monkey_retail,
              timestamp: timestamp,
            },
            odeus_cost: {
              value: context.state.monitoringDevicesData.odeus_retail,
              timestamp: timestamp,
            },
            water_sniffer_cost: {
              value: context.state.monitoringDevicesData.water_sniffer_retail,
              timestamp: timestamp,
            },
          }),
        }
      )
        .then((response) => {
          if (!response.ok) {
            context.state.monitoringDevicesData.showSpinner = false;
            alert("There was an error submitting your audit data");
          } else {
            alert(
              "Audit submitted. Please wait while your report is compiled."
            );
            return response.json();
          }
        })
        .then(() => {
          context.dispatch("getDeviceID");
        })
        .catch((e) => {
          alert(e.message);
        });
    },
  },
});
