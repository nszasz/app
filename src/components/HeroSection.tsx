import illustrationUrl from '../assets/illustration.png';
import './HeroSection.scss';

export const HeroSection = () => {
  return (
    <div className="heroSection">
      <div>
        <h1>Comnica Signature</h1>
        <p>Digitális aláíró szolgáltatás a Comnicától</p>
      </div>
      <img src={illustrationUrl} alt="illustration" />
    </div>
  );
};
