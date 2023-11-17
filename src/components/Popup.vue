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
                <v-form class="px-3" ref="form">
                    <v-text-field 
                      variant="outlined" 
                      label="Title" 
                      v-model="title" 
                      prepend-icon="mdi-folder"
                      :rules="inputRules"
                      class="mb-4"
                    >
                    </v-text-field>
                    <v-textarea 
                      variant="outlined" 
                      label="Information" 
                      v-model="content" 
                      prepend-icon="mdi-pencil"
                      :rules="inputRules"
                      class="mb-4"
                    ></v-textarea>

                        <v-dialog width="auto">
                            <template v-slot:activator="{ props }">
                                <v-text-field 
                                    v-model="formattedDate"
                                    variant="outlined"
                                    v-bind="props"
                                    label="Due date"
                                    prepend-icon="mdi-calendar"
                                ></v-text-field>
                            </template>
                            <v-date-picker v-model="due"></v-date-picker>
                        </v-dialog>

                    <v-btn color="grey" flat class="ml-3 mb-3" @click="submit()">Add project</v-btn>
                </v-form>
              </v-card-text>
            </v-card>
          </v-dialog>
        </v-btn>
      </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import format from 'date-fns/format'

const form = ref(null)

const dialog = ref(false)

const title = ref('')
const content = ref('')
const due = ref(null)

const inputRules = [
  v => v.length >= 3 || 'Minimum length is 3 characters'
]

function validate() {
  return form.value.validate().then(value => {
    return value.valid
  })
}

async function submit() {
    const valid = await validate()
    if (valid) {
      dialog.value = !dialog.value
      console.log(title, content)
    }
}

const formattedDate = computed(() => {
  if (due.value) {
    return format(due.value, 'do MMM yyyy')
  }
  return due.value
})
</script>