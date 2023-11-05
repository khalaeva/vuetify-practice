<template>
    <div class="dashboard">
        <h1 class="text-h5 text-grey">This is an about page</h1>
        <v-container class="my-5">
            <v-card flat v-for="project in projects" :key="project.title" :class="project.status">
                <v-row class="pa-3">
                    <v-col cols="12" sm="12" md="6">
                        <div class="caption text-grey">Project Title</div>
                        <div>{{ project.title }}</div>
                    </v-col>
                    <v-col cols="6" sm="4" md="2">
                        <div class="caption text-grey">Person</div>
                        <div>{{ project.person }}</div>
                    </v-col>
                    <v-col cols="6" sm="4" md="2">
                        <div class="caption text-grey">Due by</div>
                        <div>{{ project.due }}</div>
                    </v-col>
                    <v-col cols="2" sm="4" md="2">
                        <div class="caption text-grey">Status</div>
                        <div>{{ project.status }}</div>
                    </v-col>
                </v-row> 
                <v-divider></v-divider>
            </v-card>
        </v-container>
    </div>
</template>
    
<script setup>
import { ref } from 'vue';

const projects = ref([
    { title: 'Design a new website', person: 'The Net Ninja', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
    { title: 'Code up the homepage', person: 'Chun Li', due: '10th Jan 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
    { title: 'Design video thumbnails', person: 'Ryu', due: '20th Dec 2018', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
    { title: 'Create a community forum', person: 'Gouken', due: '20th Oct 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
])
</script>
    
<style lang="scss" scoped>
.complete{
    border-left: 4px solid #3CD1C2;
}
.ongoing{
    border-left: 4px solid orange
}
.overdue{
    border-left: 4px solid tomato;
}
</style>