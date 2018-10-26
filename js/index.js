function quadraticEquation() {
const a = prompt('Enter a');
const b = prompt('Enter b');
const c = prompt('Enter c');
const discr = (b * b) - 4 * (a * c);
alert('discr = ' + discr);
const sqrDiscr = Math.sqrt(discr);

if (discr <0){
  return 'if the discriminant < 0, then there is no solution ';
} else if (discr==0){
  const t =(- b) / (2 * a);
  return t;
}else if (discr > 0){
  let x1=((- b - sqrDiscr) / (2 * a));
  let x2=((- b + sqrDiscr) / (2 * a));
  return 'x1 = ' + x1 +' x2 = ' + x2;
}
}
 let test=quadraticEquation();
 alert (test);

  
 

  
 
