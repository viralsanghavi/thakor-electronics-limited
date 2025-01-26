import {useSearchParams} from "@remix-run/react";
import {useMemo} from "react";
import {useProducts} from "~/hooks/useProducts";
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
}) => {
  return (
    <div>
      <Drawer>
        <DrawerTrigger className="text-left">
          <img
            src={imgUrl}
            className="mb-4 w-64 h-64 cursor-pointer object-contain bg-white rounded-sm"
          />
          <p className="text-base font-normal">{productName}</p>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>{productName}</DrawerTitle>
            <DrawerDescription>
              <img
                src={imgUrl}
                className="mb-4 w-96 h-9w-96 cursor-pointer object-contain bg-white rounded-sm"
              />
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
