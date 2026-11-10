import type { Metadata } from "next";
import { LinkTree, type TreeLinkItem, type TreeSocial } from "@/components/link-tree";
import { asset } from "@/lib/asset";

export const metadata: Metadata = {
  title: "Mana Tech",
  description: "Connections that make a difference.",
};

const icon = (src: string, width = 18, height = 18) => ({ src, width, height });

const links: TreeLinkItem[] = [
  {
    id: "anji",
    href: "https://www.youtube.com/watch?v=JVSYlk2mqyM&t=5s",
    icon: icon("/icon-youtube.svg"),
    label: (
      <>
        <span className="block">
          <span className="font-bold">Anji Ismail: </span>
          <span>Empowering the Future </span>
        </span>
        <span className="block">of Finance with AI</span>
      </>
    ),
  },
  {
    id: "member",
    href: "https://tech.manacommon.com/become-a-member/?utm_source=linktree&utm_medium=instagram&utm_campaign=membership",
    icon: icon("/icon-plus.svg"),
    label: "Become a Member | Book a Tour!",
  },
  {
    id: "events",
    href: "https://luma.com/manatech",
    icon: icon("/icon-events.svg"),
    label: "Events Calendar",
  },
  {
    id: "whatsapp",
    href: "https://chat.whatsapp.com/HJonBVoXJTD2FGKMLScY4T",
    icon: icon("/icon-chat.svg"),
    label: "Join Mana Tech WhatsApp Community!",
  },
  {
    id: "news",
    href: "https://tech.manacommon.com/news/",
    icon: icon("/icon-news.svg"),
    label: "News – Mana Tech",
  },
  {
    id: "visit",
    href: "https://tech.manacommon.com/",
    icon: icon("/icon-tech.svg"),
    label: "Visit Mana Tech",
  },
  {
    id: "linkedin",
    href: "https://linkedin.com/company/manatech-basemiami/?skipRedirect=true",
    icon: icon("/icon-linkedin.svg"),
    label: "LinkedIn",
  },
];

const socials: TreeSocial[] = [
  {
    label: "YouTube",
    href: "https://youtube.com/@manacommon",
    icon: icon("/social-youtube.svg", 18, 18),
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/@manacommon",
    icon: icon("/social-tiktok.svg", 17.75, 17.75),
  },
  {
    label: "X",
    href: "https://x.com/manacommon",
    icon: icon("/social-x.svg", 18, 18),
  },
  {
    label: "Facebook",
    href: "https://facebook.com/manacommon",
    icon: icon("/social-facebook.svg", 18, 17.75),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/manatechmiami/",
    icon: icon("/social-instagram.svg", 17.75, 17.75),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/manatech-basemiami/?skipRedirect=true",
    icon: icon("/social-linkedin.svg", 17.5, 17.5),
  },
];

export default function TechPage() {
  return (
    <LinkTree
      label="Mana Tech"
      canvasClassName="bg-[#dfdfdf]"
      desktopImage="/desktop-background.jpg"
      tone="ink"
      linksLabel="Mana Tech links"
      panelClassName="gap-[69px] bg-[rgba(197,212,255,0.58)]"
      headerClassName="border-b border-solid border-black"
      footerClassName="px-[19px]"
      socialClassName="px-1"
      background={null}
      logo={
        <div className="flex size-[60.721px] shrink-0 items-center justify-center rounded-[427px] bg-[#459af7]">
          <img
            src={asset("/logo.svg")}
            alt=""
            width={24.721}
            height={35.68}
            className="block brightness-0 invert"
          />
        </div>
      }
      title={
        <>
          <span className="block">Mana</span>
          <span className="block">Tech</span>
        </>
      }
      titleClassName="text-[#0d0d10]"
      tagline={
        <>
          <span className="block">Connections </span>
          <span className="block">that make </span>
          <span className="block">a difference</span>
        </>
      }
      taglineClassName="w-[150.634px] text-[#161616]"
      links={links}
      socials={socials}
      footer="© 2026 Mana Common. All Rights Reserved."
    />
  );
}
