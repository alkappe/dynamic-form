<script setup lang="ts">
    import { EmailField, FieldProps } from '../types';

    const props = defineProps<FieldProps<EmailField>>()
    console.log(props)

</script>
<template>
    <label for="username" size="small"><small>{{ props.configuration.label }}</small></label>
    <InputText :placeholder="props.configuration.placeholder"/>
</template>
<style scoped>
</style>
