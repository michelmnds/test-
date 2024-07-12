import logo from '../../assets/logo/big-logo.svg';
import { useTranslation } from 'react-i18next';
import { LanguageDisplay } from '../index';

export const DownloadContainer = ({ complement }) => {
  const { t } = useTranslation();

  return (
    <div style={styles.downloadContainer}>
      <div style={styles.downloadTopContainer}>
        <LanguageDisplay style={styles.downloadTopContainerTitle} />
        <img src={logo} alt="Fliz Pay Logo" />
      </div>
      <div style={styles.downloadMidContainer}>
        <h1 style={styles.downloadContainerH1}>{t('downloadContainer.title')}</h1>
        <h2 style={styles.downloadContainerH2}>{t('downloadContainer.subtitle.one')}</h2>
        {complement}
      </div>
    </div>
  );
};

const styles = {
  downloadContainer: {
    padding: '10px 20px',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    gap: '50px'
  },
  downloadTopContainer: {
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    minHeight: '120px',
    width: '100%'
  },
  downloadTopContainerTitle: {
    fontSize: 'var(--font-subtitle-2)',
    position: 'absolute',
    top: '0',
    right: '0',
    textDecoration: 'underline',
    color: 'var(--mint-20)',
    lineHeight: '1.6',
    letterSpacing: '1px'
  },
  downloadContainerH1: {
    fontSize: 'var(--font-headline-1)',
    fontWeight: 'bolder',
    color: 'var(--mint-20)',
    lineHeight: '1.3',
    letterSpacing: '1px'
  },
  downloadContainerH2: {
    fontSize: 'var(--font-headline-4)',
    color: 'var(--mint-20)',
    lineHeight: '1.6',
    letterSpacing: '1px'
  },
  downloadMidContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    justifyContent: 'center',
    gap: '24px',
    width: '100%'
  }
};
