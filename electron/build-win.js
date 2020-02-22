const builder = require('electron-builder');

builder
  .build({
    config: {
      appId: 'local.template.app',
      copyright: 'Copyright © year 2020',
      win: {
        target: {
          target: 'zip',
          arch: ['x64'],
        },
      },
      directories: {
        output: '../build/electron',
        app: '../dist',
      },
    },
  })
  .then(() => {
    // handle result
  })
  .catch(error => {
    // handle error
    console.log(error);
  });
// https://www.electron.build/configuration/configuration#configuration
