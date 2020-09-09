<template>
	<div id="aboutMe">
		<h1>ABOUT</h1>
		<div>
			<img v-bind:src="require('@/assets/farhan.jpg')" width="200">
			<h3>{{text}}</h3>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'aboutMe',
		data: function(){
			return{
			text: "Hello, my name is Farhan Rabbaanii. i'm computer engineering fresh graduate from BINUS University. I have intereset in full-stack web development, machine learning and computer vision"	
			}
		}
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

	h3 {
		margin: 0 auto;
		width: 900px;
		margin-bottom: 20px;
	}
</style>