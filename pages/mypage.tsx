/** @jsxImportSource @emotion/react */
import RightArrowMenu from "@/components/ui/RightArrowMenu";
import DeliveryStatus from "@/components/widgets/DeliveryStatus";
import { css } from "@emotion/react";
import React from "react";
import {
  FaTruck,
  FaGift,
  FaTicketAlt,
  FaBell,
  FaClipboardList,
  FaBullhorn,
} from "react-icons/fa";

export default function Mypage() {
  return (
    <>
      <DeliveryStatus />
      <section className="management">
        <div id="service">
          <h2>서비스</h2>
          <div css={iconMenu}>
            <FaClipboardList size={25} />
            <RightArrowMenu menuName="주문 내역" link="" />
          </div>
          <div css={iconMenu}>
            <FaGift size={25} />
            <RightArrowMenu menuName="선물함" link="" />
          </div>
          <div css={iconMenu}>
            <FaTicketAlt size={25} />
            <RightArrowMenu menuName="쿠폰" link="" />
          </div>
          <div css={iconMenu}>
            <FaTruck size={25} />
            <RightArrowMenu menuName="배송지 관리" link="" />
          </div>
          <div css={iconMenu}>
            <FaBell size={25} />
            <RightArrowMenu menuName="입고 알림 내역" link="" />
          </div>
        </div>
        <div id="policy">
          <h2>약관 및 정책</h2>
          <div css={iconMenu}>
            <FaBullhorn size={25} />
            <RightArrowMenu menuName="배송지 정보 수집 및 이용 동의" link="" />
          </div>
        </div>
      </section>
    </>
  );
}

const iconMenu = css`
  display: flex;
  padding-left: 10px;
  align-items: center;
`;
