

function updateSeconds() {
  seconds++;
  ReactDOM.render(
    <SecondsCounter seconds={seconds} />,
    document.getElementById('root')
  );
}
