
import { RiAwardLine, RiBriefcase3Fill, RiBuilding3Line, RiUser3Line } from "@remixicon/react";
import StatCard from "./GraficaCasos";

const StatisticsSection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-12">
     
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center">
        <StatCard 
          label="CASOS RESUELTOS" 
          value={2500} 
          icon={<RiBriefcase3Fill />} 
        />
        <StatCard 
          label="CLIENTES ATENDIDOS" 
          value={2000} 
          icon={<RiUser3Line />} 
        />
        <StatCard 
          label="EMPRESAS ATENDIDAS" 
          value={80} 
          icon={<RiBuilding3Line />} 
        />
        <StatCard 
          label="AÑOS DE EXPERIENCIA" 
          value={25} 
          icon={<RiAwardLine />} 
        />
      </div>
      <h2 className="text-center text-4xl font-bold text-orange-500 mb-10">
      Éxitos Construidos sobre Confianza y Compromiso
      </h2>
    </section>
  );
};

export default StatisticsSection;
