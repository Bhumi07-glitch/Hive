function ToolComponent()
{
    return (
        <>
        <div className="relative bg-[#0A0A0F] h-[461px] w-[410.66px] rounded-[12px] border-[1px] border-[#FFD700] ">


            <div className="flex flex-col ">

            <img className="h-[192px] w-[328.66px] mt-[41px] ml-[41px] rounded-[8px]" src="" alt=""></img>

            <div className="w-[193px] h-[27px]  absolute top-[249px] left-[40.67px]">

            <p className="text-[18px] text-[#F9FAFB] font-semibold">Component_name</p>
</div>
            <div className="w-[328.66px] h-[20px] absolute top-[284px] left-[41px]">
                <div className="w-[318.49px] h-[17px] absolute top-[1px]">
                <p className="text-[14px] text-[#9CA3AF] font-semibold"> Component_description</p>
                </div>
            </div>

            <div className="w-[159px] h-[16px] absolute top-[324px] left-[41px] flex items-center ">
              <p className="text-[#9CA3AF] text-[12px] whitespace-nowrap font-mono">Available: Availability</p> 

                <div className="w-[66.45px] h-[24px] top-[320px] l-[303.2px] rounded-[4px] bg-[#78350F] flex items-center justify-center ml-33">

                    <div className="w-[50.8px] h-[15px] top-[4px] left-[8.47px] flex items-center justify-center ">

                        <p className="text-[#F59E0B] text-[12px] font-[600] font-semibold font-font1 tracking-[0.3px]">STATUS</p>
                    </div>
                
                </div>
            </div>

            <div className="w-[328.66px] h-[40px] absolute top-[360px] left-[41px] rounded-[8px] bg-[#FFD700]">
                <div className="w-[55.48px] h-[20px] top-[10px] absolute left-[136.16px] flex items-center">
                    <p className="text-[#0A0E17] font-medium ">Borrow</p>

                </div>

            </div>

            </div>
        </div>
        </>
    )
}
export default ToolComponent;