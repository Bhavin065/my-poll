const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 660,
    height: 600,
    frame: false,           // બ્રાઉઝરની કોઈ બોર્ડર કે બટન નહીં દેખાય
    transparent: true,      // બેકગ્રાઉન્ડ પારદર્શક રહેશે
    alwaysOnTop: true,      // Note 3 કે કોઈપણ એપની ઉપર હંમેશા તરતું રહેશે
    resizable: false,
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.loadFile('index.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
