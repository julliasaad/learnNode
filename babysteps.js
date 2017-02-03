var soma = 0;

for(var x=2; x < (process.argv).length; x++) {
  //console.log(process.argv[x]);
  soma += Number(process.argv[x]);
}

console.log(soma);
// console.log(process.argv);
