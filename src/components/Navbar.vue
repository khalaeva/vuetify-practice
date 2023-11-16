<template>
<nav>
    <v-toolbar class="bg-grey-lighten-4">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="text-grey ma-0"></v-app-bar-nav-icon>
        <v-toolbar-title class="text-uppercase text-grey">
            <span class="font-weight-light">Todo</span>
            <span>Ninja</span>
        </v-toolbar-title>

        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn color="grey" v-bind="props">
              <v-icon>mdi-chevron-down</v-icon>
              Menu
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="link in items"
              :key="link.text"
              router :to="link.route"
              color="primary"
            >
              <v-list-item-title>{{ link.text }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-btn flat color="grey">
            <span>Sign Out</span>
            <v-icon>mdi-logout-variant</v-icon>
        </v-btn>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" class="bg-deep-purple-lighten-1" width="350">
        <v-col class="mb-5 mt-3">
            <v-row justify="center" class="mt-5">
                <v-avatar size="130">
                    <v-img src="/avatar-1.png"></v-img>
                </v-avatar>
            </v-row>
            <v-row justify="center">
                <p class="text-white text-h5 mt-1" >
                    The Net Ninja
                </p>
            </v-row>
            <v-row justify="center" class="mt-7">
              <popup/>
            </v-row>
        </v-col>
        <v-list>
            <v-list-item
                v-for="(item, i) in items"
                :key="i"
                router :to="item.route"
            >
                <template v-slot:prepend>
                <v-icon :icon="item.icon"></v-icon>
                </template>
                <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</nav>
</template>

<script setup>
import { ref } from 'vue';
import Popup from '@/components/Popup.vue'

const drawer = ref(false)
const items = [
    { icon: 'mdi-view-dashboard', text: 'Dashboard', route: '/' },
    { icon: 'mdi-folder', text: 'My Projects', route: '/projects' },
    { icon: 'mdi-account', text: 'Team', route: '/team' },
]
</script>