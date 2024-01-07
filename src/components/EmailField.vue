<script setup lang="ts">
    import { EmailField, FieldProps } from '../types';
    import { useField } from 'vee-validate';
    import * as yup from 'yup';

    const { configuration } = defineProps<FieldProps<EmailField>>()
    let validator = yup.string().email()

    if(configuration.required) {
        validator = validator.required()
    }
    const { value, errorMessage } = useField(configuration.model, validator);
</script>
<template>
     <div class="flex flex-column gap-1 mt-2">
        <label for="username" size="small"><small>{{ configuration.label }}</small></label>
        <InputText :class="{ 'p-invalid': errorMessage }" v-model="(value as string)" :placeholder="configuration.placeholder"/>
        <small class="p-error">{{ errorMessage }}</small>
    </div>
</template>
<style scoped>
</style>
