<template>
	<div id="mainPage">
		<h3 align="center">Farhan Rabbaanii</h3>
		<img v-bind:src="require('@/assets/computer.jpg')" width="1900" height="900">
	</div>
</template>

<script>
	export default {

	}
</script>

<style scoped>
	h3 {
		position: absolute;
		margin-top: 100px;
		width: 1900px;
		font-size: 60px;

	}
	#mainPage {
		margin-bottom: 100px;
	}
	
</style>
