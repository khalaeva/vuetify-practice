<template>
    <div class="text-center">
        <v-btn
            flat
            color="green-lighten-2"
        >Open Dialog
          <v-dialog
            v-model="dialog"
            activator="parent"
            max-width="600px"
          >
            <v-card>
              <v-card-title>Add a New project</v-card-title>
              <v-card-text>
                <v-form class="px-3">
                    <v-text-field variant="outlined" label="Title" v-model="title" prepend-icon="mdi-folder"></v-text-field>
                    <v-textarea variant="outlined" label="Information" v-model="content" prepend-icon="mdi-pencil"></v-textarea>

                        <v-dialog width="auto">
                            <template v-slot:activator="{ props }">
                                <v-text-field 
                                    v-model="due"
                                    variant="outlined"
                                    v-bind="props"
                                    label="Due date"
                                    prepend-icon="mdi-calendar"
                                ></v-text-field>
                            </template>
                            <v-date-picker v-model="due"></v-date-picker>
                        </v-dialog>

                    <v-btn color="grey" flat class="ml-3 mb-3" @click="Submit()">Add project</v-btn>
                </v-form>
              </v-card-text>
            </v-card>
          </v-dialog>
        </v-btn>
      </div>
</template>

<script setup>
import { ref } from 'vue';

const dialog = ref(false)

const title = ref('')
const content = ref('')
const due = ref(null)

function Submit() {
    dialog.value = !dialog.value
    console.log(title, content)
}
</script>