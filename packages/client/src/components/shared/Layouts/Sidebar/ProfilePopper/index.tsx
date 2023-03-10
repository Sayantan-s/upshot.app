import { Heading } from "@/components/ui";
import { useWebS } from "@/context/Ws";
import { useUser } from "@/hooks";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export const ProfilePopper = () => {
  const user = useUser();

  const { isConnected } = useWebS();

  const connectedStyles = isConnected ? "bg-emerald-300" : "bg-rose-400";

  return (
    <div className="absolute bottom-4 w-48 left-1/2 transform -translate-x-1/2 bg-slate-50 hover:bg-slate-100 p-2 rounded-full">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger className="w-full flex items-center truncate">
          <div className="w-10 h-10 bg-slate-200 rounded-full relative">
            <img
              src={user?.details?.profile_pic}
              className="absolute w-full h-full object-cover object-center"
            />
          </div>
          <div className="text-left w-1/2 ml-3">
            <Heading className="text-slate-700 text-sm" level={"6"}>
              {user?.details?.first_name}
            </Heading>
            <div className="text-xs flex items-center">
              <span>Status </span>
              <div
                className={`w-2 h-2 rounded-full ml-1.5 ${connectedStyles}`}
              />
            </div>
          </div>
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content
            sideOffset={12}
            className="bg-white w-60 h-full shadow-md shadow-slate-200/60 flex flex-col rounded-xl p-3 space-y-2"
          >
            <button>Darkmode</button>{" "}
            <DropdownMenu.Item className="bg-red-50 hover:bg-red-100 px-2 py-1 rounded-md text-red-500">
              Logout
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
};
