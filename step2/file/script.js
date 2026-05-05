// script.js

const selector = document.getElementById("file-selector");
const info = document.getElementById("file-info");

// ファイルが選ばれた瞬間に発動！
selector.onchange = () => {
  const file = selector.files[0];

  if (file) {
    // file.size でバイト数を取得して表示に加える
    info.textContent = `【${file.name}】（${file.size}バイト）を選択した`;
  }
};
