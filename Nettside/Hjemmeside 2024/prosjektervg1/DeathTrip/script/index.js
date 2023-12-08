import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

function App() {
  const [isVisible, setVisible] = React.useState(false);
  function handleClick() {
    setVisible(v => !v);
  }
  return (
    <div className="App">
      <h1>Fade in demo</h1>
      <button onClick={handleClick}>Fade me {isVisible ? 'out' : 'in'}</button>
      <div className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at
          commodo nibh, ut maximus turpis. Ut porttitor tempus augue, ac rutrum
          lorem rutrum eget. Donec libero lorem, luctus in maximus at, facilisis
          sit amet sapien. Pellentesque pharetra non urna ac porttitor.
          Phasellus a dignissim augue, rhoncus sagittis ante. Cras quis orci ac
          risus dapibus pellentesque faucibus in leo. Vivamus gravida eros a leo
          luctus, mollis elementum lectus viverra. Vivamus pellentesque pulvinar
          turpis. Cras rutrum justo at mauris aliquam, quis luctus est posuere.
          Quisque erat neque, sollicitudin quis mi et, commodo ultrices magna.
          Etiam varius efficitur elementum. Nam et lacus sit amet mi viverra
          lacinia. Nullam pretium est vitae tortor mollis tempor. Cras tincidunt
          magna eget purus gravida, et ultricies ex consequat.
        </p>
      </div>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);