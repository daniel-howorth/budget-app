import React from "react";
import Form from "../Form";
import TextInput from "../../FormElements/TextInput";

function AddBudgetForm() {
  return (
    <Form>
      <h1>Add Budget</h1>
      <TextInput id={"name"} label="Name" placeholder="Groceries" required />
    </Form>
  );
}

export default AddBudgetForm;
