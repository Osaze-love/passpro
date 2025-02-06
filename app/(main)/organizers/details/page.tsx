"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import useOrganizer from "@/hooks/organizer";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import BarLoader from "react-spinners/BarLoader";
import { toast } from "@/hooks/use-toast";

const OrganizerDetails = () => {
  const [isAddOpen, setisAddOpen] = useState(false);
  const [amount, setAmount] = useState('');
  const [remark, setRemark] = useState('');
  const closeAddDialog = () => {setisAddOpen(false);
    setAmount('');
    setRemark('')
  };
  const [isSubtractOpen, setisSubtractOpen] = useState(false);
  const closeSubtractDialog = () => {setisSubtractOpen(false)
    setAmount('');
    setRemark('')
  };
  const [isBanOpen, setisBanOpen] = useState(false);
  const closeBanDialog = () => setisBanOpen(false);
  const { activeOrganizer, countData } = useSelector((state: RootState) => state.organizer);
  const { addOrganizer, loading, updateOrganizer, addBalance, subtractBalance, getOneOrganizer, toggleRestriction, getOneWithdrawalCount } = useOrganizer();
 
  const [username, setUsername] = useState(activeOrganizer?.username || "");
  const [organizationName, setOrganizationName] = useState(activeOrganizer?.organization_name || "");
  const [firstName, setFirstName] = useState(activeOrganizer?.first_name || "");
  const [lastName, setLastName] = useState(activeOrganizer?.last_name || "");
  const [email, setEmail] = useState(activeOrganizer?.email || "");
  const [phoneNumber, setPhoneNumber] = useState(activeOrganizer?.phone_number || "");
  const [address, setAddress] = useState(activeOrganizer?.address || "");
  const [city, setCity] = useState(activeOrganizer?.city || "");
  const [state, setState] = useState(activeOrganizer?.state || "");
  const [zipcode, setZipcode] = useState(activeOrganizer?.zipcode || "");
  const [country, setCountry] = useState(activeOrganizer?.country || "");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mobileVerification, setMobileVerification] = useState(
    activeOrganizer?.mobile_verification === 1
  );
  
  const [twoFactorAuth, setTwoFactorAuth] = useState(
    activeOrganizer?.two_factor_auth === 1
  );
  
  const [kycVerification, setKycVerification] = useState(
    activeOrganizer?.kyc_verification === 1
  );

  const toggleState = (setter: React.Dispatch<React.SetStateAction<boolean>>) => {
    setter((prev) => !prev);
  };

  useEffect(() => {
     getOneOrganizer(activeOrganizer?.id);
     getOneWithdrawalCount(activeOrganizer?.id);

  }, [])

  const handleSubmit = async () => {
    await updateOrganizer({
      userId: activeOrganizer?.id ?? "",
      username: username ?? "",
      organization_name: organizationName ?? "",
      first_name: firstName ?? "",
      last_name: lastName ?? "",
      email: email ?? "",
      phone_number: phoneNumber ?? "",
      address: address ?? "",
      city: city ?? "",
      state: state ?? "",
      zipcode: zipcode ?? "",
      country: country ?? "",
      mobile_verification: mobileVerification ? 1 : 0,
      two_factor_auth: twoFactorAuth ? 1 : 0,
      kyc_verification: kycVerification ? 1 : 0,
    });
    await getOneOrganizer(activeOrganizer?.id);
    await getOneWithdrawalCount(activeOrganizer?.id);

    // setUsername("");
    // setOrganizationName("");
    // setFirstName("");
    // setLastName("");
    // setEmail("");
    // setPhoneNumber("");
    // setAddress("");
    // setCity("");
    // setState("");
    // setZipcode("");
    // setCountry("");
    // setPassword("");
    // setConfirmPassword("");
    // setMobileVerification(false);
    // setTwoFactorAuth(false);
    // setKycVerification(false);
  };
  
  return (
    <div className="px-[43px] py-[40px] bg-[#fdf7f4]">
       {loading && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-85">
     
        <BarLoader color="#FC6435" />
       
    </div> 
  )}
      <section className="flex items-center justify-between mb-[57px]">
        <h3 className="text-[20px] font-semibold">
          Organizer Detail - {activeOrganizer?.full_name}
        </h3>
        <button
          //   onClick={() => setisCategoryOpen(true)}
          className="bg-none border py-[12px] border-[#FC6435] rounded-[8px] w-[275px] text-[#FC6435] transition-all active:scale-95"
        >
          <span className="text-lg">+</span>{" "}
          <span className="text-[20px]">Login As Organizer</span>
        </button>
      </section>
      <section className="grid grid-cols-2 gap-12">
        <div className="flex items-center justify-between h-[100px] rounded-[8px] bg-[#164473]">
          <div className="px-[18px]">
            <p className="text-white text-[14px]">Balance</p>
            <p className="text-[24px] text-white font-semibold mt-[11px]">
              ₦{activeOrganizer?.balance}
            </p>
          </div>
          <div className="bg-[#1D5793] px-[31px] h-full flex items-center justify-center rounded-tr-[8px] rounded-br-[8px]">
            <Image
              src="/logo/balancelogo.svg"
              alt="balancelogo"
              width={40}
              height={40}
              className=""
            />
          </div>
        </div>
        <div className="flex items-center justify-between h-[100px] rounded-[8px] bg-[#089A47]">
          <div className="px-[18px]">
            <p className="text-white text-[14px]">Events</p>
            <p className="text-[24px] text-white font-semibold mt-[11px]">{activeOrganizer?.events_count}</p>
          </div>
          <div className="bg-[#28C76F]  px-[31px] h-full flex items-center justify-center rounded-tr-[8px] rounded-br-[8px]">
            <Image
              src="/logo/eventlogo.svg"
              alt="eventlogo"
              width={40}
              height={40}
              className=""
            />
          </div>
        </div>
        <div className="flex items-center justify-between h-[100px] rounded-[8px] bg-[#D9741C]">
          <div className="px-[18px]">
            <p className="text-white text-[14px]">Withdrawal</p>
            <p className="text-[24px] text-white font-semibold mt-[11px]">
              ₦{countData?.successfulWithdrawalTotal}
            </p>
          </div>
          <div className="bg-[#EE962A] px-[31px] h-full flex items-center justify-center rounded-tr-[8px] rounded-br-[8px]">
            <Image
              src="/logo/withdrawalhouselogo.svg"
              alt="withdrawalhouselogo"
              width={40}
              height={40}
              className=""
            />
          </div>
        </div>
        <div className="flex items-center justify-between h-[100px] rounded-[8px] bg-[#B1350F]">
          <div className="px-[18px]">
            <p className="text-white text-[14px]">Transactions</p>
            <p className="text-[24px] text-white font-semibold mt-[11px]">{activeOrganizer?.transactions_count}</p>
          </div>
          <div className="bg-[#D54113] px-[31px] h-full flex items-center justify-center rounded-tr-[8px] rounded-br-[8px]">
            <Image
              src="/logo/transactionlogo.svg"
              alt="transactionlogo"
              width={40}
              height={40}
              className=""
            />
          </div>
        </div>
      </section>
      <section className="grid grid-cols-5 gap-[21px] mt-[34px]">
        <Button
          className="shadow-sm font-semibold text-[14px] text-white bg-[#089A47] hover:bg-[#089A47] transition-all active:scale-95 flex items-center space-x-[12px]"
          onClick={() => {
            setisAddOpen(true);
          }}
        >
          <Image
            src={"/logo/addbalance.svg"}
            height={24}
            width={24}
            alt="addbalance"
          />
          <p>Add Balance</p>
        </Button>
        <Button
          className="shadow-sm font-semibold text-[14px] text-white bg-[#1280C4] hover:bg-[#1280C4] transition-all active:scale-95 flex items-center space-x-[12px]"
          onClick={() => {
            setisSubtractOpen(true);
          }}
        >
          <Image
            src={"/logo/subtractbalance.svg"}
            height={24}
            width={24}
            alt="subtractbalance"
          />
          <p>Subtract Balance</p>
        </Button>
        <Button className="shadow-sm font-semibold text-[14px] text-white bg-[#D9741C] hover:bg-[#D9741C] transition-all active:scale-95 flex items-center space-x-[12px]">
          <Image
            src={"/logo/loginslogo.svg"}
            height={24}
            width={24}
            alt="loginslogo"
          />
          <p>Logins</p>
        </Button>
        <Button className="shadow-sm font-semibold text-[14px] text-white bg-[#5C098C] hover:bg-[#5C098C] transition-all active:scale-95 flex items-center space-x-[12px]">
          <Image
            src={"/logo/addnotification.svg"}
            height={24}
            width={24}
            alt="addnotification"
          />
          <p>Add Notifications</p>
        </Button>
        {activeOrganizer?.status === 'active' ?  <Button
          className="shadow-sm font-semibold text-[14px] text-white bg-[#1215C4] hover:bg-[#1215C4] transition-all active:scale-95 flex items-center space-x-[12px]"
          onClick={ async() => {
          await toggleRestriction(activeOrganizer.id);
          await getOneOrganizer(activeOrganizer.id)
          }}
        >
          <Image
            src={"/logo/banorganizer.svg"}
            height={24}
            width={24}
            alt="banorganizer"
          />
          <p>Ban Organizer</p>
        </Button> :
         <Button
         className="shadow-sm font-semibold text-[14px] text-white bg-[#1215C4] hover:bg-[#1215C4] transition-all active:scale-95 flex items-center space-x-[12px]"
         onClick={ async() => {
          await toggleRestriction(activeOrganizer.id);
          await getOneOrganizer(activeOrganizer.id)
         }}
       >
         <Image
           src={"/logo/banorganizer.svg"}
           height={24}
           width={24}
           alt="banorganizer"
         />
         <p>Activate Organizer</p>
       </Button>
        }
       
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
                //  { label: "Password", value: password, setter: setPassword, required: true },
                //  { label: "Confirm Password", value: confirmPassword, setter: setConfirmPassword, required: true },
     
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
             <div className="grid grid-cols-3 gap-[38px]">
           {/* Email Verification */}
           
     
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
      <Dialog open={isAddOpen} onOpenChange={closeAddDialog}>
        <DialogContent className="sm:max-w-[500px]  top-[34%]">
          <DialogTitle className="hidden"></DialogTitle>
          <div className="flex flex-col">
            <p className="text-[20px] font-semibold pb-4 border-b">
              Add Balance
            </p>
            <div className="grid w-full items-center mt-[14px] gap-[8px]">
              <Label htmlFor="amount" className="">
                <div className="flex items-start font-bold text-[14px] text-[#333333]">
                  <p>Amount</p>
                  <span className="text-[#F24455] text-md">*</span>
                </div>
              </Label>
              <Input
                id="amount"
                value={amount}
                onChange={(e) => {
                  setAmount(e.target.value)
                }}
                className=" py-[8px] focus-visible:ring-0 focus-visible:ring-transparent px-4 shadow-sm"
              />
            </div>
            <div className="grid w-full items-center gap-[8px] mt-[14px] pb-4 border-b">
              <Label htmlFor="remark" className="">
                <div className="flex items-start font-bold text-[14px] text-[#333333]">
                  <p>Remark</p>
                  <span className="text-[#F24455] text-md">*</span>
                </div>
              </Label>
              <Textarea
                id="remark"
                value={remark}
                onChange={(e) => {
                  setRemark(e.target.value)
                }}
                className=" py-[8px] h-[178px] focus-visible:ring-0 focus-visible:ring-transparent px-4 shadow-sm"
              />
            </div>
          </div>

          <DialogFooter>
            <Button
             onClick={async() => {
              if(amount && remark){
                closeAddDialog();
               await addBalance(activeOrganizer.id, amount, remark);
               await getOneOrganizer(activeOrganizer.id)
              }else{
                toast({
                  variant: "destructive",
                  description:'Kindly fill in the fields', 
                })
              }
            }}
            className="shadow-sm w-full font-bold text-white bg-[#FC6435] hover:bg-[#FC6435] transition-all  active:scale-95">
              Submit
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog open={isSubtractOpen} onOpenChange={closeSubtractDialog}>
        <DialogContent className="sm:max-w-[500px]  top-[34%]">
          <DialogTitle className="hidden"></DialogTitle>
          <div className="flex flex-col">
            <p className="text-[20px] font-semibold pb-4 border-b">
              Subtract Balance
            </p>
            <div className="grid w-full items-center mt-[14px] gap-[8px]">
              <Label htmlFor="amount" className="">
                <div className="flex items-start font-bold text-[14px] text-[#333333]">
                  <p>Amount</p>
                  <span className="text-[#F24455] text-md">*</span>
                </div>
              </Label>
              <Input
                id="amount"
                value={amount}
                onChange={(e) => {
                  setAmount(e.target.value)
                }}
                className=" py-[8px] focus-visible:ring-0 focus-visible:ring-transparent px-4 shadow-sm"
              />
            </div>
            <div className="grid w-full items-center gap-[8px] mt-[14px] pb-4 border-b">
              <Label htmlFor="remark" className="">
                <div className="flex items-start font-bold text-[14px] text-[#333333]">
                  <p>Remark</p>
                  <span className="text-[#F24455] text-md">*</span>
                </div>
              </Label>
              <Textarea
                id="remark"
                value={remark}
                onChange={(e) => {
                  setRemark(e.target.value)
                }}
                className=" py-[8px] h-[178px] focus-visible:ring-0 focus-visible:ring-transparent px-4 shadow-sm"
              />
            </div>
          </div>

          <DialogFooter>
            <Button 
            onClick={async() => {
              if(amount && remark){
                closeSubtractDialog();
               await subtractBalance(activeOrganizer.id, amount, remark);
               await getOneOrganizer(activeOrganizer.id)
              }else{
                toast({
                  variant: "destructive",
                  description:'Kindly fill in the fields', 
                })
              }
            }}
            className="shadow-sm w-full font-bold text-white bg-[#FC6435] hover:bg-[#FC6435] transition-all  active:scale-95">
              Submit
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog open={isBanOpen} onOpenChange={closeBanDialog}>
        <DialogContent className="sm:max-w-[500px]  top-[34%]">
          <DialogTitle className="hidden"></DialogTitle>
          <div className="flex flex-col">
            <p className="text-[20px] font-semibold pb-4 border-b">
              Ban Organizer
            </p>
            <p className="text-[#37474F] text-[14px] font-medium mt-4">
              If you ban this organizer he/she won't able to access his/her
              organizer’s account.
            </p>
            <div className="grid w-full items-center gap-[8px] mt-[14px] pb-4 border-b">
              <Label htmlFor="remark" className="">
                <div className="flex items-start font-bold text-[14px] text-[#333333]">
                  <p>Reason</p>
                  <span className="text-[#F24455] text-md">*</span>
                </div>
              </Label>
              <Textarea
                id="remark"
                className=" py-[8px] h-[178px] focus-visible:ring-0 focus-visible:ring-transparent px-4 shadow-sm"
              />
            </div>
          </div>

          <DialogFooter>
            <Button className="shadow-sm w-full font-bold text-white bg-[#FC6435] hover:bg-[#FC6435] transition-all  active:scale-95">
              Submit
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default OrganizerDetails;
