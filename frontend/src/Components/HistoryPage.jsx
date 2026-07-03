import React from 'react';

function HistoryPage() {
    return (
       <>

   <div class="min-h-screen bg-[#050505] text-[#F9FAFB] p-4 sm:p-8 xl:px-48 font-sans antialiased">
  
  <header class="mb-8">
    <h1 class="text-2xl md:text-3xl font-bold font-[700] ">History</h1>
    <p class="text-[#9CA3AF] text-xs md:text-sm mt-1">Your borrowing history</p>
  </header>

  <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
    <div class="flex items-center gap-4 bg-[#0A0A0F] p-5 rounded-xl border-[1px] border-[#374151]">
      <div class="flex items-center justify-center w-12 h-12 rounded-xl bg-[#042F1A] text-[#10B981]">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <div>
        <h2 class="text-2xl font-bold leading-none">2</h2>
        <p class="text-[#9CA3AF] text-xs mt-1">On Time Returns</p>
      </div>
    </div>

    <div class="flex items-center gap-4 bg-[#0A0A0F] p-5 rounded-xl border-[1px] border-[#374151]">
      <div class="flex items-center justify-center w-12 h-12 rounded-xl bg-[#78350F] text-[#F59E0B]">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      </div>
      <div>
        <h2 class="text-2xl font-bold leading-none">2</h2>
        <p class="text-[#9CA3AF] text-xs mt-1">Delayed Returns</p>
      </div>
    </div>

    <div class="flex items-center gap-4 bg-[#0A0A0F] p-5 rounded-xl border-[1px] border-[#374151] md:col-span-2 lg:col-span-1">
      <div class="flex items-center justify-center w-12 h-12 rounded-xl bg-[#1E3A8A] text-[#3B82F6]">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
      <div>
        <h2 class="text-2xl font-bold leading-none">4</h2>
        <p class="text-[#9CA3AF] text-xs mt-1">Total Borrows</p>
      </div>
    </div>
  </section>

  <section class="space-y-4">
    
    <div class="flex flex-col md:flex-row md:items-start justify-between bg-[#0A0A0F] border-t-[1px] border-l-[4px] border-r-[1px] border-b-[1px] border-[#F4C430] rounded-xl p-5 gap-6">
      <div class="flex items-start gap-4 min-w-[220px]">
        <div class="w-16 h-16 bg-[#1F2937] rounded-xl flex-shrink-0 border border-gray-800"></div>
        <div>
          <div class="flex items-center gap-3">
            <h3 class="text-white text-base md:text-lg font-semibold font-[600] ">Raspberry Pi 4</h3>
            <span class="md:hidden text-[10px] font-bold text-[#10B981] bg-[#042F1A] px-2 py-0.5 rounded">EXCELLENT</span>
          </div>
          <span class="inline-block bg-[#FFD700] font-semibold text-black font-[600] text-[12px]  px-1.5 py-0.5 rounded mt-1 uppercase tracking-wider">COMPONENT</span>
          
          <div class="hidden md:flex md:items-center gap-12 lg:gap-16 text-sm pt-4">
            <div>
              <span class="text-[#9CA3AF] text-xs block">Borrow Date</span>
              <span class="text-white text-[14px] block mt-1">4/15/2026</span>
            </div>
            <div>
              <span class="text-[#9CA3AF] text-xs block">Return Date</span>
              <span class="text-white text-[14px] block mt-1">4/28/2026</span>
            </div>
            <div>
              <span class="text-[#9CA3AF] text-xs block">Delay</span>
              <span class="text-[#10B981] text-[14px]font-semibold block mt-1">On Time</span>
            </div>
            <div>
              <span class="text-[#9CA3AF] text-xs block">Condition</span>
              <span class="text-white text-[14px] block mt-1">Excellent</span>
            </div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-4 text-sm md:hidden">
        <div>
          <span class="text-[#9CA3AF] text-xs block">Borrow Date</span>
          <span class="text-white font-bold block mt-0.5">4/15/2026</span>
        </div>
        <div>
          <span class="text-[#9CA3AF] text-xs block">Return Date</span>
          <span class="text-white font-bold block mt-0.5">4/28/2026</span>
        </div>
        <div>
          <span class="text-[#9CA3AF] text-xs block">Delay</span>
          <span class="text-[#10B981] font-bold block mt-0.5">On Time</span>
        </div>
        <div>
          <span class="text-[#9CA3AF] text-xs block">Condition</span>
          <span class="text-white font-bold block mt-0.5">Excellent</span>
        </div>
      </div>

      <div class="hidden md:block pt-1">
        <span class="text-[12px] font-semibold text-[#10B981] bg-[#064E3B] px-3 py-1.5 rounded min-w-[85px] text-center inline-block">EXCELLENT</span>
      </div>
    </div>

    <div class="flex flex-col md:flex-row md:items-start justify-between bg-[#0A0A0F] border-t-[1px] border-l-[4px] border-r-[1px] border-b-[1px] border-[#F4C430] rounded-xl p-5 gap-6">
      <div class="flex items-start gap-4 min-w-[220px]">
        <div class="w-16 h-16 bg-[#1F2937] rounded-xl flex-shrink-0 border border-gray-800"></div>
        <div>
          <div class="flex items-center gap-3">
            <h3 class="text-white text-base md:text-lg font-semibold ">Soldering Iron Kit</h3>
            <span class="md:hidden text-[10px] font-bold text-[#34D399] bg-[#064E3B] px-2 py-0.5 rounded">GOOD</span>
          </div>
          <span class="inline-block bg-[#FFD700] text-black text-[12px] font-semibold font-[600] px-1.5 py-0.5 rounded mt-1 uppercase tracking-wider">TOOL</span>
          
          <div class="hidden md:flex md:items-center gap-12 lg:gap-16 text-sm pt-4">
            <div>
              <span class="text-[#9CA3AF] text-xs block">Borrow Date</span>
              <span class="text-white text-[14px] block mt-1">5/1/2026</span>
            </div>
            <div>
              <span class="text-[#9CA3AF] text-xs block">Return Date</span>
              <span class="text-white text-[14px] block mt-1">5/12/2026</span>
            </div>
            <div>
              <span class="text-[#9CA3AF] text-xs block">Delay</span>
              <span class="text-[#F59E0B] text-[14px] font-semibold font-[600]block mt-1">5 days</span>
            </div>
            <div>
              <span class="text-[#9CA3AF] text-xs block">Condition</span>
              <span class="text-white text-[14px] block mt-1">Good</span>
            </div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-4 text-sm md:hidden">
        <div>
          <span class="text-[#9CA3AF] text-xs block">Borrow Date</span>
          <span class="text-white text-[14px] block mt-0.5">5/1/2026</span>
        </div>
        <div>
          <span class="text-[#9CA3AF] text-xs block">Return Date</span>
          <span class="text-white text-[14px] block mt-0.5">5/12/2026</span>
        </div>
        <div>
          <span class="text-[#9CA3AF] text-xs block">Delay</span>
          <span class="text-[#F59E0B] text-[14px] font-semibold block mt-0.5">5 days</span>
        </div>
        <div>
          <span class="text-[#9CA3AF] text-xs block">Condition</span>
          <span class="text-white text-[14px] block mt-0.5">Good</span>
        </div>
      </div>

      <div class="hidden md:block pt-1">
        <span class="text-[12px] font-semibold text-[#10B981] bg-[#064E3B] px-3 py-1.5 rounded min-w-[85px] text-center inline-block">GOOD</span>
      </div>
    </div>

    <div class="flex flex-col md:flex-row md:items-start justify-between bg-[#0A0A0F] border-t-[1px] border-l-[4px] border-r-[1px] border-b-[1px] border-[#F4C430] rounded-xl p-5 gap-6">
      <div class="flex items-start gap-4 min-w-[220px]">
        <div class="w-16 h-16 bg-[#1F2937] rounded-xl flex-shrink-0 border border-gray-800"></div>
        <div>
          <div class="flex items-center gap-3">
            <h3 class="text-white text-base md:text-lg font-semibold ">HC-SR04 Ultrasonic Sensor</h3>
            <span class="md:hidden text-[10px] font-bold text-[#34D399] bg-[#064E3B] px-2 py-0.5 rounded">GOOD</span>
          </div>
          <span class="inline-block bg-[#FFD700] text-black text-[12px] font-semibold font-[600] px-1.5 py-0.5 rounded mt-1 uppercase tracking-wider">component</span>
          
          <div class="hidden md:flex md:items-center gap-12 lg:gap-16 text-sm pt-4">
            <div>
              <span class="text-[#9CA3AF] text-xs block">Borrow Date</span>
              <span class="text-white text-[14px] block mt-1">5/1/2026</span>
            </div>
            <div>
              <span class="text-[#9CA3AF] text-xs block">Return Date</span>
              <span class="text-white text-[14px] block mt-1">5/12/2026</span>
            </div>
            <div>
              <span class="text-[#9CA3AF] text-xs block">Delay</span>
              <span class="text-[#10B981] text-[14px] font-semibold block mt-1">On Time</span>
            </div>
            <div>
              <span class="text-[#9CA3AF] text-xs block">Condition</span>
              <span class="text-white text-[14px] block mt-1">Good</span>
            </div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-4 text-sm md:hidden">
        <div>
          <span class="text-[#9CA3AF] text-xs block">Borrow Date</span>
          <span class="text-white text-[14px] block mt-0.5">5/1/2026</span>
        </div>
        <div>
          <span class="text-[#9CA3AF] text-xs block">Return Date</span>
          <span class="text-white text-[14px] block mt-0.5">5/12/2026</span>
        </div>
        <div>
          <span class="text-[#9CA3AF] text-xs block">Delay</span>
          <span class="text-[#F59E0B] text-[14px] font-semibold font-[600] block mt-0.5">3 days</span>
        </div>
        <div>
          <span class="text-[#9CA3AF] text-xs block">Condition</span>
          <span class="text-white text-[14px] block mt-0.5">Good</span>
        </div>
      </div>

      <div class="hidden md:block pt-1">
        <span class="text-[12px] font-semibold text-[#10B981] bg-[#064E3B] px-3 py-1.5 rounded min-w-[85px] text-center inline-block">GOOD</span>
      </div>
    </div>


    <div class="flex flex-col md:flex-row md:items-start justify-between bg-[#0A0A0F] border-t-[1px] border-l-[4px] border-r-[1px] border-b-[1px] border-[#F4C430] rounded-xl p-5 gap-6">
      <div class="flex items-start gap-4 min-w-[220px]">
        <div class="w-16 h-16 bg-[#1F2937] rounded-xl flex-shrink-0 border border-gray-800"></div>
        <div>
          <div class="flex items-center gap-3">
            <h3 class="text-white text-base md:text-lg font-semibold font-[600] ">Wire Stripper</h3>
            <span class="md:hidden text-[10px] font-bold text-[#34D399] bg-[#064E3B] px-2 py-0.5 rounded">GOOD</span>
          </div>
          <span class="inline-block bg-[#FFD700] text-black text-[12px] font-semibold font-[600] px-1.5 py-0.5 rounded mt-1 uppercase tracking-wider">TOOL</span>
          
          <div class="hidden md:flex md:items-center gap-12 lg:gap-16 text-sm pt-4">
            <div>
              <span class="text-[#9CA3AF] text-xs block">Borrow Date</span>
              <span class="text-white text-[14px] block mt-1">5/1/2026</span>
            </div>
            <div>
              <span class="text-[#9CA3AF] text-xs block">Return Date</span>
              <span class="text-white text-[14px] block mt-1">5/12/2026</span>
            </div>
            <div>
              <span class="text-[#9CA3AF] text-xs block">Delay</span>
              <span class="text-[#F59E0B] text-[14px] font-semibold font-[600] block mt-1">3 days</span>
            </div>
            <div>
              <span class="text-[#9CA3AF] text-xs block">Condition</span>
              <span class="text-white text-[14px] block mt-1">Good</span>
            </div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-4 text-sm md:hidden">
        <div>
          <span class="text-[#9CA3AF] text-xs block">Borrow Date</span>
          <span class="text-white text-[14px] block mt-0.5">5/1/2026</span>
        </div>
        <div>
          <span class="text-[#9CA3AF] text-xs block">Return Date</span>
          <span class="text-white text-[14px] block mt-0.5">5/12/2026</span>
        </div>
        <div>
          <span class="text-[#9CA3AF] text-xs block">Delay</span>
          <span class="text-[#F59E0B] text-[14px] font-semibold font-[600] block mt-0.5">3 days</span>
        </div>
        <div>
          <span class="text-[#9CA3AF] text-xs block">Condition</span>
          <span class="text-white text-[14px] block mt-0.5">Good</span>
        </div>
      </div>

      <div class="hidden md:block pt-1">
        <span class="text-[12px] font-semibold font-[600] text-[#F59E0B] bg-[#78350F] px-3 py-1.5 rounded min-w-[85px] text-center inline-block">FAIR</span>
      </div>
    </div>

  </section>
</div>

      
        
        </>
    )
}

export default HistoryPage;