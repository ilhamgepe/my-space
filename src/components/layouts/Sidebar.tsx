import Link from "next/link";
import React from "react";
import { CiSettings } from "react-icons/ci";
import { PiNotebookFill } from "react-icons/pi";
import { GrTask } from "react-icons/gr";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { CgNotes } from "react-icons/cg";

const mockdata = [
  { label: "Note", icon: CgNotes, link: "/my-note" },
  { label: "Task", icon: GrTask, link: "/my-task" },
  {
    label: "Settings",
    icon: CiSettings,
    initiallyOpened: true,
    links: [
      { label: "idk what to do", link: "/#" },
      { label: "idk what to do", link: "/#" },
      { label: "idk what to do", link: "/#" },
      { label: "idk what to do", link: "/#" },
    ],
  },
];

const Sidebar = () => {
  return (
    <div>
      {mockdata.map((d) => (
        <SidebarLink
          key={d.label}
          Icon={d.icon}
          label={d.label}
          link={d.link}
          links={d.links}
        />
      ))}
    </div>
  );
};

export default Sidebar;

interface sidebarProps {
  label: string;
  Icon: React.FC<any>;
  links?: { label: string; link: string }[];
  link?: string;
}

const SidebarLink = ({ label, Icon, links, link }: sidebarProps) => {
  return !link ? (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="font-medium">
          <div className="flex items-center gap-2">
            <Icon size={14} />
            <p className="font-medium">{label}</p>
          </div>
        </AccordionTrigger>
        <AccordionContent className="text-sm pl-3">
          <div className="flex flex-col gap-2">
            {links?.map((link) => (
              <Link
                className="hover:underline"
                key={link.label}
                href={link.link}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ) : (
    <Link
      href={link}
      className={`hover:text-accent-foreground hover:bg-accent hover:underline p-2 rounded-md flex items-center gap-2`}
    >
      <Icon size={14} />
      <p className="font-medium">{label}</p>
    </Link>
  );
};
