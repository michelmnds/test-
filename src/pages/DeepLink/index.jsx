import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { handleDeepLink } from './handlers';
import { LanguageDisplay } from '../../components';
import useWebSocket from '../../hooks/useWebSocket';
import usePhoneType from '../../hooks/usePhoneType';
import useUserLanguage from '../../hooks/useUserLanguage';
import logo from '../../assets/logo/big-logo.svg';
import { CircularProgress } from '@mui/material';

export const DeepLink = ({ reference }) => {
  useWebSocket(reference);
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useTranslation();
  const userLang = useUserLanguage();
  const phoneType = usePhoneType();
  const isAndroid = phoneType === 'android';
  const storeUrl = isAndroid
    ? `https://play.google.com/store/`
    : `https://apps.apple.com/${userLang}/app/fliz-pay/id6480379711`;

  useEffect(() => {
    handleDeepLink(reference, storeUrl);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [reference]);

  if (isLoading) {
    return (
      <div style={styles.loadingContainer}>
        <CircularProgress color="inherit" style={{ color: 'var(--blue-20)' }} />
        <span style={styles.loadingText}>{t('loadingText')}</span>
      </div>
    );
  } else {
    return (
      <div style={styles.deepLinkContainer}>
        <div style={styles.deepLinkTopContainer}>
          <LanguageDisplay style={styles.deepLinkTopContainerTitle} />
          <img src={logo} alt="Fliz Pay Logo" />
        </div>

        <div style={styles.deepLinkMidContainer}>
          <h1 style={styles.deepLinkH1}>{t('deepLink.title')}</h1>
          <h2 style={styles.deepLinkH2}>{t('deepLink.subtitle.one')}</h2>
        </div>

        <div style={styles.deepLinkBottomContainer}>
          <h2 style={styles.deepLinkH2}>{t('deepLink.subtitle.two')}</h2>
          <a
            onClick={e => {
              e.preventDefault();
              handleDeepLink(reference, storeUrl);
            }}
            style={styles.deepLinkButton}
            className="globalBtn"
            href="#">
            {t('deepLink.button.pay')}
          </a>
          <a style={styles.deepLinkPaymentButton} className="globalBtn" href={storeUrl}>
            {t('deepLink.button.download')}
          </a>
        </div>
      </div>
    );
  }
};

const styles = {
  loadingContainer: {
    padding: '10px 20px',
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',
    backgroundColor: 'var(--mint-20)'
  },
  loadingText: {
    fontSize: 'var(--font-headline-3)',
    color: 'var(--blue-20)',
    fontWeight: 'bolder'
  },
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
    lineHeight: '1.6',
    letterSpacing: '1px'
  },
  deepLinkH2: {
    fontSize: 'var(--font-headline-4)',
    color: 'var(--mint-20)',
    lineHeight: '1.6',
    letterSpacing: '1px'
  },
  deepLinkMidContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    justifyContent: 'center',
    gap: '24px',
    width: '100%'
  },
  deepLinkBottomContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'start',
    justifyContent: 'center',
    gap: '14px'
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
