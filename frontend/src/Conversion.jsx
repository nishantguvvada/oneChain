import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { NewsLetter } from './component/NewsLetter';

export const htmlString = ReactDOMServer.renderToStaticMarkup(<NewsLetter />);