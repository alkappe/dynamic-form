<script setup lang="ts">
    import { FieldProps, TextField } from '../types';
    import { useField } from 'vee-validate';

    const props = defineProps<FieldProps<TextField>>()
    const { value, errorMessage } = useField(props.configuration.model, () => {
        return true
    });
</script>
<template>
    <div class="flex flex-column gap-1">
        <label for="username"><small>Name</small></label>
        <InputText v-model="(value as string)" :placeholder="props.configuration.placeholder"/>
        {{ errorMessage }}
    </div>
</template>
<style scoped>
</style>
