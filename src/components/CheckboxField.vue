<script setup lang="ts">
    import { CheckboxField, FieldProps } from '../types';
    import { useField } from 'vee-validate';

    const props = defineProps<FieldProps<CheckboxField>>()
    const { value, errorMessage } = useField(props.configuration.model, () => {
        return true
    });
</script>
<template>
    <div class="flex align-items-center">
        <Checkbox v-model="value" :binary="true"/>
        <label class="ml-2">{{ props.configuration.description }}</label>
        {{ errorMessage }}
    </div>
</template>
<style scoped>
</style>
