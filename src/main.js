const sha512 = require("./secure/sha512.js"),
    aes256 = require("aes256"),
    {QuickDB} = require("quick.db"),
    db = new QuickDB,
    Info = text => {
        document.getElementById("info").innerHTML = text
    },
    Err = text => {
        document.getElementById("info").style.color = "red", Info(text)
    },
    Msg = text => {
        document.getElementById("info").style.color = "#bebebe9e", Info(text)
    },
    Connect = passwd => {
        db.get("passwd").then((password => {
            passwd && sha512(sha512(passwd)) == password ? (Msg("Connecting the account in progress..."), setTimeout((() => {
                db.get("key").then((key => {
                    (async () => {
                        await sessionStorage.setItem("key", aes256.decrypt(passwd, key)), location.href = "index.html"
                    })()
                }))
            }), 1e3)) : Err("The password is not valid")
        }))
    },
    Disconnect = () => {
        sessionStorage.clear(), location.reload()
    },
    Register = passwd => {
        if (passwd && passwd.match(/([ ]*)/gi)[0] !== passwd)
            if (password = passwd, base = 0, String(password).match(/([0-9])/g), base = 10, String(password).match(/([A-Z])/g) && (base = 36), String(password).match(/([a-z])/g) && (base = 62), String(password).match(/\W|_/g) && (base = 103), Math.pow(base, password.length) > 68719476735) {
                Msg("Creating the account in progress...");
                var key = "";
                for (let i = 0; i < 4096; i++) key += "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ&é~\"#'{([-|è`_\\ç^à@)]°+=}¨$£¤ù%µ*§!/:.;?," [Math.floor(103 * Math.random())];
                setTimeout((() => {
                    (async () => {
                        await db.set("passwd", sha512(sha512(passwd))), await db.set("set", !0), await db.set("key", aes256.encrypt(passwd, key)), location.href = "login.html"
                    })()
                }), 1e3)
            } else Err("The password is not strong enough");
        else Err("The password is not valid");
        var password, base
    },
    LoadData = () => {
        db.get("account").then((account => {
            if(account[0]){
                account.forEach((acc => {
                    db.get(acc).then((profile => {
                        document.getElementById("data").innerHTML += "<tr><td>" + aes256.decrypt(sessionStorage.getItem("key"), acc) + "</td><td>" + aes256.decrypt(sessionStorage.getItem("key"), profile.link) + "</td><td>" + aes256.decrypt(sessionStorage.getItem("key"), profile.username) + "</td><td>" + aes256.decrypt(sessionStorage.getItem("key"), profile.password) + "</td></tr>"
                    }))
                }))
            }
        }))
    },
    addData = () => {
        const Name = document.getElementById("name").value,
            Link = document.getElementById("link").value,
            Username = document.getElementById("username").value,
            Password = document.getElementById("password").value,
            name = aes256.encrypt(sessionStorage.getItem("key"), Name),
            link = aes256.encrypt(sessionStorage.getItem("key"), Link),
            username = aes256.encrypt(sessionStorage.getItem("key"), Username),
            password = aes256.encrypt(sessionStorage.getItem("key"), Password);
        Name && Link && Username && Password ? db.has(name).then((tof => {
            !0 !== tof ? (Msg("Adding " + Name + " in progress..."), setTimeout((() => {
                db.push("account", name), db.set(name, {
                    link: link,
                    username: username,
                    password: password
                }), location.href = "index.html"
            }), 1e3)) : Err(Name + " already exists")
        })) : Err("The informations is missing")
    },
    delData = Name => {
        var name = aes256.encrypt(sessionStorage.getItem("key"), Name);
        db.has(name).then((tof => {
            name && tof ? (Msg("Deleting " + Name + " in progress..."), setTimeout((() => {
                db.delete(name), db.pull("account", name), location.href = "index.html"
            }), 1e3)) : Err("The name is invalid")
        }))
    },
    setData = () => {
        const Name = document.getElementById("name").value,
            Link = document.getElementById("link").value,
            Username = document.getElementById("username").value,
            Password = document.getElementById("password").value,
            name = aes256.encrypt(sessionStorage.getItem("key"), Name),
            link = aes256.encrypt(sessionStorage.getItem("key"), Link),
            username = aes256.encrypt(sessionStorage.getItem("key"), Username),
            password = aes256.encrypt(sessionStorage.getItem("key"), Password);
        Name && Link && Username && Password ? db.has(name).then((tof => {
            1 == tof ? (Msg("Editing " + Name + " in progress..."), setTimeout((() => {
                db.set(name, {
                    link: link,
                    username: username,
                    password: password
                }), location.href = "index.html"
            }), 1e3)) : Err(Name + " does not exist")
        })) : Err("The informations is missing")
    };
