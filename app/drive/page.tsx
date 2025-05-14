'use client';

import { useEffect } from 'react';

export default function Drive() {
  useEffect(() => {
    window.location.href = 'http://95.165.69.124:4000/?launchApp=SYNO.SDS.Drive.Application#MyDrive/';
  }, []);

  return null;
} 