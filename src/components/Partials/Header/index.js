import React from 'react'

var style = () => `
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

  .header-inner.open .twitter,
  .header-inner.open .linkedin,
  .header-inner.open .github {
    display: flex;
  }
  .twitter,
  .linkedin,
  .github {
    display: none;
    width: 16px;
    height: 16px;
    justify-content: center;
    align-items: center;
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

  .twitter {
    background: url('data:image/svg+xml;utf8,<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.375-1.337.648-2.085.795-.598-.638-1.45-1.036-2.396-1.036-1.812 0-3.282 1.468-3.282 3.28 0 .258.03.51.085.75C5.152 5.39 2.733 4.084 1.114 2.1.83 2.583.67 3.147.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.416-.02-.617-.058.418 1.304 1.63 2.253 3.067 2.28-1.124.88-2.54 1.404-4.077 1.404-.265 0-.526-.015-.783-.045 1.453.93 3.178 1.474 5.032 1.474 6.038 0 9.34-5 9.34-9.338 0-.143-.004-.284-.01-.425.64-.463 1.198-1.04 1.638-1.7z" fill-rule="nonzero"/>"<style type="text/css">svg{fill:#000000; background-color: #FFFFFF;}</style></svg>');
  }

  .linkedin {
    background: url('data:image/svg+xml;utf8,<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M13.632 13.635h-2.37V9.922c0-.886-.018-2.025-1.234-2.025-1.235 0-1.424.964-1.424 1.96v3.778h-2.37V6H8.51V7.04h.03c.318-.6 1.092-1.233 2.247-1.233 2.4 0 2.845 1.58 2.845 3.637v4.188zM3.558 4.955c-.762 0-1.376-.617-1.376-1.377 0-.758.614-1.375 1.376-1.375.76 0 1.376.617 1.376 1.375 0 .76-.617 1.377-1.376 1.377zm1.188 8.68H2.37V6h2.376v7.635zM14.816 0H1.18C.528 0 0 .516 0 1.153v13.694C0 15.484.528 16 1.18 16h13.635c.652 0 1.185-.516 1.185-1.153V1.153C16 .516 15.467 0 14.815 0z" fill-rule="nonzero"/><style type="text/css">svg{fill:#FFFFFF; background-color: #000000;}</style></svg>');
  }

  .github {
    background: url('data:image/svg+xml;utf8,<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8" fill-rule="nonzero"/><style type="text/css">svg{fill:#000000; background-color: #FFFFFF;}</style></svg>');
  }
`

class Header extends React.Component {

  render() {

    var routes = {
      home: { name: 'Home', url: '' },
      about: { name: 'About', url: 'about' },
    }

    var x = ( window.location.hash === '#/' ) ? 'about' : 'home'

    return (
      <header className="header f_xl phm">
        <div className="grid dsktp-2 mob-1">
          <style>{style()}</style>
          <div className="ptm pbm" onClick={() => { window.location.hash = '#/' }}>{this.props.children}</div>
          <ul className="header-inner" ref={el => { this.inner = el }}>
            <li><p className="f_m" onClick={() => { window.location.hash = `#/${routes[x].url}` }}>{routes[x].name}</p></li>
            <li><p className="f_m" onClick={() => { this.inner.classList.toggle('open') }}>Social</p></li>
            <li><a className="twitter" target="_blank" href="http://twitter.com/oldgithub"></a></li>
            <li><a className="linkedin" target="_blank" href="https://uk.linkedin.com/in/edwilliamsdevelopment"></a></li>
            <li><a className="github" target="_blank" href="http://github.com/edwilliams"></a></li>
          </ul>
        </div>
      </header>
    )

  }
}

export default Header
