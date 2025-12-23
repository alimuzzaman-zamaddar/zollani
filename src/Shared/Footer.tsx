import Container from "@/Components/Common/Container";

const Footer = () => {
  return (
    <footer className="w-full bg-[#E9E9E4] py-5 border-t border-t-[#A2A3A9]">
      <Container>
        <div className="w-full flex flex-col gap-2.5 xl:flex-row justify-center xl:justify-between items-center">
          {" "}
          <img
            src="https://i.ibb.co.com/WNJYRm0h/ZOLLANI-COM-1.png"
            alt="ZOLLANI COM"
          />
          <p className="text-sm font-normal leading-[20px] text-[#A2A3A9]">
            Independent data for smarter investing decisions.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
