/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Link from "next/link";

export default function ModalHeader(props: {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
  headerName?: string
}) {
  const { setModalOpen, headerName } = props
  const header = css`
    display: flex;
    text-align: center;
    align-items: center;
    justify-contents: space-between;
    padding: 0px 10px;
  `;

  const item = css`
    flex-grow: 3;
  `;

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div css={header}>
      <div> </div>
      <h2 css={item}>{headerName}</h2>
      <img
        src="/images/icons/close.png"
        style={{ width: "15px", padding: '16px 6px' }}
        onClick={closeModal}
      />
    </div>
  );
}
