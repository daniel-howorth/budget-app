import React from "react";
import Form from "../Form";
import TextInput from "../../FormElements/TextInput";
import NumberInput from "../../FormElements/NumberInput";
import PrimaryButton from "../../Buttons/PrimaryButton";
import { ModalContext } from "../../../providers/ModalProvider";
import { BudgetsContext } from "../../../providers/BudgetsProvider";

function AddExpenseForm({ budgetId }) {
  const [item, setItem] = React.useState("");
  const [itemValue, setItemValue] = React.useState("");

  const { closeModal } = React.use(ModalContext);
  const { addExpenseToBudget, addMiscExpense } = React.use(BudgetsContext);

  function handleSubmit() {
    if (budgetId) {
      addExpenseToBudget(budgetId, item, itemValue);
    } else {
      addMiscExpense(item, itemValue);
    }

    closeModal();
  }

  return (
    <Form onSubmit={handleSubmit}>
      <h1>Add Expense</h1>
      <TextInput
        id="item"
        label="Item"
        placeholder="Coffee"
        required
        className="margin-bottom--md"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <NumberInput
        id="value"
        label="Value"
        placeholder="3.50"
        required
        className="margin-bottom--md"
        value={itemValue}
        onChange={(e) => setItemValue(Number(e.target.value))}
      />
      <PrimaryButton className="margin-left--auto">Add</PrimaryButton>
    </Form>
  );
}

export default AddExpenseForm;
