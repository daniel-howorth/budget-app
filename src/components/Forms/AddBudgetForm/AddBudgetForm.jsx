import React from "react";
import Form from "../Form";
import TextInput from "../../FormElements/TextInput";
import NumberInput from "../../FormElements/NumberInput";
import PrimaryButton from "../../Buttons/PrimaryButton";

function AddBudgetForm() {
  const [budgetName, setBudgetName] = React.useState("");
  const [budgetLimit, setBudgetLimit] = React.useState("");

  function handleSubmit() {
    console.log(budgetName);
    console.log(budgetLimit);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <h1>Add Budget</h1>
      <TextInput
        id={"name"}
        label="Name"
        placeholder="Groceries"
        required
        className="margin-bottom--md"
        value={budgetName}
        onChange={(e) => setBudgetName(e.target.value)}
      />
      <NumberInput
        id="limit"
        label="Limit"
        placeholder="100"
        required
        className="margin-bottom--md"
        value={budgetLimit}
        onChange={(e) => setBudgetLimit(e.target.value)}
      />
      <PrimaryButton className="margin-left--auto">Add</PrimaryButton>
    </Form>
  );
}

export default AddBudgetForm;
