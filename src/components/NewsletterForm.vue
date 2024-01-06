<script setup lang="ts">

import { ref, Ref } from 'vue'
import { FormSchema } from '../types';
import TextField from './TextField.vue'
import EmailField from './EmailField.vue'
import CheckboxField from './CheckboxField.vue'
import SelectField from './SelectField.vue'
import { useForm } from 'vee-validate';

const formData: Ref<null | FormSchema> = ref(null)
const { handleSubmit, resetForm } = useForm();

const onSubmit = handleSubmit((values) => {
    console.log(values)
    if (values.value && values.value.length > 0) {
        console.log(values.value)
        resetForm();
    }
});

const fetchInput = async () => {
  try {
    const response = await fetch(`./../../public/assets/input.json`)
    formData.value  = await response.json()
  } catch (error) {
    console.log(error)
  }
}

fetchInput()

</script>

<template>
    <div v-if="formData">
        <h3>Register now and receive a gift 🎁 !</h3>
        <p>Keep in touch with our offers</p>
        <form @submit="onSubmit" class="formWrapper">
            <div v-for="field in formData.fields"  class="flex flex-column gap-1">
                <TextField  :configuration="field" v-if="field.type === 'text'"/>
                <EmailField :configuration="field" v-if="field.type === 'email'"/>
                <CheckboxField :configuration="field" v-if="field.type === 'checkbox'"/>
                <SelectField :configuration="field" v-if="field.type === 'select'"/>
            </div>
            <Button type="submit" label="Ok, submit data!"></Button>
        </form>
    </div>
    <div v-else>
        Loading...
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
