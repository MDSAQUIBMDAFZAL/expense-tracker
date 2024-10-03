import PropTypes from "prop-types";

const ContextMenu = ({
  menuPosition,
  setMenuPosition,
  setExpenses,
  setExpense,
  expenses,
  setEditingRowId,
  rowId,
}) => {
  if (!menuPosition.left) return null;

  return (
    <div className="context-menu" style={{ ...menuPosition }}>
      <div
        onClick={() => {
          const { title, category, amount } = expenses.find(
            (expense) => expense.id === rowId
          );
          setEditingRowId(rowId);
          setExpense({ title, category, amount });
          setMenuPosition({});
        }}
      >
        Edit
      </div>
      <div
        onClick={() => {
          setExpenses((prevState) =>
            prevState.filter((expense) => expense.id !== rowId)
          );
          setMenuPosition({});
        }}
      >
        Delete
      </div>
    </div>
  );
};

ContextMenu.propTypes = {
  menuPosition: PropTypes.shape({
    left: PropTypes.number,
    top: PropTypes.number,
  }).isRequired,
  setMenuPosition: PropTypes.func.isRequired,
  setExpenses: PropTypes.func.isRequired,
  setExpense: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    })
  ).isRequired,
  setEditingRowId: PropTypes.func.isRequired,
  rowId: PropTypes.string.isRequired,
};

export default ContextMenu;
