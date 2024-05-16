a = 10;
console.log(`5<
a<20 ${5<a && a>20}`); /* T && F = F */
console.log(`5<a<20 ${5<a || a>20}`); /* T || F = T */
console.log(`5<a<20 ${5<a && !(a>20)}`); /* T   !F T = T */