<script setup lang="ts">
    import { CheckboxField, FieldProps } from '../types';
    import { useField } from 'vee-validate';
    import * as yup from 'yup';

    const { configuration } = defineProps<FieldProps<CheckboxField>>()
    let validator = yup.boolean()

    if(configuration.required) {
        validator = validator.required()
    }
    const { value, errorMessage } = useField(configuration.model, validator);
</script>
<template>
    <div class="flex flex-column gap-1 mt-2">
        <div class="flex gap-1">
            <Checkbox :class="{ 'p-invalid': errorMessage }" v-model="value" :binary="true"/>
            <label class="ml-1">{{ configuration.description }}</label>
        </div>
        <small class="p-error">{{ errorMessage }}</small>
    </div>
</template>
<style scoped>
</style>
