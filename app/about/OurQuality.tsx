import Image from "next/image";
import React from "react";

const OurQuality = () => {
  return (
    <section className=" flex flex-col items-center justify-center container lg:w-11/12 mt-10 md:my-28">
      <div className="lg:grid grid-cols-2  flex-col   gap-10 justify-center ">
        <div className="col-span-1 lg:flex justify-end hidden">
          <Image
            src={"/Group 12.png"}
            alt="hero"
            width={600}
            height={300}
            quality={100}
            className="object-cover"
          />
        </div>

        <main className=" col-span-1 flex flex-col items-center lg:items-center lg:gap-10   ">
          <div className=" flex items-start py-2 lg:py-0  ">
            <div className="flex flex-col items-center justify-center text gap-2    ">
              <p className="text-[#056FC5] font-bold p-2 rounded-lg bg-[#056FC533] ">
                Our Quality Guarantee
              </p>
              <h1 className="text-2xl font-bold text-[#032759]">
                Committed to Excellence, Guaranteed to Last.
              </h1>
            </div>
          </div>
          <p className="lg:text-xl md:text-xl text-justify text-[#323232] font-medium">
            At VY Construction, our commitment to quality is unconditional. We
            guarantee that all of our construction products and services will
            meet the highest standards of excellence and accuracy. Our team
            inspects each project through various stages to ensure it meets or
            exceeds the expectations of our clients.
          </p>

          <div className="col-span-1 flex justify-end lg:hidden py-10">
            <Image
              src={"/house1.png"}
              alt="hero"
              width={500}
              height={300}
              quality={100}
              className="object-cover"
            />
          </div>

          <p className="lg:text-xl md:text-xl text-justify text-[#323232] font-medium">
            We strive for perfection in every aspect of our work, from design
            and engineering to installation and maintenance. Our experts use the
            most advanced technology and cutting-edge methods to ensure accuracy
            in every step of our processes. We also have a rigorous quality
            control program that guarantees all materials used are up to
            standard.
          </p>
        </main>
      </div>
      <p className="lg:text-sm text-sm font-bold border-2 p-2 lg:p-4 mt-4 lg:m-8 rounded-md text-center lg:w-4/5 border-[#056FC59C] md:text-xl  text-[#323232] ">
        Our commitment goes beyond just quality—we also ensure safety on the job
        site, with all of our workers following a strict code of conduct. We
        believe in taking every precaution to ensure our clients’ satisfaction,
        so they can rest assured that their project is in capable hands.
      </p>
    </section>
  );
};

export default OurQuality;
