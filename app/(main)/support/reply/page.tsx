'use client';

import React, { useEffect, useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { useRouter } from 'next/navigation';
import useSupport from '@/hooks/support';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import BarLoader from 'react-spinners/BarLoader';

const page = () => {
    const router = useRouter();
    const {loading, replyTicket, updateTicketStatus, getSupportTicketDetails} = useSupport();
    const {activeTicket, activeTicketDetails} = useSelector((state: RootState) => state.support);
  const [replyData, setReplyData] = useState({
    message: '',
    attachments: [] as File[],
  });
  useEffect(() => {
  getSupportTicketDetails(activeTicket?.id)
  },[])

  const handleAddAttachment = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const newFiles = Array.from(event.target.files);

      // Validate file count and size
      if (replyData.attachments.length + newFiles.length > 5) {
        alert('You can upload a maximum of 5 files.');
        return;
      }
      const validFiles = newFiles.filter(
        (file) =>
          file.size <= 256 * 1024 * 1024 && // 256MB max size
          ['image/jpeg', 'image/png', 'application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(file.type)
      );

      if (validFiles.length < newFiles.length) {
        alert('Some files were not added due to invalid format or size.');
      }

      setReplyData((prev) => ({
        ...prev,
        attachments: [...prev.attachments, ...validFiles],
      }));
    }
  };

  const handleDeleteAttachment = (index: number) => {
    setReplyData((prev) => ({
      ...prev,
      attachments: prev.attachments.filter((_, i) => i !== index),
    }));
  };

  const handleReply = async () => {
    const formData = new FormData();
    formData.append('message', replyData.message);
  
    if (replyData.attachments.length > 0) {
      replyData.attachments.forEach((file) => {
        formData.append('attachment[]', file); 
      });
    }
  
    await replyTicket(activeTicket?.id, formData);
  };
  

  return (
    <div className="px-[43px] py-[40px] bg-[#fdf7f4]">
          {loading && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-85">
     
        <BarLoader color="#FC6435" />
       
    </div> 
  )}
      <section className="flex items-center justify-between mb-[32px]">
        <h3 className="text-[20px] font-semibold">Reply Ticket</h3>
        <button
        onClick={() => {
            router.push('/support')
        }}
        className="border border-[#343434] bg-none text-[#343434] px-[22px] py-[5px] rounded-[3px] transition-all active:scale-95">
          Back
        </button>
      </section>

      <section className="bg-white p-[30px] rounded-[8px] space-y-[30px] shadow-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
          {activeTicket?.status === 'Open' ?  <p className=" text-[#606060] w-[64px] flex items-center justify-center rounded-[20px] bg-[#d1ecd8] border border-[#34C759] p-[5px]">
                           {activeTicket?.status}
                         </p> : <p className=" text-[#606060] w-[64px] flex items-center justify-center rounded-[20px] bg-[#E5E5E5] border border-[#343434] p-[5px]">
                           {activeTicket?.status}
                         </p>  }
                         <p className="text-[#343434] font-bold">TicketId [{activeTicket?.id}]</p>
            <p className="text-[#343434] font-bold">{activeTicket?.subject}</p>
          </div>
          {activeTicket?.status === 'Open' ? <button
          onClick={async() => {
            await updateTicketStatus(activeTicket?.id, 'Closed')
          }}
          className="bg-[#FF3B30] rounded-[8px] p-[10px] text-white transition-all active:scale-95">
            Close Ticket
          </button> : 
          <button
          onClick={async() => {
            await updateTicketStatus(activeTicket?.id, 'Open')
          }}
          className="bg-[#FC6435] rounded-[8px] p-[10px] text-white transition-all active:scale-95">
          Open Ticket
        </button>
          }
          
        </div>
        <div className='flex flex-col items-left gap-[5px]'>
          <h2 className='font-semibold text-[15px]'>Previous Messages</h2>
          {activeTicketDetails.map((ticket, index) => (
             <p key={index} className='text-[13px]'>-{ticket.message}</p>
          ))}
          {activeTicketDetails.length < 1 && <p className='text-[13px]'>No previous message</p>} 
        </div>
        <Textarea
          className="focus-visible:ring-0 focus-visible:ring-transparent h-[140px] border-[#C4C4C4] shadow-sm placeholder:text-[#D9D9D9]"
          placeholder="Enter reply here"
          value={replyData.message}
          onChange={(e) =>
            setReplyData((prev) => ({ ...prev, message: e.target.value }))
          }
        />

        <div className="flex items-center justify-between">
          <label className="bg-[#BC370D] rounded-[8px] p-[10px] text-white transition-all active:scale-95 cursor-pointer">
            Add Attachment
            <input
              type="file"
              multiple
              className="hidden"
              onChange={handleAddAttachment}
            />
          </label>
          <button
            className="bg-[#FC6435] rounded-[8px] p-[10px] text-white transition-all active:scale-95"
            onClick={handleReply}
          >
            Reply
          </button>
        </div>

        <section className="space-y-[30px]">
          <p className="text-[#343434]">
            Max 5 files can be uploaded | Maximum upload size is 256MB | Allowed
            File Extensions: .jpg, .jpeg, .png, .pdf, .doc, .docx
          </p>

          {replyData.attachments.map((file, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 border-[#FC6435] border px-[30px] py-[20px]"
            >
              <div className="space-y-[10px]">
                <p className="truncate w-[200px]">{file.name}</p>
                <button
                  className="bg-[#FF3B30] text-[14px] rounded-[8px] p-[10px] text-white transition-all active:scale-95"
                  onClick={() => handleDeleteAttachment(index)}
                >
                  Delete
                </button>
              </div>
              <div className="h-auto w-[1px] bg-[#D9D9D9] self-stretch"></div>
              <div className="space-y-[10px]">
                <p className="text-[14px] text-[#FC6435] font-medium">
                  Attachment {index + 1}
                </p>
              </div>
            </div>
          ))}
        </section>
      </section>
    </div>
  );
};

export default page;
