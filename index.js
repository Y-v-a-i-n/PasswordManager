const {
    app: app,
    BrowserWindow: BrowserWindow
} = require("electron"), {
    QuickDB: QuickDB
} = require("quick.db");
require("./src/secure/xor.js");
db = new QuickDB;
const createWindow = () => {
    let window = new BrowserWindow({
        titleBarStyle: "defaut",
        title: "Secure Password Manager",
        frame: !0,
        width: 1e3,
        height: 600,
        icon: __dirname + "\\img\\img_548939-4098060162.png",
        show: !0,
        resizable: !1,
        autoHideMenuBar: !0,
        webPreferences: {
            nodeIntegration: !0,
            contextIsolation: !1,
            enableRemoteModule: !0
        }
    });
    db.get("set").then((set => {
        1 == set ? window.loadFile("src/login.html") : window.loadFile("src/register.html")
    })), window.on("closed", (() => {
        window = null
    }))
};
app.on("ready", createWindow), app.on("window-all-closed", (() => {
    if ("darwin" !== process.platform) return app.quit()
})), app.on("activate", (() => {
    if (null === win) return createWindow()
}));