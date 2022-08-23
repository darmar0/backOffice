import { Routes, Route } from "react-router-dom";
import DocumentManagement from "./routes/document-management/document-management.route";
import Home from "./routes/home/home.route";
import Navigation from "./components/navigation/navigation.component";
import Authetication from "./routes/authetication/authetication.route";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="document-management" element={<DocumentManagement />} />
        <Route path="authetication" element={<Authetication />} />
      </Route>
    </Routes>
  );
}

export default App;
