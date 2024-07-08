import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import { LinearProgress } from '@mui/material';
import { useTimer } from 'react-timer-hook';

export const Timer = ({ setTimerIsOver }) => {
  const totalMilliseconds = 900000;
  const expiryTimestamp = new Date();
  expiryTimestamp.setMilliseconds(expiryTimestamp.getMilliseconds() + totalMilliseconds);

  const { seconds, minutes } = useTimer({
    expiryTimestamp,
    onExpire: () => setTimerIsOver(true)
  });

  const timeElapsed = totalMilliseconds / 1000 - (minutes * 60 + seconds);
  const progressValue = (timeElapsed / (totalMilliseconds / 1000)) * 100;

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
  timerBar: {
    width: '100%',
    padding: '2px 0',
    color: 'var(--secondary-green)'
  }
};
