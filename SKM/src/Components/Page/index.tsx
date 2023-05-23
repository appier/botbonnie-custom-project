import LogoWhite from "../../assets/img/skm_logo_w.png";
import LogoRed from "../../assets/img/skm_logo.png";

type Props = {
  children: React.ReactNode;
  type?: "primary" | "secondary";
};

const Page: React.FC<Props> = ({ type = "primary", children }) => {
  return (
    <div
      className={`flex min-h-0 flex-1 flex-col items-center w-full ${
        type === "primary" ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-[45%] my-0 mx-auto py-4">
        <img
          src={type === "primary" ? LogoWhite : LogoRed}
          className="max-w-full align-middle"
        />
      </div>
      <div className="flex flex-col items-start w-[90%]">{children}</div>
    </div>
  );
};

export default Page;
