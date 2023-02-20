<template>
  <v-text-field label="Title" variant="solo" v-model="title"></v-text-field>
  <v-textarea label="Body" variant="solo" v-model="body"></v-textarea>
</template>
<script lang="ts" setup>
import { useTest } from "~~/src/pages/index.vue";

const test = useTest();

const title = ref(test.testTitle);
const body = ref(test.testBody);
</script>
