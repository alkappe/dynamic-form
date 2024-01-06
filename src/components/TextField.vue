<script setup lang="ts">
    import { FieldProps, TextField } from '../types';

    const props = defineProps<FieldProps<TextField>>()
    console.log(props)

</script>
<template>
    <div class="flex flex-column gap-1">
        <label for="username"><small>Name</small></label>
        <InputText placeholder="John Doe" />
    </div>
</template>
<style scoped>
</style>
