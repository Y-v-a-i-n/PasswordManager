exports.encrypt = function (r, t) {
    if (r && t) {
        var e = "",
            n = 0;
        for (let o = 0; o < String(t).length; o++) e += String.fromCharCode(String(t).substr(o, 1).charCodeAt(0) * String(r).substr(n, 1).charCodeAt(0)), n < String(r).length ? n = 0 : n++;
        return e
    }
    return "An error has been occurred."
}, exports.decrypt = function (r, t) {
    if (r && t) {
        var e = "",
            n = 0;
        for (let o = 0; o < String(t).length; o++) e += String.fromCharCode(String(t).substr(o, 1).charCodeAt(0) / String(r).substr(n, 1).charCodeAt(0)), n < String(r).length ? n = 0 : n++;
        return e
    }
    return "An error has been occurred."
};