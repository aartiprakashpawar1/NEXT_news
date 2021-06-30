import styles from "../styles/EOM.module.css";
import { Toolbar } from "../component/toolbar";

export const EOM = ({ employee }) => {
  console.log(employee);

  return (
    <div className="page-container">
      <Toolbar />
      <div className={styles.main}>
        <h1>Employee of the month</h1>
      </div>
      <div className={styles.employeeOfTheMonth}>
        <h3> {employee.name} </h3>
        <h5> {employee.position} </h5>
        <img src={employee.image} />
        <h2>{employee.description}</h2>
      </div>
    </div>
  );
};

export const getServerSideProps = async (pageContext) => {
  const apiResponse = await fetch(
    "https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMontha"
  );
  const employee = await apiResponse.json();

  return {
    props: {
      employee,
    },
  };
};

export default EOM;
