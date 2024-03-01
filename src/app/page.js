import HorizontalCard from "@/components/ui/ProductCards/HorizontalCard/HorizontalCard";
import TitleNav from "@/components/ui/TitleNav";
import React from "react";

const HomePage = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <TitleNav />
      <HorizontalCard />
    </div>
  );
};

export default HomePage;
