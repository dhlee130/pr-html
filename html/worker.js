// JavaScript source code 소수를  찾는 소스
var n = 1;
search: while (true) {
    n += 1;
    for (var i = 2; i <= Math.sqrt(n); i += 1)
        if (n % i == 0)
            continue search;

    postMessage(n);
}