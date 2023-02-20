<template>
  <div class="container">
    <h1>Props Test</h1>
    <!-- ：なしで直接の入力だと上手くいく（しかし変数が使えない） -->
    <SampleComponent testBody="testBody" testTitle="testTitle" />

    <!-- これだと上手くいかない。現状エラーにもならない -->
    <!-- <SampleComponent :testBody="testBody" :testTitle="testTitle" /> -->
  </div>
</template>
<script>
let testTitle = "プロップスたいとる";
let testBody = "プロップスぼでぃ";
</script>
<style scoped>
.container {
  width: 800px;
  margin: auto;
}
</style>
