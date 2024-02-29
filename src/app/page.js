import VerticalCard from "@/components/ui/ProductCards/VerticalCard/VerticalCard";
import TitleNav from "@/components/ui/TitleNav";
import React from "react";

const HomePage = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <TitleNav />
      <VerticalCard />
    </div>
  );
};

export default HomePage;
