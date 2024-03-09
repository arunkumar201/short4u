import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { Products } from "@/data/navbar";
import { cn } from "@/lib/utils";

import { ListItem } from "../ui/ListItem";

const SideNavOptions = () => {
  return (
    <>
      <Accordion
        type="single"
        collapsible={true}
        className="w-full "
        defaultValue="item-1"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="-mb-3 focus:outline-none ">
            <p className={cn("nav-menu")}>Products</p>
          </AccordionTrigger>
          <AccordionContent className="">
            <AccordionItem
              className="grid gap-3 p-4 w-fit md:w-fit md:grid-cols-2"
              value="item-1"
            >
              {Products.map(product => (
                <ListItem
                  key={product.title}
                  title={product.title}
                  href={product.href}
                  icon={product.icon}
                  isMobile={true}
                >
                  {product.description}
                </ListItem>
              ))}
            </AccordionItem>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default SideNavOptions;
