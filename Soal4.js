let nama, umur;
const arr2 = {
  nama: "rizal",
  asal: "Prabumulih",
  rest: ["smkPrabumulih", "prabujaya", "sukajadi"]
};

var prabu = ({nama, asal, ...rest} = arr2);

console.log (nama)

console.log (asal)

console.log (rest)

console.log (prabu)