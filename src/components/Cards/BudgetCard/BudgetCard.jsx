import React from "react";
import Card from "../Card";
import CardHeader from "../CardHeader";
import ProgressBar from "../../ProgressBar";

function BudgetCard({ name, expenditure, limit }) {
  return (
    <Card>
      <CardHeader name={name} expenditure={expenditure} limit={limit} />
      <ProgressBar value={expenditure} max={limit} />
    </Card>
  );
}

export default BudgetCard;
