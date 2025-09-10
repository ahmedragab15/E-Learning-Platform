"use client";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Edit } from "lucide-react";

const AdminTransactionTable = ({ transactions, showActions = true }: TransactionTableProps) => {
  return (
    <div className="border rounded-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name Course</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Name User</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Price</TableHead>
            {showActions && <TableHead>Action</TableHead>}
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell className="font-medium">{transaction.course}</TableCell>
              <TableCell>
                <Badge variant="secondary">{transaction.category}</Badge>
              </TableCell>
              <TableCell>{transaction.user}</TableCell>
              <TableCell className="text-muted-foreground">{transaction.date}</TableCell>
              <TableCell className="font-semibold">{transaction.price}</TableCell>
              {showActions && (
                <TableCell>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="icon">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Edit className="w-4 h-4" />
                    </Button>
                  </div>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AdminTransactionTable;