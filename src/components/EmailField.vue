<script setup lang="ts">
    import { EmailField, FieldProps } from '../types';
    import { useField } from 'vee-validate';
    
    const props = defineProps<FieldProps<EmailField>>()
    const { value, errorMessage } = useField(props.configuration.model, () => {
        return true
    });
</script>
<template>
    <label for="username" size="small"><small>{{ props.configuration.label }}</small></label>
    <InputText v-model="(value as string)" :placeholder="props.configuration.placeholder"/>
    {{ errorMessage }}
</template>
<style scoped>
</style>
