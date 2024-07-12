import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { DownloadContainer, Timer } from '../../../components';
import useWebSocket from '../../../hooks/useWebSocket';
import { storeUrl } from '../../../constants';
import { useNavigate } from 'react-router-dom';

export const Download = ({ download }) => {
  const reference = JSON.parse(localStorage.getItem('transactionInformations'))?.reference;
  useWebSocket(reference);
  const { t } = useTranslation();
  const navigate = useNavigate();
  console.log(download);

  useEffect(() => {
    if (download) {
      window.location.href = storeUrl;
    }

    window.addEventListener('blur', () => {
      navigate('/payment');
    });
  }, [download]);

  return (
    <DownloadContainer
      complement={
        <div style={styles.downloadPageButtonContainer}>
          <a style={styles.downloadPageButton} className="globalBtn" href={storeUrl}>
            {t('downloadPage.button')}
          </a>
          <Timer mobileScreen callBack={() => (window.location.href = storeUrl)} />
        </div>
      }
    />
  );
};

const styles = {
  downloadPageButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'start',
    gap: '10px',
    width: '100%'
  },
  downloadPageButton: {
    padding: '18px 24px',
    width: 'auto',
    margin: '0'
  }
};
