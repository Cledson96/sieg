"use client";
import { useState } from "react";
import Image from "next/image";
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import logo from "../../public/img/sieg.svg";

export default function Headers() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-padrao fixed w-screen	 z-50">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1 py-5">
          <Image className="w-auto max-h-12" src={logo} alt="Sieg" />
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12 pl-5">
          <a
            href="#Sieg"
            className="text-lg leading-6 text-white px-5 py-4 hover:bg-transparente "
          >
            A SIEG
          </a>
          <a
            href="#Atuacao"
            className="text-lg  leading-6 text-white px-5 py-4 hover:bg-transparente"
          >
            ATUAÇÃO
          </a>
          <a
            href="#Atas"
            className="text-lg  leading-6 text-white px-5 py-4 hover:bg-transparente"
          >
            ATAS
          </a>
          <a
            href="#Contato"
            className="text-lg  leading-6 text-white px-5 py-4 hover:bg-transparente"
          >
            CONTATO
          </a>
          <a
            href="https://sieg-vagas.bubbleapps.io/version-test/"
            className="text-lg  leading-6 text-white px-5 py-4 hover:bg-transparente	"
          >
            VAGAS
          </a>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="#"
            className="text-lg  leading-6 text-white px-5 py-4 hover:bg-transparente"
          >
            LOGIN <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10 " />
        <Dialog.Panel className="fixed top-[88px] right-0 z-10 w-full overflow-y-auto bg-transparente2 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <Image className="w-auto max-h-8" src={logo} alt="Sieg" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Fechar menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="#Sieg"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base  leading-7 text-white hover:bg-padrao"
                >
                  A Sieg
                </a>
                <a
                  href="#Atuacao"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base  leading-7 text-white hover:bg-padrao"
                >
                  Atuação
                </a>
                <a
                  href="#Atas"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base  leading-7 text-white hover:bg-padrao"
                >
                  Atas
                </a>
                <a
                  href="#Contato"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base  leading-7 text-white hover:bg-padrao"
                >
                  Contato
                </a>
                <a
                  href="#Sieg"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base  leading-7 text-white hover:bg-padrao"
                >
                  Vagas
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base  leading-7 text-white hover:bg-gray-50"
                >
                  Login
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
