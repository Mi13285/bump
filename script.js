// function bump(x) {
//   x = x.split("n");
//   if (x.length < 16) {
//     return "Woohoo";
//   } else {
//     return "Car Dead";
//   }
// }
// console.log(bump("n"));
// console.log(bump("__nn_nnnn__n_n___n____nn__nnn"));
// console.log(bump("_nnnnnnn_n__n______nn__nn_nnn"));

function bump(x) {
  return x.split("n").length < 17 ? "Woohoo!" : "Car Dead";
}
console.log(bump("n"));
console.log(bump("__nn_nnnn__n_n___n____nn__nnn"));
console.log(bump("_nnnnnnn_n__n______nn__nn_nnn"));
