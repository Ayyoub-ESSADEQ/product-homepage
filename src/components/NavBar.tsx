import { useEffect, useState } from "react";

const Tab = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`${className} hover:text-white hover:cursor-pointer`}>
      {children}
    </div>
  );
};

const Button = ({
  children,
  disabled,
  onClick,
}: {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}) => {
  const active = "bg-[#E5FFB2] p-1 rounded-md text-black";
  const disable =
    "bg-[#222227] p-1 rounded-md text-white border-[#7A7A7D] border-[1px] ";
  return (
    <div
      className={`${
        disabled ? disable : active
      } px-3 font-medium hover:cursor-pointer`}
      onClick={() => onClick?.()}
    >
      {children}
    </div>
  );
};

export function Header() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const resize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  });

  return width < 800 ? <NavBarMobile /> : <NavBarDesktop />;
}

export function NavBarMobile() {
  const [close, setClose] = useState(false);

  return (
    <div>
      <div className="flex z-50 select-none font-bold text-[12px] justify-between top-3 fixed left-[50%] translate-x-[-50%] flex-row items-center p-2 text-[#7A7A7D] rounded-[14px] bg-[#222227] w-[95%]">
        <Tab className="w-fit text-white flex flex-row items-center gap-x-1">
          <img className="scale-75" alt="cocaptain"/>
          <span>Cocaptain</span>
        </Tab>
        <Button disabled onClick={() => setClose(!close)}>
          {close ? (
            <MaterialSymbolsClose height={20} />
          ) : (
            <MaterialSymbolsLightMenuRounded height={20} />
          )}
        </Button>

        {close ? (
          <div className="flex flex-col gap-3 absolute z-[-1] bg-[#2222278a] rounded-[14px] mt-[50px] px-12 py-8 top-0 left-0 w-full h-fit">
            <div className="hover:text-white cursor-pointer">HOME</div>
            <div className="hover:text-white cursor-pointer">PRODUCTS</div>
            <div className="hover:text-white cursor-pointer">COMPANY</div>
            <div className="hover:text-white cursor-pointer">PRICING</div>
            <div className="hover:text-white cursor-pointer">AFFILIATES</div>
          </div>
        ) : (
          ""
        )}
      </div>
      {close ? (
        <div className="fixed z-40 top-0 left-0 w-full h-full bg-[#131316]"></div>
      ) : (
        ""
      )}
    </div>
  );
}

export function NavBarDesktop() {
  return (
    <div className="flex z-50 select-none font-bold text-[12px] justify-evenly top-3 fixed left-[50%] translate-x-[-50%] flex-row items-center p-2 text-[#7A7A7D] rounded-[14px] bg-[#222227] w-[600px]">
      <Tab className="w-fit text-white flex flex-row items-center gap-x-1">
        <img className=" scale-75" alt="cocaptain" ></img>
        <span>Cocaptain</span>
      </Tab>
      <Tab>PRODUCTS</Tab>
      <Tab>COMPANY</Tab>
      <Tab>PRICING</Tab>
      <Tab>AFFILIATES</Tab>
      <Button>
        <a
          target="_blank"
          href="https://marketplace.visualstudio.com/items?itemName=Ayyoub-Essadeq.cocaptain"
        >
          DOWNLOAD
        </a>
      </Button>
    </div>
  );
}

export function MaterialSymbolsLightMenuRounded(
  props: React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M4.5 17.27q-.213 0-.356-.145Q4 16.981 4 16.77q0-.213.144-.356q.143-.144.356-.144h15q.213 0 .356.144t.144.357q0 .213-.144.356t-.356.143zm0-4.77q-.213 0-.356-.144Q4 12.212 4 12t.144-.356q.144-.143.356-.143h15q.213 0 .356.144q.144.144.144.357t-.144.356q-.143.143-.356.143zm0-4.77q-.213 0-.356-.143T4 7.23q0-.213.144-.356q.143-.143.356-.143h15q.213 0 .356.144q.144.144.144.356q0 .213-.144.357q-.144.143-.356.143z"
      ></path>
    </svg>
  );
}

export function MaterialSymbolsClose(
  props: Readonly<React.SVGProps<SVGSVGElement>>
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"
      ></path>
    </svg>
  );
}
