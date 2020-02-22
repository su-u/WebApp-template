const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const Menu = electron.Menu;
const Tray = electron.Tray;

/* ---------------------------------
	メニューの設定
---------------------------------- */
const templateMenu = [
  {
    label: 'Menu',
    submenu: [
      {
        label: 'Quit',
        role: 'quit',
      },
    ],
  },
];

/* ---------------------------------
	通知領域アイコンメニューの設定
---------------------------------- */
const contextMenu = Menu.buildFromTemplate([
  {
    label: 'some function',
    type: 'checkbox',
    checked: true,
    click: e => {
      console.log(e.checked);
    },
  },
  {
    label: 'アプリケーションを終了する',
    role: 'quit',
  },
]);

// レンダープロセスとなるブラウザ・ウィンドウのオブジェクト
// null にするとそのウィンドウにはアクセスできなくなる
let win;

function createWindow() {
  //メニュー
  const menu = Menu.buildFromTemplate(templateMenu);
  Menu.setApplicationMenu(menu);

  // 通知領域アイコン
  // let iconPath = "";
  // if (process.platform === 'darwin') {
  //     iconPath = __dirname + '/icons/trayIcon_bk.png';
  // } else if (process.platform === 'win32') {
  //     iconPath = __dirname + '/icons/trayIcon_wh.png';
  // }
  // const appIcon = new Tray(iconPath.toString());
  // appIcon.setContextMenu(contextMenu);

  // パス
  const path = require('path');
  // 画面サイズを取得する
  const Screen = electron.screen;
  const size = Screen.getPrimaryDisplay().size;

  // ブラウザウィンドウの作成
  win = new BrowserWindow({
    top: 0,
    left: 0,
    width: 800,
    height: 600,
    // width: size.width,
    // height: size.height,
    // transparent: true,
    // frame: false,
    // resizable: false,
    // movable: true,
    // skipTaskbar: true,
    // alwaysOnTop: true,
    // hasShadow: false,
  });
  // ウィンドウを最大化
  // backWin.maximize();
  // マウスイベントを無視
  // backWin.setIgnoreMouseEvents(true, {forward: true});
  // win.loadFile('../dist/index.html');
  // win.loadFile(path.join(__dirname, './index.html'));
  win.loadURL(`file://${__dirname}/../web/index.html`);
  // win.loadURL('file://' + __dirname + '/index.html');
  // 起動オプションに "--debug"があれば開発者ツールを起動
  if (process.argv.find(arg => arg === '--debug')) {
    win.webContents.openDevTools();
  }
  // ブラウザウィンドウを閉じたときのイベントハンドラ
  win.on('closed', () => {
    win = null;
  });
}

// Electronが初期化終了し、ブラウザウィンドウを作成する準備ができた時に呼び出されるメソッド
app.on('ready', createWindow);

// 全てのウィンドウオブジェクトが閉じた時に呼び出されるメソッド
app.on('window-all-closed', () => {
  // Macではウィンドウを閉じてもcmd+Qで終了するまでメインプロセスは終了しない
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // Macではウィンドウが閉じられていてもドックアイコンクリックでウィンドウを再構築する
  if (win === null) {
    createWindow();
  }
});
