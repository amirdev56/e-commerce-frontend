import React from "react";
import { Tabs } from "antd";
import { ProductCard1 } from "../Product/ProductCard1";
import { ProductCard2 } from "../Product/ProductCard2";

export type ProductDataType = {
  title: string;
  description: string;
  logo?: string;
  mainImage: string;
};

type TabsDataType = {
  [key: string]: ProductDataType[];
};

type PropsType = {
  styles: React.CSSProperties;
  tabBarGutter?: number;
  tabsData: TabsDataType;
};

const CustomTabs: React.FC<PropsType> = ({
  styles,
  tabsData,
  tabBarGutter = 16,
}) => (
  <Tabs
    defaultActiveKey="1"
    centered
    tabBarStyle={styles}
    tabBarGutter={tabBarGutter}
    items={Object.entries(tabsData).map((item, i) => {
      const id = String(i + 1);
      return {
        label: item[0],
        key: id,
        children: (
          <div className="flex flex-wrap">
            {item[1].map((product, index) => (
              <ProductCard1
                key={index}
                title={product.title}
                logo={product.logo}
                description={product.description}
                mainImage={product.mainImage}
              />
            ))}
          </div>
        ),
      };
    })}
  />
);

export default CustomTabs;
