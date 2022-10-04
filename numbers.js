function numberWithCommas(x,y) { // replaces 1234 to 1,234

	if (y != null) {
		var w = parseFloat(x);
		var a = w.toFixed(parseInt(y));
	}
	else{
		var a = x;
	}

	var outp = a.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return outp;
}

function twoDigits(a){ // Replaces 1 to 01, 2 to 02, etc...
  if (a < 10) {var b = "0"  + a;}
  else {var b = a;}
  return b;
}
