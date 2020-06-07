const electron = require("electron");

const {app, BrowserWindow, Menu, ipcMain} = electron;

let homeWindow;
let aboutWindow;

app.on("ready", ()=> {
    homeWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        title: "Temprature Converter"
    });

    homeWindow.loadURL(`file://${__dirname}/index.html`);
    homeWindow.on("close", () => {

        app.quit();
        homeWindow = null;
    });

    const mainMenu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(mainMenu);

});


const aboutWindowCreator = () => {
    aboutWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        width: 600,
        height: 400,
        title:"About"
    });

    aboutWindow.setMenu(null);
    aboutWindow.loadURL(`file://${__dirname}/about.html`);
    aboutWindow.on("close", () => (aboutWindow = null));
};

ipcMain.on("appointment:create", (event, appointment) => {
    console.log(appointment);
});

const menuTemplate = [
    {
        label: "File",
        
        submenu: [
            {

                label: "About", 
                    click() {
                        aboutWindowCreator();
                    }
            },
            {
                label: "Quit",
                accelerator: process.platform === "darwin" ? "Command + Q" : "Ctrl + Q",
                click() {
                    app.quit();
                }
            }    
        ]
    },

    {

        label: "View",
        submenu: [{role: "Reload"}, {role: "toggledevtolls"}]
    },

]