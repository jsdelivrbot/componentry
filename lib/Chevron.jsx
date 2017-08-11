import React from 'react';
import { string } from 'prop-types';

export default function Chevron({ title, ...other }) {
  return (
    <svg
      role="img"
      className="icon font chevron"
      width="18"
      height="28"
      viewBox="0 0 18 28"
      {...other}
    >
      <title>
        {title || 'Toggle Button'}
      </title>
      <path d="M16.797 11.5a.54.54 0 0 1-.156.359L9.36 19.14c-.094.094-.234.156-.359.156s-.266-.063-.359-.156l-7.281-7.281c-.094-.094-.156-.234-.156-.359s.063-.266.156-.359l.781-.781a.508.508 0 0 1 .359-.156.54.54 0 0 1 .359.156l6.141 6.141 6.141-6.141c.094-.094.234-.156.359-.156s.266.063.359.156l.781.781a.536.536 0 0 1 .156.359z" />
    </svg>
  );
}

Chevron.propTypes = { title: string };
Chevron.defaultProps = { title: '' };
