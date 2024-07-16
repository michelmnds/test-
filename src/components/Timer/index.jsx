import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import { CircularProgress, LinearProgress } from '@mui/material';
import { useTimer } from 'react-timer-hook';

export const Timer = ({ setTimerIsOver, mobileScreen = false, callBack }) => {
  const totalMilliseconds = mobileScreen ? 7000 : 900000;
  const expiryTimestamp = new Date();
  expiryTimestamp.setMilliseconds(expiryTimestamp.getMilliseconds() + totalMilliseconds);

  const { seconds, minutes } = useTimer({
    expiryTimestamp,
    onExpire: () => (mobileScreen ? callBack() : setTimerIsOver(true))
  });

  const timeElapsed = totalMilliseconds / 1000 - (minutes * 60 + seconds);
  const progressValue = (timeElapsed / (totalMilliseconds / 1000)) * 100;

  if (mobileScreen) {
    return (
      <div style={styles.circularTimerContainer}>
        <CircularProgress color="inherit" variant="determinate" value={progressValue} style={styles.circularTimer} />
        <span style={styles.circularTimerText}>{seconds}</span>
      </div>
    );
  } else {
    return (
      <div style={styles.timerContainer}>
        <div style={styles.timer}>
          <AccessAlarmIcon style={{ color: 'var(--blue-20)', width: 20 }} />
          <span style={styles.timerText}>
            {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </span>
        </div>
        <LinearProgress color="inherit" variant="determinate" value={progressValue} style={styles.timerBar} />
      </div>
    );
  }
};

const styles = {
  timerContainer: {
    width: '236px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  timer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '4px',
    fontWeight: 'bolder',
    color: 'var(--blue-20)',
    borderRadius: '8px 8px 0 0',
    padding: '4px 0'
  },
  timerText: {
    marginTop: '2px'
  },
  timerMobileText: {
    color: 'var(--primary-color)'
  },
  timerBar: {
    width: '100%',
    padding: '2px 0',
    color: 'var(--secondary-green)'
  },
  circularTimerContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  circularTimer: {
    marginTop: 2,
    width: 47,
    color: 'var(--secondary-green)'
  },
  circularTimerText: {
    position: 'absolute',
    left: '48%',
    top: '33%',
    fontWeight: 'bolder',
    color: 'var(--secondary-green)'
  }
};
