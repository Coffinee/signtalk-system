<template>
    <div class="p-3 h-screen w-full">
        
    </div>
</template>
<script setup>
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark();
const toggleDark = useToggle(isDark);
 
</script>