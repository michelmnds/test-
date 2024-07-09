import { useState } from 'react';
import QRCode from 'qrcode.react';
import { useTranslation } from 'react-i18next';
import { MainContent, Timer } from '../../components';
import useWebSocket from '../../hooks/useWebSocket';

export const QRC = ({ reference, companyName, amount }) => {
  const [timerIsOver, setTimerIsOver] = useState(false);
  useWebSocket(reference);
  const { t } = useTranslation();

  return (
    <div style={styles.qrcContainer}>
      <MainContent
        title={t('qrcode.title')}
        subtitleOne={t('qrcode.subtitle.one')}
        subtitleTwo={t('qrcode.subtitle.two')}
        companyName={companyName}
        amount={amount}
        image={
          <div>
            <Timer setTimerIsOver={setTimerIsOver} />
            <div style={styles.qrcImageContainer}>
              {timerIsOver && <span style={styles.expiredText}>{t('expiredQRC')}</span>}
              <QRCode
                value={`https://checkout-test-fliz.vercel.app/deeplink?reference=${reference}`}
                size={236}
                level={'H'}
                style={timerIsOver ? styles.qrcImage : {}}
              />
            </div>
          </div>
        }
      />
    </div>
  );
};

const styles = {
  qrcContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    width: '90%'
  },
  qrcImageContainer: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  expiredText: {
    zIndex: 1,
    position: 'absolute',
    color: '#16384e',
    fontSize: '20px',
    fontWeight: 'bolder'
  },
  qrcImage: {
    filter: 'blur(3px)',
    opacity: '30%',
    transition: '0.5s ease-in-out'
  }
};
