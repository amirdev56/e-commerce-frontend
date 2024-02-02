import CustomTabs from "../CustomComponent/Tabs";

const favProductsData = {
  "For EveryDay": [
    {
      title: "Tree Runner",
      description: "Breezy, Everyday Sneaker",
      logo: "https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_60/cms/36yzlsOoiqElrog4oYvkV9/070f3b2a87f2679218299e58cdc399ef/Tree.jpg",
      mainImage: "/shoe-image-1.jpeg",
    },
    {
      title: "Wool Runner 2",
      description: "Step Into Next-Gen Comfort",
      logo: "https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_60/cms/6wU7S0P7XLcX12M8UaXr8L/8db5af80e310b9e514ead9156bc3ec67/Wool.jpg",
      mainImage: "/shoe-image-2.jpeg",
    },
    {
      title: "Wool Lounger",
      description: "Cozy Slip-On",
      logo: "https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_60/cms/6wU7S0P7XLcX12M8UaXr8L/8db5af80e310b9e514ead9156bc3ec67/Wool.jpg",
      mainImage: "/banner-1.jpg",
    },
  ],
  "For Activity": [
    {
      title: "Tree Runner",
      description: "Breezy, Everyday Sneaker",
      logo: "https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_60/cms/36yzlsOoiqElrog4oYvkV9/070f3b2a87f2679218299e58cdc399ef/Tree.jpg",
      mainImage: "/banner-1.jpg",
    },
    {
      title: "Wool Runner 2",
      description: "Step Into Next-Gen Comfort",
      logo: "https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_60/cms/36yzlsOoiqElrog4oYvkV9/070f3b2a87f2679218299e58cdc399ef/Tree.jpg",
      mainImage: "/shoe-image-2.jpeg",
    },
    {
      title: "Wool Lounger",
      description: "Cozy Slip-On",
      logo: "https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_60/cms/36yzlsOoiqElrog4oYvkV9/070f3b2a87f2679218299e58cdc399ef/Tree.jpg",
      mainImage: "/shoe-image-1.jpeg",
    },
  ],
  "For The Rain": [
    {
      title: "Tree Runner",
      description: "Breezy, Everyday Sneaker",
      logo: "https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_60/cms/36yzlsOoiqElrog4oYvkV9/070f3b2a87f2679218299e58cdc399ef/Tree.jpg",
      mainImage: "/shoe-image-1.jpeg",
    },
    {
      title: "Wool Runner 2",
      description: "Step Into Next-Gen Comfort",
      logo: "https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_60/cms/36yzlsOoiqElrog4oYvkV9/070f3b2a87f2679218299e58cdc399ef/Tree.jpg",
      mainImage: "/shoe-image-2.jpeg",
    },
    {
      title: "Wool Lounger",
      description: "Cozy Slip-On",
      logo: "https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_60/cms/36yzlsOoiqElrog4oYvkV9/070f3b2a87f2679218299e58cdc399ef/Tree.jpg",
      mainImage: "/banner-1.jpg",
    },
  ],
};

export const FavouriteProducts = () => {
  return (
    <>
      <div className="text-center text-[32px] font-[900]">Our Favourites</div>
      <div className="w-[80%] mx-auto">
        <CustomTabs
          styles={{
            paddingTop: "18px",
            color: "#fff000",
            marginBottom: "36px",
            borderBottom: "2px solid grey",
          }}
          tabBarGutter={72}
          tabsData={favProductsData}
        />
      </div>
    </>
  );
};
