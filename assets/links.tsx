import {
  DashboardIcon,
  OrdersIcon,
  CategoryIcon,
  EventsIcon,
  ExtrasIcon,
  OrganizersIcon,
  SupportIcon,
  UserReportIcon,
  UsersIcon,
  WithdrawalIcon,
  CouponIcon,
  TicketIcon,
} from "@/components/icons";

export const NavLinks = [
  {
    name: "Dashboard",
    icon: <DashboardIcon />,
    href: "/dashboard",
    accordion: false,
  },
  {
    name: "Manage Category",
    icon: <CategoryIcon />,
    href: "/category",
    accordion: false,
  },
  {
    name: "Manage Events",
    icon: <EventsIcon />,
    href: "/events",
    accordion: true,
    sublink: [
      {
        title: "Add Events",
        href: "/events/add",
      },
      
      {
        title: "Manage Events",
        href: "/events/manage",
      },
    ],
  },
  {
    name: "Manage Orders",
    icon: <OrdersIcon />,
    href: "/orders",
    accordion: false,
    sublink: [
      {
        title: "Subscription fee",
        href: "/payments/subscription",
      },
      {
        title: "Payment history",
        href: "/payments/paymenthistory",
      },
    ],
  },
  // {
  //   name: "Manage Tickets",
  //   icon: <TicketIcon />,
  //   href: "/tickets",
  //   accordion: false,
  // },
  {
    name: "Organizers",
    icon: <OrganizersIcon />,
    href: "/organizers",
    accordion: true,
    sublink: [
      {
        title: "Add Organizer",
        href: "/organizers/add",
      },
      {
        title: "Manage Organizer",
        href: "/organizers/manage",
      },
      {
        title: "Notifications",
        href: "/organizers/notifications",
      },
    ],
  },
  // {
  //   name: "Users",
  //   icon: <UsersIcon />,
  //   href: "/users",
  //   accordion: true,
  //   sublink: [
  //     // {
  //     //   title: "Add User",
  //     //   href: "/users/add",
  //     // },
  //     {
  //       title: "Manage User",
  //       href: "/users/manage",
  //     },
  //     // {
  //     //   title: "Notifications",
  //     //   href: "/users/notifications",
  //     // },
      
  //   ],
  // },
  {
    name: "Withdrawals",
    icon: <WithdrawalIcon />,
    href: "/withdrawals",
    accordion: false,
    sublink: [
      {
        title: "Subscription fee",
        href: "/payments/subscription",
      },
      {
        title: "Payment history",
        href: "/payments/paymenthistory",
      },
    ],
  },
  {
    name: "Support Tickets",
    icon: <SupportIcon />,
    href: "/support",
    accordion: false,
    sublink: [
      {
        title: "Subscription fee",
        href: "/payments/subscription",
      },
      {
        title: "Payment history",
        href: "/payments/paymenthistory",
      },
    ],
  },
  // {
  //   name: "Organizer Reports",
  //   icon: <UserReportIcon />,
  //   href: "/organizerreport",
  //   accordion: false,
  //   // sublink: [
  //   //   {
  //   //     title: "Subscription fee",
  //   //     href: "/payments/subscription",
  //   //   },
  //   //   {
  //   //     title: "Payment history",
  //   //     href: "/payments/paymenthistory",
  //   //   },
  //   // ],
  // },
  // {
  //   name: "User Reports",
  //   icon: <UserReportIcon />,
  //   href: "/userreport",
  //   accordion: false,
  //   // sublink: [
  //   //   {
  //   //     title: "Subscription fee",
  //   //     href: "/payments/subscription",
  //   //   },
  //   //   {
  //   //     title: "Payment history",
  //   //     href: "/payments/paymenthistory",
  //   //   },
  //   // ],
  // },
  // {
  //   name: "Coupon",
  //   icon: <CouponIcon />,
  //   href: "/coupon",
  //   accordion: false,
  // },
  // {
  //   name: "Extras",
  //   icon: <ExtrasIcon />,
  //   href: "/extras",
  //   accordion: true,
  //   sublink: [
  //     {
  //       title: "Subscription fee",
  //       href: "/payments/subscription",
  //     },
  //     {
  //       title: "Payment history",
  //       href: "/payments/paymenthistory",
  //     },
  //   ],
  // },
];
