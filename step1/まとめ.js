function registerEntry(name, detail) {
  if (detail === "default") {
    return `${name} の記録を完了しました。`;
  } else {
    return `${name} の記録（詳細：${detail}）を完了しました。`;
  }
}

const targetList = [
  { name: "月", detail: "default" },
  { name: "L", detail: "default" },
  { name: "ニア", detail: "observation" }
];

console.log("--- Record List ---");

for (let i = 0; i < targetList.length; i++) {
  const entry = targetList[i];
  const result = registerEntry(entry.name, entry.detail);
  console.log(`${i + 1}番目: ${result}`);
}
