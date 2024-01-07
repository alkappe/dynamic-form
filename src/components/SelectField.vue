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
    <div class="flex flex-column gap-1 mt-3">
        <Dropdown :class="{ 'p-invalid': errorMessage }" v-model="value" optionLabel="label" :placeholder="configuration.label" :options="configuration.options"/>
        <small class="p-error">{{ errorMessage }}</small>
    </div>
</template>
<style scoped>
</style>
