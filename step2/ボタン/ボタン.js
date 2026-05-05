const output = document.getElementById("output");
const btn = document.getElementById("btn");

btn.onclick = () => {
  // 画面を一度リセット（連打しても増えすぎないように）
  output.innerHTML = "";

  for (let i = 1; i <= 20; i++) {
    const text = `${i}番目`;
    
    // 画面に新しい行を追加
    const p = document.createElement("p");
    p.textContent = text;
    output.appendChild(p);
  }
};
