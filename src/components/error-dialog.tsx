import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';

type Props = {
  open: boolean;
  onOpenChange: () => void;
  message?: string;
};

const ErrorDialog = ({ open, onOpenChange, message }: Props) => {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-default">發生錯誤</AlertDialogTitle>
          <AlertDialogDescription className="text-yuan-blue-800 text-base">
            {message || '很抱歉，伺服器發生錯誤，請稍後再試一次。'}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction asChild>
            <Button className="">確定</Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ErrorDialog;
