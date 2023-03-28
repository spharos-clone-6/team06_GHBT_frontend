/** @jsxImportSource @emotion/react */

import { cartItemType, modal } from "@/types/types";
import React, { useState } from "react";
import BottomFixedContainer from "../ui/BottomFixedContainer";
import Button from "../ui/Button";
import ItemAmount from "../ui/ItemAmount";
import ModalHeader from "../ui/ModalHeader";
import { css } from "@emotion/react";
import axios from "axios";

interface orderChange {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  item: cartItemType;
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  totalPrice: number;
  setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
}

export default function OrderChangeModal({
  setModalOpen,
  item,
  quantity,
  setQuantity,
  totalPrice,
  setTotalPrice,
}: orderChange) {
  // const [totalPrice, setTotalPrice] = useState<number>(0);
  // const [itemCount, setItemCount] = useState(item.quantity);
  const modalStyle: Object = {
    position: "fixed",
    backgroundColor: "var(--color-white)",
    top: "0",
    left: "0",
    zIndex: 999,
    width: "100%",
    height: "100%",
  };

  const buttonContainer = css`
    display: flex;
    gap: 15px;
    padding: 0px 30px;
    align-items: center;
    justify-content: space-between;
  `;

  const submitPrice = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
    font-weight: bolder;
    padding: 20px 30px 0px 30px;
  `;

  const closeModal = () => {
    setModalOpen(false);
  };

  console.log("변경된 수량: ", quantity);

  const submitQuantity = async () => {
    const accesstoken =
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJleHAiOjE2Nzk5MTc5MjksInN1YiI6ImFjY2Vzcy10b2tlbiIsImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMCI6dHJ1ZSwiZW1haWwiOiIxIiwicm9sZSI6IlJPTEVfVVNFUiJ9.w0w0qf6e1VstsXCFizf8GN9ZNX0pwmSrp8SVQ0GldMLBCqsnPypGw3Idp-YwjGhAxxACeKVXufax0OToSTVMkQ";
    await axios.put(
      `https://backend.grapefruit-honey-black-tea.shop/api/cart/${item.id}/${quantity}`,
      {},
      {
        headers: {
          Authorization: accesstoken,
        },
      }
    );

    setModalOpen(false);
    setQuantity(quantity);
    setTotalPrice(quantity * item.product.price);
  };

  return (
    <>
      <div style={modalStyle}>
        <ModalHeader setModalOpen={setModalOpen} />
        <div className="cart-product">
          <div className="item-info">
            <img
              src={`https://storage.googleapis.com/ghbt/product_thumbnail/${item.product.thumbnailUrl}`}
              alt=""
              className="product-img"
            />
            <div className="info">
              <div>
                <p className="name">{item.product.name}</p>
                <p className="price">
                  {item.product.price.toLocaleString("en")}원
                </p>
              </div>
              <img
                src="/images/icons/blank.png"
                alt=""
                className="close-icon"
                width="3.5%"
              />
            </div>
          </div>
        </div>
        <ItemAmount
          price={item.product.price}
          setTotalPrice={setTotalPrice}
          count={quantity}
          setCount={setQuantity}
        />
        <BottomFixedContainer>
          <div css={submitPrice}>
            <div>주문금액</div>
            <div className="price">
              합계{" "}
              <span style={{ fontSize: "16px" }}>
                {totalPrice.toLocaleString("en")}원
              </span>
            </div>
          </div>
          <div css={buttonContainer}>
            <Button btnType="button" btnEvent={closeModal} type="white">
              취소
            </Button>
            <Button btnType="button" btnEvent={submitQuantity}>
              확인
            </Button>
          </div>
        </BottomFixedContainer>
      </div>
    </>
  );
}
