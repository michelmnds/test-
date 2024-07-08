import whiteLogo from '../../assets/logo/white-logo.svg';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <div style={styles.footerContainer}>
      <div style={styles.footerTopContainer}>
        <img style={{ alignSelf: 'center' }} src={whiteLogo} alt="Company logo" />
      </div>

      <div style={styles.footerBottomContainer}>
        <span style={styles.footerRightsText}>{t('footer.title.one')}</span>

        <div style={styles.footerTextContainer}>
          <a href="https://www.flizpay.de/imprint" target="_blank" style={styles.footerText}>
            {t('footer.title.two')}
          </a>
          <a href="https://www.flizpay.de/privacy-policy" target="_blank" style={styles.footerText}>
            {t('footer.title.three')}
          </a>
          <a href="https://www.flizpay.de/terms-and-conditions" target="_blank" style={styles.footerText}>
            {t('footer.title.four')}
          </a>
        </div>
      </div>
    </div>
  );
};

const isWide = window.innerWidth >= 768;
const isWider = window.innerWidth >= 810;

const styles = {
  footerContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '191px',
    width: '100%',
    gap: '32px',
    padding: '40px 0px'
  },
  footerTopContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '30px',
    width: '90%'
  },
  footerBottomContainer: {
    width: '90%',
    display: 'flex',
    flexDirection: isWider ? 'row' : 'column',
    alignItems: isWider ? 'center' : 'flex-start',
    justifyContent: 'space-between',
    borderTop: '1px solid #ffffff',
    paddingTop: '35px',
    gap: '50px'
  },
  footerRightsText: {
    fontSize: 'var(--font-subtitle-3)',
    color: '#ffffff'
  },
  footerTextContainer: {
    display: 'flex',
    flexDirection: isWide ? 'row' : 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    gap: '30px'
  },
  footerText: {
    fontSize: 'var(--font-subtitle-3)',
    color: '#ffffff',
    textDecoration: 'underline',
    cursor: 'pointer',
    fontWeight: 'normal'
  }
};
