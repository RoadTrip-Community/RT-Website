const Partner = () => {
    return (
        <div className="border-t-4 border-b-4 border-black py-10 bg-[#FCE8E4]">
            <div>
                <h1 className="text-[#CC4D34] cD600 text-center text-[48px]">Featured Partnerships</h1>
                <p className="text-[22px] text-center manD font-semibold text-[#4A5752] leading-[26px]">
                    Peep our most recent partnerships with amazing <br /> organizations and communities
                </p>
            </div>

            <div className="grid md:grid-cols-3 grid-cols-1 justify-center justify-items-center items-center gap-10 my-10 md:px-24 px-4">
                <img src="/images/wudd.svg" width={"421.73px"} height={"85px"} />
                <img src="/images/YAPPI.svg" width={"241.16px"} height={"139px"} />
                <img src="/images/UDC.svg" width={"180.96px"} height={"121px"} />
            </div>
            <div className="flex justify-center">
                <a href="/partner-with-us" className="bg-black text-white px-3.5 py-2 cD600 text-center">See All Our Partners</a>
            </div>
        </div>
    )
}

export default Partner