<template>
  <div class="container">
    <h1>Props Test</h1>
    <SampleComponent :testBody="testBody" :testTitle="testTitle" />
  </div>
</template>
<script setup>
// 初期値の空文字が渡される
let testTitle = "";
let testBody = "";

async function testFetch() {
  // sleepでAPIアクセスの代わりにする
  await sleep(2000);

  testTitle = "テストタイトル";
  testBody = "テストボディ";
}

function sleep(msec) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, msec);
  });
}

// awaitをつける
await testFetch();
</script>
<style scoped>
.container {
  width: 800px;
  margin: auto;
}
</style>
