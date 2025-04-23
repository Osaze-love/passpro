"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useOrganizer from "@/hooks/organizer";
import Image from "next/image";
import React, { useState } from "react";
import BarLoader from "react-spinners/BarLoader";
import { toast } from "@/hooks/use-toast";


const AddOrganizer = () => {
  // Define state for each field
  const { addOrganizer, loading } = useOrganizer();
  const [username, setUsername] = useState("");
  const [organizationName, setOrganizationName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [country, setCountry] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mobileVerification, setMobileVerification] = useState(false);
  const [emailVerification, setEmailVerification] = useState(false);
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);
  const [kycVerification, setKycVerification] = useState(false);


  const toggleState = (setter: React.Dispatch<React.SetStateAction<boolean>>) => {
    setter((prev) => !prev);
  };
  const validatePhoneNumber = (number: string) => {
    const phoneRegex = /^[0-9]{1,11}$/; 
    return phoneRegex.test(number);
  };

  const validateEmail = (email: string) => {
    return email.includes("@");
  };

  const handleSubmit = async () => {

    if (!validatePhoneNumber(phoneNumber)) {
      toast({
        variant: "destructive",
        description:'Phone number must be numeric and up to 11 digits.', 
      })
      return;
    }

    if (!validateEmail(email)) {
      toast({
        variant: "destructive",
        description:'Please enter a valid email address with @', 
      })
      return;
    }

    if (password !== confirmPassword) {
      toast({
        variant: "destructive",
        description:'Password and Confirm Password must match.', 
      })
      return;
    }
    await addOrganizer({
      username,
      organization_name: organizationName,
      first_name: firstName,
      last_name: lastName,
      email,
      phone_number: phoneNumber,
      address,
      city,
      state,
      zipcode,
      country,
      password,
      password_confirmation: confirmPassword,
      mobile_verification: mobileVerification,
      two_factor_auth: twoFactorAuth,
      kyc_verification: kycVerification,
    });

    setUsername("");
    setOrganizationName("");
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
    setAddress("");
    setCity("");
    setState("");
    setZipcode("");
    setCountry("");
    setPassword("");
    setConfirmPassword("");
    setMobileVerification(false);
    setTwoFactorAuth(false);
    setKycVerification(false);
  };
  
  return (
    <div className="px-[43px] py-[40px] bg-[#fdf7f4]">
      {loading && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-85">
     
        <BarLoader color="#FC6435" />
       
    </div> 
  )}
      <section className="flex items-center justify-between mb-[32px]">
        <h3 className="text-[20px] font-semibold">Add New Organizer</h3>
        <div className="flex w-[277px] h-[48px] items-center border rounded-[8px]  mx-[33px] bg-white">
          <Input
            placeholder="Name I Organizer"
            className="focus:outline-none border-0 grow text-black placeholder:text-[#D9D9D9] bg-transparent placeholder:text-[12px]"
          />
          <div className="bg-[#FC6435] h-full flex w-max justify-center items-center cursor-pointer px-[20px] rounded-tr-[8px] rounded-br-[8px]">
            <Image
              src={"/icons/searchIconwhite.svg"}
              width={20}
              height={20}
              alt="searchIcon"
            />
          </div>
        </div>
      </section>
      <section className="bg-white p-[28px] mt-[34px] space-y-[44px]">
        <div className="grid grid-cols-2 gap-[44px]">
          {[
            { label: "Username", value: username, setter: setUsername, required: true },
            {
              label: "Organization Name",
              value: organizationName,
              setter: setOrganizationName,
            },
            { label: "First Name", value: firstName, setter: setFirstName, required: true },
            { label: "Last Name", value: lastName, setter: setLastName, required: true },
            { label: "Email", value: email, setter: setEmail, required: true },
            { label: "Phone Number", value: phoneNumber, setter: setPhoneNumber, required: true },
            { label: "Address", value: address, setter: setAddress, required: true },
            { label: "Password", value: password, setter: setPassword, required: true },
            { label: "Confirm Password", value: confirmPassword, setter: setConfirmPassword, required: true },

          ].map(({ label, value, setter, required = false }, index) => (
            <div key={index} className="grid w-full items-center gap-[8px]">
              <Label htmlFor={label.toLowerCase().replace(" ", "")}>
                <div className="flex items-start font-bold text-[14px] text-[#333333]">
                  <p>{label}</p>
                  {required && <span className="text-[#F24455] text-md">*</span>}
                </div>
              </Label>
              <Input
                id={label.toLowerCase().replace(" ", "")}
                value={value}
                onChange={(e) => setter(e.target.value)}
                className="py-[8px] px-4 shadow-sm focus-visible:ring-0 focus-visible:ring-transparent"
              />
            </div>
          ))}
        </div>
       

        {/* Additional Fields */}
        <div className="grid grid-cols-4 gap-[38px]">
          {[
            { label: "City", value: city, setter: setCity, required: true },
            { label: "State", value: state, setter: setState, required: true },
            { label: "Zipcode/Postal", value: zipcode, setter: setZipcode, required: true },
            { label: "Country", value: country, setter: setCountry, required: true },
          ].map(({ label, value, setter, required = false }, index) => (
            <div key={index} className="grid w-full items-center gap-[8px]">
              <Label htmlFor={label.toLowerCase().replace(" ", "")}>
                <div className="flex items-start font-bold text-[14px] text-[#333333]">
                  <p>{label}</p>
                  {required && <span className="text-[#F24455] text-md">*</span>}
                </div>
              </Label>
              <Input
                id={label.toLowerCase().replace(" ", "")}
                value={value}
                onChange={(e) => setter(e.target.value)}
                className="py-[8px] px-4 shadow-sm focus-visible:ring-0 focus-visible:ring-transparent"
              />
            </div>
          ))}
        </div>
        {/* Verification Toggles */}
        <div className="grid grid-cols-4 gap-[38px]">
      {/* Email Verification */}
      <div className="grid w-full gap-[8px]">
        <p className="text-[#37474F] text-[20px] font-semibold">Email Verification</p>
        <div
          onClick={() => toggleState(setEmailVerification)}
          className={`flex items-center justify-between h-[50px] rounded-[8px] transition-all duration-300 cursor-pointer ${
            emailVerification ? "bg-[#089A47]" : "bg-[#EB2222]"
          }`}
        >
          <p
            className={`text-white pl-[27px] font-semibold ${
              emailVerification ? "opacity-100" : "opacity-50"
            }`}
          >
            {emailVerification ? "Verified" : "Disabled"}
          </p>
          <div
            className={`h-full w-[16px] ${
              emailVerification
                ? "bg-[#4E3D3D] rounded-tr-[8px] rounded-br-[8px]"
                : "bg-[#4E3D3D] rounded-tl-[8px] rounded-bl-[8px]"
            }`}
          ></div>
        </div>
      </div>

      {/* Mobile Verification */}
      <div className="grid w-full gap-[8px]">
        <p className="text-[#37474F] text-[20px] font-semibold">Mobile Verification</p>
        <div
          onClick={() => toggleState(setMobileVerification)}
          className={`flex items-center justify-between h-[50px] rounded-[8px] transition-all duration-300 cursor-pointer ${
            mobileVerification ? "bg-[#089A47]" : "bg-[#EB2222]"
          }`}
        >
          <p
            className={`text-white pl-[27px] font-semibold ${
              mobileVerification ? "opacity-100" : "opacity-50"
            }`}
          >
            {mobileVerification ? "Verified" : "Disabled"}
          </p>
          <div
            className={`h-full w-[16px] ${
              mobileVerification
                ? "bg-[#4E3D3D] rounded-tr-[8px] rounded-br-[8px]"
                : "bg-[#4E3D3D] rounded-tl-[8px] rounded-bl-[8px]"
            }`}
          ></div>
        </div>
      </div>

      {/* 2FA */}
      <div className="grid w-full gap-[8px]">
        <p className="text-[#37474F] text-[20px] font-semibold">2FA</p>
        <div
          onClick={() => toggleState(setTwoFactorAuth)}
          className={`flex items-center justify-between h-[50px] rounded-[8px] transition-all duration-300 cursor-pointer ${
            twoFactorAuth ? "bg-[#089A47]" : "bg-[#EB2222]"
          }`}
        >
          <p
            className={`text-white pl-[27px] font-semibold ${
              twoFactorAuth ? "opacity-100" : "opacity-50"
            }`}
          >
            {twoFactorAuth ? "Verified" : "Disabled"}
          </p>
          <div
            className={`h-full w-[16px] ${
              twoFactorAuth
                ? "bg-[#4E3D3D] rounded-tr-[8px] rounded-br-[8px]"
                : "bg-[#4E3D3D] rounded-tl-[8px] rounded-bl-[8px]"
            }`}
          ></div>
        </div>
      </div>

      {/* KYC Verification */}
      <div className="grid w-full gap-[8px]">
        <p className="text-[#37474F] text-[20px] font-semibold">KYC Verification</p>
        <div
          onClick={() => toggleState(setKycVerification)}
          className={`flex items-center justify-between h-[50px] rounded-[8px] transition-all duration-300 cursor-pointer ${
            kycVerification ? "bg-[#089A47]" : "bg-[#EB2222]"
          }`}
        >
          <p
            className={`text-white pl-[27px] font-semibold ${
              kycVerification ? "opacity-100" : "opacity-50"
            }`}
          >
            {kycVerification ? "Verified" : "Disabled"}
          </p>
          <div
            className={`h-full w-[16px] ${
              kycVerification
                ? "bg-[#4E3D3D] rounded-tr-[8px] rounded-br-[8px]"
                : "bg-[#4E3D3D] rounded-tl-[8px] rounded-bl-[8px]"
            }`}
          ></div>
        </div>
      </div>
    </div>
        <button className="mt-[20px] transition-all font-semibold active:scale-95 rounded-[8px] py-[14px] bg-[#FC6435] text-white w-full" onClick={handleSubmit}>
          Submit 
        </button>
      </section>
    </div>
  );
};

export default AddOrganizer;
