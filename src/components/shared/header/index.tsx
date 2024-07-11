"use client";

import Logo from "@/components/icons/logo";
import MainButton from "../main-button";
import Menu from "../menu";
import { Input } from "@/components/ui/input";
import Heart from "@/components/icons/heart-icon";
import Link from "next/link";
import FrontCar from "@/components/icons/front-car";

const Header = () => {
  return (
    <div className="w-full pt-4 shadow-md px-24 bg-white relative z-50">
      <div className="mx-auto max-w-[1184px]">
        <div className="flex justify-between gap-6">
          <div className="flex items-center gap-2">
            <Logo />
            <span className="font-extrabold text-lg text-primary">
              Exchange Car
            </span>
          </div>
          <div className="flex gap-6 items-center">
            <div>
              <Input
                placeholder="Tìm kiếm xe..."
                className="font-semibold text-gray placeholder:text-gray lg:w-[300px]"
              />
            </div>
            <Heart className="w-7 h-7 cursor-pointer" />
            <div className="text-gray flex items-center gap-2">
              <Link href="/">Đăng nhập</Link>
              {" / "}
              <Link href="/">Đăng ký</Link>
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-4 mt-4">
          <Menu className="flex-1" />
          <MainButton
            title="Đăng tin"
            className="px-8 py-3 rounded-bl-none flex-row-reverse gap-2 items-center"
            onClick={() => {}}
          >
            <FrontCar className="w-5 h-5 bg-primary" />
          </MainButton>
        </div>
      </div>
    </div>
  );
};

export default Header;
