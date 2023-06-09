import Keycloak from "keycloak-js";

/**
 * Keycloak configuration and helper methods
 */
const kc = new Keycloak({
  "realm": "ProjectManagement",
  "url": process.env.REACT_APP_AUTH_SERVER_URL,
  "ssl-required": "external",
  "resource": "frontend-app-auth",
  "verify-token-audience": true,
//   "credentials": {
    //   "secret": "xWE0ltYFlv1yknZ3T6A6zJsRuksB8Fqh"
//   },
  "use-resource-role-mappings": true,
  "confidential-port": 0,
  "public-client": true,
  "clientId": "frontend-app-auth"
});

const initKeycloak = (onAuthenticatedCallback) => {
  kc.init({onLoad: 'login-required', "checkLoginIframe": false})
      .then((authenticated) => {
          if (authenticated) {
            onAuthenticatedCallback()
            localStorage.setItem("token", kc.token)
            localStorage.setItem("username", kc.tokenParsed.preferred_username)
            localStorage.setItem("userKeycloakId", kc.tokenParsed.sub)
            localStorage.setItem("keycloak", kc)
            console.log("Authenticated")
          } else {
              console.warn("Not authenticated!");
              doLogin();
          }
      })
};

const doLogin = kc.login;

const doLogout = kc.logout;

const getKeycloak = () => kc;

const getParsedToken = () =>  kc.tokenParsed;

const getToken = () => kc.token;

const getAuth = () => kc.authenticated;

const updateToken = (successCallback) => {
    return kc.updateToken(60)
        .then(successCallback)
        .catch(doLogin)
};

const expiredToken = (num) => {
    return kc.isTokenExpired(num)
};

const getUsername = () => kc.tokenParsed.preferred_username;
console.log(kc.token)

const toExport = {
    initKeycloak,
    getKeycloak,
    expiredToken,
    doLogin,
    doLogout,
    getToken,
    updateToken,
    getParsedToken,
    getAuth,
    getUsername,
}

export default toExport;
