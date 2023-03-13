<template>
<div>
	<!-- <div class="progressDisplayBar"></div> -->
    <div id="containerBuildingDetails" class="p-3">
		<div class="headingBuildingDetails">
			<h2>Building Details</h2>
		</div>
				<div class="dateOfAudit">
					<h6>Date Of Audit</h6>
					<input id="auditDate" v-model="buildingDetails.date" class="form-control" type="date" autocomplete="off"/>
				</div>
				<div class="locationName">
					<input id="auditLocation" v-model="buildingDetails.location" class="form-control" type="text" placeholder="Location Name" autocomplete="off"/>
				</div>
				<div class="buildingAddress">
					<input id="auditAddress" v-model="buildingDetails.address" class="form-control" type="text" placeholder="Building Address" autocomplete="off"/>
				</div>
				<div class="buildingAge">
					<input id="buildingAge" v-model="buildingDetails.building_age" class="form-control" type="number" placeholder="Building Age (Years)" autocomplete="off"/>
				</div>
				<div class="meterModel">
					<input id="buildingMeterModel" v-model="buildingDetails.meter_model" class="form-control" type="text" placeholder="Meter Model" autocomplete="off"/>
				</div>
				<select id="buildingMeterType" v-model="buildingDetails.meter_type" class="meterType form-control">
					<option disabled value>Meter Type</option>
					<option value="1">Single</option>
					<option value="0">Compound</option>
				</select>
				<div class="totalUnits">
					<input id="totalUnits" v-model="buildingDetails.total_units" class="form-control" type="number" placeholder="Total Units" autocomplete="off"/>
				</div>
				<div class="floors">
					<input id="floors" v-model="buildingDetails.floors" class="form-control" type="number" placeholder="Floors" autocomplete="off"/>
				</div>
				<div class="audittedUnits">
					<input id="audittedUnits" v-model="buildingDetails.auditted_units" class="form-control" placeholder="Audited Units (10% total units)" autocomplete="off"></input>
				</div>
				<div class="occupancy">
					<input id="occupancy" v-model="buildingDetails.occupancy" class="form-control" type="number" placeholder="Occupancy %" autocomplete="off"/>
				</div>
				<div class="sharedLaundry">
					<h6>Shared Laundry</h6>
					<select id="sharedLaundry" v-model="buildingDetails.shared_laundry" class="form-control">
						<option disabled value>
							Select An Option
						</option>
						<option value="2">N/A</option>
						<option value="1">Yes</option>
						<option value="0">No</option>
					</select>
				</div>
	</div>
	<div class="navButtons d-inline d-flex justify-content-around m-3">
		<button type="button" @click.prevent="$emit('getPrev', 1)">Previous</button>
		<button type="button" @click.prevent="$emit('getNext', 3)">Continue</button>
    </div>
</div>
</template>

<script>
export default {
computed: {
	buildingDetails() {
		return this.$store.state.buildingData
	}
},
	mounted() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  },
}
</script>

<style scoped>
	#containerBuildingDetails {
    font-family: "Fira Sans", sans-serif;
    border: 5px solid #749399;
	border-radius: 10px;
    display: grid;
    grid-auto-columns: 1fr 1fr;
    grid-gap: 10px;
    grid-template-areas:
        "headingBuildingDetails headingBuildingDetails"
        "dateOfAudit dateOfAudit"
        "locationName locationName"
        "buildingAddress age"
        "meterModel meterType"
        "totalUnits floors"
        "audittedUnits occupancy"
        "sharedLaundry sharedLaundry";
}

.headingBuildingDetails {
    text-align: center;
    grid-area: headingBuildingDetails;
    height: 50px;
}
.dateOfAudit {
    grid-area: dateOfAudit;
}
.locationName {
    grid-area: locationName;
}
.buildingAddress {
    grid-area: buildingAddress;
}
.buildingAge {
    grid-area: age;
}
.meterModel {
    grid-area: meterModel;
}
.meterType {
    grid-area: meterType;
}
.totalUnits {
    grid-area: totalUnits;
}
.floors {
    grid-area: floors;
}
.audittedUnits {
    grid-area: audittedUnits;
}
.occupancy {
    grid-area: occupancy;
}
.sharedLaundry {
    grid-area: sharedLaundry;
}

.divider {
    background-color: #00935b;
    width: 20px;
    height: 50px;
}

.select-text {
   font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.submit {
    background-color: #292561 !important;
    color: white !important;
}
</style>