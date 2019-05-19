import auth0 from 'auth0-js';
import { AUTH_CONFIG } from './config';


export default class AuthService {
    auth0 = new auth0.WebAuth({
        domain: AUTH_CONFIG.domain,
        clientID: AUTH_CONFIG.clientID,
        redirectUri: AUTH_CONFIG.redirectUri,
        responseType: 'code',
        scope: 'openid profile email'
    });

    login() {
        this.auth0.authorize();
    }

    handleAuthentication(history: string[]) {
        this.auth0.parseHash((err, authResult) => {
          if (authResult && authResult.accessToken && authResult.idToken) {
            this.setSession(authResult);
            history.push("/");
          } else if (err) {
            console.log(err);
          }
        });
      }
    
      setSession(authResult: auth0.Auth0DecodedHash) {
        let expiresIn: number = authResult.expiresIn ? authResult.expiresIn : 0;
        let accessToken: string = authResult.accessToken ? authResult.accessToken : "";
        let idToken: string = authResult.idToken ? authResult.idToken : "";
        let expiresAt = JSON.stringify(( expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', accessToken);
        localStorage.setItem('id_token', idToken);
        localStorage.setItem('expires_at', expiresAt);
      }
    
      isAuthenticated() {
        // Sometimes Typescript just makes things way more difficult than they have to be 
        let nullExpiresAt = localStorage.getItem('expires_at');
        let strExpiresAt:string = nullExpiresAt ? nullExpiresAt : "";
        let expiresAt:number = Number(JSON.parse(strExpiresAt));
        return new Date().getTime() < expiresAt;
      }

      getAccessToken() {
        const accessToken = localStorage.getItem('access_token');
        if (!accessToken) {
          throw new Error('No access token found');
        }
        return accessToken;
      }
}