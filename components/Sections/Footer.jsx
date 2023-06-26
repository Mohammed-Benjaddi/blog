import Link from "next/link";
import Image from "next/image";
import Container from "../Elements/Container";

const Footer = () => {
  return (
    <div className="w-full h-32 md:h-20 bg-white drop-shadow-[0_-1px_5px_rgba(0,0,0,0.25)] dark:bg-slate-900 dark:text-white">
      <Container
        className={
          "h-full flex flex-col-reverse md:flex-row justify-center md:justify-between items-center gap-3 md:gap-0"
        }
      >
        <p>
          Created & Developed with
          <Image
            src={"/heart.svg"}
            className="icon inline mx-1"
            width={20}
            height={20}
            alt="love"
          />
          by{" "}
          <Link
            href={""}
            className="underline text-sky-600 dark:text-green-400 dark:hover:text-green-200 hover:text-sky-500 transition"
          >
            Simo
          </Link>
        </p>
        <p>
          Feel free to{" "}
          <Link
            href={"/contact"}
            className="underline text-sky-600 dark:text-green-400 dark:hover:text-green-200 hover:text-sky-500 transition"
          >
            contact us
          </Link>
        </p>
      </Container>
    </div>
  );
};

export default Footer;
