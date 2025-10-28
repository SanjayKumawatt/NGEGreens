import React from "react";
import { Link } from "react-router-dom";

const menuSections = [
  { title: "Vegetable Seeds", links: ["Types Of Vegetable Seeds", "Vegetable Seeds Season-Wise", "Vegetables Seeds Combo"], pathPrefix: "/seeds/vegetable" },
  { title: "Flower Seeds", links: ["Flower Seeds (OP/Desi)", "Flower Seeds (Hybrid)", "Flowering Tree and Shrub Seeds", "Fragrant Flower Seeds", "Annual Flower Seeds", "Perennial Flower Seeds"], pathPrefix: "/seeds/flower" },
  { title: "Tree and Forestry Seeds", links: ["Fruit Seeds", "Grass Seeds", "Seed Balls", "Palm Seeds", "Avenue Tree Seeds", "Conifer Seeds", "Shrub Seeds"], pathPrefix: "/seeds/tree" },
  { title: "Herb Seeds", links: ["Herb Seeds (OP / Desi)", "Herb Seeds (Organic)", "Herb Seeds (Heirloom)", "Herb Seeds (Hybrid)", "Aromatic Herb Seeds", "Culinary Herb Seeds"], pathPrefix: "/seeds/herb" },
  { title: "Seeds By Season", links: ["All Season Seeds", "Winter Seeds", "Summer Seeds"], pathPrefix: "/seeds/season" },
  { title: "Field Crops & Agriculture Seeds", links: [], pathPrefix: "/seeds/agriculture" },
  { title: "Hybrid Seeds", links: [], pathPrefix: "/seeds/hybrid" },
  // { title: "Mix Seed Combos", links: [], pathPrefix: "/seeds/combos" },
];

const createSlug = (text) =>
  text.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-").replace(/[^a-z0-9-]/g, "");

const MegaMenuRow = ({ closeMenu }) => {
  return (
    <div className="bg-white border-t border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-center items-center gap-8 py-4">
        {menuSections.map((section, index) => (
          <div key={index} className="relative group">
            {/* Main title */}
            <Link
              to={section.pathPrefix}
              onClick={closeMenu}
              className="text-[15px] font-semibold text-gray-800 hover:text-green-700 transition duration-200"
            >
              {section.title}
            </Link>

            {/* Dropdown (hover show) */}
            {section.links.length > 0 && (
              <ul className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out p-3 space-y-1 z-50">
                {section.links.map((linkTitle, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={`${section.pathPrefix}/${createSlug(linkTitle)}`}
                      className="text-sm text-gray-700 hover:text-green-700 block py-1"
                      onClick={closeMenu}
                    >
                      {linkTitle}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MegaMenuRow;
