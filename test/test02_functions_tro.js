//不同的function一起使用時的困擾
//目的
//將一串字串的空格去掉
//再變成小寫
//再變成HTML模板
//缺點是result又臭又長
//改良前
let input = "   Javascript    ";
let output = "<div>" + input.trim() + "</div>";

const trim = str => str.trim();
const wrapInDiv = str => `<div>${str}</div>`;
const toLowerCase = str => str.toLowerCase();

const result = wrapInDiv(toLowerCase(trim(input)));

console.log(result)


