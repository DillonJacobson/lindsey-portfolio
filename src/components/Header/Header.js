import Image from 'next/image';
import routes from '../../utils/routes';

const Header = () => {
  return (
    <header>
      <nav className="nav">
        <div className="container nav-wrapper">
          <div className="nav-logo-wrapper">
            <Image src="/images/TotallyCreativeLogo.png" fill />
          </div>
          <ul className="nav-links">
            {routes.map((route) => {
              return (
                <li className="nav-link">
                  <a href={route.path}>{route.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
