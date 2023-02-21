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
  // 存在しないAPIにアクセスしようとしてエラーになるのでコメントアウト
  // const { data } = await useFetch("");

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

// async await じゃなければ値は更新される
// function testFetch() {
//   testTitle = "テストタイトル";
//   testBody = "テストボディ";
// }

// awaitをつける
await testFetch();
</script>
<style scoped>
.container {
  width: 800px;
  margin: auto;
}
</style>
