<template>
  <div class="team">
    <v-container class="my-5">
      <v-row>
        <v-col cols="12" sm="6" md="4" lg="3" v-for="person in team">
          <v-card flat class="text-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100" color="grey-lighten-2">
                <v-img :src="person.avatar"></v-img>
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="text-h5">{{ person.name }}</div>
              <div class="text-grey">{{ person.role }}</div>
            </v-card-text>
            <v-card-actions class="ml-5">
              <v-btn variant="text" color="grey" class="mb-3">
                  <v-icon small flat class="mr-2">
                      mdi-message
                  </v-icon>
                  <span>Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
const team = [
    { name: 'The Net Ninja', role: 'Web developer', avatar: '/avatar-1.png' },
    { name: 'Ryu', role: 'Graphic designer', avatar: '/avatar-2.png'},
    { name: 'Chun Li', role: 'Web developer', avatar: '/avatar-3.png'},
    { name: 'Gouken', role: 'Social media maverick', avatar: '/avatar-4.png'},
    { name: 'Yoshi', role: 'Sales guru', avatar: '/avatar-5.png'}
]
</script>