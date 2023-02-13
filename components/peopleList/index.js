import React from "react";
import Image from "next/image";

const PeopleList = ({ people }) => {
  return (
    <ul className="divide-y divide-gray-200">
      {people.map((person) => (
        <li key={person.email} className="py-4 flex">
          <Image
            className="h-10 w-10 rounded-full"
            src={person.image}
            width={256}
            height={256}
            alt={`Headshot of ${person.name}`}
          />
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">{person.name}</p>
            <p className="text-sm text-gray-500">{person.email}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default PeopleList;
