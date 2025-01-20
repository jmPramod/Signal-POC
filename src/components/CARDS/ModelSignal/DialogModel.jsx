import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TableDemo } from "../Table/SignalTable";

export function DialogDemo({ props }) {
  return (
    <>
      <DialogContent className=" w-full mt-[40px]">
        <DialogHeader>
          <DialogTitle>Last 10 entries</DialogTitle>
          <DialogDescription>Track changes of Signal here. </DialogDescription>
        </DialogHeader>
        <TableDemo props={props} />
      </DialogContent>
    </>
  );
}
