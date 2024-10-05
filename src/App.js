import { AllRoutes } from './routes/Allroutes';
import { Header, Footer } from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
