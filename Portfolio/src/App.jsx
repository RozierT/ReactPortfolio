import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Nav />
      <main className="p-3 mb-2 bg-info-subtle text-emphasis-secondary" style={{minHeight: '100vh'}}>
        <Outlet />
      </main>
    </>
  );
}

export default App;
