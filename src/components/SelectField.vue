<script setup lang="ts">
    import { FieldProps, SelectField } from '../types';

    const props = defineProps<FieldProps<SelectField>>()
</script>
<template>
    <Dropdown optionLabel="label" :placeholder="props.configuration.label" :options="props.configuration.options"/>
</template>
<style scoped>
</style>
