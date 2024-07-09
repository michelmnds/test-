import './style/globalStyle.css';
import './style/reset.css';
import './i18n';
import { Footer, Container } from './components';
import { QRC, DeepLink, Succeeded, Failed, Canceled } from './pages';
import useDeviceType from './hooks/useDeviceType';
import useQueryParams from './hooks/useQueryParams';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';

const App = () => {
  const deviceType = useDeviceType();
  const reference = useQueryParams('reference');
  const amount = useQueryParams('amount');
  const companyName = useQueryParams('companyName');
  const tabletOrDesktop = deviceType === 'desktop' || deviceType === 'tablet';

  useEffect(() => {
    localStorage.clear();
    localStorage.setItem('reference', JSON.stringify(reference));
  }, [reference]);

  if (!deviceType) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Container>
        <Routes>
          <Route
            path="/"
            element={tabletOrDesktop ? <Navigate to="/qrc" /> : <Navigate to={`/deeplink?reference=${reference}`} />}
          />
          <Route path="/qrc" element={<QRC reference={reference} amount={amount} companyName={companyName} />} />
          <Route
            path={`/deeplink?reference=${reference}`}
            element={<DeepLink reference={reference} amount={amount} companyName={companyName} />}
          />
          <Route path="/succeeded" element={<Succeeded amount={amount} companyName={companyName} />} />
          <Route path="/failed" element={<Failed />} />
          <Route path="/canceled" element={<Canceled />} />
        </Routes>
        <Footer />
      </Container>
    </Router>
  );
};

export default App;
