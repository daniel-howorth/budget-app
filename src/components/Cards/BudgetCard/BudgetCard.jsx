import React from "react";
import Card from "../Card";
import CardHeader from "../CardHeader";

function BudgetCard({ title, expenditure, limit }) {
  return (
    <Card>
      <CardHeader title={title} expenditure={expenditure} limit={limit} />
    </Card>
  );
}

export default BudgetCard;
