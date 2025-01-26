import * as React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { DialogDemo } from '../ModelSignal/DialogModel';
import { fetchHistory } from '@/utils/API.services';
import { styles } from './styles';
import { Typography } from '@mui/material';
export function Card1(prop) {
  let { props } = prop;
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen} className="w-full">
        <DialogTrigger asChild>
          <Card
            className={`w-[100%]  cursor-pointer ${
              props && props.danger
                ? ' border-4 border-red-500 shadow-lg  '
                : 'border-gray-300'
            }`}
          >
            <CardHeader>
              <CardTitle className="flex items-center flex-col">
                <Typography variant="h5">
                  {' '}
                  <u>Current Signal</u>
                </Typography>

                <styles.image src={props && props.img_url} alt="Signal" />
              </CardTitle>
              <CardDescription className="text-1xl">
                {props && props.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="text-2xl">
              {props && props.timestamp}
            </CardContent>
          </Card>
        </DialogTrigger>
        {isOpen && <DialogDemo props={props && props} />}
      </Dialog>
    </>
  );
}
