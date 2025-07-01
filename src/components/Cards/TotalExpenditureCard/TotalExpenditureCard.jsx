import React from "react";
import Card from "../Card";
import CardHeader from "../CardHeader";
import ProgressBar from "../../ProgressBar";
import { BudgetsContext } from "../../../providers/BudgetsProvider";

function TotalExpenditureCard() {
  const { getTotalExpenditure, getTotalBudget } = React.use(BudgetsContext);
  const totalExpenditure = getTotalExpenditure();
  const totalBudget = getTotalBudget();

  return (
    <Card>
      <CardHeader
        name="Total Expenditure"
        limit={totalBudget}
        expenditure={totalExpenditure}
      />
      <ProgressBar value={totalExpenditure} max={totalBudget} />
    </Card>
  );
}

export default TotalExpenditureCard;
