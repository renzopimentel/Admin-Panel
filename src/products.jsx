export const productColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "product",
      headerName: "Product",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "price",
      headerName: "Price",
      width: 230,
    },

    {
      field: "stock",
      headerName: "Stock",
      width: 100,
    },
  ];

  //temporary data
  export const userRows = [
    {
      id: 1,
      product: "Molinillo Chestnut C2",
      img: "https://cdn.shopify.com/s/files/1/0897/8794/products/f772df8e-d110-4730-ba9d-eedb6d6bd81b_1200x1200.png?v=1630471497",
      stock: 10,
      price: "$3500",
    },
    {
      id: 2,
      product: "Molinillo Timemore Slim Plus",
      img: "https://cdn.shopify.com/s/files/1/0897/8794/products/f772df8e-d110-4730-ba9d-eedb6d6bd81b_1200x1200.png?v=1630471497",
      stock: 20,
      price: "$5000",
    },
    {
      id: 3,
      product: "Molinillo Chestnut C2",
      img: "https://cdn.shopify.com/s/files/1/0897/8794/products/f772df8e-d110-4730-ba9d-eedb6d6bd81b_1200x1200.png?v=1630471497",
      stock: 10,
      price: "$3500",
    },
    {
      id: 4,
      product: "Molinillo Chestnut C2",
      img: "https://cdn.shopify.com/s/files/1/0897/8794/products/f772df8e-d110-4730-ba9d-eedb6d6bd81b_1200x1200.png?v=1630471497",
      stock: 10,
      price: "$3500",
    },
    {
      id: 5,
      product: "Molinillo Chestnut C2",
      img: "https://cdn.shopify.com/s/files/1/0897/8794/products/f772df8e-d110-4730-ba9d-eedb6d6bd81b_1200x1200.png?v=1630471497",
      stock: 10,
      price: "$3500",
    },
    {
      id: 6,
      product: "Molinillo Chestnut C2",
      img: "https://cdn.shopify.com/s/files/1/0897/8794/products/f772df8e-d110-4730-ba9d-eedb6d6bd81b_1200x1200.png?v=1630471497",
      stock: 10,
      price: "$3500",
    },
  ];