"use client"
import { RootState } from '@/redux/store';
import Image from 'next/image'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import useLogin from '@/hooks/login';
import BarLoader from 'react-spinners/BarLoader';

const profile = () => {
  const { updateProfile, loading, updateContact } = useLogin()
  const {usersDetail} = useSelector((state: RootState) => state.user);
  const [isPersonalOpen, setisPersonalOpen] = useState(false);
  const closePersonalDialog = () => setisPersonalOpen(false);
  const [isAddressOpen, setisAddressOpen] = useState(false);
  const closeAddressDialog = () => setisAddressOpen(false);
  const statesInNigeria = [
    "Abia",
    "Adamawa",
    "Akwa Ibom",
    "Anambra",
    "Bauchi",
    "Bayelsa",
    "Benue",
    "Borno",
    "Cross River",
    "Delta",
    "Ebonyi",
    "Edo",
    "Ekiti",
    "Enugu",
    "Gombe",
    "Imo",
    "Jigawa",
    "Kaduna",
    "Kano",
    "Katsina",
    "Kebbi",
    "Kogi",
    "Kwara",
    "Lagos",
    "Nasarawa",
    "Niger",
    "Ogun",
    "Ondo",
    "Osun",
    "Oyo",
    "Plateau",
    "Rivers",
    "Sokoto",
    "Taraba",
    "Yobe",
    "Zamfara",
    "FCT (Federal Capital Territory)"
  ];
  

        // State for editing personal information
  const [firstName, setFirstName] = useState(usersDetail?.first_name || '');
  const [lastName, setLastName] = useState(usersDetail?.last_name || '');
  const [email, setEmail] = useState(usersDetail?.email || '');
  const [phoneNumber, setPhoneNumber] = useState(usersDetail?.phone_number || '');
  const [username, setUsername] = useState(usersDetail?.username || '');

  const [country, setCountry] = useState(usersDetail?.country || '');
const [city, setCity] = useState(usersDetail?.city || '');
const [state, setState] = useState(usersDetail?.state || '');
const [zipcode, setZipcode] = useState(usersDetail?.zipcode || '');
const [address, setAddress] = useState(usersDetail?.address || '');

  return (
    <div className="px-[43px] py-[40px] bg-[#fdf7f4] space-y-[30px]">

{loading && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-85">
     
        <BarLoader color="#FC6435" />
       
    </div> 
  )}
     <h3 className="text-[20px] font-semibold text-[#343434]">My Profile</h3>
     <section className='bg-white w-full px-[30px] py-[15px] flex items-center space-x-[40px] rounded-[10px]'>
      <div className=''>
        <div className='relative w-[150px] h-[150px] rounded-full'>
        <Image 
       src={`https://sub.passpro.africa/storage/${usersDetail?.profile_image}`}         
        className='rounded-full object-cover' fill alt='image' />
        </div>
       
      </div>
      <div className='flex flex-col gap-[14px]'>
          <h2 className='text-[14px] text-[#FF8458] font-bold'>{usersDetail?.first_name} {usersDetail?.last_name}</h2>
          <p className='text-[14px] text-[#606060] font-medium'>Admin</p>
          <p className='text-[14px] text-[#606060] font-medium'>{usersDetail?.state} state</p>
        </div>
     </section>
     <section className='bg-white w-full px-[30px] py-[15px] rounded-[10px]'>

      <div className='flex items-center justify-between w-full border-b py-[12px] border-b-[#D9D9D9] mb-[40px]'>
      <h2 className='text-[14px] text-[#FF8458] font-bold'>Personal Information</h2>
       <div onClick={() => {
        setisPersonalOpen(true)
       }} className='bg-[#FC6435] px-[12px] py-[6px] rounded-[8px] flex space-x-1 items-center cursor-pointer active:scale-95 transition-all'> 
        <p className='text-white  font-bold'>Edit</p>
        <Image src={'/icons/penIcon.svg'} height={18} width={18} alt='image'/>
        </div>       
      </div>

      <div className='flex items-start space-x-[150px] '>
       <div className='flex flex-col gap-[20px]'>
       <p className='text-[14px] text-[#606060] font-medium'>First Name</p>
       <p className='text-[#343434] text-[20px] font-semibold'>{usersDetail?.first_name}</p>
       </div>
       <div className='flex flex-col gap-[20px]'>
       <p className='text-[14px] text-[#606060] font-medium'>Last Name</p>
       <p className='text-[#343434] text-[20px] font-semibold'>{usersDetail?.last_name}</p>
       </div>
       <div className='flex flex-col gap-[20px]'>
       <p className='text-[14px] text-[#606060] font-medium'>Username</p>
       <p className='text-[#343434] text-[20px] font-semibold'>{usersDetail?.username}</p>
       </div>
      </div>

      <div className='flex items-start space-x-[150px] my-[40px]'>
       <div className='flex flex-col gap-[20px]'>
       <p className='text-[14px] text-[#606060] font-medium'>Email Address</p>
       <p className='text-[#343434] text-[20px] font-semibold'>{usersDetail?.email}</p>
       </div>
       <div className='flex flex-col gap-[20px]'>
       <p className='text-[14px] text-[#606060] font-medium'>Phone Number</p>
       <p className='text-[#343434] text-[20px] font-semibold'>{usersDetail?.phone_number}</p>
       </div>
       <div className='flex flex-col gap-[20px]'>
       <p className='text-[14px] text-[#606060] font-medium'>User Role</p>
       <p className='text-[#343434] text-[20px] font-semibold'>Admin</p>
       </div>
      </div>
      
     </section>

     <section className='bg-white w-full px-[30px] py-[15px] rounded-[10px]'>

<div className='flex items-center justify-between w-full border-b py-[12px] border-b-[#D9D9D9] mb-[40px]'>
<h2 className='text-[14px] text-[#FF8458] font-bold'>Address Information</h2>
 <div onClick={() => {
        setisAddressOpen(true)
       }} className='bg-[#FC6435] px-[12px] py-[6px] rounded-[8px] flex space-x-1 items-center cursor-pointer active:scale-95 transition-all'> 
  <p className='text-white  font-bold'>Edit</p>
  <Image src={'/icons/penIcon.svg'} height={18} width={18} alt='image'/>
  </div>       
</div>

<div className="flex items-start space-x-[150px]">
    <div className="flex flex-col gap-[20px]">
      <p className="text-[14px] text-[#606060] font-medium">Country</p>
      <p className="text-[#343434] text-[20px] font-semibold">{usersDetail?.country}</p>
    </div>
    <div className="flex flex-col gap-[20px]">
      <p className="text-[14px] text-[#606060] font-medium">State</p>
      <p className="text-[#343434] text-[20px] font-semibold">{usersDetail?.state}</p>
    </div>
    <div className="flex flex-col gap-[20px]">
      <p className="text-[14px] text-[#606060] font-medium">City</p>
      <p className="text-[#343434] text-[20px] font-semibold">{usersDetail?.city}</p>
    </div>
    <div className="flex flex-col gap-[20px]">
      <p className="text-[14px] text-[#606060] font-medium">Zip Code</p>
      <p className="text-[#343434] text-[20px] font-semibold">{usersDetail?.zipcode}</p>
    </div>
    <div className="flex flex-col gap-[20px]">
      <p className="text-[14px] text-[#606060] font-medium">Address</p>
      <p className="text-[#343434] text-[20px] font-semibold">{usersDetail?.address}</p>
    </div>
  </div>
</section>
   
<Dialog open={isPersonalOpen} onOpenChange={closePersonalDialog}>
        <DialogContent className="sm:max-w-[700px] max-h-[90vh] ">
          <DialogTitle className="hidden"></DialogTitle>

          <section className="flex items-center justify-between mb-[32px]">
            <h3 className="text-[20px] font-semibold">Edit Personal Information</h3>
          </section>

          <div className="grid grid-cols-2 gap-[44px]">
            <div className="grid w-full items-center gap-[8px]">
              <Label htmlFor="firstname" className="font-bold text-[14px]">First Name</Label>
              <Input
                id="firstname"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="grid w-full items-center gap-[8px]">
              <Label htmlFor="lastname" className="font-bold text-[14px]">Last Name</Label>
              <Input
                id="lastname"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="grid w-full items-center gap-[8px]">
              <Label htmlFor="email" className="font-bold text-[14px]">Email</Label>
              <Input
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="grid w-full items-center gap-[8px]">
              <Label htmlFor="phonenumber" className="font-bold text-[14px]">Phone Number</Label>
              <Input
                id="phonenumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="grid w-full items-center gap-[8px]">
              <Label htmlFor="username" className="font-bold text-[14px]">Username</Label>
              <Input
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>

          <Button
            className="shadow-sm w-full my-[39px] mb-0 font-bold py-[18px] text-white bg-[#FC6435] hover:bg-[#FC6435] transition-all active:scale-95"
            onClick={() => {
              closePersonalDialog();
              updateProfile( firstName, lastName, username, email, phoneNumber);
            }}
          >
            Submit
          </Button>
        </DialogContent>
      </Dialog>

      <Dialog open={isAddressOpen} onOpenChange={closeAddressDialog}>
  <DialogContent className="sm:max-w-[700px] max-h-[90vh]">
    <DialogTitle className="hidden"></DialogTitle>
    <section className="flex items-center justify-between mb-[32px]">
      <h3 className="text-[20px] font-semibold">Edit Address Information</h3>
    </section>
    <div className="grid grid-cols-2 gap-[44px]">
      <div className="grid w-full items-center gap-[8px]">
        <Label htmlFor="country" className="font-bold text-[14px]">Country</Label>
        <Input
          id="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </div>
      <div className="grid w-full items-center gap-[8px]">
        <Label htmlFor="state" className="font-bold text-[14px]">State</Label>
        <Input
          id="state"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
      </div>
      <div className="grid w-full items-center gap-[8px]">
        <Label htmlFor="city" className="font-bold text-[14px]">City</Label>
        <Input
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <div className="grid w-full items-center gap-[8px]">
        <Label htmlFor="zipcode" className="font-bold text-[14px]">Zip Code</Label>
        <Input
          id="zipcode"
          value={zipcode}
          onChange={(e) => setZipcode(e.target.value)}
        />
      </div>
      <div className="grid w-full items-center gap-[8px]">
        <Label htmlFor="address" className="font-bold text-[14px]">Address</Label>
        <Input
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
    </div>
    <DialogFooter>
      <Button
         className="shadow-sm w-full my-[39px] mb-0 font-bold py-[18px] text-white bg-[#FC6435] hover:bg-[#FC6435] transition-all active:scale-95"
        onClick={() => {
          closeAddressDialog();
          updateContact(
            address,
            city,
            state,
            zipcode,
            country,
        );
        }}
      >
        Save Changes
      </Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
    </div>
  )
}

export default profile
