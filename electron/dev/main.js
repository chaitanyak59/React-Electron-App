"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const path_1 = __importDefault(require("path"));
const config_1 = __importDefault(require("./config"));
let mainWindow;
function createWindow() {
    mainWindow = new electron_1.BrowserWindow({ width: 900, height: 680 });
    const isDev = config_1.default.IS_DEV;
    mainWindow.loadURL(isDev
        ? "http://localhost:8322"
        : `file://${path_1.default.join(__dirname, "../build/index.html")}`);
    mainWindow.on("closed", () => (mainWindow = null));
}
electron_1.app.on("ready", createWindow);
electron_1.app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        electron_1.app.quit();
    }
});
electron_1.app.on("activate", () => {
    if (mainWindow === null) {
        createWindow();
    }
});
