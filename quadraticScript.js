function calRoots() {
    var a, b, c, d;
    a = fmr1.elements["ValueA"].value;
    b = fmr1.elements["ValueB"].value;
    c = fmr1.elements["ValueC"].value;
    d = (Math.pow(b, 2) - (4 * a * c));
    x = -b / (2 * a);
    k = a * x * x + b * x + parseInt(c);
	
	root.innerHTML = ".............";
	yInt.innerHTML = ".............";
	dis.innerHTML = ".............";
	ver.innerHTML = ".............";
	verF.innerHTML = ".............";
	document.getElementById("result").innerHTML = "";
	
	
    if (a != 0) {
        if (d > 0) {
            root.innerHTML = "Two Roots:<br>" + ((-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a)) + " and " + ((-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a));
        } else if (d < 0) {
            root.innerHTML = "No Roots";
        } else {
            root.innerHTML = "One Root: " + -b / (2 * a);
        }
        yInt.innerHTML = c;
        dis.innerHTML = d;
        ver.innerHTML = "(" + x + "," + (a * x * x + b * x + parseInt(c)) + ")";

        if (a == 1) {
            aS = "";
        } else if (a == -1) {
            aS = "-";
        } else {
            aS = a;
        }

        if (k > 0) {
            kS = " + " + k;
        } else if (k < 0) {
            kS = k;
        }
        if (x > 0) {
            hS = -x;
        } else if (x < 0) {
            hS = " + " + -x;
        } 
		if (c == 0 && b == 0) {
            verF.innerHTML = "y = " + aS + "x\u00B2";
        } else if (b == 0) {
            verF.innerHTML = "y = " + aS + "x\u00B2" + kS;
        } else if (k == 0) {
            verF.innerHTML = "y = " + aS + "(x" + hS + ")\u00B2";
        } else {
            verF.innerHTML = "y = " + aS + "(x" + hS + ")\u00B2" + kS;
        }
    } else {
        document.getElementById("result").innerHTML = "The function is not quadratic.";
    }
}