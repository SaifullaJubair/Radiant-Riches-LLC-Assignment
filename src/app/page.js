import HorizontalCard from "@/components/ui/ProductCards/HorizontalCard/HorizontalCard";
import VerticalCard from "@/components/ui/ProductCards/VerticalCard/VerticalCard";
import Subscribe from "@/components/ui/Subscribe";
import TitleNav from "@/components/ui/TitleNav";
import React from "react";

const HomePage = () => {
  return (
    <div className="max-w-5xl mx-auto w-[98%]">
      <TitleNav />
      <HorizontalCard />
      <VerticalCard />
      <Subscribe />
    </div>
  );
};

export default HomePage;
