"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useState } from "react";
import { MENU_LIST } from "@/configs/header-menu.configs";
import Link from "next/link";

const Menu = ({ className }: { className?: string }) => {
  const [activeMenuItem, setActiveMenuItem] = useState(0);

  return (
    <NavigationMenu className={className + " items-end"}>
      <NavigationMenuList className="flex gap-6 first:ms-[-1rem] last:pe-0 text-lg items-stretch">
        {MENU_LIST.map((item, index) =>
          item.children ? (
            <NavigationMenuItem
              key={"menu-item-" + index}
              className="flex justify-between flex-col"
            >
              <NavigationMenuTrigger
                className={`${
                  activeMenuItem == index
                    ? "text-primary hover:text-primary"
                    : "text-[#212325]"
                } font-semibold text-xl bg-transparent focus:bg-transparent  focus:text-primary hover:text-primary [&>svg]:w-5 [&>svg]:h-5`}
              >
                <Link href={item.href} onClick={() => setActiveMenuItem(index)}>
                  {item.title}
                </Link>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="w-80 flex items-center flex-wrap">
                  {item.children.map((child, index) => (
                    <NavigationMenuItem
                      key={"menu-child-item-" + index}
                      className="w-fit p-4"
                    >
                      <Link
                        href={item.href + child.href}
                        className="font-semibold text-base text-[#212325] "
                      >
                        {child.title}
                      </Link>
                    </NavigationMenuItem>
                  ))}
                </ul>
              </NavigationMenuContent>

              <div
                className={`h-1 ${
                  activeMenuItem === index ? "bg-primary" : "bg-transparent"
                } rounded-tl-xl rounded-tr-xl`}
              ></div>
            </NavigationMenuItem>
          ) : (
            <NavigationMenuItem
              key={"menu-item-" + index}
              className="flex flex-col"
            >
              <Link
                onClick={() => setActiveMenuItem(index)}
                href={item.href}
                className={`font-semibold ${
                  activeMenuItem === index ? "text-primary" : "text-[#212325]"
                } px-4 py-2  hover:text-primary text-xl`}
              >
                {item.title}
              </Link>
              <div
                className={`h-1 ${
                  activeMenuItem === index ? "bg-primary" : "bg-transparent"
                } rounded-tl-xl rounded-tr-xl`}
              ></div>
            </NavigationMenuItem>
          )
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Menu;
