<template>
  <v-text-field label="Title" variant="solo" v-model="title"></v-text-field>
  <v-textarea label="Body" variant="solo" v-model="body"></v-textarea>
</template>
<script lang="ts" setup>
const props = defineProps<{
  testTitle: string | null;
  testBody: string | null;
}>();

// 一度変数で受け渡し
const hoge = props.testTitle;
const fuga = props.testBody;

const title = ref(hoge);
const body = ref(fuga);
</script>
