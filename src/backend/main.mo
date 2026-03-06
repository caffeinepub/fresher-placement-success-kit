import Array "mo:core/Array";



actor {
  type ShopInfo = {
    name : Text;
    phone : Text;
    whatsapp : Text;
    location : Text;
  };

  type Product = {
    name : Text;
    emoji : Text;
    description : Text;
  };

  let shopInfo : ShopInfo = {
    name = "ATCHAYA FRUIT SHOP";
    phone = "9487014593";
    whatsapp = "https://wa.me/+919487014593";
    location = "Ambattur, Chennai";
  };

  let products = [
    {
      name = "Apple";
      emoji = "🍎";
      description = "Fresh red apples";
    },
    {
      name = "Mango";
      emoji = "🥭";
      description = "Ripe juicy mangoes";
    },
    {
      name = "Banana";
      emoji = "🍌";
      description = "Sweet yellow bananas";
    },
    {
      name = "Orange";
      emoji = "🍊";
      description = "Citrusy oranges";
    },
    {
      name = "Grapes";
      emoji = "🍇";
      description = "Fresh green and black grapes";
    },
  ];

  public query ({ caller }) func getShopInfo() : async ShopInfo {
    shopInfo;
  };

  public query ({ caller }) func getProducts() : async [Product] {
    products;
  };
};
