<template>
    <div class="team">
        <h1 class="text-h5 text-grey">team</h1>
        <v-container class="my-5">
            <v-row>
                <v-col cols="12" sm="6" md="4" lg="3" v-for="person in team">
                    <v-card flat class="text-center ma-3">
                        <v-responsive class="pt-4">
                            image goes here
                        </v-responsive>
                        <v-card-text>
                            <div class="text-h5">{{ person.name }}</div>
                            <div class="text-grey">{{ person.role }}</div>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script setup>
const team = [
    { name: 'The Net Ninja', role: 'Web developer' },
    { name: 'Ryu', role: 'Graphic designer' },
    { name: 'Chun Li', role: 'Web developer' },
    { name: 'Gouken', role: 'Social media maverick' },
    { name: 'Yoshi', role: 'Sales guru'}
]
</script>