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
    <div class="flex align-items-center">
        <Checkbox v-model="value" :binary="true"/>
        <label class="ml-2">{{ configuration.description }}</label>
        {{ errorMessage }}
    </div>
</template>
<style scoped>
</style>
