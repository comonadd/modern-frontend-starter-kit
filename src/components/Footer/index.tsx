/**
 * @file index.js
 * @author Dmitry Guzeev <dmitry.guzeev@yahoo.com>
 */

import React from 'react';

const style = require('./style');

interface FooterSectionProps {
  title: string,
  children: React.ReactNode,
}

const FooterSection = (props: FooterSectionProps) =>
  <div className={style.footer__section}>
    <div className={style.footer__section__title}>
      {props.title}
    </div>
    <div className={style.footer__section__content}>
      {props.children}
    </div>
  </div>;

/**
 * @summary
 * The `Footer` component
 *
 * @description
 * The `Footer` is the thing that is always at the bottom of the page.
 *
 * @return {React.Component}
 */
const Footer = () =>
  <footer className={style.footer}>
    <FooterSection title="What is that?">
      Pellentesque dapibus suscipit ligula.  Donec posuere augue in quam.  Etiam vel tortor sodales tellus ultricies commodo.  Suspendisse potenti.  Aenean in sem ac leo mollis blandit.  Donec neque quam, dignissim in, mollis nec, sagittis eu, wisi.  Phasellus lacus.  Etiam laoreet quam sed arcu.
    </FooterSection>
    <FooterSection title="Who are we?">
      Pellentesque dapibus suscipit ligula.  Donec posuere augue in quam.  Etiam vel tortor sodales tellus ultricies commodo.  Suspendisse potenti.  Aenean in sem ac leo mollis blandit.  Donec neque quam, dignissim in, mollis nec, sagittis eu, wisi.  Phasellus lacus.  Etiam laoreet quam sed arcu.  Phasellus at dui in ligula mollis ultricies.  Integer placerat tristique nisl.  Praesent augue.  Fusce commodo.
    </FooterSection>
    <FooterSection title="Good boilerplate">
      Aliquam erat volutpat.  Nunc eleifend leo vitae magna.  In id erat non orci commodo lobortis.  Proin neque massa, cursus ut, gravida ut, lobortis eget, lacus.  Sed diam.  Praesent fermentum tempor tellus.  Nullam tempus.  Mauris ac felis vel velit tristique imperdiet.  Donec at pede.
    </FooterSection>
  </footer>;

export default Footer;
