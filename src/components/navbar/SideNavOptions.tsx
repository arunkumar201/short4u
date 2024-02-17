import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from '../ui/navigation-menu';

import { ListItem } from '../ui/ListItem';
import { Products } from '@/data/navbar';
import { SheetClose } from '../ui/sheet';
import { cn } from '@/lib/utils';

const SideNavOptions = () => {
  return (
    <>
      <Accordion type='single' collapsible className='w-full'>
        <AccordionItem value='item-1'>
          <AccordionTrigger className='-mb-3 '>
            <NavigationMenuLink
              className={cn('nav-menu', navigationMenuTriggerStyle())}
            >
              Products
            </NavigationMenuLink>
          </AccordionTrigger>
          <AccordionContent className=''>
              <ul className='grid gap-3 p-4 w-fit md:w-fit md:grid-cols-2'>
                {Products.map((product) => (
                  <ListItem
                    key={product.title}
                    title={product.title}
                    href={product.href}
                    icon={product.icon}
                  >
                    {product.description}
                  </ListItem>
                ))}
              </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default SideNavOptions;
