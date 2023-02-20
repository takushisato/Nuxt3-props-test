<template>
  <v-text-field label="Title" variant="solo" v-model="title"></v-text-field>
  <v-textarea label="Body" variant="solo" v-model="body"></v-textarea>
</template>
<script lang="ts" setup>
import { getRevisionItemData } from "~/composables/getDataAPI";

const dummyData = getRevisionItemData();

const title = ref((await dummyData).testTitle);
const body = ref((await dummyData).testBody);
</script>
