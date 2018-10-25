function quadraticEquation() {
const a = parseInt(prompt('Enter a'));
const b = parseInt(prompt('Enter b'));
const c = parseInt(prompt('Enter c'));
const discr = (b * b) - 4 * (a * c);
const sqrDiscr = Math.sqrt(discr);
alert ("discr =" + sqrDiscr );
}
if (discr <0){
  alert("No answer");
} else if (discr==0){
  return (- b - sqrDiscr) / (2 * a);
}else if (discr > 0){
  const x1=((- b - discr) / (2 * a));
  const x2=((- b + discr) / (2 * a));
  return '((- b + sqrDiscr) / (2 * a)) + ';
}
 

  
 

  
 
