import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageDisplay, Timer } from '../../components';
import useWebSocket from '../../hooks/useWebSocket';
import { storeUrl } from '../../constants';
import logo from '../../assets/logo/big-logo.svg';

export const DeepLink = ({ download }) => {
  const reference = JSON.parse(localStorage.getItem('transactionInformations'))?.reference;
  useWebSocket(reference);
  const [hasDonwloaded, setHasDownloaded] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (download) window.location.href = storeUrl;

    window.addEventListener('blur', () => {
      setHasDownloaded(true);
    });
  }, [download]);

  return (
    <div style={styles.deepLinkContainer}>
      <div style={styles.deepLinkTopContainer}>
        <LanguageDisplay style={styles.deepLinkTopContainerTitle} />
        <img src={logo} alt="Fliz Pay Logo" />
      </div>
      <div style={styles.deepLinkMidContainer}>
        <h1 style={styles.deepLinkH1}>{t('deepLink.title')}</h1>
        <h2 style={styles.deepLinkH2}>{t('deepLink.subtitle.one')}</h2>
        {!hasDonwloaded && (
          <div style={styles.downloadButtonContainer}>
            <a style={styles.deepLinkButton} className="globalBtn" href={storeUrl}>
              {t('deepLink.button.download')}
            </a>
            <Timer mobileScreen callBack={() => (window.location.href = storeUrl)} />
          </div>
        )}
        {hasDonwloaded && (
          <>
            <h2 style={styles.deepLinkH2}>{t('deepLink.subtitle.two')}</h2>
            <a style={styles.deepLinkButton} className="globalBtn" href={`flizpay://payment?reference=${reference}`}>
              {t('deepLink.button.pay')}
            </a>
          </>
        )}
      </div>
    </div>
  );
};

const styles = {
  deepLinkContainer: {
    padding: '10px 20px',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    gap: '50px'
  },
  deepLinkTopContainer: {
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    minHeight: '120px',
    width: '100%'
  },
  deepLinkTopContainerTitle: {
    fontSize: 'var(--font-subtitle-2)',
    position: 'absolute',
    top: '0',
    right: '0',
    textDecoration: 'underline',
    color: 'var(--mint-20)',
    lineHeight: '1.6',
    letterSpacing: '1px'
  },
  deepLinkH1: {
    fontSize: 'var(--font-headline-1)',
    fontWeight: 'bolder',
    color: 'var(--mint-20)',
    lineHeight: '1.3',
    letterSpacing: '1px'
  },
  deepLinkH2: {
    fontSize: 'var(--font-headline-4)',
    color: 'var(--mint-20)',
    lineHeight: '1.6',
    letterSpacing: '1px'
  },
  downloadButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'start',
    gap: '10px',
    width: '100%'
  },
  deepLinkMidContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    justifyContent: 'center',
    gap: '24px',
    width: '100%'
  },
  deepLinkButton: {
    padding: '18px 24px',
    width: 'auto',
    margin: '0'
  },
  deepLinkPaymentButton: {
    padding: '18px 24px',
    width: 'auto',
    margin: '0',
    backgroundColor: 'transparent',
    border: '1px solid var(--mint-20)',
    color: 'var(--mint-20)',
    fontWeight: 'normal'
  }
};
