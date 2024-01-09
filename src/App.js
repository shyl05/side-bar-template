import './App.css';
import SideBar from './Components/SideBar';
import AppHeader from './Components/AppHeader';
import AppContent from './Components/AppContent';

function App() {
  return (
    <div className="App">
      <div style={{ display: "flex", height: "100vh" }}>
        <SideBar/>
        <AppHeader />
        <AppContent />
      </div>
    </div>
  );
}

export default App;
