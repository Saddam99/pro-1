import {useEffect, useState} from "react";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
        .then((respons) => {
          return respons.json()
        })
        .then((arr) => {
          setData(arr);
          setLoading(false);
        })
  }, [])
  return (
    <div className="container">
      <div>
        список дел
      </div>
      {loading ? (
          <div>
            идет загрузка
          </div>
      ) : data.map((item) => {
        return (
            <div className="todo">
             {item.id}
             <div>
                 {item.title}
             </div>
            </div>
        )
      }) }

    </div>
  );
}

export default App;
