import type {MetaFunction} from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    {title: "Thakor Electronics"},
    {name: "description", content: "Welcome to Remix!"},
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center">
      Thakor Electronics
    </div>
  );
}
