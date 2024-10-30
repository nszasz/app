import { StartButton } from './StartButton.tsx';
import './Welcome.scss';

export const Welcome = () => {
  return (
    <div className="welcome">
      <h2>
        Üdvözlöm a<br /> Comnica Signature-ben!
      </h2>
      <p>
        A következőkben végigvezetjük dokumentumai elfogadásán és aláírásán. A
        folyamat több percet is igénybe vehet, ezért kérjük, csak akkor kezdje
        el, ha készen áll rá.
      </p>
      <StartButton />
    </div>
  );
};
