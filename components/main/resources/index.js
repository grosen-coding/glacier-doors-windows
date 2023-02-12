import React from "react";
import { useState, useEffect } from "react";
import { resources } from "@/data/resources";
import Button from "@/components/buttons/Button";
import Image from "next/image";

const ResourcesSection = () => {
  const [selectedResources, setSelectedResources] = useState([]);

  useEffect(() => {
    const randomResources = [];
    const resourcesArray = [...resources];

    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * resourcesArray.length);
      randomResources.push(resourcesArray[randomIndex]);
      resourcesArray.splice(randomIndex, 1);
    }

    setSelectedResources(randomResources);
  }, []);
  return (
    <section>
      <h2>
        All The Windows & Doors Resources You Need to Make an Informed Decision
      </h2>
      <div>
        <ul>
          {selectedResources.map((resource, i) => (
            <li key={i}>
              <div>
                <Image src={resource.image} alt="" />
              </div>
              <h3>{resource.name}</h3>
              <Button />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ResourcesSection;
