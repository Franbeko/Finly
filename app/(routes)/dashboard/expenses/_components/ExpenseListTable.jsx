import { db } from '@/utils/dbConfig'
import { Expenses } from '@/utils/schema'
import { eq } from 'drizzle-orm'
import { Trash } from 'lucide-react'
import React from 'react'
import { toast } from 'sonner'

function ExpenseListTable({ expensesList, refreshData }) {

    const deleteExpense=async(expense)=>{
        const result=await db.delete(Expenses)
        .where(eq(Expenses.id,expense.id))
        .returning();

        if(result)
        {
            toast('Expense Deleted!');
            refreshData()
        }
    }
  return (
    <div className='mt-3'>
      <h2 className='font-fold text-lg'>Latest Expenses</h2>
      <div className='grid grid-cols-4 bg-slate-300 p-2 mt-3'>
        <h2 className='font-bold'>Name</h2>
        <h2 className='font-bold'>Amount</h2>
        <h2 className='font-bold'>Date</h2>
        <h2 className='font-bold'>Action</h2>
      </div>

      {expensesList.map((expense, index) => (
        <div key={index} className='grid grid-cols-4 bg-slate-50 p-2'>
          <h2>{expense.name}</h2>
          <h2>${expense.amount}</h2>
          <h2>{expense.createdAt}</h2>
          <h2>
            <Trash className='text-red-600 cursor-pointer' 
            onClick={()=>deleteExpense(expense)}
            />
          </h2>
        </div>
      ))}
    </div>
  )
}

export default ExpenseListTable
