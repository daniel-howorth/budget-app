import React from "react";
import Card from "../Card";
import CardHeader from "../CardHeader";
import CardActions from "../CardActions";
// import AddExpenseButton from "../../Buttons/AddExpenseButton";
// import ViewExpensesButton from "../../Buttons/ViewExpensesButton";
import { BudgetsContext } from "../../../providers/BudgetsProvider";

function MiscExpensesCard() {
  const { miscExpenses, getTotalMiscExpenditure } = React.use(BudgetsContext);
  const totalMiscExpenditure = getTotalMiscExpenditure();

  return (
    <Card>
      <CardHeader name="Misc Expenses" expenditure={totalMiscExpenditure} />
    </Card>
  );
}

export default MiscExpensesCard;
