import "./App.css";
import { SplashScreen } from "./components/SplashScreen";

function App() {
  return (
    <div className='flex min-h-screen flex-col'>
      <main className='mx-auto w-4/5 max-w-7xl py-8'>
        <SplashScreen />
      </main>
    </div>
  );
}

export { App };
