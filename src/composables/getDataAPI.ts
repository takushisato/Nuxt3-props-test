export async function getRevisionItemData() {
  // 何かしらのAPIを取得する様にしておかないとエラーになるので、ここはダミーでAPI取得に走る様にしています
  const { data } = await useFetch("http://localhost:8000/api/v1/auth/users/me/", {});
  const testTitle = "テストタイトル";
  const testBody = "テストボディ";
  return {
    testTitle: testTitle,
    testBody: testBody,
  };
}
