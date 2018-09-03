
function random41loto() {
  return Math.floor(Math.random() * 41) + 1;
}
function createRandomList(){
	let arreglo =[];
	for(let i=0; i<6; i++){
	arreglo.push(random41loto());
}
	return arreglo;
};
let myRandomList = createRandomList();
console.log(myRandomList);
for (let i=0; i<myRandomList.length; i++){
console.log( 'el item ' + i + ' en la lista es ' + myRandomList[i]);
}
