import React from 'react';
import '../assets/button.css';

export default function Button({
  onClick,
  title,
  disabled = false,
  hidden = false,
}) {
  return (
    <>
      {!hidden && (
        <button onClick={onClick} disabled={disabled} className="button">
          {title}
        </button>
      )}
    </>
  );
}
