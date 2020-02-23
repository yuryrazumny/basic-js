class VigenereCipheringMachine {

    constructor(direct = true) {
        this.direct = direct;
    }

    encrypt(string, key) {
        return this.crypt(string, key, false);
    }

    decrypt(string, key) {
        return this.crypt(string, key, true);
    }

    crypt(string, key, decryption) {
        if (string === undefined || key === undefined) {
            throw Error();
        }

        string = string.toUpperCase();
        key = key.toUpperCase();

        const result = [];
        var encryption = 0;
        
        for (var i = 0; i < string.length; ++i) {
            if (string[i].match(/[A-Z]/)) {
                if (decryption) {
                    result.push(String.fromCharCode((string[i].charCodeAt(0) - 'A'.charCodeAt(0) + (26 - (key[encryption % key.length].charCodeAt(0) - 'A'.charCodeAt(0)))) % 26 + 'A'.charCodeAt(0)));
                } else {
                    result.push(String.fromCharCode((string[i].charCodeAt(0) - 'A'.charCodeAt(0) + (key[encryption % key.length].charCodeAt(0) - 'A'.charCodeAt(0))) % 26 + 'A'.charCodeAt(0)));
                }
                encryption++;
            } else {
                result.push(string[i]);
            }
        }

        if (!this.direct) {
            result.reverse();
        }

        return result.join('');
    }
}

module.exports = VigenereCipheringMachine;
