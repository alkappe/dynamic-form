<script setup lang="ts">
    import { FieldProps, TextField } from '../types';
    import { useField } from 'vee-validate';
    import * as yup from 'yup';

    const { configuration } = defineProps<FieldProps<TextField>>()
    let validator = yup.string()

    if(configuration.required) {
        validator = validator.required()
    }

    if(configuration.minLength) {
        validator = validator.min(configuration.minLength)
    }

    if(configuration.maxLength) {
        validator = validator.max(configuration.maxLength)
    }

    const { value, errorMessage } = useField(configuration.model, validator);
</script>
<template>
    <div class="flex flex-column gap-1">
        <label for="username"><small>{{ configuration.label }}</small></label>
        <InputText :class="{ 'p-invalid': errorMessage }"  v-model="(value as string)" :placeholder="configuration.placeholder"/>
        <small class="p-error">{{ errorMessage }}</small>
    </div>
</template>
<style scoped>
</style>
