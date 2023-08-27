import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div className="flex flex-col bg-[#d9e8f3]">
      <div className="flex  flex-col md:flex-row first gap-2 w-[95%] mx-auto my-4">
        <div className="w-[100%] md:w-[50%] my-6 text-center md:text-left order-2 md:order-1">
          <h1 className="text-3xl tracking-wider px-3 py-2 font-bold">
            All your files in one secure location, accessible anywhere.
          </h1>
          <p className="px-3 py-2">
            Fylo stores your most important files in one secure location. Access
            them wherever you need, share and collaborate with friends, family,
            and co-workers.
          </p>
          <div className="px-3 py-2">
            <Link
              href={"/dashboard"}
              className="px-8 py-2 bg-[#3065f8] hover:bg-[#bfbfbf] cursor-pointer text-white rounded"
            >
              Get Started
            </Link>
          </div>
        </div>
        <div className="w-[100%] md:w-[50%] flex justify-center order-1 md:order-2">
          <Image
            src={"/illustration-1.svg"}
            alt="logo"
            width={500}
            height={500}
          />
        </div>
      </div>
      <div className="flex  flex-col md:flex-row second gap-2 w-[95%] mx-auto my-4">
        <div className="w-[100%] md:w-[50%] text-left order-2 md:order-1">
          <h1 className="text-3xl tracking-wider px-3 py-2 font-bold">
            Stay productive, wherever you are
          </h1>
          <p className="px-3 py-2">
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p className="px-3 py-2 ">
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required!
          </p>

          <Link
            href="/dashboard"
            className="flex gap-2 m-3 py-2 border-b-2 border-[#3c9f8f]  w-48"
          >
            <p className="tracking-wide text-[#3c9f8f]">See how Fylo works</p>
            <Image src="/icon-arrow.svg" alt="/" width={25} height={25} />
          </Link>

          <div class="testimonial bg-white flex flex-col mx-auto md:mx-2 text-left p-4 w-[80%] md:w-[75%] mb-4 mt-10 ">
            <Image
              src="icon-quotes.svg"
              alt="/"
              width={30}
              height={30}
              className="p-2"
            />
            <p className="px-2 text-sm">
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div className="flex px-2 py-3 gap-2">
              <Image
                src="/avatar-testimonial.jpg"
                alt="/"
                width={50}
                height={50}
                className="rounded-full"
              />

              <div className="flex flex-col justify-center">
                <h3 className="text-sm font-bold">Kyle Burton</h3>
                <p className="text-sm">Founder & CEO, Huddle</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100%] md:w-[50%] flex justify-center order-1 md:order-2">
          <Image src="/illustration-2.svg" alt="/" width={500} height={500} />
        </div>
      </div>
      <div className="flex  flex-col gap-2 md:flex-row third py-20 bg-[#585989] text-white">
        <div className="w-[100%] md:w-[50%] text-left">
          <h1 className="text-3xl tracking-wider px-5 py-2 font-bold">
            Get early access today
          </h1>
          <p className="px-5 py-2 ">
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
        </div>
        <div className="px-3 py-2 w-[100%] md:w-[50%] text-center">
          <Link
            href={"/dashboard"}
            className="px-8 py-3 bg-[#3065f8] hover:bg-[#bfbfbf] cursor-pointer text-white rounded"
          >
            Get Starter For Free
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
