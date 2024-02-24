import { SignIn } from "@clerk/nextjs";

import "../../../globals.css"; // Make sure to import your CSS file correctly
// import { light } from "@mui/material/styles/createPalette";

export default function Page() {
  return (
    <div className="signin">
      <SignIn />
    </div>
  );
}
