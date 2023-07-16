import { Link } from "react-router-dom";
import "./index.css";
function App() {
  return (
    <div className="welcome">
      <div className="welcome__title">
        <h1>Прогноз погоды: Ваш личный метеоролог в кармане!</h1>
        <h2>Получите свежий прогноз в одно касание!</h2>
      </div>
      <div className="welcome__buttons">
        <Link to="/today">
          <button className="welcome__buttons-today">Погода сейчас</button>
        </Link>
        <Link to="/fiveDay">
          <button className="welcome__buttons-five">Погода на 5 дней</button>
        </Link>
      </div>
      <span className="welcome__copyright">© RC, Все права защищены</span>
    </div>
  );
}

export default App;
