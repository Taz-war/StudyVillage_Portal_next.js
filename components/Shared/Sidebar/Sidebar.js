import React from "react";
import Link from "next/link";
import Image from "next/image";
import useTrackedStore from "../../../store/useTrackedStore";
import { useRouter } from "next/router";

const Sidebar = () => {
  const state = useTrackedStore();
  const router = useRouter();
  const profile =
    router.pathname.split("/")?.[1] ||
    state?.portalUserResp?.User_Type?.toLowerCase() ||
    "";

  return (
    <div className="sidebar-menu">
      <div className="main-menu">
        <nav>
          <ul>
            {state.navLinksMap?.[profile].map((navLink, index) => {
              return (
                <li key={index}>
                  <Link href={`/${profile}${navLink.href}`}>
                    <a
                      className={
                        `/${profile}${navLink.href}` === router.pathname
                          ? "active"
                          : ""
                      }
                    >
                      <Image
                        width={40}
                        height={40}
                        src={
                          `/${profile}${navLink.href}` === router.pathname
                            ? navLink.selectedImgSrc
                            : navLink.imgSrc
                        }
                        alt=""
                      />
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className="hover-menu-wrapper">
        <ul>
          {state.navLinksMap?.[profile].map((navLink, index) => {
            return (
              <li>
                <Link href={`/${profile}${navLink.href}`}>
                  <a
                    className={
                      `/${profile}${navLink.href}` === router.pathname
                        ? ""
                        : "active"
                    }
                  >
                    {navLink.label}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
