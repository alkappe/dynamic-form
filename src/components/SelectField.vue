<script setup lang="ts">
    import { FieldProps, SelectField } from '../types';
    import { useField } from 'vee-validate';
    import * as yup from 'yup';

    const { configuration } = defineProps<FieldProps<SelectField>>()
    let validator = yup.object()

    if(configuration.required) {
        validator = validator.required()
    }
    const { value, errorMessage } = useField(configuration.model, validator);
</script>
<template>
    <Dropdown v-model="value" optionLabel="label" :placeholder="configuration.label" :options="configuration.options"/>
    {{ errorMessage }}
</template>
<style scoped>
</style>
