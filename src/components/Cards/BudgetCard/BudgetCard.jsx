import React from "react";
import Card from "../Card";
import CardHeader from "../CardHeader";
import ProgressBar from "../../ProgressBar";
import CardActions from "../CardActions";
import AddExpenseButton from "../../Buttons/AddExpenseButton";
import ViewExpensesButton from "../../Buttons/ViewExpensesButton";

function BudgetCard({ id, name, expenditure, limit }) {
  return (
    <Card>
      <CardHeader name={name} expenditure={expenditure} limit={limit} />
      <ProgressBar
        value={expenditure}
        max={limit}
        className="margin-bottom--md"
      />
      <CardActions>
        <AddExpenseButton budgetId={id} />
        <ViewExpensesButton budgetId={id} />
      </CardActions>
    </Card>
  );
}

export default BudgetCard;
