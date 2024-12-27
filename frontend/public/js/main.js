// DOMContentLoadedイベントが発生したときに実行される関数を設定
document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed'); // DOMが完全に読み込まれたことを確認するためのログ
  
  // pageLoading_center__00ff1のある要素にランダムなcenter__00ff1_imageクラスを追加
  const centerElement = document.querySelector('.pageLoading_center__00ff1');
  if (centerElement) {
    const currentTime = new Date().getTime();
    const randomImageClass = `center__00ff1_image${(currentTime % 3) + 1}`;
    centerElement.classList.add(randomImageClass);
  }
});

// 以下のコードは、ページの読み込みが完了した際に実行される関数を設定しています。
window.addEventListener('load', (event) => {//windowオブジェクトのloadイベントが発生したときに実行される関数を設定
  console.log('All resources finished loading!'); // 全てのリソースの読み込みが完了したことを確認するためのログ

  // ページロード後にpageLoading__00ff1のあるdiv要素にfadeout_loadingスタイルを追加
  const pageLoadingElement = document.querySelector('.pageLoading__00ff1');
  if (pageLoadingElement) {
    pageLoadingElement.classList.add('fadeout_loading');
  }
});