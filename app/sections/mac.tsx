import React from "react";
import { MacbookScroll } from "../../components/ui/macbook-scroll";
import Link from "next/link";

export function MacbookScrollDemo() {
  return (
    <div className="overflow-hidde w-full lg:h-full h-[100%] mb-[200px]">
      <MacbookScroll
        title={
          <span>
            Work Showcase<br />
          </span>
        }
        badge={
          <Link href="https://peerlist.io/manuarora">
            {/* <Badge className="h-10 w-10 transform -rotate-12" /> */}
          </Link>
        }
        src={`/linear.webp`}
        showGradient={false}
      />
    </div>
  );
}
