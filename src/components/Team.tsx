"use client";

import Image from "next/image";
import React from "react";

type TeamMember = {
  name: string;
  role?: string;
  image: string;
};

const members: TeamMember[] = [
  { name: "Robert Johnson", role: "Supervisor", image: "/team/67909749be66adb0cc5432b4_team-img-01.jpg" },
  { name: "Marko Daniel", role: "Chief Officer", image: "/team/679097b4a92acb1b5b7b0443_team-img-02.jpg" },
  { name: "Jake Nicholson", role: "Coordinator", image: "/team/679097be41507d69d6808f92_team-img-03.jpg" },
  { name: "Sony Miles", role: "Team Manager", image: "/team/679097c60747a4d59ee3ee58_team-img-04.jpg" },
];

const Team: React.FC = () => {
  return (
    <section className="relative mx-auto max-w-[1400px] px-4 py-20 sm:px-6 lg:px-8 bg-[#f4f6ff]">
      <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
        {members.map((m) => (
          <article key={m.name} className="group relative transform transition-transform duration-300 hover:scale-105">
            <div className="rounded-[28px] overflow-hidden bg-transparent card-clip shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Image with top-right curved cut */}
              <div className="relative w-full h-[450px] curved-notch">
                <Image
                  src={m.image}
                  alt={m.name}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                  priority={false}
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Team;


