import React from "react";
import Card from "../Card";
import CardHeader from "../CardHeader";
import ProgressBar from "../../ProgressBar";
import CardActions from "../CardActions";
import AddExpenseButton from "../../Buttons/AddExpenseButton";
import ViewExpensesButton from "../../Buttons/ViewExpensesButton";
import DeleteButton from "../../Buttons/DeleteButton";
import { BudgetsContext } from "../../../providers/BudgetsProvider";

function BudgetCard({ id, name, expenditure, limit }) {
  const { deleteBudget } = React.use(BudgetsContext);

  function handleDelete(budgetId) {
    if (window.confirm("Are you sure you want to delete this budget?")) {
      deleteBudget(budgetId);
    } else {
      return;
    }
  }

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
        <DeleteButton size={2} handleDelete={() => handleDelete(id)} />
      </CardActions>
    </Card>
  );
}

export default BudgetCard;
