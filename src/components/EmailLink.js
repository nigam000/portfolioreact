import React from 'react';

const EmailLink = () => {
  const email = 'nigammul009@gmail.com';
  const mailtoLink = `mailto:${email}`;

  return (
    <a href={mailtoLink}>Open Email</a>
  );
};

export default EmailLink;