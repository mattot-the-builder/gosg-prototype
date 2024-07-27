import Navbar from "@/components/shared/Navbar";
import Image from "next/image";
import heroBackground from "@/assets/images/hero background.jpg";
import { Input } from "@/components/ui/input"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <>
      <Navbar />
      <main >
        <section className="px-16 py-16 overflow-hidden relative flex justify-center items-center">
          <Image src={heroBackground} alt="Kuala Lumpur view" placeholder="blur" className="absolute top-0 left-0 z-0" />
          <div className="grid grid-cols-2 h-full justify-center items-center gap-6 z-10">
            <div className="flex flex-col gap-4">
              <h1 className="text-5xl text-white font-extrabold">Gerbang Utama Perkhidmatan Kerajaan</h1>
              <div className="relative flex items-center gap-4">
                <div className="absolute left-0 top-0 h-full flex items-center pl-4">
                  <FontAwesomeIcon icon={faMagnifyingGlass} className="" size="lg" />
                </div>
                <Input type="text" placeholder="Cari..." className="p-6 pl-12 text-xl rounded-lg"></Input>
              </div>
            </div>
            <div className="w-[640px] h-[276px] overflow-hidden">
              <img src="https://picsum.photos/640" alt="Kuala Lumpur view" className="w-full h-full object-cover rounded-lg" />
            </div>
          </div>
        </section>
        <section className="px-16 py-8"></section>
      </main>
    </>
  );
}
