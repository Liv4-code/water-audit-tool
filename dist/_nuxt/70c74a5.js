(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{242:function(t,o,n){"use strict";n.r(o),n.d(o,"API_BASE_PATH",(function(){return c})),n.d(o,"WATER_AUDIT_DEVICE_ENDPOINT",(function(){return m})),n.d(o,"store",(function(){return f}));n(1);var r=n(8),_=n(60),l=n(61);r.default.use(_.a);var c="https://cs.api.ubidots.com/api/v2.0",m="".concat(c,"/devices/_/provision/?type=water-audit-device"),f=new _.a.Store({state:{accountData:{person:"",contact:"",organization:"",address:"",postal_code:"",country:"",province_state:"",currency:"",measurement_unit:"",industry_standard_placeholder:"",industry_standard_consumption:null},buildingData:{date:"",location:"",address:"",building_age:"",meter_model:"",meter_type:"",total_units:void 0,floors:"",auditted_units:"",occupancy:"",shared_laundry:""},waterInformationData:{t_water_consumption:null,t_water_cost:null,t_water_and_sewer_cost:0,total_hardness:0,free_chlorine:0,total_chlorine:0,cyanuric_acid:0,total_alkalinity:0,ph:0,kf_proposed_consumption_rate:0,bf_proposed_consumption_rate:0,sh_proposed_consumption_rate:0,t_proposed_consumption_rate:0},pointOfUseAuditData:{kf_green_flow_rate:0,kf_yellow_flow_rate:0,kf_orange_flow_rate:0,kf_red_flow_rate:0,kf_units_green:0,kf_units_yellow:0,kf_units_orange:0,kf_units_red:0,kf_units_leaking:0,bf_green_flow_rate:0,bf_yellow_flow_rate:0,bf_orange_flow_rate:0,bf_red_flow_rate:0,bf_units_green:0,bf_units_yellow:0,bf_units_orange:0,bf_units_red:0,bf_units_leaking:0,sh_green_flow_rate:0,sh_yellow_flow_rate:0,sh_orange_flow_rate:0,sh_red_flow_rate:0,sh_units_green:0,sh_units_yellow:0,sh_units_orange:0,sh_units_red:0,sh_units_leaking:0,t_green_flow_rate:0,t_yellow_flow_rate:0,t_orange_flow_rate:0,t_red_flow_rate:0,t_units_green:0,t_units_yellow:0,t_units_orange:0,t_units_red:0,t_units_leaking:0,t_measurement_unit_green:"",t_measurement_unit_yellow:"",t_measurement_unit_orange:"",t_measurement_unit_red:""},partCostData:{faucet_aerator_cost:0,faucet_aerator_quantity:0,faucet_aerator_markup:0,faucet_aerator_retail:0,kitchen_faucet_cost:0,kitchen_faucet_quantity:0,kitchen_faucet_markup:0,kitchen_faucet_retail:0,bathroom_faucet_cost:0,bathroom_faucet_quantity:0,bathroom_faucet_markup:0,bathroom_faucet_retail:0,showerhead_cost:0,showerhead_quantity:0,showerhead_markup:0,showerhead_retail:0,toilet_cost:0,toilet_quantity:0,toilet_markup:0,toilet_retail:0,toilet_repair_kit_cost:0,toilet_repair_kit_quantity:0,toilet_repair_kit_markup:0,toilet_repair_kit_retail:0},labourCostData:{aerator_install_cost:void 0,aerator_install_quantity:void 0,aerator_install_markup:void 0,aerator_install_retail:void 0,fixture_install_cost:void 0,fixture_install_quantity:void 0,fixture_install_markup:void 0,fixture_install_retail:void 0,toilet_install_cost:void 0,toilet_install_quantity:void 0,toilet_install_markup:void 0,toilet_install_retail:void 0,toilet_repair_cost:void 0,toilet_repair_quantity:void 0,toilet_repair_markup:void 0,toilet_repair_retail:void 0,total_labour:void 0},monitoringDevicesData:{showSpinner:!1,water_monkey_cost:0,water_monkey_quantity:0,water_monkey_markup:0,water_monkey_retail:0,odeus_cost:0,odeus_quantity:0,odeus_markup:0,odeus_retail:0,water_sniffer_cost:0,water_sniffer_quantity:0,water_sniffer_markup:0,water_sniffer_retail:0}},mutations:{setIndustryStandardConsumption:function(t){var e=71544.249;return"gallons"===Object(l.get)(t,["accountData","measurement_unit"])?(t.accountData.industry_standard_consumption=e,t.accountData.industry_standard_placeholder=e+" Gallons Per Month"):"liters"===Object(l.get)(t,["accountData","measurement_unit"])?(t.accountData.industry_standard_consumption=18900,t.accountData.industry_standard_placeholder="18900 Liters Per Month"):void 0},incrementValue:function(t,e){t.pointOfUseAuditData[e.target.previousElementSibling.id]++},decrementValue:function(t,e){t.pointOfUseAuditData[e.target.nextElementSibling.id]--},convertTGreen:function(t){return t.pointOfUseAuditData.t_measurement_unit_green!==t.accountData.measurement_unit&&"gallons"===t.pointOfUseAuditData.t_measurement_unit_green?3.785*t.waterInformationData.t_proposed_consumption_rate:t.pointOfUseAuditData.t_measurement_unit_green!==t.accountData.measurement_unit&&"liters"===t.pointOfUseAuditData.t_measurement_unit_green?t.waterInformationData.t_proposed_consumption_rate/3.785:void 0},convertTYellow:function(t){return t.pointOfUseAuditData.t_measurement_unit_yellow!==t.accountData.measurement_unit&&"gallons"===t.pointOfUseAuditData.t_measurement_unit_yellow?3.785*t.pointOfUseAuditData.t_yellow_flow_rate:t.pointOfUseAuditData.t_measurement_unit_yellow!==t.accountData.measurement_unit&&"liters"===t.pointOfUseAuditData.t_measurement_unit_yellow?t.pointOfUseAuditData.t_yellow_flow_rate/3.785:void 0},convertTOrange:function(t){return t.pointOfUseAuditData.t_measurement_unit_orange!==t.accountData.measurement_unit&&"gallons"===t.pointOfUseAuditData.t_measurement_unit_orange?3.785*t.pointOfUseAuditData.t_orange_flow_rate:t.pointOfUseAuditData.t_measurement_unit_orange!==t.accountData.measurement_unit&&"liters"===t.pointOfUseAuditData.t_measurement_unit_orange?t.pointOfUseAuditData.t_orange_flow_rate/3.785:void 0},convertTRed:function(t){return t.pointOfUseAuditData.t_measurement_unit_red!==t.accountData.measurement_unit&&"gallons"===t.pointOfUseAuditData.t_measurement_unit_red?3.785*t.pointOfUseAuditData.t_red_flow_rate:t.pointOfUseAuditData.t_measurement_unit_red!==t.accountData.measurement_unit&&"liters"===t.pointOfUseAuditData.t_measurement_unit_red?t.pointOfUseAuditData.t_red_flow_rate/3.785:void 0},faucetAeratorQuantity:function(t){return t.partCostData.faucet_aerator_quantity=t.pointOfUseAuditData.kf_units_yellow+t.pointOfUseAuditData.kf_units_orange+t.pointOfUseAuditData.kf_units_red+t.pointOfUseAuditData.bf_units_yellow+t.pointOfUseAuditData.bf_units_orange+t.pointOfUseAuditData.bf_units_red},kitchenFaucetsQuantity:function(t){return t.partCostData.kitchen_faucet_quantity=t.pointOfUseAuditData.kf_units_leaking},bathroomFaucetsQuantity:function(t){return t.partCostData.bathroom_faucet_quantity=t.pointOfUseAuditData.bf_units_leaking},showerheadPartsQuantity:function(t){return t.partCostData.showerhead_quantity=t.pointOfUseAuditData.sh_units_yellow+t.pointOfUseAuditData.sh_units_orange+t.pointOfUseAuditData.sh_units_red+t.pointOfUseAuditData.sh_units_leaking},toiletPartsQuantity:function(t){return t.partCostData.toilet_quantity=t.pointOfUseAuditData.t_units_leaking},toiletRepairKitsQuantity:function(t){return t.partCostData.toilet_repair_kit_quantity=t.pointOfUseAuditData.t_units_yellow+t.pointOfUseAuditData.t_units_orange+t.pointOfUseAuditData.t_units_red},faucetAeratorRetail:function(t){var e=t.partCostData.faucet_aerator_cost*t.partCostData.faucet_aerator_quantity,o=t.partCostData.faucet_aerator_markup/100*(t.partCostData.faucet_aerator_cost*t.partCostData.faucet_aerator_quantity)+e;return t.partCostData.faucet_aerator_retail=o},kitchenFaucetRetail:function(t){var e=t.partCostData.kitchen_faucet_cost*t.partCostData.kitchen_faucet_quantity,o=t.partCostData.kitchen_faucet_markup/100*(t.partCostData.kitchen_faucet_cost*t.partCostData.kitchen_faucet_quantity)+e;return t.partCostData.kitchen_faucet_retail=o},bathroomFaucetRetail:function(t){var e=t.partCostData.bathroom_faucet_cost*t.partCostData.bathroom_faucet_quantity,o=t.partCostData.bathroom_faucet_markup/100*(t.partCostData.bathroom_faucet_cost*t.partCostData.bathroom_faucet_quantity)+e;return t.partCostData.bathroom_faucet_retail=o},showerheadRetail:function(t){var e=t.partCostData.showerhead_cost*t.partCostData.showerhead_quantity,o=t.partCostData.showerhead_markup/100*(t.partCostData.showerhead_cost*t.partCostData.showerhead_quantity)+e;return t.partCostData.showerhead_retail=o},toiletRetail:function(t){var e=t.partCostData.toilet_cost*t.partCostData.toilet_quantity,o=t.partCostData.toilet_markup/100*(t.partCostData.toilet_cost*t.partCostData.toilet_quantity)+e;return t.partCostData.toilet_retail=o},toiletRepairKitRetail:function(t){var e=t.partCostData.toilet_repair_kit_cost*t.partCostData.toilet_repair_kit_quantity,o=t.partCostData.toilet_repair_kit_markup/100*(t.partCostData.toilet_repair_kit_cost*t.partCostData.toilet_repair_kit_quantity)+e;return t.partCostData.toilet_repair_kit_retail=o},aeratorInstallQuantity:function(t){return t.labourCostData.aerator_install_quantity=t.partCostData.faucet_aerator_quantity},fixtureInstallQuantity:function(t){return t.labourCostData.fixture_install_quantity=t.partCostData.kitchen_faucet_quantity+t.partCostData.bathroom_faucet_quantity+t.partCostData.showerhead_quantity},toiletInstallQuantity:function(t){return t.labourCostData.toilet_install_quantity=t.partCostData.toilet_quantity},aeratorInstallRetail:function(t){var e=t.labourCostData.aerator_install_cost*t.labourCostData.aerator_install_quantity,o=t.labourCostData.aerator_install_markup/100*(t.labourCostData.aerator_install_cost*t.labourCostData.aerator_install_quantity)+e;return t.labourCostData.aerator_install_retail=o},fixtureInstallRetail:function(t){var e=t.labourCostData.fixture_install_cost*t.labourCostData.fixture_install_quantity,o=t.labourCostData.fixture_install_markup/100*(t.labourCostData.fixture_install_cost*t.labourCostData.fixture_install_quantity)+e;return t.labourCostData.fixture_install_retail=o},toiletInstallRetail:function(t){var e=t.labourCostData.toilet_install_cost*t.labourCostData.toilet_install_quantity,o=t.labourCostData.toilet_install_markup/100*(t.labourCostData.toilet_install_cost*t.labourCostData.toilet_install_quantity)+e;return t.labourCostData.toilet_install_retail=o},toiletRepairRetail:function(t){var e=t.labourCostData.toilet_repair_cost*t.partCostData.toilet_repair_kit_quantity,o=t.labourCostData.toilet_repair_markup/100*(t.labourCostData.toilet_repair_cost*t.partCostData.toilet_repair_kit_quantity)+e;return t.labourCostData.toilet_repair_retail=o},waterMonkeyRetail:function(t){var e=t.monitoringDevicesData.water_monkey_cost*t.monitoringDevicesData.water_monkey_quantity,o=t.monitoringDevicesData.water_monkey_markup/100*(t.monitoringDevicesData.water_monkey_cost*t.monitoringDevicesData.water_monkey_quantity)+e;return t.monitoringDevicesData.water_monkey_retail=o},odeusRetail:function(t){var e=t.monitoringDevicesData.odeus_cost*t.monitoringDevicesData.odeus_quantity,o=t.monitoringDevicesData.odeus_markup/100*(t.monitoringDevicesData.odeus_cost*t.monitoringDevicesData.odeus_quantity)+e;return t.monitoringDevicesData.odeus_retail=o},waterSnifferRetail:function(t){var e=t.monitoringDevicesData.water_sniffer_cost*t.monitoringDevicesData.water_sniffer_quantity,o=t.monitoringDevicesData.water_sniffer_markup/100*(t.monitoringDevicesData.water_sniffer_cost*t.monitoringDevicesData.water_sniffer_quantity)+e;return t.monitoringDevicesData.water_sniffer_retail=o},createDevice:function(t,o){fetch(m,{method:"POST",headers:{"X-Auth-Token":"BBFF-h8Vo5RhlkHVI1WxOtwMDut4iikoVac","Content-Type":"application/json"},body:JSON.stringify({device:{label:Object(l.get)(t,["accountData","organization"],"not set properly")}})}).then((function(){o.dispatch("submitAuditData")})).catch((function(){alert(e.message)}))}},actions:{convertToiletFlowRates:function(t){var e=t.commit;e("convertTGreen"),e("convertTYellow"),e("convertTOrange"),e("convertTRed")},provisionAuditDevice:function(t){confirm("Are you sure you're ready to submit your audit?")&&(t.commit("createDevice",t),t.state.monitoringDevicesData.showSpinner=!0)},buildReport:function(t,e){fetch("https://functions.cs.api.ubidots.com/prv/ConnectedSensors/report-automation-scheduled-events",{method:"POST",headers:{"X-Auth-Token":"BBFF-h8Vo5RhlkHVI1WxOtwMDut4iikoVac","Content-Type":"application/json"},body:JSON.stringify({new_report_name:"Water Audit Summary",report_id:"6255d5c8c1641e83f53fba21",device_id:e,role_label:"",emails:[this.state.accountData.contact],build_report:!0})}).then((function(e){if(e.ok)return alert("Thank you, your report will appear in your inbox in the next few minutes."),t.state.monitoringDevicesData.showSpinner=!1,e.json();t.state.monitoringDevicesData.showSpinner=!1,alert("There was an error compiling your report. Please reach out to the Connected Sensors support team.")}))},getDeviceID:function(t){fetch("https://cs.api.ubidots.com/api/v2.0/devices/~".concat(Object(l.get)(t,["state","accountData","organization"],"not_set"),"/"),{headers:{"X-Auth-Token":"BBFF-h8Vo5RhlkHVI1WxOtwMDut4iikoVac"}}).then((function(t){return t.json()})).then((function(data){t.dispatch("buildReport",data.id)}))},submitAuditData:function(t){var e=(new Date).getTime();fetch("https://cs.api.ubidots.com/api/v1.6/devices/".concat(this.state.accountData.organization,"/"),{method:"POST",headers:{"X-Auth-Token":"BBFF-h8Vo5RhlkHVI1WxOtwMDut4iikoVac","Content-Type":"application/json"},body:JSON.stringify({account:{value:0,timestamp:e,context:{person:Object(l.get)(t,["state","accountData","person"]),contact:Object(l.get)(t,["state","accountData","contact"]),organization:Object(l.get)(t,["state","accountData","organization"],"not_st"),address:t.state.accountData.address,postal_code:t.state.accountData.postal_code,country:t.state.accountData.country,province_state:t.state.accountData.province_state,currency:t.state.accountData.currency,measurement_unit:t.state.accountData.measurement_unit}},building:{value:0,timestamp:e,context:{date:t.state.buildingData.date,location:t.state.buildingData.location,address:t.state.buildingData.address,building_age:t.state.buildingData.building_age,meter_model:t.state.buildingData.meter_model,shared_laundry:t.state.buildingData.meter_type}},total_units:{value:t.state.buildingData.total_units,timestamp:e},floors:{value:t.state.buildingData.floors,timestamp:e},auditted_units:{value:t.state.buildingData.auditted_units,timestamp:e},occupancy:{value:t.state.buildingData.occupancy,timestamp:e},industry_standard_consumption:{value:t.state.accountData.industry_standard_consumption,timestamp:e,context:{measurement_unit:t.state.accountData.measurement_unit}},total_water_consumption:{value:t.state.waterInformationData.t_water_consumption,timestamp:e,context:{measurement_unit:t.state.accountData.measurement_unit}},total_water_cost:{value:t.state.waterInformationData.t_water_cost,timestamp:e,context:{currency:t.state.accountData.currency}},total_water_and_sewer:{value:t.state.waterInformationData.t_water_and_sewer_cost,timestamp:e,context:{currency:t.state.accountData.currency}},total_hardness:{value:t.state.waterInformationData.total_hardness,timestamp:e},free_chlorine:{value:t.state.waterInformationData.free_chlorine,timestamp:e},total_chlorine:{value:t.state.waterInformationData.total_chlorine,timestamp:e},cyanuric_acid:{value:t.state.waterInformationData.cyanuric_acid,timestamp:e},total_alkalinity:{value:t.state.waterInformationData.total_alkalinity,timestamp:e},ph:{value:t.state.waterInformationData.ph,timestamp:e},kf_proposed_consumption_rate:{value:t.state.waterInformationData.kf_proposed_consumption_rate,timestamp:e},bf_proposed_consumption_rate:{value:t.state.waterInformationData.bf_proposed_consumption_rate,timestamp:e},sh_proposed_consumption_rate:{value:t.state.waterInformationData.sh_proposed_consumption_rate,timestamp:e},t_proposed_consumption_rate:{value:t.state.waterInformationData.t_proposed_consumption_rate,timestamp:e},kf_units_green:{value:t.state.pointOfUseAuditData.kf_units_green,timestamp:e},kf_units_yellow:{value:t.state.pointOfUseAuditData.kf_units_yellow,timestamp:e},kf_units_orange:{value:t.state.pointOfUseAuditData.kf_units_orange,timestamp:e},kf_units_red:{value:t.state.pointOfUseAuditData.kf_units_red,timestamp:e},bf_units_green:{value:t.state.pointOfUseAuditData.bf_units_green,timestamp:e},bf_units_yellow:{value:t.state.pointOfUseAuditData.bf_units_yellow,timestamp:e},bf_units_orange:{value:t.state.pointOfUseAuditData.bf_units_orange,timestamp:e},bf_units_red:{value:t.state.pointOfUseAuditData.bf_units_red,timestamp:e},sh_units_green:{value:t.state.pointOfUseAuditData.sh_units_green,timestamp:e},sh_units_yellow:{value:t.state.pointOfUseAuditData.sh_units_yellow,timestamp:e},sh_units_orange:{value:t.state.pointOfUseAuditData.sh_units_orange,timestamp:e},sh_units_red:{value:t.state.pointOfUseAuditData.sh_units_red,timestamp:e},t_units_green:{value:t.state.pointOfUseAuditData.t_units_green,timestamp:e},t_units_yellow:{value:t.state.pointOfUseAuditData.t_units_yellow,timestamp:e},t_units_orange:{value:t.state.pointOfUseAuditData.t_units_orange,timestamp:e},t_units_red:{value:t.state.pointOfUseAuditData.t_units_red,timestamp:e},kf_green_flow_rate:{value:t.state.waterInformationData.kf_proposed_consumption_rate,timestamp:e},kf_yellow_flow_rate:{value:t.state.pointOfUseAuditData.kf_yellow_flow_rate,timestamp:e},kf_orange_flow_rate:{value:t.state.pointOfUseAuditData.kf_orange_flow_rate,timestamp:e},kf_red_flow_rate:{value:t.state.pointOfUseAuditData.kf_red_flow_rate,timestamp:e},bf_green_flow_rate:{value:t.state.waterInformationData.bf_proposed_consumption_rate,timestamp:e},bf_yellow_flow_rate:{value:t.state.pointOfUseAuditData.bf_yellow_flow_rate,timestamp:e},bf_orange_flow_rate:{value:t.state.pointOfUseAuditData.bf_orange_flow_rate,timestamp:e},bf_red_flow_rate:{value:t.state.pointOfUseAuditData.bf_red_flow_rate,timestamp:e},sh_green_flow_rate:{value:t.state.waterInformationData.sh_proposed_consumption_rate,timestamp:e},sh_yellow_flow_rate:{value:t.state.pointOfUseAuditData.sh_yellow_flow_rate,timestamp:e},sh_orange_flow_rate:{value:t.state.pointOfUseAuditData.sh_orange_flow_rate,timestamp:e},sh_red_flow_rate:{value:t.state.pointOfUseAuditData.sh_red_flow_rate,timestamp:e},t_green_flow_rate:{value:t.state.waterInformationData.t_proposed_consumption_rate,timestamp:e},t_yellow_flow_rate:{value:t.state.pointOfUseAuditData.t_yellow_flow_rate,timestamp:e},t_orange_flow_rate:{value:t.state.pointOfUseAuditData.t_orange_flow_rate,timestamp:e},t_red_flow_rate:{value:t.state.pointOfUseAuditData.t_red_flow_rate,timestamp:e},kf_units_leaking:{value:t.state.pointOfUseAuditData.kf_units_leaking,timestamp:e},bf_units_leaking:{value:t.state.pointOfUseAuditData.bf_units_leaking,timestamp:e},sh_units_leaking:{value:t.state.pointOfUseAuditData.sh_units_leaking,timestamp:e},t_units_leaking:{value:t.state.pointOfUseAuditData.t_units_leaking,timestamp:e},faucet_aerator_cost:{value:t.state.partCostData.faucet_aerator_retail,timestamp:e},kitchen_part_cost:{value:t.state.partCostData.kitchen_faucet_retail,timestamp:e},bathroom_part_cost:{value:t.state.partCostData.bathroom_faucet_retail,timestamp:e},showerhead_cost:{value:t.state.partCostData.showerhead_retail,timestamp:e},toilet_cost:{value:t.state.partCostData.toilet_retail,timestamp:e},toilet_repair_kit_cost:{value:t.state.partCostData.toilet_repair_kit_retail,timestamp:e},aerator_install_cost:{value:t.state.labourCostData.aerator_install_retail,timestamp:e},fixture_install_cost:{value:t.state.labourCostData.fixture_install_retail,timestamp:e},toilet_install_cost:{value:t.state.labourCostData.toilet_install_retail,timestamp:e},toilet_repair_cost:{value:t.state.labourCostData.toilet_repair_retail,timestamp:e},total_labour:{value:t.state.labourCostData.aerator_install_retail+t.state.labourCostData.fixture_install_retail+t.state.labourCostData.toilet_install_retail+t.state.labourCostData.toilet_repair_retail,timestamp:e},water_monkey_cost:{value:t.state.monitoringDevicesData.water_monkey_retail,timestamp:e},odeus_cost:{value:t.state.monitoringDevicesData.odeus_retail,timestamp:e},water_sniffer_cost:{value:t.state.monitoringDevicesData.water_sniffer_retail,timestamp:e}})}).then((function(e){if(e.ok)return alert("Audit submitted. Please wait while your report is compiled."),e.json();t.state.monitoringDevicesData.showSpinner=!1,alert("There was an error submitting your audit data")})).then((function(){t.dispatch("getDeviceID")})).catch((function(t){alert(t.message)}))}}})},243:function(t,e,o){o(244),t.exports=o(245)}},[[243,14,1,15]]]);