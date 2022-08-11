const SHA512 = (e) => {
        function r(e, r) {
            this.highOrder = e, this.lowOrder = r
        }
        var d, x, n, w, c, h, a, b, f, O, o, i, l, g, t = [new r(0x6a09e667, 0xf3bcc908), new r(0xbb67ae85, 0x84caa73b), new r(0x3c6ef372, 0xfe94f82b), new r(0xa54ff53a, 0x5f1d36f1), new r(0x510e527f, 0xade682d1), new r(0x9b05688c, 0x2b3e6c1f), new r(0x1f83d9ab, 0xfb41bd6b), new r(0x5be0cd19, 0x137e2179)],
            u = [new r(0x428a2f98, 0xd728ae22), new r(0x71374491, 0x23ef65cd), new r(0xb5c0fbcf, 0xec4d3b2f), new r(0xe9b5dba5, 0x8189dbbc), new r(0x3956c25b, 0xf348b538), new r(0x59f111f1, 0xb605d019), new r(0x923f82a4, 0xaf194f9b), new r(0xab1c5ed5, 0xda6d8118), new r(0xd807aa98, 0xa3030242), new r(0x12835b01, 0x45706fbe), new r(0x243185be, 0x4ee4b28c), new r(0x550c7dc3, 0xd5ffb4e2), new r(0x72be5d74, 0xf27b896f), new r(0x80deb1fe, 0x3b1696b1), new r(0x9bdc06a7, 0x25c71235), new r(0xc19bf174, 0xcf692694), new r(0xe49b69c1, 0x9ef14ad2), new r(0xefbe4786, 0x384f25e3), new r(0x0fc19dc6, 0x8b8cd5b5), new r(0x240ca1cc, 0x77ac9c65), new r(0x2de92c6f, 0x592b0275), new r(0x4a7484aa, 0x6ea6e483), new r(0x5cb0a9dc, 0xbd41fbd4), new r(0x76f988da, 0x831153b5), new r(0x983e5152, 0xee66dfab), new r(0xa831c66d, 0x2db43210), new r(0xb00327c8, 0x98fb213f), new r(0xbf597fc7, 0xbeef0ee4), new r(0xc6e00bf3, 0x3da88fc2), new r(0xd5a79147, 0x930aa725), new r(0x06ca6351, 0xe003826f), new r(0x14292967, 0x0a0e6e70), new r(0x27b70a85, 0x46d22ffc), new r(0x2e1b2138, 0x5c26c926), new r(0x4d2c6dfc, 0x5ac42aed), new r(0x53380d13, 0x9d95b3df), new r(0x650a7354, 0x8baf63de), new r(0x766a0abb, 0x3c77b2a8), new r(0x81c2c92e, 0x47edaee6), new r(0x92722c85, 0x1482353b), new r(0xa2bfe8a1, 0x4cf10364), new r(0xa81a664b, 0xbc423001), new r(0xc24b8b70, 0xd0f89791), new r(0xc76c51a3, 0x0654be30), new r(0xd192e819, 0xd6ef5218), new r(0xd6990624, 0x5565a910), new r(0xf40e3585, 0x5771202a), new r(0x106aa070, 0x32bbd1b8), new r(0x19a4c116, 0xb8d2d0c8), new r(0x1e376c08, 0x5141ab53), new r(0x2748774c, 0xdf8eeb99), new r(0x34b0bcb5, 0xe19b48a8), new r(0x391c0cb3, 0xc5c95a63), new r(0x4ed8aa4a, 0xe3418acb), new r(0x5b9cca4f, 0x7763e373), new r(0x682e6ff3, 0xd6b2b8a3), new r(0x748f82ee, 0x5defb2fc), new r(0x78a5636f, 0x43172f60), new r(0x84c87814, 0xa1f0ab72), new r(0x8cc70208, 0x1a6439ec), new r(0x90befffa, 0x23631e28), new r(0xa4506ceb, 0xde82bde9), new r(0xbef9a3f7, 0xb2c67915), new r(0xc67178f2, 0xe372532b), new r(0xca273ece, 0xea26619c), new r(0xd186b8c7, 0x21c0c207), new r(0xeada7dd6, 0xcde0eb1e), new r(0xf57d4f7f, 0xee6ed178), new r(0x06f067aa, 0x72176fba), new r(0x0a637dc5, 0xa2c898a6), new r(0x113f9804, 0xbef90dae), new r(0x1b710b35, 0x131c471b), new r(0x28db77f5, 0x23047d84), new r(0x32caab7b, 0x40c72493), new r(0x3c9ebe0a, 0x15c9bebc), new r(0x431d67c4, 0x9c100d4c), new r(0x4cc5d4be, 0xcb3e42b6), new r(0x597f299c, 0xfc657e2a), new r(0x5fcb6fab, 0x3ad6faec), new r(0x6c44198c, 0x4a475817)],
            v = new Array(64);

        function s(e, d) {
            var x, n, w;
            return x = (0xFFFF & e.lowOrder) + (0xFFFF & d.lowOrder), w = (0xFFFF & (n = (e.lowOrder >>> 16) + (d.lowOrder >>> 16) + (x >>> 16))) << 16 | 0xFFFF & x, x = (0xFFFF & e.highOrder) + (0xFFFF & d.highOrder) + (n >>> 16), new r((0xFFFF & (n = (e.highOrder >>> 16) + (d.highOrder >>> 16) + (x >>> 16))) << 16 | 0xFFFF & x, w)
        }

        function p(e, d, x, n) {
            var w, c, h;
            return w = (0xFFFF & e.lowOrder) + (0xFFFF & d.lowOrder) + (0xFFFF & x.lowOrder) + (0xFFFF & n.lowOrder), h = (0xFFFF & (c = (e.lowOrder >>> 16) + (d.lowOrder >>> 16) + (x.lowOrder >>> 16) + (n.lowOrder >>> 16) + (w >>> 16))) << 16 | 0xFFFF & w, w = (0xFFFF & e.highOrder) + (0xFFFF & d.highOrder) + (0xFFFF & x.highOrder) + (0xFFFF & n.highOrder) + (c >>> 16), new r((0xFFFF & (c = (e.highOrder >>> 16) + (d.highOrder >>> 16) + (x.highOrder >>> 16) + (n.highOrder >>> 16) + (w >>> 16))) << 16 | 0xFFFF & w, h)
        }

        function A(e, d, x, n, w) {
            var c, h, a;
            return c = (0xFFFF & e.lowOrder) + (0xFFFF & d.lowOrder) + (0xFFFF & x.lowOrder) + (0xFFFF & n.lowOrder) + (0xFFFF & w.lowOrder), a = (0xFFFF & (h = (e.lowOrder >>> 16) + (d.lowOrder >>> 16) + (x.lowOrder >>> 16) + (n.lowOrder >>> 16) + (w.lowOrder >>> 16) + (c >>> 16))) << 16 | 0xFFFF & c, c = (0xFFFF & e.highOrder) + (0xFFFF & d.highOrder) + (0xFFFF & x.highOrder) + (0xFFFF & n.highOrder) + (0xFFFF & w.highOrder) + (h >>> 16), new r((0xFFFF & (h = (e.highOrder >>> 16) + (d.highOrder >>> 16) + (x.highOrder >>> 16) + (n.highOrder >>> 16) + (w.highOrder >>> 16) + (c >>> 16))) << 16 | 0xFFFF & c, a)
        }

        function C(e, d, x) {
            return new r(e.highOrder & d.highOrder ^ e.highOrder & x.highOrder ^ d.highOrder & x.highOrder, e.lowOrder & d.lowOrder ^ e.lowOrder & x.lowOrder ^ d.lowOrder & x.lowOrder)
        }

        function m(e, d, x) {
            return new r(e.highOrder & d.highOrder ^ ~e.highOrder & x.highOrder, e.lowOrder & d.lowOrder ^ ~e.lowOrder & x.lowOrder)
        }

        function y(e, d) {
            return d <= 32 ? new r(e.highOrder >>> d | e.lowOrder << 32 - d, e.lowOrder >>> d | e.highOrder << 32 - d) : new r(e.lowOrder >>> d | e.highOrder << 32 - d, e.highOrder >>> d | e.lowOrder << 32 - d)
        }

        function I(e) {
            var d = y(e, 28),
                x = y(e, 34),
                n = y(e, 39);
            return new r(d.highOrder ^ x.highOrder ^ n.highOrder, d.lowOrder ^ x.lowOrder ^ n.lowOrder)
        }

        function R(e) {
            var d = y(e, 14),
                x = y(e, 18),
                n = y(e, 41);
            return new r(d.highOrder ^ x.highOrder ^ n.highOrder, d.lowOrder ^ x.lowOrder ^ n.lowOrder)
        }

        function U(e) {
            var d = y(e, 1),
                x = y(e, 8),
                n = j(e, 7);
            return new r(d.highOrder ^ x.highOrder ^ n.highOrder, d.lowOrder ^ x.lowOrder ^ n.lowOrder)
        }

        function j(e, d) {
            return d <= 32 ? new r(e.highOrder >>> d, e.lowOrder >>> d | e.highOrder << 32 - d) : new r(0, e.highOrder << 32 - d)
        }
        e = function (e) {
            return unescape(encodeURIComponent(e))
        }(e), strlen = 8 * e.length, e = function (e) {
            for (var r = [], d = 8 * e.length, x = 0; x < d; x += 8) r[x >> 5] |= (255 & e.charCodeAt(x / 8)) << 24 - x % 32;
            return r
        }(e), e[strlen >> 5] |= 128 << 24 - strlen % 32, e[31 + (strlen + 128 >> 10 << 5)] = strlen;
        for (var k = 0; k < e.length; k += 32) {
            d = t[0], x = t[1], n = t[2], w = t[3], c = t[4], h = t[5], a = t[6], b = t[7];
            for (var q = 0; q < 80; q++) v[q] = q < 16 ? new r(e[2 * q + k], e[2 * q + k + 1]) : p((o = v[q - 2], i = void 0, l = void 0, g = void 0, i = y(o, 19), l = y(o, 61), g = j(o, 6), new r(i.highOrder ^ l.highOrder ^ g.highOrder, i.lowOrder ^ l.lowOrder ^ g.lowOrder)), v[q - 7], U(v[q - 0xF]), v[q - 16]), f = A(b, R(c), m(c, h, a), u[q], v[q]), O = s(I(d), C(d, x, n)), b = a, a = h, h = c, c = s(w, f), w = n, n = x, x = d, d = s(f, O);
            t[0] = s(d, t[0]), t[1] = s(x, t[1]), t[2] = s(n, t[2]), t[3] = s(w, t[3]), t[4] = s(c, t[4]), t[5] = s(h, t[5]), t[6] = s(a, t[6]), t[7] = s(b, t[7])
        }
        var z = [];
        for (k = 0; k < t.length; k++) z.push(t[k].highOrder), z.push(t[k].lowOrder);
        return function (e) {
            for (var r, d = "0123456789abcdef", x = "", n = 4 * e.length, w = 0; w < n; w += 1) r = e[w >> 2] >> 8 * (3 - w % 4), x += d.charAt(r >> 4 & 0xF) + d.charAt(0xF & r);
            return x
        }(z)
    }
module.exports = SHA512;