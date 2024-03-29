import { useState } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";

//here like as import { db } from "./services/exampleConfig.js // with your path/config
import { db } from "./services/api";

export default function App() {
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [documents, setDocuments] = useState([]);

  const handleInfs = async (e) => {
    e.preventDefault();

    await addDoc(collection(db, "my_db"), {
      author: author,
      description: description,
    })
      .then(() => console.log("Inseriu"))
      .catch((error) => console.log("nao inseriu" + error));

    setAuthor("");
    setDescription("");
  };

  useState(() => {
    const fetchDocuments = async () => {
      const q = await getDocs(collection(db, "my_db"));
      const docs = [];
      q.forEach((doc) => {
        docs.push({ id: doc.id, ...doc.data() });
      });
      setDocuments(docs);
    };
    fetchDocuments();
  }, []);

  return (
    <>
      <h1>Firebase App</h1>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "30%",
          margin: "4% 0",
          gap: "1rem",
        }}
      >
        <label>Insert an Author:</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <label>Insert a description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit" onClick={handleInfs}>
          Send
        </button>
      </form>
      <div>
        <h2>All Documents</h2>
        <ul>
          {documents.map((doc) => (
            <li key={doc.id}>
              Author: {doc.author}, Description: {doc.description}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
