import ImageWithFallback from "./ImageWithFallback";
import {Button} from "./ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";

const Product = ({
  imgUrl = "products/res.webp",
  productName = "Square 25s",
  desc = "",
}) => {
  return (
    <div>
      <Drawer>
        <DrawerTrigger className="text-left">
          <ImageWithFallback
            src={imgUrl}
            fallback="products/product.png"
            alt={imgUrl}
            className="mb-4 w-64 h-64 cursor-pointer object-cover bg-white rounded-sm"
          />

          <p className="text-base font-normal">{productName}</p>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle className="text-6xl">{productName}</DrawerTitle>
            <DrawerDescription>
              <div className="flex space-x-40 items-center">
                <ImageWithFallback
                  src={imgUrl}
                  fallback="products/product.png"
                  alt={imgUrl}
                  className="mb-4 w-96 h-96 cursor-pointer object-cover bg-white rounded-sm"
                />
                {/* <pre className="text-black justify-self-start align-top items-start justify-items-start text-start text-base"> */}
                <pre className="whitespace-pre-wrap break-words font-sans text-lg leading-6">
                  {desc}
                </pre>
              </div>
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Button
              onClick={() => {
                console.log("connect to whatsapp");
              }}
            >
              Connect on whatsapp for query
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Product;
