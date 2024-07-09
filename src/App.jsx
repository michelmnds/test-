import './style/globalStyle.css';
import './style/reset.css';
import './i18n';
import { Footer, Container } from './components';
import { QRC, DeepLink, Succeeded, Failed, Canceled } from './pages';
import useDeviceType from './hooks/useDeviceType';
import useQueryParams from './hooks/useQueryParams';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

const App = () => {
  const deviceType = useDeviceType();
  const reference = useQueryParams('reference');
  const amount = useQueryParams('amount');
  const companyName = useQueryParams('companyName');
  const tabletOrDesktop = deviceType === 'desktop' || deviceType === 'tablet';
  const redirectUrl = reference ? `/deeplink?reference=${reference}` : '/deeplink';

  if (deviceType) {
    return (
      <Router>
        <Container>
          <Routes>
            <Route path="/" element={tabletOrDesktop ? <Navigate to="/qrc" /> : <Navigate to={redirectUrl} />} />
            <Route path="/qrc" element={<QRC reference={reference} amount={amount} companyName={companyName} />} />
            <Route
              path={'/deeplink'}
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
  }
};

export default App;
