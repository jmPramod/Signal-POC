import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { AlertDestructive } from './Alert';
import React from 'react';
import { fetchHistory } from '@/utils/API.services';
import { AlertDemo } from './NotAlert';

export function TableDemo({ props }) {
  const [historyData, setHistoryData] = React.useState(null);

  React.useEffect(() => {
    const fetchTopHistory = async () => {
      try {
        let res = await fetchHistory();
        if (res) {
          setHistoryData(res.data);
        }
      } catch (error) {}
    };
    fetchTopHistory();
  }, [props]);

  return (
    <div className="overflow-x-auto">
      <Table className="min-w-full">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] text-sm md:text-base">
              Colour
            </TableHead>
            <TableHead className="text-sm md:text-base">TimeStamp</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {historyData &&
            historyData.map((invoice, ind) => (
              <TableRow key={ind}>
                <TableCell className="font-medium text-xs md:text-sm">
                  {invoice.signalColor === 'red' ? (
                    <AlertDestructive invoice={invoice.signalColor} />
                  ) : (
                    <AlertDemo invoice={invoice.signalColor} />
                  )}
                </TableCell>
                <TableCell className="font-medium text-xs md:text-sm">
                  {invoice.signalColor === 'red' ? (
                    <AlertDestructive invoice={invoice.timestamp} />
                  ) : (
                    <AlertDemo invoice={invoice.timestamp} />
                  )}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
        <TableFooter />
      </Table>
    </div>
  );
}
