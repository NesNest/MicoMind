import HeroBanner from "../../components/HeroBanner/HeroBanner";
export default function Home() {
  return (
    <div>
      <HeroBanner>MicoMind</HeroBanner>
      <p className="explanation-text">
        Somos una familia de productos de software robustos <br />
        y accesibles que utilicen la IA para generar un impacto <br />
        social y económico significativo a nivel nacional.
      </p>
    </div>
  );
}
