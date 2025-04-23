"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import Link from "next/link";

import { usePathname, useRouter } from "next/navigation";
import { NavLinks } from "@/assets/links";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const router = useRouter();
  useEffect(() => {
    const hideChevronsInTrigger = () => {
      // Select all AccordionTrigger elements
      const triggers = document.querySelectorAll(".accordion-trigger");
      const style =
        "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200";
      triggers.forEach((trigger) => {
        const chevrons = trigger.querySelectorAll(
          `.${style.replace(/ /g, ".")}`
        );

        chevrons.forEach((chevron) => {
          (chevron as HTMLElement).style.display = "none"; // Completely remove the element from layout
        });
      });
    };

    // Create a MutationObserver to monitor changes in the DOM
    const observer = new MutationObserver(() => {
      hideChevronsInTrigger();
    });

    // Observe changes in the entire document
    observer.observe(document.body, { childList: true, subtree: true });

    // Initial run
    hideChevronsInTrigger();

    // Clean up the observer on unmount
    return () => {
      observer.disconnect();
    };
  }, []);
  const path = usePathname();

  return (
    <div className="space-y-10 bg-[#FC6435] overflow-y-scroll  w-full h-full scrollbar-hide">
      <div className="pt-[34px] px-[24px]">
        <Image
          src="/logo/passprologo.svg"
          height={47}
          width={202}
          alt="passprologo"
        />
      </div>

      <div className="flex flex-col w-full grow space-y-[12px]">
        {NavLinks.map((item: any) => {
          const isActive =
            (path.includes(`${item.href}`) && item.href !== "/") ||
            (item.href === "/" && path === "/");
          const pathColor = isActive ? "#F75803" : "#808080";
          if (item.accordion) {
            return (
              <Accordion
                key={item.href}
                type="single"
                collapsible
                className={cn("w-full transition-all px-[19px]")}
              >
                <AccordionItem
                  className={cn(
                    "border-none py-0",
                    isActive && "bg-[#EE5627] rounded-[8px] "
                  )}
                  value="item-1"
                >
                  <AccordionTrigger
                    className={cn(
                      "accordion-trigger flex hover:no-underline items-center px-[12px]  w-full rounded-sm font-normal",
                      isActive
                        ? "bg-[#B1350F] text-white"
                        : "bg-none text-white"
                    )}
                  >
                    <span
                      key={item.href}
                      className="flex items-center space-x-3 text-white font-semibold text-[14px]"
                    >
                      {React.cloneElement(item.icon, {
                        className: "mr-2 h-7 w-4",
                        pathColor,
                      })}
                      <span> {item.name}</span>
                    </span>
                    <div
                      className={`transition-transform duration-200 ${"data-[state=open]:rotate-90"}`}
                    >
                      <Image
                        src={"/icons/accordionIcon.svg"}
                        alt="right arrow"
                        width={8}
                        height={13}
                        className="transition-transform duration-200 data-[state=open]:rotate-90"
                      />
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col items-start px-1  gap-2 text-[#808080]">
                    {item.sublink.map((sublink: any) => {
                      return (
                        <Link
                          key={sublink.href}
                          className={cn(
                            path === sublink.href
                              ? "text-white bg-[#BE4824] w-full text-[14px] py-[7px] font-semibold flex items-center space-x-2 pl-[20px]"
                              : "text-white text-[14px] py-[7px] w-full font-semibold flex items-center space-x-2 pl-[20px]"
                          )}
                          href={sublink.href}
                        >
                          <Image
                            src="/icons/ellipseIcon.svg"
                            alt="ellipse"
                            width={8}
                            height={13}
                          />
                          <span>{sublink.title}</span>
                        </Link>
                      );
                    })}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            );
          }
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center my-2 py-2 px-[19px] mx-1 transition-all ease-in-out duration-500 rounded-sm text-white text-[14px] font-semibold",
                isActive ? "bg-[#B1350F] text-white" : "bg-none text-white"
              )}
            >
              <div className="px-[12px] flex items-center space-x-3">
                {React.cloneElement(item.icon, {
                  className: "h-7 w-4",
                  pathColor,
                })}
                <span>{item.name}</span>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="pt-[34px] px-[24px] ">
        <Image
          src="/logo/passprologo.svg"
          height={47}
          width={202}
          alt="passprologo"
        />
      </div>
    </div>
  );
};

export default Sidebar;
