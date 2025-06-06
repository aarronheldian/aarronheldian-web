"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const projectsList = [
  {
    id: "item-1",
    icon: "https://storeio.cloud.playcourt.id/ewz-mycarrier-pub-dev/public/img/myc-logo.png",
    title: "MyCarrier",
    description: "Telkom Indonesia Wholesale Platform",
    preview:
      "https://storeio.cloud.playcourt.id/ewz-mycarrier-pub-dev/public/img/myc-preview.png",
    link: "https://mycarrier.telkom.co.id/",
    tags: [
      "Customer Portal",
      "Order Management",
      "Service Monitoring",
      "Request Document",
      "Multi-Language Support",
      "After-Sales Service",
    ],
  },
  {
    id: "item-2",
    icon: "https://storeio.cloud.playcourt.id/ewz-mycarrier-pub-dev/public/img/myc-logo.png",
    title: "MyCarrier - Internal",
    description: "Telkom Indonesia Wholesale Platform for Internal",
    preview:
      "https://storeio.cloud.playcourt.id/ewz-mycarrier-pub-dev/public/img/myc-internal-preview.png",
    // link: "https://internal-mycarrier.telkom.co.id/",
    tags: [
      "Dashboards",
      "Content Management",
      "Order Processing",
      "Monitoring",
      "Lead Tracking",
      "Fault Handling",
      "Generate Doc",
      "Billing & Payments",
    ],
  },
  {
    id: "item-4",
    icon: "https://storeio.cloud.playcourt.id/ewz-mycarrier-pub-dev/public/img/fxc-logo.png",
    title: "Finn & Chips",
    description: "Finn & Chips Smart Order & Content Management System",
    preview:
      "https://storeio.cloud.playcourt.id/ewz-mycarrier-pub-dev/public/img/fxc-preview.png",
    tags: [
      "Customer Portal",
      "Point of Sales",
      "Order Management",
      "Reservation System",
      "Delivery Service",
      "Gamification",
      "Content Management",
    ],
  },
  {
    id: "item-5",
    icon: "https://storeio.cloud.playcourt.id/ewz-mycarrier-pub-dev/public/img/mytens-logo.png",
    title: "MyTens",
    description: "Telkom Indonesia Digitalization Business Service",
    preview:
      "https://storeio.cloud.playcourt.id/ewz-mycarrier-pub-dev/public/img/mytens-preview.png",
    link: "https://www.mytens.co.id/",
    tags: [
      "Customer Portal",
      "Order Management",
      "Service Monitoring",
      "Request Document",
      "Multi-Language Support",
      "After-Sales Service",
    ],
  },
  {
    id: "item-6",
    icon: "https://storeio.cloud.playcourt.id/ewz-mycarrier-pub-dev/public/img/mytds-logo.png",
    title: "MyTDS SSOF",
    description: "Telkom Indonesia Order Validation System",
    preview:
      "https://storeio.cloud.playcourt.id/ewz-mycarrier-pub-dev/public/img/mytds-preview.png",
    tags: [
      "AI Document Verification",
      "Automated Order Validation",
      "Predictive Analytics",
      "OCR Document",
      "Dashboard Report",
    ],
  },
  {
    id: "item-3",
    icon: "https://storeio.cloud.playcourt.id/ewz-mycarrier-pub-dev/public/img/dppu-logo.png",
    title: "DPPU - Halim Perdanakusuma",
    description: "Pertamina Aviation Digital Management System",
    preview:
      "https://storeio.cloud.playcourt.id/ewz-mycarrier-pub-dev/public/img/dppu-preview.png",
    tags: [
      "Inventory Management",
      "Scheduling Maintenance",
      "Visit Appointment",
    ],
  },
];

export default function Projects() {
  return (
    <div className="p-4 md:p-6 bg-secondary/80 rounded-xl flex flex-col border gap-4 w-full">
      <span className="text-lg text-primary/60 font-medium">
        <span className="text-lg text-primary/40 font-medium">
          {"\u2022"}&nbsp;&nbsp;
        </span>
        Magical Projects
      </span>

      <Accordion type="single" collapsible className="gap-3 flex flex-col">
        {projectsList?.map((project) => (
          <AccordionItem
            key={project?.id}
            value={project?.title}
            className="rounded-xl border overflow-hidden border-primary/10"
          >
            <AccordionTrigger className="p-4 bg-primary/5 w-full hover:no-underline gap-2 will-change-transform">
              <div className="w-full flex flex-row items-center justify-start gap-2">
                <div className="min-h-16 min-w-16 h-16 w-16 bg-secondary/60 border-primary/10 rounded-full border overflow-hidden flex justify-center items-center">
                  <Image
                    src={project?.icon}
                    alt={`${project?.id}-icon`}
                    className="h-full w-full object-contain"
                    width={64}
                    height={64}
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <span className="text-lg font-medium">{project?.title}</span>
                  <span className="text-md text-primary/60">
                    {project?.description}
                  </span>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-4 px-4 bg-primary/5 w-full lazy-load flex flex-col gap-3">
              <div className="flex flex-row gap-2 md:flex-wrap flex-nowrap overflow-auto pb-2 -mb-2">
                {project?.tags?.map((tag, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="bg-secondary/60 border-primary/10 text-primary/60 whitespace-nowrap"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="relative w-full aspect-video overflow-hidden group rounded-lg">
                <Image
                  src={project?.preview}
                  alt={`${project?.id}-preview`}
                  fill
                  className="w-full h-full object-cover transition-all duration-300 group-hover:opacity-70"
                  loading="lazy"
                />
                {project?.link ? (
                  <Link
                    href={project?.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white font-medium"
                  >
                    Explore the Project 🚀
                  </Link>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white font-medium">
                    Restricted Access 🔞
                  </div>
                )}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
