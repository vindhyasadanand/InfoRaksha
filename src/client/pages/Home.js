import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="page-home">
      <Helmet title="Raksha" />
      <div className="page-home__wrapper">
        <div className="page-home__mid">
          <img
          alt="logo"
          src="/images/raksha.png"
          style={{width:"200px",height:"200px"}}
          className="page-home_mid_img"
          />
          <h1 className="page-home__mid__title">Raksha</h1>
        </div>
        <div className="page-home__main">
          <Link to="/encode" className="page-home__btn-encode">
            encode
          </Link>
          <Link to="/decode" className="page-home__btn-decode">
            decode
          </Link>
        </div>
      </div>
      <div className="page-home__divider">
        <div className="page-home__divider__item page-home__left"></div>
        <div className="page-home__divider__item page-home__right"></div>
      </div>
    </div>
  );
}

export default Home;
