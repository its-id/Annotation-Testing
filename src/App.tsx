// import { Canvas } from "./components/canvas/typescript/canvas";
import Layout from "antd/lib/layout";
import AnnotationPageComponent from "./components/annotation-page/annotation-page";

function App() {
  return (
    <div className="App">
      {/* import class canvas and display here */}
      <Layout>
        <Layout.Content style={{ height: "100%" }}>
          <AnnotationPageComponent />
        </Layout.Content>
      </Layout>
    </div>
  );
}

export default App;
