(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{325:function(t,e,n){var content=n(337);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(112).default)("728f5799",content,!0,{sourceMap:!1})},336:function(t,e,n){"use strict";n(325)},337:function(t,e,n){var o=n(111)((function(i){return i[1]}));o.push([t.i,"#t_green_flow_rate[data-v-91bf69dc]::-moz-placeholder{font-size:.84rem}#t_green_flow_rate[data-v-91bf69dc]::placeholder{font-size:.84rem}",""]),o.locals={},t.exports=o},349:function(t,e,n){"use strict";n.r(e);n(15),n(2),n(1);var o={name:"audittedToilets",computed:{baselineFlowRate:function(){return this.$store.state.waterInformationData.t_proposed_consumption_rate},tData:function(){return this.$store.state.pointOfUseAuditData}}},r=(n(336),n(68)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("li",{staticClass:"cardFixtures mb-4 d-flex flex-column"},[e("h5",[t._v("Toilets")]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"d-flex"},[e("div",{staticClass:"d-flex justify-content-center input-group w-auto justify-content-end align-items-center"},[e("input",{staticClass:"btn button-minus border icon-shape icon-sm lh-0 bg-dark text-light",attrs:{type:"button",value:"-","data-field":"quantity"},on:{click:function(e){return t.$store.commit("decrementValue",e)}}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tData.t_units_green,expression:"tData.t_units_green"}],staticClass:"form-control quantity-field border-0 text-center w-25",attrs:{id:"t_units_green",type:"number",step:"1",name:"quantity"},domProps:{value:t.tData.t_units_green},on:{input:function(e){e.target.composing||t.$set(t.tData,"t_units_green",e.target.value)}}}),t._v(" "),e("input",{staticClass:"btn button-plus border icon-shape icon-sm lh-0 bg-dark text-light",attrs:{type:"button",value:"+","data-field":"quantity"},on:{click:function(e){return t.$store.commit("incrementValue",e)}}})]),t._v(" "),e("div",{staticClass:"greenFlowRateInput d-flex align-items-center w-75"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.baselineFlowRate,expression:"baselineFlowRate"}],staticClass:"greenFRInput form-control mx-1 w-100 bg-light",attrs:{type:"number",id:"t_green_flow_rate",step:"0.000001",placeholder:"Set Baseline In Previous Step",disabled:""},domProps:{value:t.baselineFlowRate},on:{input:function(e){e.target.composing||(t.baselineFlowRate=e.target.value)}}}),t._v(" "),e("div",{staticClass:"greenFRLegend"},[t._v("B")])]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.tData.t_measurement_unit_green,expression:"tData.t_measurement_unit_green"}],staticClass:"tMeasurementUnitSelect form-control w-50 py-2",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.tData,"t_measurement_unit_green",e.target.multiple?n:n[0])}}},[e("option",{attrs:{disabled:"",value:""}},[t._v("Select")]),t._v(" "),e("option",{attrs:{value:"gallons"}},[t._v("Gallons")]),t._v(" "),e("option",{attrs:{value:"liters"}},[t._v("Liters")])])]),t._v(" "),e("div",{staticClass:"d-flex"},[e("div",{staticClass:"d-flex justify-content-center input-group w-auto justify-content-end align-items-center"},[e("input",{staticClass:"btn button-minus border icon-shape icon-sm lh-0 bg-dark text-light",attrs:{type:"button",value:"-","data-field":"quantity"},on:{click:function(e){return t.$store.commit("decrementValue",e)}}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tData.t_units_yellow,expression:"tData.t_units_yellow"}],staticClass:"form-control quantity-field border-0 text-center w-25",attrs:{id:"t_units_yellow",type:"number",step:"1",name:"quantity"},domProps:{value:t.tData.t_units_yellow},on:{input:function(e){e.target.composing||t.$set(t.tData,"t_units_yellow",e.target.value)}}}),t._v(" "),e("input",{staticClass:"btn button-plus border icon-shape icon-sm lh-0 bg-dark text-light",attrs:{type:"button",value:"+","data-field":"quantity"},on:{click:function(e){return t.$store.commit("incrementValue",e)}}})]),t._v(" "),e("div",{staticClass:"yellowFlowRateInput d-flex align-items-center w-75"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.tData.t_yellow_flow_rate,expression:"tData.t_yellow_flow_rate"}],staticClass:"form-control mx-1 w-100",attrs:{type:"number",id:"t_yellow_flow_rate",step:"0.000001"},domProps:{value:t.tData.t_yellow_flow_rate},on:{input:function(e){e.target.composing||t.$set(t.tData,"t_yellow_flow_rate",e.target.value)}}}),t._v(" "),e("div",{staticClass:"yellowFRLegend"},[t._v("L")])]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.tData.t_measurement_unit_yellow,expression:"tData.t_measurement_unit_yellow"}],staticClass:"tMeasurementUnitSelect form-control w-50 py-2",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.tData,"t_measurement_unit_yellow",e.target.multiple?n:n[0])}}},[e("option",{attrs:{disabled:"",value:""}},[t._v("Select")]),t._v(" "),e("option",{attrs:{value:"gallons"}},[t._v("Gallons")]),t._v(" "),e("option",{attrs:{value:"liters"}},[t._v("Liters")])])]),t._v(" "),e("div",{staticClass:"d-flex"},[e("div",{staticClass:"d-flex justify-content-center input-group w-auto justify-content-end align-items-center"},[e("input",{staticClass:"btn button-minus border icon-shape icon-sm lh-0 bg-dark text-light",attrs:{type:"button",value:"-","data-field":"quantity"},on:{click:function(e){return t.$store.commit("decrementValue",e)}}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tData.t_units_orange,expression:"tData.t_units_orange"}],staticClass:"form-control quantity-field border-0 text-center w-25",attrs:{id:"t_units_orange",type:"number",step:"1",name:"quantity"},domProps:{value:t.tData.t_units_orange},on:{input:function(e){e.target.composing||t.$set(t.tData,"t_units_orange",e.target.value)}}}),t._v(" "),e("input",{staticClass:"btn button-plus border icon-shape icon-sm lh-0 bg-dark text-light",attrs:{type:"button",value:"+","data-field":"quantity"},on:{click:function(e){return t.$store.commit("incrementValue",e)}}})]),t._v(" "),e("div",{staticClass:"orangeFlowRateInput d-flex align-items-center w-75"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.tData.t_orange_flow_rate,expression:"tData.t_orange_flow_rate"}],staticClass:"orangeFRInput form-control mx-1 w-100",attrs:{type:"number",id:"t_orange_flow_rate",step:"0.000001"},domProps:{value:t.tData.t_orange_flow_rate},on:{input:function(e){e.target.composing||t.$set(t.tData,"t_orange_flow_rate",e.target.value)}}}),t._v(" "),e("div",{staticClass:"orangeFRLegend"},[t._v("M")])]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.tData.t_measurement_unit_orange,expression:"tData.t_measurement_unit_orange"}],staticClass:"tMeasurementUnitSelect form-control w-50 py-2",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.tData,"t_measurement_unit_orange",e.target.multiple?n:n[0])}}},[e("option",{attrs:{disabled:"",value:""}},[t._v("Select")]),t._v(" "),e("option",{attrs:{value:"gallons"}},[t._v("Gallons")]),t._v(" "),e("option",{attrs:{value:"liters"}},[t._v("Liters")])])]),t._v(" "),e("div",{staticClass:"d-flex"},[e("div",{staticClass:"d-flex justify-content-center input-group w-auto justify-content-end align-items-center"},[e("input",{staticClass:"btn button-minus border icon-shape icon-sm lh-0 bg-dark text-light",attrs:{type:"button",value:"-","data-field":"quantity"},on:{click:function(e){return t.$store.commit("decrementValue",e)}}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tData.t_units_red,expression:"tData.t_units_red"}],staticClass:"form-control quantity-field border-0 text-center w-25",attrs:{id:"t_units_red",type:"number",step:"1",name:"quantity"},domProps:{value:t.tData.t_units_red},on:{input:function(e){e.target.composing||t.$set(t.tData,"t_units_red",e.target.value)}}}),t._v(" "),e("input",{staticClass:"btn button-plus border icon-shape icon-sm lh-0 bg-dark text-light",attrs:{type:"button",value:"+","data-field":"quantity"},on:{click:function(e){return t.$store.commit("incrementValue",e)}}})]),t._v(" "),e("div",{staticClass:"redFlowRateInput d-flex align-items-center w-75"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.tData.t_red_flow_rate,expression:"tData.t_red_flow_rate"}],staticClass:"redFRInput form-control mx-1 w-100",attrs:{type:"number",id:"t_red_flow_rate",step:"0.000001"},domProps:{value:t.tData.t_red_flow_rate},on:{input:function(e){e.target.composing||t.$set(t.tData,"t_red_flow_rate",e.target.value)}}}),t._v(" "),e("div",{staticClass:"redFRLegend"},[t._v("H")])]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.tData.t_measurement_unit_red,expression:"tData.t_measurement_unit_red"}],staticClass:"tMeasurementUnitSelect form-control w-50 py-2",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.tData,"t_measurement_unit_red",e.target.multiple?n:n[0])}}},[e("option",{attrs:{disabled:"",value:""}},[t._v("Select")]),t._v(" "),e("option",{attrs:{value:"gallons"}},[t._v("Gallons")]),t._v(" "),e("option",{attrs:{value:"liters"}},[t._v("Liters")])])]),t._v(" "),e("div",{staticClass:"d-flex flex-column justify-content-center align-items-center"},[e("label",{staticClass:"mt-2"},[t._v("Defective / Leaking")]),t._v(" "),e("div",{staticClass:"d-flex justify-content-center input-group w-auto justify-content-end align-items-center"},[e("input",{staticClass:"btn button-minus border icon-shape icon-sm lh-0 bg-dark text-light",attrs:{type:"button",value:"-","data-field":"quantity"},on:{click:function(e){return t.$store.commit("decrementValue",e)}}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tData.t_units_leaking,expression:"tData.t_units_leaking"}],staticClass:"form-control quantity-field border-0 text-center w-25",attrs:{id:"t_units_leaking",type:"number",step:"1",name:"quantity"},domProps:{value:t.tData.t_units_leaking},on:{input:function(e){e.target.composing||t.$set(t.tData,"t_units_leaking",e.target.value)}}}),t._v(" "),e("input",{staticClass:"btn button-plus border icon-shape icon-sm lh-0 bg-dark text-light",attrs:{type:"button",value:"+","data-field":"quantity"},on:{click:function(e){return t.$store.commit("incrementValue",e)}}})])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-flex justify-content-between"},[e("h6",[t._v("Audited Fixtures")]),t._v(" "),e("h6",[t._v("Consumption Rate Per Flush")]),t._v(" "),e("h6",[t._v("Measurement Unit")])])}],!1,null,"91bf69dc",null);e.default=component.exports}}]);