<template>
	<div id="aboutMe">
		<h1>ABOUT</h1>
		<div>
			<img v-bind:src="require('@/assets/farhan.jpg')" width="200">
		</div>
	</div>
</template>

<script>
	export default {

	}
</script>

<style scoped>
	h1 {
		border-bottom: 4px solid black;
		margin: 0 auto;
		width: 150px;
	}

	img {
		margin-top: 30px;
		border-radius: 50%;
	}
</style>