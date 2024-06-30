import Card from "../UI/Card";
import Button from "../UI/Button";
import { Fragment, useState } from "react";
import ErrorModal from "../UI/ErrorModal";

const AddWorker = ({ workers, setWorkers }) => {
  const [enteredWorkerName, setEnteredWorkerName] = useState("");
  const [enteredWage, setEnteredWage] = useState("");
  const [error, setError] = useState();

  const minWage = 5000;

  const addWorkerHandler = (e) => {
    e.preventDefault();
    if (enteredWorkerName.trim().length === 0) {
      setError({
        title: "Name field is required!",
        message: "Please enter employee name",
      });
      return;
    }

    if (+enteredWage < minWage) {
      setError({
        title: "Wage field is required!",
        message: `Please enter a salary value greater than ${minWage}.`,
      });
      return;
    }
    setEnteredWorkerName("");
    setEnteredWage("");
    setWorkers((prevState) => [
      {
        id: workers.length + 1,
        name: enteredWorkerName,
        wage: enteredWage,
      },
      ...prevState,
    ]);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Fragment>
      {error && <ErrorModal onConfirm={errorHandler} error={error} />}
      <Card className="mt-10">
        <form className="flex flex-col gap-y-2 " onSubmit={addWorkerHandler}>
          <label htmlFor="name" className="font-medium">
            Employee Name
          </label>
          <input
            type="text"
            className="max-w-[40rem] w-full mx-auto border p-2"
            placeholder="Enter employee name.."
            id="name"
            onChange={(e) => {
              setEnteredWorkerName(e.target.value);
            }}
            value={enteredWorkerName}
          />
          <label htmlFor="wage" className="font-medium">
            Salary
          </label>
          <input
            type="number"
            className="max-w-[40rem] w-full mx-auto border p-2"
            placeholder="Enter employee salary.."
            id="wage"
            onChange={(e) => {
              setEnteredWage(e.target.value);
            }}
            value={enteredWage}
          />
          <Button btnclr="green-500" type="submit">
            <path
              d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
              strokeWidth="1.5"
            ></path>
            <path d="M8 12H16" strokeWidth="1.5"></path>
            <path d="M12 16V8" strokeWidth="1.5"></path>
          </Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default AddWorker;
