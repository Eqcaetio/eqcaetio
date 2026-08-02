import Button from "./components/Button";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Principes from "./components/Principes";
import Cabinets from "./components/Cabinets";

export default function App() {
  return (
    <div className="min-h-screen bg-purple-500">
      <Navbar />
      <Hero />
      <Principes />
      <Cabinets />
    </div>
  );
}
