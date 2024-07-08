import backgroundImage from '../../assets/background/blue-background.png';

export const Container = ({ children }) => {
  return <div style={styles.container}>{children}</div>;
};

const styles = {
  container: {
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  }
};
