import { ConnectWallet, MediaRenderer, Web3Button, useAddress } from "@thirdweb-dev/react";
import { SocialLoginButton } from "../components/SocialLoginButton";
import EmailSignIn from "../components/EmailLogin";
import HomePage from "./HomePage";


const LoginPage = () => {
  const address = useAddress();

  return (
    <>
      {address ? (
        <HomePage />
      ) : (
        <><div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh'
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              width: '50%',
              height: '100vh',
            }}>
              <div style={{
                padding: '0.5rem 1rem',
              }}>
                <MediaRenderer
                  src={"/images/royalty_logo.jpg"}
                  height="10rem"
                  width="10rem"
                  style={{ borderRadius: "50%" }} />
              </div>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '0.5rem 1rem',
                borderBottom: '1px solid #EEE',
                height: '100%'
              }}>
                <div style={{
                  minWidth: "80%"
                }}>
                 <div style={{ display: 'flex', alignItems: 'center' }}>
                  <h1 style={{ margin: '0' }}>Sign In OR</h1>
                  <ConnectWallet style={{ marginLeft: '10px' }} />
                 </div>

                  <EmailSignIn />
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    height: '2rem',
                    marginBottom: '1rem',
                    color: '#CCC'
                  }}>
                    <hr style={{ width: "45%", borderTop: "1px solid #CCC" }} />
                    <p>or</p>
                    <hr style={{ width: "45%", borderTop: "1px solid #CCC" }} />
                  </div>
                  <SocialLoginButton strategy="google" />
                  <SocialLoginButton strategy="facebook" />
                  <SocialLoginButton strategy="apple" />
                </div>
              </div>
            </div>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              width: '50%',
              height: '100vh',
              backgroundColor: '#EEE',
              backgroundImage: 'url(/images/groovyimg.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}></div>
          </div></>
      )}
    </>
  );
};

export default LoginPage;