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
      {title: "Carfon Film Resistor (CFR)", url: "cfr"},
      {title: "Metal Film Resistor (MFR)", url: "mfr"},
      {title: "Metal Oxide Resistor (MOR)", url: "mor"},
      {title: "Metal Glazed Resistor (MGR)", url: "mgr"},
      {title: "Wire Wound Resistor (WWR)", url: "wwr"},
      {title: "Wire Wound Resistor – Non-Inductive", url: "wwr-ni"},
      {title: "Fusible Wire Wound Resistor (FWWR)", url: "fwwr"},
      {title: "Metal Electrode Leadless Face Resistor (MELF)", url: "melf"},
    ],
  },
  {
    title: "Over Voltage Protection",
    url: "ovp",
    items: [
      {title: "Metal Oxide Varistors (MOV)", url: "mov"},
      {title: "Thermal Metal Oxide Varistor (TMOV)", url: "tmov"},
      {title: "Thermal Fuse Metal Oxide Varistor (TFMOV)", url: "tfmov"},
      {title: "Surge Protection Device (SPD)", url: "spd"},
    ],
  },
  {
    title: "Negative Temperature Coefficient",
    url: "ntc",
  },
  {
    title: "Gas Discharge Tube (GDT)",
    url: "gdt",
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
                      <SidebarMenuButton asChild className="">
                        <NavLink to={{search: `category=${item.url}`}}>
                          <p className="leading-2 text-base h-auto">
                            {item.title}
                          </p>
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
          <span className="text-base h-auto">{item.title}</span>
          <ChevronDown className="h-20 w-20 ml-auto" />
        </SidebarMenuButton>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <SidebarMenuSub>
          {item.items?.map((subItem) => (
            <SidebarMenuSubItem key={subItem.title} className="h-auto p-1">
              <SidebarMenuSubButton asChild>
                <NavLink
                  to={{search: `category=${subItem.url}`}}
                  className="text-base h-auto"
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
