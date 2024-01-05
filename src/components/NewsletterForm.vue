<script setup lang="ts">

import { reactive } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'


// defineProps<{ name: string }>()

type Form = {
    name: string
    email: string
    checked1: boolean,
    countries: {
        label: string,
        value: string
    }[],
    checked2: boolean,
}

const form: Form = reactive({
    name: '',
    email: '',
    checked1: false,
    countries: [
        {
            label: "United States",
            value: "USA",
            code: "US"
        },
        {
            label: "Canada",
            value: "Canada",
            code: "CA"
        },
        {
            label: "United Kingdom",
            value: "UK",
            code: "GB"
        },
        {
            label: "Australia",
            value: "Australia",
            code: "AU"
        }

    ],
    checked2: false,
})

const rules = () => {
    return {
      name: { required }, 
      email: { email, required },
      checked: { required },
      selectedCountries: { required }
    }
}

const v$ = useVuelidate(rules,  form)
console.log(v$)

</script>

<template>
    <div class="newsletterForm">
        <h3>Register now and receive a gift 🎁 !</h3>
        <p>Keep in touch with our offers</p>
        <form class="formWrapper">
            <InputText v-model="form.name" placeholder="John Doe" />
            <InputText v-model="form.email" placeholder="john@example.com"/>
            <div class="flex align-items-center">
                <Checkbox v-model="form.checked1" inputId="checked1" name="check" value="offers"/>
                <label class="ml-4"> Receive updates and special offers </label>
            </div>

            <Dropdown v-model="form.countries" :options="form.countries" optionLabel="label" placeholder="Select a Country" class="w-full md:w-14rem" />

            <div class="flex align-items-center">
                <Checkbox v-model="form.checked1" inputId="checked2" name="check" value="terms"/>
                <label class="ml-4"> I accept the terms and conditions </label>
            </div>
            <Button label="Start"></Button>
        </form>
    </div>

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
