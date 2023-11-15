<template>
<nav>
    <v-toolbar class="bg-grey-lighten-4">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="text-grey ma-0"></v-app-bar-nav-icon>
        <v-toolbar-title class="text-uppercase text-grey">
            <span class="font-weight-light">Todo</span>
            <span>Ninja</span>
        </v-toolbar-title>
        <v-btn flat color="grey">
            <span>Sign Out</span>
            <v-icon>mdi-logout-variant</v-icon>
        </v-btn>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" class="bg-primary">
        <v-list class="mt-7">
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

const drawer = ref(false)
const items = [
    { icon: 'mdi-view-dashboard', text: 'Dashboard', route: '/' },
    { icon: 'mdi-folder', text: 'My Projects', route: '/projects' },
    { icon: 'mdi-account', text: 'Team', route: '/team' },
]
</script>