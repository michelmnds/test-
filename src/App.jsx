import './style/globalStyle.css';
import './style/reset.css';
import './i18n';
import { Footer, Container } from './components';
import { QRC, DeepLink, Succeeded, Failed, Canceled } from './pages';
import useDeviceType from './hooks/useDeviceType';
import useQueryParams from './hooks/useQueryParams';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { storeUrl } from './constants';

const App = () => {
  const download = useQueryParams('download');
  const reference = useQueryParams('reference');
  const amount = useQueryParams('amount');
  const companyName = useQueryParams('companyName');
  const deviceType = useDeviceType();
  const tabletOrDesktop = deviceType === 'desktop' || deviceType === 'tablet';
  const transactionInformations = {
    reference,
    amount,
    companyName
  };

  useEffect(() => {
    if (download) window.location.href = storeUrl;

    reference && localStorage.setItem('transactionInformations', JSON.stringify(transactionInformations));
  }, [download, reference]);

  if (deviceType) {
    return (
      <Router>
        <Container>
          <Routes>
            <Route path="/" element={tabletOrDesktop ? <Navigate to="/qrc" /> : <Navigate to="/deeplink" />} />
            <Route path="/qrc" element={<QRC />} />
            <Route path="/deeplink" element={<DeepLink download={download} />} />
            <Route path="/succeeded" element={<Succeeded amount={amount} companyName={companyName} />} />
            <Route path="/failed" element={<Failed />} />
            <Route path="/canceled" element={<Canceled />} />
          </Routes>
          <Footer />
        </Container>
      </Router>
    );
  }
};

export default App;
