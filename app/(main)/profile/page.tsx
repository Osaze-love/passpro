import Image from 'next/image'
import React from 'react'

const profile = () => {
  return (
    <div className="px-[43px] py-[40px] bg-[#fdf7f4] space-y-[30px]">
     <h3 className="text-[20px] font-semibold text-[#343434]">My Profile</h3>
     <section className='bg-white w-full px-[30px] py-[15px] flex items-center space-x-[40px] rounded-[10px]'>
      <div className=''>
        <div className='relative w-[150px] h-[150px] rounded-full'>
        <Image src='https://s3-alpha-sig.figma.com/img/cc46/b0a4/40267074d80eb19752a2b2aeea4d1d69?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RsC3i0U8edaO9EKy-VQOKsXIVaHP6LEmJusQqZDgd~Bpl3sCL4YD-WfgHAjE6bBrSPNqmFcZFNCQM1kmA735716ePliXDmKRwobpWQTerxVm7yN7pJDeW~tyq8eydkxTroBz6~0X~mPZgRC7Xv93iQy5Xk2pQ0bsnzy0BofORl1QBFesMJVuR9RJvjeBHBLvLh8lYdU7wVQc8ipL6obvS1l1ASXrlGOgYfXhDp-LThp0f72Xe~uZ~9U~wH-0SUE-QIbluo6zdlgBVgu~vF-D~Szmf87STarrt40M095jFLuNcAQeSrk317SKzrqI3O9GZI6dkFEEm1YbE31Gti9Yrw__' className='rounded-full object-cover' fill alt='image' />
        </div>
       
      </div>
      <div className='flex flex-col gap-[14px]'>
          <h2 className='text-[14px] text-[#FF8458] font-bold'>Ayobami Taiwo</h2>
          <p className='text-[14px] text-[#606060] font-medium'>Admin</p>
          <p className='text-[14px] text-[#606060] font-medium'>Lagos state</p>
        </div>
     </section>
     <section className='bg-white w-full px-[30px] py-[15px] rounded-[10px]'>

      <div className='flex items-center justify-between w-full border-b py-[12px] border-b-[#D9D9D9] mb-[40px]'>
      <h2 className='text-[14px] text-[#FF8458] font-bold'>Personal Information</h2>
       <div className='bg-[#FC6435] px-[12px] py-[6px] rounded-[8px] flex space-x-1 items-center cursor-pointer active:scale-95 transition-all'> 
        <p className='text-white  font-bold'>Edit</p>
        <Image src={'/icons/penIcon.svg'} height={18} width={18} alt='image'/>
        </div>       
      </div>

      <div className='flex items-center space-x-[150px] '>
       <div className='flex flex-col gap-[20px]'>
       <p className='text-[14px] text-[#606060] font-medium'>First Name</p>
       <p className='text-[#343434] text-[20px] font-semibold'>Ayobami</p>
       </div>
       <div className='flex flex-col gap-[20px]'>
       <p className='text-[14px] text-[#606060] font-medium'>First Name</p>
       <p className='text-[#343434] text-[20px] font-semibold'>Ayobami</p>
       </div>
       <div className='flex flex-col gap-[20px]'>
       <p className='text-[14px] text-[#606060] font-medium'>First Name</p>
       <p className='text-[#343434] text-[20px] font-semibold'>Ayobami</p>
       </div>
      </div>

      <div className='flex items-center space-x-[150px] my-[40px]'>
       <div className='flex flex-col gap-[20px]'>
       <p className='text-[14px] text-[#606060] font-medium'>First Name</p>
       <p className='text-[#343434] text-[20px] font-semibold'>Ayobami</p>
       </div>
       <div className='flex flex-col gap-[20px]'>
       <p className='text-[14px] text-[#606060] font-medium'>First Name</p>
       <p className='text-[#343434] text-[20px] font-semibold'>Ayobami</p>
       </div>
       <div className='flex flex-col gap-[20px]'>
       <p className='text-[14px] text-[#606060] font-medium'>First Name</p>
       <p className='text-[#343434] text-[20px] font-semibold'>Ayobami</p>
       </div>
      </div>
      
     </section>

     <section className='bg-white w-full px-[30px] py-[15px] rounded-[10px]'>

<div className='flex items-center justify-between w-full border-b py-[12px] border-b-[#D9D9D9] mb-[40px]'>
<h2 className='text-[14px] text-[#FF8458] font-bold'>Address Information</h2>
 <div className='bg-[#FC6435] px-[12px] py-[6px] rounded-[8px] flex space-x-1 items-center cursor-pointer active:scale-95 transition-all'> 
  <p className='text-white  font-bold'>Edit</p>
  <Image src={'/icons/penIcon.svg'} height={18} width={18} alt='image'/>
  </div>       
</div>

<div className='flex items-center space-x-[150px] '>
 <div className='flex flex-col gap-[20px]'>
 <p className='text-[14px] text-[#606060] font-medium'>Country</p>
 <p className='text-[#343434] text-[20px] font-semibold'>Nigeria</p>
 </div>
 <div className='flex flex-col gap-[20px]'>
 <p className='text-[14px] text-[#606060] font-medium'>City</p>
 <p className='text-[#343434] text-[20px] font-semibold'>Mile 12</p>
 </div>
 <div className='flex flex-col gap-[20px]'>
 <p className='text-[14px] text-[#606060] font-medium'>State</p>
 <p className='text-[#343434] text-[20px] font-semibold'>Lagos</p>
 </div>
</div>



</section>

    </div>
  )
}

export default profile
