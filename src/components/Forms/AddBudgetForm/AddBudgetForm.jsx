import React from "react";
import Form from "../Form";
import TextInput from "../../FormElements/TextInput";
import NumberInput from "../../FormElements/NumberInput";

function AddBudgetForm() {
  return (
    <Form>
      <h1>Add Budget</h1>
      <TextInput
        id={"name"}
        label="Name"
        placeholder="Groceries"
        required
        className="margin-bottom--md"
      />
      <NumberInput id="limit" label="Limit" placeholder="100" required />
    </Form>
  );
}

export default AddBudgetForm;
