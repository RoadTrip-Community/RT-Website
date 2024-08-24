import { useNavigate } from "react-router-dom";

const Mission = () => {
  const router = useNavigate()
  return (
    <section className="bodyCon">
      <div className="conntianer px-[12px] lg:px-[120px] py-[48px] lg:py-[72px]">
        <div className="blue offshadblack2 bg-[#6868AC] lg:bg-[#4D34CC] border lg:border-[3px] border-[#231F20] p-[10px] lg:p-4 text-white">
          <div className="border lg:border-[3px] border-white px-6 lg:px-20 py-[38px] lg:py-[60px] flex flex-col gap-10">
            <p className="text-[26px] leading-10 text-center">
              RoadTrip Community is a diverse group where designers come together to connect, collaborate and grow. We are also welcoming to no-code developers, web developers, software developers, product managers, writers.
            </p>
            <div className="slotc">
              <div className="lg:bg-[#198046] bg-[#47996B] slot p-1 order-3 lg:order-none lg:p-[7px] text-center cD600 lg:text-[22px] text-xs tracking-[-0.48px] lg:tracking-[-0.88px]">
                <div className="lg:py-[9px] w-full py-1 border-[0.587px] border-[#FFF]">
                  Design
                </div>
              </div>
              <div className="bg-[#F6B847] slot p-1 lg:p-[7px] order-4 lg:order-none text-center cD600 lg:text-[22px] text-xs tracking-[-0.48px] lg:tracking-[-0.88px]">
                <div className="lg:py-[9px] w-full py-1 border-[0.587px] border-[#231f20] text-[#231f20]">
                  Tech
                </div>
              </div>
              <div className="bg-[#231f20] order-1 lg:order-none slot p-1 lg:p-[7px] text-center cD600 lg:text-[22px] text-xs tracking-[-0.48px] lg:tracking-[-0.88px]">
                <div className="lg:py-[9px] w-full py-1 border-[0.587px] border-[#D0CCE0] lg:border-[#FFF]">
                  Product
                </div>
              </div>
              <div className="lg:bg-[#fff] bg-[#D0CCE0] slot p-1 order-2 lg:order-none lg:p-[7px] text-center cD600 lg:text-[22px] text-xs tracking-[-0.48px] lg:tracking-[-0.88px]">
                <div className="lg:py-[9px] w-full py-1 border-[0.587px] border-[#231f20] text-[#231f20]">
                  Brand
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="forTwoColor w-full justify-between pt-3 lg:pt-8 flex flex-col lg:flex-row lg:gap-5 gap-3">
          <div className="offshadblack2 w-full border lg:border-[3px] border-[#231f20] lg:p-4 p-[10px] bg-[#F6B847]">
            <div className=" border lg:border-[3px] border-[#231f20] pt-[38px] lg:pt-[89px] px-6 pb-6">
              <div className="relative flex">
                <h2 className="cD600 text-[#231f20] z-50 text-[40px] lg:text-[64px] tracking-[-0.64px]">
                  Who We Are
                </h2>
                <h2 className="cD600 text-[#fff] absolute top-[2px] left-[2px] lg:top-1 lg:left-1 text-[40px] lg:text-[64px] z-10 tracking-[-0.64px]">
                  Who We Are
                </h2>
              </div>
              <p className="manr text-[16px] lg:text-base">
                We are a vibrant and inclusive space for tech and design creatives! We{`'`}re not just a community; we{`'`}re a tight-knit tribe on a journey of collaboration, growth, and success together.
              </p>
            </div>
          </div>
          <div className="offshadblack2 w-full border lg:border-[3px] border-[#231f20] lg:p-4 p-[10px] bg-[#47996B] lg:bg-[#198046]">
            <div className=" border lg:border-[3px] border-[#231f20] pt-[38px] lg:pt-[89px] px-6 pb-6">
              <div className="relative flex">
                <h2 className="cD600 text-[#fff] z-50 text-[40px] lg:text-[64px] tracking-[-0.64px]">
                  Our Mission
                </h2>
                <h2 className="cD600 text-[#231f20] absolute top-[2px] left-[2px] lg:top-1 lg:left-1 text-[40px] lg:text-[64px] z-10 tracking-[-0.64px]">
                  Our Mission
                </h2>
              </div>
              <p className="text-white manr text-[16px] lg:text-base">
                Fueling the drive for success in the design and tech space by providing a supportive environment, valuable resources, and unique opportunities for personal and professional development.
              </p>
            </div>
          </div>
        </div>
        <div className="forCTA flex justify-center items-center pt-6 lg:pt-12">
          <button onClick={() => router('/about-us')} className=" bg-[#231f20] offshadctayellow py-4 lg:py-5 text-xs lg:text-base px-8 text-white uppercase cD600">
            More About Us
          </button>
        </div>
      </div>
    </section>
  );
}
export default Mission