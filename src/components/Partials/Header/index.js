import React from 'react'

const style = () => `
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header > div { width: 100%; }

  .header-inner {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .header-inner li:nth-child(1) {
    margin-right: 20px;
  }

  .header-inner.open {
    justify-content: space-between;
  }
  .header-inner.open li:nth-child(1) {
    margin-right: 0;
  }

  .header-inner.open .link {
    display: block;
  }
  .link {
    display: none;
    width: 16px;
    height: 16px;
    justify-content: center;
    align-items: center;
    transform: translateY(-9px);
  }
  .link.codepen {
    width: 23px;
    transform: translate(-5px,-5px);
  }
  @media screen and (max-width: 600px) {
    .header {
      justify-content: center;
      text-align: center;
    }
    .header-inner {
      justify-content: center;
    }
  }
`

class Header extends React.Component {

  render() {

    const routes = {
      home: { name: 'Home', url: '' },
      about: { name: 'About', url: 'about' },
    }

    const x = ( window.location.hash === '#/' ) ? 'about' : 'home'

    return (
      <header className="header f_xl phm">
        <div className="grid dsktp-2 mob-1">
          <style>{style()}</style>
          <div className="ptm pbm" onClick={() => { window.location.hash = '#/' }}>{this.props.children}</div>
          <ul className="header-inner" ref={el => { this.inner = el }}>
            <li><p className="f_m" onClick={() => { window.location.hash = `#/${routes[x].url}` }}>{routes[x].name}</p></li>
            <li><p className="f_m" onClick={() => { this.inner.classList.toggle('open') }}>Social</p></li>
            <li><a className="link" target="_blank" href="http://twitter.com/oldgithub">
              <svg viewBox="0 0 16 16"><path d="M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.375-1.337.648-2.085.795-.598-.638-1.45-1.036-2.396-1.036-1.812 0-3.282 1.468-3.282 3.28 0 .258.03.51.085.75C5.152 5.39 2.733 4.084 1.114 2.1.83 2.583.67 3.147.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.416-.02-.617-.058.418 1.304 1.63 2.253 3.067 2.28-1.124.88-2.54 1.404-4.077 1.404-.265 0-.526-.015-.783-.045 1.453.93 3.178 1.474 5.032 1.474 6.038 0 9.34-5 9.34-9.338 0-.143-.004-.284-.01-.425.64-.463 1.198-1.04 1.638-1.7z" fillRule="nonzero"/>"</svg>
            </a></li>
            <li><a className="link" target="_blank" href="https://uk.linkedin.com/in/edwilliamsdevelopment">
              <svg viewBox="0 0 16 16"><path d="M13.632 13.635h-2.37V9.922c0-.886-.018-2.025-1.234-2.025-1.235 0-1.424.964-1.424 1.96v3.778h-2.37V6H8.51V7.04h.03c.318-.6 1.092-1.233 2.247-1.233 2.4 0 2.845 1.58 2.845 3.637v4.188zM3.558 4.955c-.762 0-1.376-.617-1.376-1.377 0-.758.614-1.375 1.376-1.375.76 0 1.376.617 1.376 1.375 0 .76-.617 1.377-1.376 1.377zm1.188 8.68H2.37V6h2.376v7.635zM14.816 0H1.18C.528 0 0 .516 0 1.153v13.694C0 15.484.528 16 1.18 16h13.635c.652 0 1.185-.516 1.185-1.153V1.153C16 .516 15.467 0 14.815 0z" fillRule="nonzero"/></svg>
            </a></li>
            <li><a className="link" target="_blank" href="http://github.com/edwilliams">
              <svg viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8" fillRule="nonzero"/></svg>
            </a></li>
            <li><a className="link codepen" target="_blank" href="https://codepen.io/oldgithub">
              <svg viewBox="0 0 512 512"><path d="M427 201.9c-0.6-4.2-2.9-8-6.4-10.3L264.2 87.3c-4.9-3.3-11.4-3.3-16.3 0L91.4 191.6c-4 2.7-6.5 7.4-6.5 12.2v104.3c0 4.8 2.5 9.6 6.5 12.2l156.4 104.3c4.9 3.3 11.4 3.3 16.3 0L420.6 320.4c4-2.6 6.6-7.4 6.6-12.2V203.9C427.1 203.2 427.1 202.6 427 201.9 427 201.7 427.1 202.6 427 201.9zM270.7 127.1l115.2 76.8 -51.5 34.4 -63.8-42.7V127.1zM241.3 127.1v68.6l-63.8 42.7 -51.5-34.4L241.3 127.1zM114.3 231.4l36.8 24.6 -36.8 24.6V231.4zM241.3 384.9L126.1 308.1l51.5-34.4 63.8 42.6V384.9zM256 290.8l-52-34.8 52-34.8 52 34.8L256 290.8zM270.7 384.9V316.3l63.8-42.6 51.5 34.4L270.7 384.9zM397.7 280.6l-36.8-24.6 36.8-24.6V280.6z"></path></svg>
            </a></li>
          </ul>
        </div>
      </header>
    )

  }
}

export default Header
