module.exports = function getZerosCount(number, base) {
// my implementation
var b=base;
var n=number;
for ( var i=2; i<=b; i++ ){
	if (b%i == 0){
		var a=0;
		while (b%i == 0){
			a++;
			b=Math.floor(b/i);
			}
		var f=0;
		var c=number;
		while (c/i>0){
			f=f+Math.floor(c/i);
			c=Math.floor(c/i);
			}
		n=Math.min(n, Math.floor(f/a));
		}
	}
return n;
}