import React from "react";
import Card from "../Card";
import CardHeader from "../CardHeader";
import CardActions from "../CardActions";
import AddExpenseButton from "../../Buttons/AddExpenseButton";
// import ViewExpensesButton from "../../Buttons/ViewExpensesButton";
import { BudgetsContext } from "../../../providers/BudgetsProvider";

function MiscExpensesCard() {
  const { getTotalMiscExpenditure } = React.use(BudgetsContext);

  return (
    <Card>
      <CardHeader
        name="Misc Expenses"
        expenditure={getTotalMiscExpenditure()}
      />
      <CardActions>
        <AddExpenseButton />
      </CardActions>
    </Card>
  );
}

export default MiscExpensesCard;
