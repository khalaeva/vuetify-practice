<template>
    <div class="dashboard">
        <v-container class="my-5">
            <v-row class="mb-3">
                <v-btn 
                class="ml-6" 
                prepend-icon="mdi-folder" 
                variant="text" 
                color="grey"
                @click="sortBy('title')"
                slot="activator"
                >
                    <span class="text-caption text-lowercase">
                        By project name
                    </span>
                    <v-tooltip
                        content-class="custom-tooltip"
                        activator="parent"
                        location="top"
                    >
                    Sort projects by project name
                    </v-tooltip>
                </v-btn>
                <v-btn 
                    class="ml-6" 
                    prepend-icon="mdi-account" 
                    variant="text" 
                    color="grey"
                    @click="sortBy('person')"
                >
                    <span class="text-caption text-lowercase">
                        By person
                    </span>
                    <v-tooltip
                        content-class="custom-tooltip"
                        activator="parent"
                        location="top"
                    >
                    Sort projects by person
                    </v-tooltip>
                </v-btn>
            </v-row>
            <v-card flat v-for="project in projects" :key="project.title" :class="`project ${project.status}`">
                <v-row class="pa-3">
                    <v-col cols="12" sm="12" md="6">
                        <div class="text-caption text-grey">Project Title</div>
                        <div>{{ project.title }}</div>
                    </v-col>
                    <v-col cols="6" sm="4" md="2">
                        <div class="text-caption text-grey">Person</div>
                        <div>{{ project.person }}</div>
                    </v-col>
                    <v-col cols="6" sm="4" md="2">
                        <div class="text-caption text-grey">Due by</div>
                        <div>{{ project.due }}</div>
                    </v-col>
                    <v-col cols="2" sm="4" md="2" class="right">
                        <div style="display:flex; justify-content: end; margin-right: 20px">
                            <v-chip :class="`my-2 text-white ${project.status}`">
                                {{ project.status }}
                            </v-chip>
                        </div>
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

function sortBy(prop) {
    this.projects.sort((a, b) => a[prop] < b[prop] ? -1 : 1)
}
</script>
    
<style lang="scss" scoped>
:global(.custom-tooltip) {
    opacity: 0.8 !important
}
.project.complete{
    border-left: 4px solid #3CD1C2;
}
.project.ongoing{
    border-left: 4px solid orange
}
.project.overdue{
    border-left: 4px solid tomato;
}
.v-chip.complete{
    background: #3CD1C2;
}
.v-chip.ongoing{
    background: orange
}
.v-chip.overdue{
    background: tomato;
}
</style>