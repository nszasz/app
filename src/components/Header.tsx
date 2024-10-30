import logoUrl from "/logo.svg";
import "./Header.scss";

export const Header = () => {
  return (
    <header className="header">
      <img src={logoUrl} alt="logo" width={32} />
      <span>Nándi</span>
    </header>
  );
};
