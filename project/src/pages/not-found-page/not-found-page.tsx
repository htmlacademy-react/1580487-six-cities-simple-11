import React from 'react';
import { Helmet } from 'react-helmet-async';
import { AppLogo } from '../../components';

function NotFoundPage(): JSX.Element {
  return (
    <div className="page" style={{ height: '100vh' }}>
      <Helmet>
        <title>Page not found</title>
      </Helmet>

      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <AppLogo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <div className="header__nav-profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </div>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#todo">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--not-found">
        <div className="container">
          <h1>404. Page not found</h1>
          <p><a href="/">Вернуться на главную</a></p>
        </div>
      </main>
    </div>
  );
}

export default NotFoundPage;
