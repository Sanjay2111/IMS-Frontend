import EditItemForm from "./EditItemForm";
import DispatchForm from "./DispatchForm";

function ItemList(props) {
  const {
    items,
    editItemId,
    editItemData,
    dispatchItemId,
    dispatchQuantity,
    sortColumn,
    getSortIndicator,
    handleDeleteItem,
    handleEditItem,
    handleEditItemChange,
    saveEditItem,
    cancelEditItem,
    handleSortColumn,
    handleDispatchItem,
    handleDispatchQuantityChange,
    dispatchItem,
  } = props;

  return (
    <>
      <div className="">
        <div>
          <h3 className="bg-yellow text-blue" style={{ textAlign: "center" }}>
            Inventory Table
          </h3>

          <table className="table table-striped item-table">
            <thead>
              <tr>
                <th className="bg-dark text-light">ID</th>
                <th className="bg-dark text-light">Name</th>
                <th className="bg-dark text-light">Type</th>
                <th
                  onClick={() => handleSortColumn("price")}
                  className={`${
                    sortColumn.column === "price" ? sortColumn.order : ""
                  } bg-dark text-light`}
                >
                  Price {getSortIndicator("price")}
                </th>
                <th
                  onClick={() => handleSortColumn("quantity")}
                  className={`${
                    sortColumn.column === "quantity" ? sortColumn.order : ""
                  } bg-dark text-light`}
                >
                  Quantity {getSortIndicator("quantity")}
                </th>
                <th
                  className="bg-dark text-light"
                  style={{ paddingLeft: "100px" }}
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.type}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => handleDeleteItem(item.id)}
                    >
                      Delete
                    </button>
                    {editItemId !== item.id && (
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => handleEditItem(item.id)}
                        style={{ marginLeft: "20px" }}
                      >
                        Edit
                      </button>
                    )}
                    <button
                      type="button"
                      className="btn btn-success"
                      onClick={() => handleDispatchItem(item.id)}
                      style={{ marginLeft: "20px" }}
                    >
                      Dispatch
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {editItemId && (
            <EditItemForm
              editItemData={editItemData}
              handleEditItemChange={handleEditItemChange}
              saveEditItem={saveEditItem}
              cancelEditItem={cancelEditItem}
            />
          )}

          {dispatchItemId && (
            <DispatchForm
              quantity={dispatchQuantity}
              onQuantityChange={handleDispatchQuantityChange}
              onDispatch={dispatchItem}
            />
          )}
          <h3 className="bg-yellow text-blue" style={{ textAlign: "center" }}>
            Dispatch Tabel
          </h3>

          <table className="table additional-table">
            <thead>
              <tr className="bg-dark">
                <th className="bg-dark text-light">ID</th>
                <th className="bg-dark text-light">Name</th>
                <th className="bg-dark text-light">Order Number</th>
                <th className="bg-dark text-light">Dispatch Quantity</th>
                <th className="bg-dark text-light">Sale Generated</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.orderNumber}</td>
                  <td>{item.dispatchQuantity}</td>
                  <td>{item.saleGenerated}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default ItemList;
