import { FC } from "react";

type HeaderProps = {
  title: string;
}

const Header: FC<HeaderProps> = ({
  title
}: HeaderProps) => {
  return (
    <header className="p-4 mb-10 bg-blue-500">
      <div className="max-w-5xl m-auto">
        <div className="text-xl font-bold text-white">{title}</div>
      </div>
    </header>
  )
}

export default Header;
