import {useSearchParams} from "@remix-run/react";
import {useMemo} from "react";
import {useProducts} from "~/hooks/useProducts";
import Product from "./Product";
import {Button} from "./ui/button";

const ProductListing = () => {
  const products = useProducts();

  const [searchParam] = useSearchParams();
  const selectedCategory = searchParam.get("category") || "";

  // Memoize filtered products to avoid recalculating on every render

  const filteredProducts = useMemo(
    () =>
      selectedCategory && selectedCategory !== "all"
        ? products.filter((p) =>
            p.collection
              .split(";")
              .some(
                (cat) =>
                  cat.toLocaleLowerCase().trim() ===
                  selectedCategory.toLocaleLowerCase()
              )
          )
        : products,
    [products, selectedCategory]
  );

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = `https://drive.google.com/uc?export=download&id=${
      import.meta.env.VITE_CATALOGUE_ID
    }`;

    link.download = "catalogue.pdf"; // Default file name
    link.click();
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8 w-full">
        <h1 className="font-bold text-4xl">All Products</h1>
        <Button onClick={handleDownload}>View Full Catalogue</Button>
      </div>
      <div className="mb-4">
        <p className="text-sm font-normal">
          {filteredProducts.length ?? 0} products
        </p>
      </div>
      <div className="grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 place-items-center">
        {filteredProducts.length ? (
          filteredProducts.map((product) => (
            <Product
              productName={product.name}
              key={product.handleId}
              desc={product.description}
              imgUrl={product.productImageUrl ?? ""}
            />
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default ProductListing;
