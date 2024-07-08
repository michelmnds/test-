import logo from '../../assets/logo/fliz-logo.svg';
import { LanguageDisplay } from '../LanguageDisplay';
import { handleAmountFormating } from './handlers';
import { useTranslation } from 'react-i18next';

export const MainContent = ({ title, subtitleOne, subtitleTwo, companyName, amount, darkButton, image, button }) => {
  const { i18n } = useTranslation();
  const { language } = i18n;

  return (
    <div style={styles.mainContent}>
      <div style={styles.mainContentTopContainer}>
        <img src={logo} alt="Fliz's Logo" />
        <LanguageDisplay style={styles.mainContentTopContainerText} />
      </div>
      <div style={styles.mainContentMidContainer}>
        <h1 style={styles.mainContentH1}>{title}</h1>
        <span style={styles.mainContentSpan}>
          {subtitleOne} <strong style={styles.strong}>{companyName}</strong> - {subtitleTwo}{' '}
          <strong style={styles.strong}>{handleAmountFormating(amount, language)}</strong>
        </span>
      </div>
      {image}
    </div>
  );
};

const isMedium = window.innerWidth >= 425;
const isLarge = window.innerWidth >= 744;

const styles = {
  mainContent: {
    width: '100%',
    maxWidth: '680px',
    minHeight: '420px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start', // Change to 'space-between' when button gets added
    backgroundColor: '#ffffff',
    borderRadius: '32px',
    padding: isLarge ? '40px' : '40px 10px',
    gap: '24px'
  },
  mainContentTopContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    width: '100%',
    marginBottom: '30px'
  },
  mainContentTopContainerText: {
    color: '#16384e',
    position: 'absolute',
    right: !isLarge ? '15px' : '0px',
    top: !isLarge ? '-15px' : '0px',
    cursor: 'pointer',
    fontSize: isMedium ? 'var(--font-subtitle-1)' : 'var(--font-subtitle-3)'
  },
  mainContentMidContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '16px'
  },
  mainContentH1: {
    color: '#16384e',
    fontSize: 'var(--font-headline-3)',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  mainContentSpan: {
    color: '#16384e',
    fontSize: '14px'
  },
  mainContentButton: {
    color: 'var(--blue-40)',
    fontWeight: 'bold',
    fontSize: 'var(--font-subtitle-1)',
    textDecoration: 'underline',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer'
  },
  strong: {
    fontWeight: 'bolder'
  }
};
