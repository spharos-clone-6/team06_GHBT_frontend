/** @jsxImportSource @emotion/react */

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import SelectOrder from "@/components/ui/SelectOrder";
import axios from "axios";
import { productType } from "@/types/types";
import ProductContainerGrid from "@/components/layouts/ProductContainerGrid";
import Config from "@/configs/config.export";
import Filter from "@/components/layouts/Filter";

export default function search_result() {
  const router = useRouter();
  const { query } = useRouter();
  const { baseUrl } = Config();

  const [allItem, setAllItem] = useState<productType[]>([]); // 키워드 검색결과 전체
  const [itemList, setItemList] = useState<productType[]>([]); // 현재 조건에 맞는 아이템

  /** 초기 데이터 세팅 */
  useEffect(() => {
    if (!router.isReady) {
      return;
    }
    const getData = async () => {
      const result = await axios.get(
        `${baseUrl}/api/product/n/search/${query.keyword}`
      );
      if (result.data !== "") {
        setItemList([...result.data]);
        setAllItem([...result.data]);
      }
    };
    getData();
    console.log("초기 데이터 세팅");
  }, [router.isReady]);

  return (
    <>
      <Filter
        allItem={allItem}
        setAllItem={setAllItem}
        itemList={itemList}
        setItemList={setItemList}
      />

      {/* 정렬 기준 */}
      <SelectOrder itemList={itemList} setItemList={setItemList} />

      {/* 상품 출력 */}
      {itemList.length !== 0 ? (
        <ProductContainerGrid itemList={itemList} />
      ) : (
        <div style={{ textAlign: "center", marginTop: "30%" }}>
          <p>조회되는 상품이 없습니다.</p>
        </div>
      )}
    </>
  );
}
