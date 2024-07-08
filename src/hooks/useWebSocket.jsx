import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useWebSocket = reference => {
  const ws = useRef(null);
  const navigate = useNavigate();
  const maxRetries = 3;
  const retryDelay = 1000;
  const [retryCount, setRetryCount] = useState(0);

  const handleOpen = () => {
    console.log('WebSocket connection established');
    setRetryCount(0);
  };

  const handleMessage = event => {
    try {
      const { status, successUrl, failureUrl } = JSON.parse(event.data);
      if (status === 'completed') {
        if (successUrl) {
          console.log(successUrl);
          window.location.href = successUrl;
        } else {
          navigate('/succeeded');
        }
      } else if (status === 'failed') {
        if (failureUrl) {
          window.location.href = failureUrl;
        } else {
          navigate('/failed');
        }
      }
    } catch (error) {
      console.error('Failed to parse message from server:', error);
    }
  };

  const handleError = () => {
    console.error('WebSocket error occurred, attempting to reconnect...');
    if (retryCount < maxRetries) {
      setTimeout(() => {
        setRetryCount(retryCount + 1);
        connectWebSocket();
      }, retryDelay);
    }
  };

  const handleClose = () => {
    console.log('WebSocket connection closed');
  };

  const connectWebSocket = () => {
    if (!reference || retryCount >= maxRetries) return;

    console.log('Attempting to connect WebSocket', reference);
    ws.current = new WebSocket(`ws://localhost:8080/ws?reference=${reference}`);
    ws.current.onopen = handleOpen;
    ws.current.onmessage = handleMessage;
    ws.current.onerror = handleError;
    ws.current.onclose = handleClose;
  };

  useEffect(() => {
    connectWebSocket();
  }, [reference]);

  return null;
};

export default useWebSocket;
