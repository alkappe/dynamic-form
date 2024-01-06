<script setup lang="ts">
    import { FieldProps, SelectField } from '../types';
    import { useField } from 'vee-validate';

    const props = defineProps<FieldProps<SelectField>>()
    const { value, errorMessage } = useField(props.configuration.model, () => {
        return true
    });
</script>
<template>
    <Dropdown v-model="value" optionLabel="label" :placeholder="props.configuration.label" :options="props.configuration.options"/>
    {{ errorMessage }}
</template>
<style scoped>
</style>
