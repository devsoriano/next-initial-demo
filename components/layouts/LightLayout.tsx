import { FC } from "react";

type Props = {
  children: React.ReactNode;
};

export const LightLayout: FC<Props> = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(255, 255, 255, .7)",
        borderRadius: "5px",
        padding: "10px",
      }}
    >
      <h3>Light Layout</h3>
      <div>{children}</div>
    </div>
  );
};
