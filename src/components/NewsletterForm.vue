<script setup lang="ts">

import { ref, Ref } from 'vue'
import { FormSchema } from '../types';
import TextField from './TextField.vue'
import EmailField from './EmailField.vue'
import CheckboxField from './CheckboxField.vue'
import SelectField from './SelectField.vue'
// import { useVuelidate } from '@vuelidate/core'
// import { required, email } from '@vuelidate/validators'

const inputData: Ref<null | FormSchema> = ref(null)


const fetchInput = async () => {
  try {
    const response = await fetch(`./../../public/assets/input.json`)
    console.log(response) 
    inputData.value = await response.json()
  } catch (error) {
    console.log(error)
  }
}

console.log(inputData.value)

fetchInput()


// const form: Form = reactive({
//     name: '',
//     email: '',
//     checked1: false,
//     countries: [
//         {
//             label: "United States",
//             value: "USA",
//             code: "US"
//         },
//         {
//             label: "Canada",
//             value: "Canada",
//             code: "CA"
//         },
//         {
//             label: "United Kingdom",
//             value: "UK",
//             code: "GB"
//         },
//         {
//             label: "Australia",
//             value: "Australia",
//             code: "AU"
//         }

//     ],
//     checked2: false,
// })

// const rules = () => {
//     return {
//       name: { required }, 
//       email: { email, required },
//       checked: { required },
//       selectedCountries: { required }
//     }
// }

// useVuelidate(rules,  form)

</script>

<template>
    <div v-if="inputData">
        <h3>Register now and receive a gift 🎁 !</h3>
        <p>Keep in touch with our offers</p>
        <form class="formWrapper">
            <div v-for="field in inputData.fields"  class="flex flex-column gap-1">
                <TextField :configuration="field" v-if="field.type === 'text'"/>
                <EmailField :configuration="field" v-if="field.type === 'email'"/>
                <CheckboxField :configuration="field" v-if="field.type === 'checkbox'"/>
                <SelectField :configuration="field" v-if="field.type === 'select'"/>
            </div>
        </form>
        
    </div>
    <div v-else>
        Loading...
    </div> 

    <!-- <div class="newsletterForm">
        <h3>Register now and receive a gift 🎁 !</h3>
        <p>Keep in touch with our offers</p>
        <form class="formWrapper">
            <div class="flex flex-column gap-1">
                <label for="username"><small>Name</small></label>
                <InputText v-model="form.name" placeholder="John Doe" />
            </div>
            
            <div class="flex flex-column gap-1">
                <label for="username" size="small"><small>Email</small></label>
                <InputText v-model="form.email" placeholder="john@example.com"/>
            </div>
            <div class="flex align-items-center">
                <Checkbox v-model="form.checked1" inputId="checked1" name="check" value="offers"/>
                <label class="ml-2"> Receive updates and special offers </label>
            </div>

            <Dropdown v-model="form.countries" :options="form.countries" optionLabel="label" placeholder="Select a Country"/>

            <div class="flex align-items-center">
                <Checkbox v-model="form.checked1" inputId="checked2" name="check" value="terms"/>
                <label class="ml-2"> I accept the terms and conditions </label>
            </div>
            <Button label="Ok, send data!"></Button>
        </form>
    </div> -->

</template>

<style scoped>

.newsletterForm {
    text-align: start;
    .formWrapper {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
}
</style>
