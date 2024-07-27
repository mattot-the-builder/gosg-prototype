import Image from "next/image";
import { Button } from "../ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons/faGlobe";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center py-6 px-16">
            <Image src="/mygov.svg" alt="MyGov logo" width={280} height={52} />
            <div className="flex gap-2 items-center">
                <Button variant="outline">
                    <FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon>
                    Bahasa Malaysia</Button>
                <Button variant="outline">Log Masuk</Button>
                <Button>Daftar</Button>
                <Button variant="ghost" className="p-1">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 16.5C12 15.6703 12.6703 15 13.5 15H31.5C32.3297 15 33 15.6703 33 16.5C33 17.3297 32.3297 18 31.5 18H13.5C12.6703 18 12 17.3297 12 16.5ZM15 24C15 23.1703 15.6703 22.5 16.5 22.5H34.5C35.3297 22.5 36 23.1703 36 24C36 24.8297 35.3297 25.5 34.5 25.5H16.5C15.6703 25.5 15 24.8297 15 24ZM33 31.5C33 32.3297 32.3297 33 31.5 33H13.5C12.6703 33 12 32.3297 12 31.5C12 30.6703 12.6703 30 13.5 30H31.5C32.3297 30 33 30.6703 33 31.5Z" fill="black" />
                    </svg>
                </Button>

            </div>
        </nav>
    )
}
