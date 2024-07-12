import { useTranslation } from 'react-i18next';
import { DownloadContainer } from '../../../components';
import useWebSocket from '../../../hooks/useWebSocket';

export const Payment = () => {
  const reference = JSON.parse(localStorage.getItem('transactionInformations'))?.reference;
  useWebSocket(reference);
  const { t } = useTranslation();

  return (
    <DownloadContainer
      complement={
        <>
          <h2 style={styles.paymentPageH2}>{t('paymentPage.subtitle')}</h2>
          <a
            style={styles.paymentPageButton}
            className="globalBtn"
            href={`https://checkout-test-fliz.vercel.app/payment/?reference=${reference}`}>
            {t('paymentPage.button')}
          </a>
        </>
      }
    />
  );
};

const styles = {
  paymentPageH2: {
    fontSize: 'var(--font-headline-4)',
    color: 'var(--mint-20)',
    lineHeight: '1.6',
    letterSpacing: '1px'
  },
  paymentPageButton: {
    padding: '18px 24px',
    width: 'auto',
    margin: '0'
  }
};
