import { MainContent } from '../../components';
import { useTranslation } from 'react-i18next';
import image from '../../assets/images/successPage.png';

export const Succeeded = ({ companyName, amount }) => {
  const { t } = useTranslation();

  return (
    <div style={styles.succesPageContainer}>
      <MainContent
        title={t('successPage.title')}
        subtitleOne={t('successPage.subtitle.one')}
        subtitleTwo={t('successPage.subtitle.two')}
        companyName={companyName}
        amount={amount}
        image={<img src={image} style={styles.successPageImage} />}
      />
    </div>
  );
};

const styles = {
  succesPageContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    width: '90%'
  },
  successPageImage: {
    width: '100%',
    maxWidth: '259px'
  }
};
