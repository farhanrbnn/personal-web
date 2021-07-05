<template>
    <div id="notFound">
        <b-container id="container">
            <b-row>
                <b-col>
                    <img id="img" alt="Page Not Found" v-bind:src="require('@/assets/404.svg')">
                    <h4>Page Not Found</h4>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
    name: 'notFound'

}
</script>

<style scoped>
#img {
    width: 400px;
    height: 400px;
}

#container {
    padding-bottom: 76px;
}

</style>