import { FC } from "react";

export const Footer: FC = () => {
  return (
    <footer className="bg-stone-950 mt-10 md:mt-0 p-5 text-sm text-center">
      <p className="text-sm text-stone-500">
        Developed by{" "}
        <a
          href="https://theshawa-dev.web.app"
          className="text-orange-500 hover:underline"
        >
          Theshawa Dasun
        </a>{" "}
        from ACM UCSC.
      </p>
    </footer>
  );
};
