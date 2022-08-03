import React, { useEffect, useState,   useCallback } from 'react';
import * as reactDevtools from 'react-devtools-inline/frontend';

import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${props =>
    props.theme['panel.background'] || props.theme.background2};
  width: 100%;
  height: 500px;
  color: ${props =>
    props.theme['editor.foreground'] || 'rgba(255, 255, 255, 0.8)'};
  * {
    box-sizing: border-box;
    -webkit-font-smoothing: var(--font-smoothing);
  }
`;

const timeout = (delay = 1000) => new Promise(resolve => setTimeout(resolve, delay))

export const DevTools = (props) => {
  const [ReactDevTools, setDevTools] = useState(null);
  const unmounted = React.useRef(false);

  const loadIframe = useCallback(async () => {
    let iframe = document.getElementById(
      'sandbox-preview'
    ) as HTMLIFrameElement;

    // iframe hasn't initialized or just isn't there
    while (iframe === null && !unmounted.current) {
      // Retry every second
      // eslint-disable-next-line
      await timeout(1000);
      iframe = document.getElementById('sandbox-preview') as HTMLIFrameElement;
    }

    if (iframe) {
      const { contentWindow } = iframe;

      window.addEventListener('message', event => {
        const message = event.data
        console.log("🚀 ~ file: DevTools.tsx ~ line 43 ~ loadIframe ~ message", message)
        if (message.type === 'activate-react-devtools') {
          setDevTools(reactDevtools.initialize(contentWindow));
        }
      });
    }
  }, []);

  useEffect(() => {
    loadIframe();
    return () => {
      unmounted.current = true;
    };
  }, [loadIframe]);

  return (
    <Container>
      {ReactDevTools && (
        <ReactDevTools
        />
      )}
    </Container>
  );
};

