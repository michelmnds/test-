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
  const reference = useQueryParams('reference');
  const amount = useQueryParams('amount');
  const companyName = useQueryParams('companyName');
  const deviceType = useDeviceType();
  const tabletOrDesktop = deviceType === 'desktop' || deviceType === 'tablet';
  const localStorageObject = JSON.parse(localStorage.getItem('transactionInformations'));
  const transactionInformations = {
    reference: reference ? reference : localStorageObject?.reference,
    amount: amount ? amount : localStorageObject?.amount,
    companyName: companyName ? companyName : localStorageObject?.companyName
  };

  useEffect(() => {
    localStorage.clear();
    reference && localStorage.setItem('transactionInformations', JSON.stringify(transactionInformations));
  }, [reference]);

  if (deviceType) {
    return (
      <Router>
        <Container>
          <Routes>
            <Route path="/" element={tabletOrDesktop ? <Navigate to="/qrc" /> : <Navigate to="/deeplink" />} />
            <Route path="/qrc" element={<QRC />} />
            <Route path={'/deeplink'} element={<DeepLink />} />
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
