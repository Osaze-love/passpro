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
    name: "Manage Orders",
    icon: <OrdersIcon />,
    href: "/orders",
    accordion: true,
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
    name: "Organizers",
    icon: <OrganizersIcon />,
    href: "/organizers",
    accordion: true,
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
    name: "Users",
    icon: <UsersIcon />,
    href: "/users",
    accordion: true,
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
    name: "Withdrawals",
    icon: <WithdrawalIcon />,
    href: "/withdrawals",
    accordion: true,
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
    accordion: true,
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
    name: "User Reports",
    icon: <UserReportIcon />,
    href: "/report",
    accordion: true,
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
    name: "Extras",
    icon: <ExtrasIcon />,
    href: "/extras",
    accordion: true,
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
];
