import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import {NavLink} from "@remix-run/react";
import {ChevronDown, Home} from "lucide-react";
import {Footer} from "~/components/Footer";
import Header from "~/components/Header";
import ProductListing from "~/components/ProductListing";
import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
} from "~/components/ui/sidebar";

const menuItems = [
  {
    title: "All Products",
    icon: Home,
    url: "all",
  },
  {
    title: "Resistors",
    url: "resistors",
    items: [
      {title: "Thick Film", url: "thick-film"},
      {title: "Thin Film", url: "thin-film"},
    ],
  },
  {
    title: "Varistors",
    url: "varistors",
    items: [
      {title: "Standard MOV", url: "smov"},
      {title: "TMOV/TFMOV", url: "tfmov"},
      {title: "SMD", url: "smd"},
    ],
  },
  {
    title: "Other Products",
    url: "other",
    items: [
      {title: "Thermistors", url: "thermistors"},
      {title: "GDT", url: "gdt"},
    ],
  },
];

const Catalogue = () => {
  return (
    <div>
      <Header />
      <div className="relative">
        <SidebarProvider className="relative">
          <Sidebar
            variant="inset"
            collapsible="icon"
            className="absolute p-4 bg-white"
          >
            <SidebarContent className="bg-white">
              <SidebarMenu>
                {menuItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    {item.items ? (
                      <NavLink to={{search: `category=${item.url}`}}>
                        <CollapsibleMenuItem item={item} />
                      </NavLink>
                    ) : (
                      <SidebarMenuButton asChild>
                        <NavLink to={{search: `category=${item.url}`}}>
                          {item.icon && <item.icon className="h-20 w-20" />}
                          <span className="ml-2 text-2xl">{item.title}</span>
                        </NavLink>
                      </SidebarMenuButton>
                    )}
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarContent>
          </Sidebar>
          <main className="container mx-auto p-4">
            <ProductListing />
          </main>
        </SidebarProvider>
      </div>
      <Footer />
    </div>
  );
};

export default Catalogue;

function CollapsibleMenuItem({item}: {item: (typeof menuItems)[number]}) {
  return (
    <Collapsible>
      <CollapsibleTrigger asChild>
        <SidebarMenuButton className="h-auto">
          {item.icon && <item.icon className="h-20 w-20" />}
          <span className="text-2xl">{item.title}</span>
          <ChevronDown className="ml-20 h-20 w-20" />
        </SidebarMenuButton>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <SidebarMenuSub>
          {item.items?.map((subItem) => (
            <SidebarMenuSubItem key={subItem.title}>
              <SidebarMenuSubButton asChild>
                <NavLink
                  to={{search: `category=${subItem.url}`}}
                  className="text-2xl"
                >
                  {subItem.title}
                </NavLink>
              </SidebarMenuSubButton>
            </SidebarMenuSubItem>
          ))}
        </SidebarMenuSub>
      </CollapsibleContent>
    </Collapsible>
  );
}
