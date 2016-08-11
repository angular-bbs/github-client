/**
 * Created by yezm on 11/08/2016.
 */
let baseAddress = 'https://localhost:44396/api';
let accountEndpoint = baseAddress + '/account';
export const api = {
  baseAddress: 'https://localhost:44396/api',
  accountEndpoint: accountEndpoint,
  loginGithubEndpoint: accountEndpoint + '/login-github',
  tokenEndpoint: accountEndpoint + '/token',
  checkStatusEndpoint: accountEndpoint + '/check-status'
};
