import { logo } from "@/utils/constants";
import { Stack } from "@mui/material";
import Link from "next/link";
import SearchBar from "./SearchBar";
import Image from "next/image";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#000",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link href="/" style={{ display: "flex", alignItems: "center" }}>
        <Image
          src="/Capture.png"
          height={45}
          width={45}
          alt="logo"
          style={{ borderRadius: "50%" }}
        />
      </Link>

      <SearchBar />
    </Stack>
  );
};

export default Navbar;
