<script setup lang="ts">
    import { CheckboxField, FieldProps } from '../types';
    const props = defineProps<FieldProps<CheckboxField>>()
    
</script>
<template>
    <div class="flex align-items-center">
        <Checkbox inputId="checked1" name="check" value="offers"/>
        <label class="ml-2">{{ props.configuration.description }}</label>
    </div>
</template>
<style scoped>
</style>
