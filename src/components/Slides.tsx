import Image from "next/image"; 
export default function Slides() {
  return (
    <>
      <div className="slideSection bg-[#FCF8F3]">
        <div className="slideText pt-9">
          <h4 className="font-extrabold text-[2rem]">50+ Beautiful rooms inspiration</h4>
          <p>
            Our designer already made a lot of beautiful prototypes of rooms
            that inspire you
          </p>
          <button className="bg-[#B88E2F] p-2">Explore More</button>
        </div>
        <div className="slideImages">
          <Image src="/inner.png" width={250} height={250} alt="Inner Peace" />
        </div>
        <div className="slideImages">
          <Image src="/Sideinner.png" width={250} height={250} alt="Side Inner" />
        </div>
      </div>
    </>
  );
}
