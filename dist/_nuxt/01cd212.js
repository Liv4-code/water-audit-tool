(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{322:function(t,e,n){var content=n(331);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(112).default)("18b2a30e",content,!0,{sourceMap:!1})},330:function(t,e,n){"use strict";n(322)},331:function(t,e,n){var o=n(111)((function(i){return i[1]}));o.push([t.i,"#kf_green_flow_rate[data-v-2a9dc64d]::-moz-placeholder{font-size:.84rem}#kf_green_flow_rate[data-v-2a9dc64d]::placeholder{font-size:.84rem}",""]),o.locals={},t.exports=o},346:function(t,e,n){"use strict";n.r(e);var o={name:"audittedKitchenFaucets",computed:{accountDetails:function(){return this.$store.state.accountData},baselineFlowRate:function(){return this.$store.state.waterInformationData.kf_proposed_consumption_rate},kfData:function(){return this.$store.state.pointOfUseAuditData}}},r=(n(330),n(68)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("li",{staticClass:"cardFixtures mb-4 d-flex flex-column"},[e("h5",{staticClass:"fixtureHeading"},[t._v("Kitchen Faucet")]),t._v(" "),e("div",{staticClass:"d-flex justify-content-around"},[e("h6",[t._v("Audited Fixtures")]),t._v(" "),e("h6",{staticClass:"text-capitalize"},[t._v("\n      Consumption Rate Per Min - "+t._s(t.accountDetails.measurement_unit)+"\n    ")])]),t._v(" "),e("div",{staticClass:"d-flex"},[e("div",{staticClass:"d-flex justify-content-center input-group w-auto justify-content-end align-items-center"},[e("input",{staticClass:"btn button-minus border icon-shape icon-sm lh-0 bg-dark text-light",attrs:{type:"button",value:"-"},on:{click:function(e){return t.$store.commit("decrementValue",e)}}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.kfData.kf_units_green,expression:"kfData.kf_units_green"}],staticClass:"form-control quantity-field border-0 text-center w-25",attrs:{min:"0",id:"kf_units_green",type:"number",step:"1",name:"quantity"},domProps:{value:t.kfData.kf_units_green},on:{input:function(e){e.target.composing||t.$set(t.kfData,"kf_units_green",e.target.value)}}}),t._v(" "),e("input",{staticClass:"btn button-plus border icon-shape icon-sm lh-0 bg-dark text-light",attrs:{type:"button",value:"+"},on:{click:function(e){return t.$store.commit("incrementValue",e)}}})]),t._v(" "),e("div",{staticClass:"greenFlowRateInput d-flex align-items-center w-75"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.baselineFlowRate,expression:"baselineFlowRate"}],staticClass:"greenFRInput form-control mx-1 w-100 bg-light",attrs:{min:"0",type:"number",id:"kf_green_flow_rate",step:"0.0001",placeholder:"Set Baseline In Previous Step",disabled:""},domProps:{value:t.baselineFlowRate},on:{input:function(e){e.target.composing||(t.baselineFlowRate=e.target.value)}}}),t._v(" "),e("div",{staticClass:"greenFRLegend"},[t._v("Baseline")])])]),t._v(" "),e("div",{staticClass:"d-flex"},[e("div",{staticClass:"d-flex justify-content-center input-group w-auto justify-content-end align-items-center"},[e("input",{staticClass:"btn button-minus border icon-shape icon-sm lh-0 bg-dark text-light",attrs:{type:"button",value:"-","data-field":"quantity"},on:{click:function(e){return t.$store.commit("decrementValue",e)}}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.kfData.kf_units_yellow,expression:"kfData.kf_units_yellow"}],staticClass:"form-control quantity-field border-0 text-center w-25",attrs:{min:"0",id:"kf_units_yellow",type:"number",step:"1",name:"quantity"},domProps:{value:t.kfData.kf_units_yellow},on:{input:function(e){e.target.composing||t.$set(t.kfData,"kf_units_yellow",e.target.value)}}}),t._v(" "),e("input",{staticClass:"btn button-plus border icon-shape icon-sm lh-0 bg-dark text-light",attrs:{type:"button",value:"+","data-field":"quantity"},on:{click:function(e){return t.$store.commit("incrementValue",e)}}})]),t._v(" "),e("div",{staticClass:"yellowFlowRateInput d-flex align-items-center w-75"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.kfData.kf_yellow_flow_rate,expression:"kfData.kf_yellow_flow_rate"}],staticClass:"yellowFRInput form-control mx-1 w-100",attrs:{min:"0",type:"number",id:"kf_yellow_flow_rate",step:"0.0001"},domProps:{value:t.kfData.kf_yellow_flow_rate},on:{input:function(e){e.target.composing||t.$set(t.kfData,"kf_yellow_flow_rate",e.target.value)}}}),t._v(" "),e("div",{staticClass:"yellowFRLegend"},[t._v("Low")])])]),t._v(" "),e("div",{staticClass:"d-flex"},[e("div",{staticClass:"d-flex justify-content-center input-group w-auto justify-content-end align-items-center"},[e("input",{staticClass:"btn button-minus border icon-shape icon-sm lh-0 bg-dark text-light",attrs:{type:"button",value:"-","data-field":"quantity"},on:{click:function(e){return t.$store.commit("decrementValue",e)}}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.kfData.kf_units_orange,expression:"kfData.kf_units_orange"}],staticClass:"form-control quantity-field border-0 text-center w-25",attrs:{id:"kf_units_orange",type:"number",step:"1",name:"quantity"},domProps:{value:t.kfData.kf_units_orange},on:{input:function(e){e.target.composing||t.$set(t.kfData,"kf_units_orange",e.target.value)}}}),t._v(" "),e("input",{staticClass:"btn button-plus border icon-shape icon-sm lh-0 bg-dark text-light",attrs:{type:"button",value:"+","data-field":"quantity"},on:{click:function(e){return t.$store.commit("incrementValue",e)}}})]),t._v(" "),e("div",{staticClass:"orangeFlowRateInput d-flex align-items-center w-75"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.kfData.kf_orange_flow_rate,expression:"kfData.kf_orange_flow_rate"}],staticClass:"orangeFRInput form-control mx-1 w-100",attrs:{type:"number",id:"kf_orange_flow_rate",step:"0.0001"},domProps:{value:t.kfData.kf_orange_flow_rate},on:{input:function(e){e.target.composing||t.$set(t.kfData,"kf_orange_flow_rate",e.target.value)}}}),t._v(" "),e("div",{staticClass:"orangeFRLegend"},[t._v("Moderate")])])]),t._v(" "),e("div",{staticClass:"d-flex"},[e("div",{staticClass:"d-flex justify-content-center input-group w-auto justify-content-end align-items-center"},[e("input",{staticClass:"btn button-minus border icon-shape icon-sm lh-0 bg-dark text-light",attrs:{type:"button",value:"-","data-field":"quantity"},on:{click:function(e){return t.$store.commit("decrementValue",e)}}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.kfData.kf_units_red,expression:"kfData.kf_units_red"}],staticClass:"form-control quantity-field border-0 text-center w-25",attrs:{id:"kf_units_red",type:"number",step:"1",name:"quantity"},domProps:{value:t.kfData.kf_units_red},on:{input:function(e){e.target.composing||t.$set(t.kfData,"kf_units_red",e.target.value)}}}),t._v(" "),e("input",{staticClass:"btn button-plus border icon-shape icon-sm lh-0 bg-dark text-light",attrs:{type:"button",value:"+","data-field":"quantity"},on:{click:function(e){return t.$store.commit("incrementValue",e)}}})]),t._v(" "),e("div",{staticClass:"redFlowRateInput d-flex align-items-center w-75"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.kfData.kf_red_flow_rate,expression:"kfData.kf_red_flow_rate"}],staticClass:"redFRInput form-control mx-1 w-100",attrs:{type:"number",id:"kf_red_flow_rate",step:"0.0001"},domProps:{value:t.kfData.kf_red_flow_rate},on:{input:function(e){e.target.composing||t.$set(t.kfData,"kf_red_flow_rate",e.target.value)}}}),t._v(" "),e("div",{staticClass:"redFRLegend"},[t._v("High")])])]),t._v(" "),e("div",{staticClass:"d-flex flex-column justify-content-center align-items-center"},[e("label",{staticClass:"mt-2"},[t._v("Defective / Leaking")]),t._v(" "),e("div",{staticClass:"d-flex justify-content-center input-group w-auto justify-content-end align-items-center"},[e("input",{staticClass:"btn button-minus border icon-shape icon-sm lh-0 bg-dark text-light",attrs:{type:"button",value:"-","data-field":"quantity"},on:{click:function(e){return t.$store.commit("decrementValue",e)}}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.kfData.kf_units_leaking,expression:"kfData.kf_units_leaking"}],staticClass:"form-control quantity-field border-0 text-center w-25",attrs:{id:"kf_units_leaking",type:"number",step:"1",name:"quantity"},domProps:{value:t.kfData.kf_units_leaking},on:{input:function(e){e.target.composing||t.$set(t.kfData,"kf_units_leaking",e.target.value)}}}),t._v(" "),e("input",{staticClass:"btn button-plus border icon-shape icon-sm lh-0 bg-dark text-light",attrs:{type:"button",value:"+","data-field":"quantity"},on:{click:function(e){return t.$store.commit("incrementValue",e)}}})])])])}),[],!1,null,"2a9dc64d",null);e.default=component.exports}}]);