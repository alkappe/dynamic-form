<script setup lang="ts">

import { ref, Ref } from 'vue'
import { FormSchema } from '../types';
import TextField from './TextField.vue'
import EmailField from './EmailField.vue'
import CheckboxField from './CheckboxField.vue'
import SelectField from './SelectField.vue'
import { useForm } from 'vee-validate';

const formData: Ref<null | FormSchema> = ref(null)
const { handleSubmit, resetForm, meta } = useForm();

const onSubmit = handleSubmit((values) => {
    console.log('values', values)
    if (values.value && values.value.length > 0) {
        resetForm();
    }
});
const fetchInput = async () => {
  try {
    const response = await fetch(`./../../assets/input.json`)
    formData.value  = await response.json()
  } catch (error) {
    console.log(error)
  }
}

fetchInput()

</script>

<template>
    <div v-if="formData" class="newsletterForm">
        <div class="my-4">
            <h3 class="mt-2">Register now and receive a gift 🎁 !</h3>
            <p class="mt-1">Keep in touch with our offers</p>
        </div>
        <form @submit="onSubmit">
            <div v-for="field in formData.fields"  class="fieldsWrapper flex flex-column gap-1">
                <TextField  :configuration="field" v-if="field.type === 'text'"/>
                <EmailField :configuration="field" v-if="field.type === 'email'"/>
                <CheckboxField :configuration="field" v-if="field.type === 'checkbox'"/>
                <SelectField :configuration="field" v-if="field.type === 'select'"/>
            </div>
            <div class="card flex justify-content-center">
                <Button :disabled="!meta.valid" type="submit" class="mt-4" label="Ok, submit data!"></Button>
            </div>
        </form>
    </div>
    <div v-else>
        😴 Loading...
    </div> 
</template>

<style scoped>

.newsletterForm {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 320px;
    min-height: 100vh;
    .fieldsWrapper {
        text-align: start;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

}
</style>
