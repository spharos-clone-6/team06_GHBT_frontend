import ModalHeader from "@/components/ui/ModalHeader";
import RightArrowMenu from "@/components/ui/RightArrowMenu";
import ContentCategoryContainer from "@/components/widgets/ContentCategoryContainer";
import { contentsModalState } from "@/state/contentsModalState";
import Link from "next/link";
import React from "react";
import { useSetRecoilState } from "recoil";

export default function Contents() {
  const setContentsIsView = useSetRecoilState(contentsModalState);

  const modalStyle: Object = {
    position: "fixed",
    backgroundColor: "var(--color-white)",
    top: "0",
    left: "0",
    zIndex: 999,
    width: "100%",
    height: "100%",
  };

  const closeModal = () => {
    setContentsIsView(false);
  };

  return (
    <div style={modalStyle}>
      <ModalHeader />
      <section className="contents-head">
        {/*본문*/}
        <div className="contents-msg">
          <div className="msg-title">Sign in to Online Store</div>
          <div>
            <Link href="/login" onClick={closeModal}>
              로그인
            </Link>{" "}
            후 이용해 보세요.
          </div>
        </div>
        <hr className="contents-line" />
      </section>
      {/* 제품 카테고리 */}
      <ContentCategoryContainer />
      {/*기획전/베스트 이동*/}
      <section id="nav-event-best">
        <div onClick={closeModal}>
          <RightArrowMenu
            menuName={"기획전"}
            link={"/event?category=라인프렌즈"}
            fontType="strong"
            description="진행중인 기획전을 만나보세요."
          />
        </div>

        <hr style={{ margin: "15px 0" }} />
        <div onClick={closeModal}>
          <RightArrowMenu
            menuName={"베스트"}
            link={"/best?category=케이크"}
            fontType="strong"
            description="스타벅스의 베스트 상품을 만나보세요."
          />
        </div>
      </section>
    </div>
  );
}
