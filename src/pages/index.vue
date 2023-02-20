<template>
  <div class="container">
    <h1>Props Test</h1>
    <SampleComponent :testBody="testBody" :testTitle="testTitle" />
  </div>
</template>
<script setup>
let testTitle = "";
let testBody = "";

// 初期値の空文字が渡される
async function testFetch() {
  const { data } = await useFetch("");
  testTitle = "テストタイトル";
  testBody = "テストボディ";
}

// async await じゃなければ値は更新される
// function testFetch() {
//   testTitle = "テストタイトル";
//   testBody = "テストボディ";
// }
testFetch();
</script>
<style scoped>
.container {
  width: 800px;
  margin: auto;
}
</style>
