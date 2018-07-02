// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  contracts: {
    canYaDao: '0xb8c824f2bb60a3658030d5d47e9869798a0aa477',
    canYaCoin: '0x93bcf153d792ee96ef485fe27164698e47b61fa1',
    useTestNet: true
  },
  ethNetId: 1524196056249
};
