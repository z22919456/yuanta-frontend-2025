import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import Agenda from './agenda';

// type Props = { className?: string };

const AgendaDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="rounded"
          className="ml-2 border-4 border-y-tab-bo bg-y-tab-active-bg px-7 py-6 text-2xl font-semibold hover:bg-y-tab-bg hover:text-y-tab-t"
        >
          點我看時程
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-screen w-screen lg:max-w-[90vw]">
        <DialogTitle className="font-default text-2xl font-bold">
          論壇時程表
        </DialogTitle>
        <ScrollArea className="max-h-[calc(100vh-5rem)]">
          {/* <ScrollBar /> */}
          {/* <div className="h-[calc(100vh-5rem)] overflow-y-scroll"> */}
          <Agenda />
          {/* </div> */}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default AgendaDialog;
