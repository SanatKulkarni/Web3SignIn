import { ConnectWallet } from "@thirdweb-dev/react";
import "./styles/Home.css";
import LoginPage from "./pages/LoginPage";

export default function Home() {
  return (
    <main className="main">
      <div className="container">
          <LoginPage />
      </div>
    </main>
  );
}
