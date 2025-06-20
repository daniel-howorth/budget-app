import React from "react";
import Card from "../Card";
import CardHeader from "../CardHeader";
import ProgressBar from "../../ProgressBar";

function BudgetCard({ title, expenditure, limit }) {
  return (
    <Card>
      <CardHeader title={title} expenditure={expenditure} limit={limit} />
      <ProgressBar value={expenditure} max={limit} />
    </Card>
  );
}

export default BudgetCard;
